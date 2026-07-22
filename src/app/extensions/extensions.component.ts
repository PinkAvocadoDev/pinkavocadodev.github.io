import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-extensions',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './extensions.component.html',
  styleUrl: './extensions.component.css'
})
export class ExtensionsComponent {
  @Output() modeEmitter = new EventEmitter<string>();
  ngOnInit() {
    this.modeEmitter.emit("45px");
  }
}
