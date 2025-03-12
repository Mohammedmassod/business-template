import { Component } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  //currentLang = 'en';

  //constructor(private translate: TranslateService) {
  //  this.currentLang = localStorage.getItem('language') || 'en';
  //  translate.use(this.currentLang);
  //}

  //toggleLanguage() {
  //  this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
  //  this.translate.use(this.currentLang);
  //  localStorage.setItem('language', this.currentLang);
  //}
}
