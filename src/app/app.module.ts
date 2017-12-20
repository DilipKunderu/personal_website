import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MaterialComponents} from './material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import 'hammerjs';

import {MatSidenavModule} from '@angular/material/sidenav';
import { routes } from './app.router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(
    //   routes,
    //   {enableTracing: true}
    // ),
    MDBBootstrapModule.forRoot(),
    routes,
    HttpClientModule,
    MaterialComponents,
    FlexLayoutModule,
    PdfViewerModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
