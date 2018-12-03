import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'ngx-schema-form';
import { ExtendedWidgetRegistry } from './extended-widget-registry';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './landing/landing.component';
import { SpringcmComponent } from './springcm/springcm.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SpringcmImportComponent } from './springcm/springcm-import/springcm-import.component';
import { SpringcmUploadComponent } from './springcm/springcm-upload/springcm-upload.component';
import { BillingComponent } from './billing/billing.component';
import { SpringcmImportFileComponent } from './springcm/springcm-import/springcm-import-file/springcm-import-file.component';
import { SpringcmFileToolbarComponent } from './springcm/springcm-file-toolbar/springcm-file-toolbar.component';
import { SpringcmImportTasksWidgetComponent } from './springcm/springcm-import/springcm-import-tasks-widget/springcm-import-tasks-widget.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { SpringcmImportItemsComponent } from './springcm/springcm-import/springcm-import-items/springcm-import-items.component';
import { SpringcmUploadItemsComponent } from './springcm/springcm-upload/springcm-upload-items/springcm-upload-items.component';
import { SpringcmUploadFileComponent } from './springcm/springcm-upload/springcm-upload-file/springcm-upload-file.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'platforms',
    component: PlatformsComponent
  },
  {
    path: 'springcm',
    component: SpringcmComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'springcm/import',
    component: SpringcmImportComponent
  },
  {
    path: 'springcm/upload',
    component: SpringcmUploadComponent
  },
  {
    path: 'springcm/import/file',
    component: SpringcmImportFileComponent
  },
  {
    path: 'springcm/upload/file',
    component: SpringcmUploadFileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingComponent,
    SpringcmComponent,
    PlatformsComponent,
    SpringcmImportComponent,
    SpringcmUploadComponent,
    BillingComponent,
    SpringcmImportFileComponent,
    SpringcmFileToolbarComponent,
    SpringcmImportTasksWidgetComponent,
    JsonEditorComponent,
    SpringcmImportItemsComponent,
    SpringcmUploadItemsComponent,
    SpringcmUploadFileComponent
  ],
  entryComponents: [
    SpringcmImportTasksWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AceEditorModule,
    RouterModule.forRoot(routes),
    SchemaFormModule.forRoot()
  ],
  providers: [
    {
      provide: WidgetRegistry,
      useClass: ExtendedWidgetRegistry
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
