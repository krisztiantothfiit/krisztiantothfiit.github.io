import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './base/section/section.component';
import { ContactComponent } from './base/contact/contact.component';
import { HeaderComponent } from './base/header/header.component';
import { NavigationItemComponent } from './base/navigation/navigation-item/navigation-item.component';
import { NavigationComponent } from './base/navigation/navigation.component';
import { MapComponent } from './base/map/map.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './base/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './cookie.service';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';
import { environment } from 'src/environments/environment';
import { ScrollToTopComponent } from './base/scroll-to-top/scroll-to-top.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutUsComponent } from './about-us/about-us.component';
import { MessageDialogComponent } from './base/contact/message-dialog/message-dialog.component';
import { TopContactComponent } from './top-contact/top-contact.component';
import { WhyDobermannComponent } from './why-dobermann/why-dobermann.component';
import { AnimatedDigitComponent } from './animated-digit/animated-digit.component';
import { AboutDobermannsComponent } from './about-dobermanns/about-dobermanns.component';
import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { CertificateComponent } from './certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    NavigationComponent,
    NavigationItemComponent,
    SectionComponent,
    MapComponent,
    FooterComponent,
    ScrollToTopComponent,
    AboutUsComponent,
    MessageDialogComponent,
    TopContactComponent,
    WhyDobermannComponent,
    AnimatedDigitComponent,
    AboutDobermannsComponent,
    ServicesComponent,
    ResourcesComponent,
    CertificateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatGridListModule,
    GoogleTagManagerModule.forRoot({
      id: environment.gtmId,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: false
    }),
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
