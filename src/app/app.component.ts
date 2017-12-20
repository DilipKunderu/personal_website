import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/github.svg'))
      .addSvgIcon('linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/linkedin.svg'))
      .addSvgIcon('medium',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/medium.svg'))
      .addSvgIcon('facebook',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/facebook.svg'));
  }
}
