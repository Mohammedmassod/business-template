
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
//import { HttpClientModule, HttpClient } from '@angular/common/http'; // Updated import
//import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//import { NavbarComponent } from './components/navbar/navbar.component'; // استيراد الكمبوننت
//import { FooterComponent } from './components/footer/footer.component'; // استيراد FooterComponent
//import { SidebarComponent } from './components/sidebar/sidebar.component'; // استيراد SidebarComponent

//export function HttpLoaderFactory(http: HttpClient) {
//  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//}

//@NgModule({
//  declarations: [
//    AppComponent,
//    NavbarComponent,
//    FooterComponent, // تسجيل FooterComponent
//    SidebarComponent ],// تسجيل SidebarComponent],
//  imports: [
//    BrowserModule,
//    AppRoutingModule,
//    HttpClientModule,
//    TranslateModule.forRoot({
//      loader: {
//        provide: TranslateLoader,
//        useFactory: HttpLoaderFactory,
//        deps: [HttpClient]
//      }
//    })
//  ],
//  providers: [],
//  bootstrap: [AppComponent]
//})
//export class AppModule { }
