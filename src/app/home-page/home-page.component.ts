import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  age: number = new Date().getFullYear() - 1998;
  @Output() modeEmitter = new EventEmitter<string>();
  ngOnInit() {
    this.modeEmitter.emit("84px");
  }
}
