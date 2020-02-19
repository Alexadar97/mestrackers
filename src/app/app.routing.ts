import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './canactivate.service';
import { ProjectComponent } from './project/project.component';
import { HdtbsGanttComponent } from './hdtbs-gantt/hdtbs-gantt.component';
import { HdtbsGanttviewComponent } from './hdtbs-ganttview/hdtbs-ganttview.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'project', pathMatch: 'full' },
            { path: 'project', component: ProjectComponent },
            { path: 'hdtbs-gantt', component: HdtbsGanttComponent },
            { path: 'hdtbs-ganttview', component: HdtbsGanttviewComponent },
            { path: 'new-project', component: NewProjectComponent },
        ]
    },

]

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
