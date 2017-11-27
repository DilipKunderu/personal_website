import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const router: Routes = [
    {path: '',
    redirectTo: '/home',
    pathMatch: 'full'},
    {path: 'home',
        component: HomeComponent},
        {path: 'resume',
        component: ResumeComponent},
        {path: 'projects',
        component: ProjectsComponent},
        {path: 'contact',
        component: ContactComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);