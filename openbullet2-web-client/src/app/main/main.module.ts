import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgChartsModule } from 'ng2-charts';
import { SysperfCardsComponent } from './components/home/sysperf-cards/sysperf-cards.component';
import { InfoComponent } from './components/info/info.component';
import { ContributorComponent } from './components/info/contributor/contributor.component';
import { GuestsComponent } from './components/guests/guests.component';
import { CreateGuestComponent } from './components/guests/create-guest/create-guest.component';
import { UpdateGuestInfoComponent } from './components/guests/update-guest-info/update-guest-info.component';
import { UpdateGuestPasswordComponent } from './components/guests/update-guest-password/update-guest-password.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { AddPluginComponent } from './components/plugins/add-plugin/add-plugin.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { CreateEndpointComponent } from './components/sharing/create-endpoint/create-endpoint.component';
import { OBSettingsComponent } from './components/ob-settings/ob-settings.component';
import { CreateProxyCheckTargetComponent } from './components/ob-settings/create-proxy-check-target/create-proxy-check-target.component';
import { UpdateProxyCheckTargetComponent } from './components/ob-settings/update-proxy-check-target/update-proxy-check-target.component';
import { CreateCustomSnippetComponent } from './components/ob-settings/create-custom-snippet/create-custom-snippet.component';
import { UpdateCustomSnippetComponent } from './components/ob-settings/update-custom-snippet/update-custom-snippet.component';
import { ChangeAdminPasswordComponent } from './components/ob-settings/change-admin-password/change-admin-password.component';
import { CreateRemoteConfigsEndpointComponent } from './components/ob-settings/create-remote-configs-endpoint/create-remote-configs-endpoint.component';
import { UpdateRemoteConfigsEndpointComponent } from './components/ob-settings/update-remote-configs-endpoint/update-remote-configs-endpoint.component';
import { RlSettingsComponent } from './components/rl-settings/rl-settings.component';
import { ProxiesComponent } from './components/proxies/proxies.component';
import { CreateProxyGroupComponent } from './components/proxies/create-proxy-group/create-proxy-group.component';
import { UpdateProxyGroupComponent } from './components/proxies/update-proxy-group/update-proxy-group.component';
import { DeleteSlowProxiesComponent } from './components/proxies/delete-slow-proxies/delete-slow-proxies.component';
import { ImportProxiesFromTextComponent } from './components/proxies/import-proxies-from-text/import-proxies-from-text.component';
import { ProxySyntaxInfoComponent } from './components/proxies/proxy-syntax-info/proxy-syntax-info.component';
import { ImportProxiesFromRemoteComponent } from './components/proxies/import-proxies-from-remote/import-proxies-from-remote.component';
import { ImportProxiesFromFileComponent } from './components/proxies/import-proxies-from-file/import-proxies-from-file.component';
import { HitsComponent } from './components/hits/hits.component';
import { UpdateHitComponent } from './components/hits/update-hit/update-hit.component';
import { WordlistsComponent } from './components/wordlists/wordlists.component';
import { UpdateWordlistInfoComponent } from './components/wordlists/update-wordlist-info/update-wordlist-info.component';
import { UploadWordlistComponent } from './components/wordlists/upload-wordlist/upload-wordlist.component';
import { AddWordlistComponent } from './components/wordlists/add-wordlist/add-wordlist.component';
import { ConfigsComponent } from './components/configs/configs.component';
import { UploadConfigsComponent } from './components/configs/upload-configs/upload-configs.component';
import { ConfigMetadataComponent } from './components/config/config-metadata/config-metadata.component';
import { EditConfigImageComponent } from './components/config/edit-config-image/edit-config-image.component';
import { ConfigReadmeComponent } from './components/config/config-readme/config-readme.component';
import { ConfigSettingsComponent } from './components/config/config-settings/config-settings.component';
import { ConfigLolicodeComponent } from './components/config/config-lolicode/config-lolicode.component';
import { ConfigCsharpComponent } from './components/config/config-csharp/config-csharp.component';
import { ConfigDebuggerComponent } from './components/config/config-debugger/config-debugger.component';
import { ViewAsHtmlComponent } from './components/config/config-debugger/view-as-html/view-as-html.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CreateJobComponent } from './components/jobs/create-job/create-job.component';
import { EditProxyCheckJobComponent } from './components/jobs/edit-proxy-check-job/edit-proxy-check-job.component';
import { ProxyCheckJobComponent } from './components/jobs/proxy-check-job/proxy-check-job.component';
import { EditMultiRunJobComponent } from './components/jobs/edit-multi-run-job/edit-multi-run-job.component';
import { MultiRunJobComponent } from './components/jobs/multi-run-job/multi-run-job.component';
import { AddThemeComponent } from './components/ob-settings/add-theme/add-theme.component';
import { SelectConfigComponent } from './components/jobs/select-config/select-config.component';
import { ConfigureDiscordComponent } from './components/jobs/edit-multi-run-job/configure-discord/configure-discord.component';
import { ConfigureTelegramComponent } from './components/jobs/edit-multi-run-job/configure-telegram/configure-telegram.component';
import { ConfigureCustomWebhookComponent } from './components/jobs/edit-multi-run-job/configure-custom-webhook/configure-custom-webhook.component';
import { SelectWordlistComponent } from './components/jobs/select-wordlist/select-wordlist.component';
import { JobMonitorComponent } from './components/job-monitor/job-monitor.component';
import { EditTriggeredActionComponent } from './components/job-monitor/edit-triggered-action/edit-triggered-action.component';

@NgModule({
  declarations: [
    MenuComponent,
    MainComponent,
    HomeComponent,
    MenuItemComponent,
    NotFoundComponent,
    SysperfCardsComponent,
    InfoComponent,
    ContributorComponent,
    GuestsComponent,
    CreateGuestComponent,
    UpdateGuestInfoComponent,
    UpdateGuestPasswordComponent,
    PluginsComponent,
    AddPluginComponent,
    SharingComponent,
    CreateEndpointComponent,
    OBSettingsComponent,
    CreateProxyCheckTargetComponent,
    UpdateProxyCheckTargetComponent,
    CreateCustomSnippetComponent,
    UpdateCustomSnippetComponent,
    ChangeAdminPasswordComponent,
    CreateRemoteConfigsEndpointComponent,
    UpdateRemoteConfigsEndpointComponent,
    RlSettingsComponent,
    ProxiesComponent,
    CreateProxyGroupComponent,
    UpdateProxyGroupComponent,
    DeleteSlowProxiesComponent,
    ImportProxiesFromTextComponent,
    ProxySyntaxInfoComponent,
    ImportProxiesFromRemoteComponent,
    ImportProxiesFromFileComponent,
    HitsComponent,
    UpdateHitComponent,
    WordlistsComponent,
    UpdateWordlistInfoComponent,
    UploadWordlistComponent,
    AddWordlistComponent,
    ConfigsComponent,
    UploadConfigsComponent,
    ConfigMetadataComponent,
    EditConfigImageComponent,
    ConfigReadmeComponent,
    ConfigSettingsComponent,
    ConfigLolicodeComponent,
    ConfigCsharpComponent,
    ConfigDebuggerComponent,
    ViewAsHtmlComponent,
    JobsComponent,
    CreateJobComponent,
    EditProxyCheckJobComponent,
    ProxyCheckJobComponent,
    EditMultiRunJobComponent,
    MultiRunJobComponent,
    AddThemeComponent,
    SelectConfigComponent,
    ConfigureDiscordComponent,
    ConfigureTelegramComponent,
    ConfigureCustomWebhookComponent,
    SelectWordlistComponent,
    JobMonitorComponent,
    EditTriggeredActionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    TooltipModule,
    InputTextModule,
    ToggleButtonModule,
    RadioButtonModule,
    ProgressBarModule,
    DropdownModule,
    MenubarModule,
    PickListModule,
    AccordionModule,
    CheckboxModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    TableModule,
    ChipModule,
    NgChartsModule,
    MarkdownModule.forRoot(),
    SharedModule,
    NgxSpinnerModule
  ],
  providers: []
})
export class MainModule { }
