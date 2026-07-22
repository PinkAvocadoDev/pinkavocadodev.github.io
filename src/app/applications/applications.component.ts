import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-applications',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent {
  @Output() modeEmitter = new EventEmitter<string>();
  ngOnInit() {
    this.modeEmitter.emit("45px");
  }
}
