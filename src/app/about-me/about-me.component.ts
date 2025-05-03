import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about-me',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  @Output() modeEmitter = new EventEmitter<string>();
  age: number = new Date().getFullYear() - 1998;
  ngOnInit() {
    this.modeEmitter.emit("45px");
  }
}
