import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule, BrowserXhr } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { WebserviceService } from './webservice.service';
import { DatatransferService } from './datatransfer.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard } from './deactivate.service';
import { AuthGuard } from './canactivate.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxEditorModule } from 'ngx-editor';
import { ProjectComponent } from './project/project.component';
import { HdtbsGanttComponent } from './hdtbs-gantt/hdtbs-gantt.component';
import { HdtbsGanttviewComponent } from './hdtbs-ganttview/hdtbs-ganttview.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NewProjectComponent } from './new-project/new-project.component';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProjectComponent,
    HdtbsGanttComponent,
    HdtbsGanttviewComponent,
    NewProjectComponent,




  ],

  imports: [
    TooltipModule.forRoot(),
    NgxPaginationModule,
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    CommonModule,
    NgxEditorModule,
    BsDatepickerModule.forRoot(),
  ],

  providers: [WebserviceService,DatatransferService,CanDeactivateGuard,AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
