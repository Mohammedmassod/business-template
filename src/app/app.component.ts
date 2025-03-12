import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
//import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
    imports: [NavbarComponent, SidebarComponent, RouterOutlet,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    //constructor(private translate: TranslateService) {
    //    this.translate.setDefaultLang('en'); // تعيين اللغة الافتراضية
    //    this.translate.use('en'); // استخدام اللغة المختارة
    //}
  title = 'business-template';
}
//import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

//@Component({
//    selector: 'app-root',
//    templateUrl: './app.component.html',
//    styleUrls: ['./app.component.scss'] // تأكد من استخدام styleUrls وليس styleUrl
//})
//export class AppComponent {
//    title = 'business-template';
//}
