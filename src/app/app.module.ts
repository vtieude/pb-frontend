// import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';


import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { LoginComponent } from './authentication/login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ErrorInterceptor } from './helper/error.interceptor';
import { JwtInterceptor } from './helper/jwt.interceptor';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache, ApolloLink } from '@apollo/client/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { environment } from 'src/environments/environment';
import { setContext } from '@apollo/client/link/context';
import { ToastrModule } from 'ngx-toastr';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};
const urlBE = environment.gateway
export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');
    if (!!token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      } else {
        return {};
    }
    return {};
    
  });
  const link = ApolloLink.from([basic, auth, httpLink.create({ uri: urlBE })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PerfectScrollbarModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false, relativeLinkResolution: 'legacy' })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink,HttpClient],
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
