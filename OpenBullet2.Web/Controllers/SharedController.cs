﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OpenBullet2.Core.Models.Sharing;
using OpenBullet2.Web.Attributes;
using OpenBullet2.Web.Dtos.Shared;
using OpenBullet2.Web.Exceptions;
using OpenBullet2.Web.Services;

namespace OpenBullet2.Web.Controllers;

/// <summary>
/// Shared resources.
/// </summary>
[ApiVersion("1.0")]
public class SharedController : ApiController
{
    private readonly ConfigSharingService _configSharingService;
    private readonly IMapper _mapper;
    private readonly ILogger<SharedController> _logger;

    /// <summary></summary>
    public SharedController(ConfigSharingService configSharingService,
        IMapper mapper, ILogger<SharedController> logger)
    {
        _configSharingService = configSharingService;
        _mapper = mapper;
        _logger = logger;
    }

    /// <summary>
    /// Get all available shared endpoints.
    /// </summary>
    [Admin]
    [HttpGet("endpoint/all")]
    [MapToApiVersion("1.0")]
    public ActionResult<IEnumerable<EndpointDto>> GetAllEndpoints()
    {
        var endpoints = _configSharingService.Endpoints;
        return Ok(_mapper.Map<List<EndpointDto>>(endpoints));
    }

    /// <summary>
    /// Create a shared endpoint.
    /// </summary>
    [Admin]
    [HttpPost("endpoint")]
    [MapToApiVersion("1.0")]
    public ActionResult<EndpointDto> CreateEndpoint(EndpointDto dto)
    {
        var existing = _configSharingService.Endpoints.FirstOrDefault(
            e => e.Route == dto.Route);

        if (existing is not null)
        {
            throw new EntryAlreadyExistsException(ErrorCode.EndpointAlreadyExists,
                $"There is already an endpoint with route {dto.Route}");
        }

        var endpoint = _mapper.Map<Core.Models.Sharing.Endpoint>(dto);
        _configSharingService.Endpoints.Add(endpoint);

        _configSharingService.Save();

        _logger.LogInformation("Created shared endpoint at route {route}", dto.Route);

        return _mapper.Map<EndpointDto>(endpoint);
    }

    /// <summary>
    /// Update a shared endpoint.
    /// </summary>
    [Admin]
    [HttpPut("endpoint")]
    [MapToApiVersion("1.0")]
    public ActionResult<EndpointDto> UpdateEndpoint(EndpointDto dto)
    {
        var endpoint = _configSharingService.Endpoints.FirstOrDefault(
            e => e.Route == dto.Route);

        if (endpoint is null)
        {
            throw new EntryNotFoundException(ErrorCode.EndpointNotFound,
                $"Invalid endpoint with route {dto.Route}");
        }

        _mapper.Map(dto, endpoint);
        _configSharingService.Save();

        _logger.LogInformation("Updated shared endpoint at route {route}", dto.Route);

        return _mapper.Map<EndpointDto>(endpoint);
    }

    /// <summary>
    /// Delete a shared endpoint.
    /// </summary>
    [Admin]
    [HttpDelete("endpoint")]
    [MapToApiVersion("1.0")]
    public ActionResult DeleteEndpoint(string route)
    {
        var endpoint = _configSharingService.Endpoints.FirstOrDefault(
            e => e.Route == route);

        if (endpoint is null)
        {
            throw new EntryNotFoundException(ErrorCode.EndpointNotFound,
                $"Invalid endpoint with route {route}");
        }

        _configSharingService.Endpoints.Remove(endpoint);
        _configSharingService.Save();

        return Ok();
    }

    /// <summary>
    /// Get shared configs. Requires authentication via API key.
    /// </summary>
    [HttpGet("configs/{endpointName}")]
    [MapToApiVersion("1.0")]
    public async Task<IActionResult> DownloadConfigs(
        string endpointName,
        [FromHeader(Name = "Api-Key")] string apiKey)
    {
        try
        {
            var endpoint = _configSharingService.GetEndpoint(endpointName);

            if (endpoint is null || apiKey is null ||
                !endpoint.ApiKeys.Contains(apiKey))
            {
                throw new UnauthorizedAccessException("Invalid api key");
            }

            return File(await _configSharingService.GetArchiveAsync(endpointName),
                "application/zip", "configs.zip");
        }
        catch (UnauthorizedAccessException)
        {
            throw;
        }
        catch
        {
            return NotFound();
        }
    }
}
