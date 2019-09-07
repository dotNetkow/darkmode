import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log("here");
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const theme = getComputedStyle(document.body).getPropertyValue('--ion-color-scheme').trim();
    console.log("theme: " + theme);
    if (theme === 'dark') {
      this.toggleTheme();
    }
    });

    
  }

  toggleTheme() {
    document.body.classList.toggle('dark');
  }
}
