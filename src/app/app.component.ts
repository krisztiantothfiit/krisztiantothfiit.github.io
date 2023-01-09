import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from "@angular/material/icon";
import defaultLanguage from '../assets/i18n/sk.json';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { CookieService } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public currentLang = 'sk';

  constructor(private translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cookie: CookieService,
    private metaTagService: Meta,
    private titleService: Title) {
    // Translate initialization
    translate.setTranslation(this.currentLang, defaultLanguage);
    translate.setDefaultLang(this.currentLang);
    translate.currentLang = this.currentLang;
    // Icons initialization
    this.addIconToRegistry('sk_flag', 'assets/icons/sk.svg');
    this.addIconToRegistry('success', 'assets/icons/success.svg');
    this.addIconToRegistry('fail', 'assets/icons/fail.svg');
    this.addIconToRegistry('air-conditioner', 'assets/images/offering/offering1.svg');
    this.addIconToRegistry('heat-pump', 'assets/images/offering/offering2.svg');
    this.addIconToRegistry('recovery', 'assets/images/offering/offering3.svg');
  }

  ngOnInit(): void {
    this.initCookies();
    this.addMetaTags();
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
    this.titleService.setTitle('KLIMATEL');
    this.metaTagService.addTags([
      { name: 'description', content: 'Ponúkame Vám komplexné energeticky úsporné riešenia šité na mieru. Vykurovanie, chladenie a vetranie za rozumnú cenu a nízke prevádzkové náklady.' },
      { name: 'keywords', content: 'klimatizacie, tepelne cerpadla, rekuperacia, klimatizácia, tepelné čerpadlá, rekuperácie, kráľová nad váhom, klimatizácie kráľová nad váhom, klimy' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'František Kovács' },
      { charset: 'UTF-8' },
    ])
  }
}
