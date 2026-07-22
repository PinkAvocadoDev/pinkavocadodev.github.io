import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-web-apps',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './web-apps.component.html',
  styleUrl: './web-apps.component.css'
})
export class WebAppsComponent {
  @Output() modeEmitter = new EventEmitter<string>();
  ngOnInit() {
    this.modeEmitter.emit("45px");
  }
}
