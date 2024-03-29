import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from "@angular/material/icon";
import defaultLanguage from '../assets/i18n/sk.json';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { CookieService } from './cookie.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public currentLang = 'sk';
  apiLoaded = false;

  constructor(private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cookie: CookieService,
    private metaTagService: Meta,
    private titleService: Title,
    private router: Router) {

    // Redirect http to https
    if (!/https/.test(window.location.protocol) && /http/.test(window.location.protocol) && !/localhost/.test(window.location.href)) {
      window.location.href = window.location.href.replace('http:', 'https:');   
    }

    // Translate initialization
    translate.setTranslation(this.currentLang, defaultLanguage);
    translate.setDefaultLang(this.currentLang);
    translate.currentLang = this.currentLang;

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const el = document.getElementById(this.router.url.substring(1));
        if (el) {
          el.scrollIntoView();
        }
      }
    });

    // Icons initialization
    this.addIconToRegistry('sk_flag', 'assets/icons/sk.svg');
    this.addIconToRegistry('en_flag', 'assets/icons/gb.svg');
    this.addIconToRegistry('success', 'assets/icons/success.svg');
    this.addIconToRegistry('fail', 'assets/icons/fail.svg');
    this.addIconToRegistry('facebook', 'assets/icons/facebook.svg');
    this.addIconToRegistry('logo', 'assets/images/logo.svg');
    this.addIconToRegistry('contact1', 'assets/images/contact/contact1.svg');
    this.addIconToRegistry('contact2', 'assets/images/contact/contact2.svg');
    this.addIconToRegistry('contact3', 'assets/images/contact/contact3.svg');
  }

  ngOnInit(): void {
    this.initCookies();
    this.addMetaTags();

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  initCookies(): void {

    if (this.cookie.getCookie('cookieconsent_status') === 'allow') {
      if (!this.cookie.getCookie('language')) {
        this.cookie.setCookie({
          name: 'language',
          value: this.currentLang,
          session: true
        })
      }
      let cookieLanguage = this.cookie.getCookie('language')
      this.translate.use(cookieLanguage);
      this.currentLang = cookieLanguage;
    }

    this.cookie.initCookieConsent();
  }

  addIconToRegistry(iconName: string, iconPath: string) {
    this.matIconRegistry.addSvgIcon(
      iconName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath)
    );
  }

  addMetaTags(): void {
    this.titleService.setTitle('trikvety');
    this.metaTagService.addTags([
      { name: 'keywords', content: 'trikvety, reštaurácie, nitra, tri kvety, reštaurácia, restauracia' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Robert Miklóš' },
      { charset: 'UTF-8' },
    ])
  }
}
