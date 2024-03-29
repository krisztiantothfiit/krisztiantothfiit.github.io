import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './base/section/section.component';
import { ContactFormComponent } from './base/contact/contact-form.component';
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
import { AboutUsComponent } from './home/about-us/about-us.component';
import { MessageDialogComponent } from './base/contact/message-dialog/message-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrunchComponent } from './brunch/brunch.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DrinksComponent } from './drinks/drinks.component';
import { BreakfastComponent } from './home/breakfast/breakfast.component';
import { LunchMenuComponent } from './home/lunch-menu/lunch-menu.component';
import { AlacarteComponent } from './home/alacarte/alacarte.component';
import { NavigationService } from './base/navigation/navigation.service';
import { AppearDirective } from './base/appear.directive';
import { ParallaxDirective } from './base/parallax.directive';
import { EventsComponent } from './home/events/events.component';
import { EstablishmentComponent } from './home/establishment/establishment.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';

export class CustomDateAdapter extends MomentDateAdapter {
  override getFirstDayOfWeek(): number {
      return 1;
  }
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactFormComponent,
    NavigationComponent,
    NavigationItemComponent,
    SectionComponent,
    MapComponent,
    FooterComponent,
    ScrollToTopComponent,
    AboutUsComponent,
    MessageDialogComponent,
    ContactComponent,
    HomeComponent,
    BrunchComponent,
    LunchComponent,
    DinnerComponent,
    DrinksComponent,
    BreakfastComponent,
    LunchMenuComponent,
    AlacarteComponent,
    AppearDirective,
    ParallaxDirective,
    EventsComponent,
    EstablishmentComponent
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
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
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
  providers: [NavigationService,
    { provide: MAT_DATE_LOCALE, useValue: 'sk-SK' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
