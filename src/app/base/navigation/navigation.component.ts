import { AfterViewChecked, AfterViewInit, Component, HostListener, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { CookieService } from '../../cookie.service';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Input() public currentLang = '';

  public href: string = "";

  constructor(private translate: TranslateService, private cookie: CookieService, private ccService: NgcCookieConsentService, private router: Router,
    public navigationService: NavigationService) { 
      this.navigationService.isMobile = window.innerWidth < 770;
    }

  changeUsedLang(lang: string) {
    this.translate.use(lang);
    this.translate.currentLang = lang;
    this.currentLang = lang;

    if (this.cookie.getCookie('cookieconsent_status') === 'allow') {
      this.cookie.setCookie({
        name: 'language',
        value: lang,
        session: true
      })
    }

    this.translate
      .get(['cookieMessage', 'cookieAllow', 'cookieDeny', 'cookiePolicy'])
      .subscribe(data => {
        this.ccService.getConfig().content = this.ccService.getConfig().content || {};
        let content = this.ccService.getConfig().content
        if (content) {
          content.message = data['cookieMessage'];
          content.allow = data['cookieAllow'];
          content.deny = data['cookieDeny'];
          content.policy = data['cookiePolicy'];
        }

        this.ccService.destroy();
        this.ccService.init(this.ccService.getConfig());
      });
  }

  openFacebook() {
    window.open("https://www.facebook.com/profile.php?id=100090247062700", "_blank");
  }


  @HostListener("window:resize", ["$event"])
  onWindowResize() {
    this.navigationService.isMobile = window.innerWidth < 770;
  }
}
