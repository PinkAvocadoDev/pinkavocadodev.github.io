import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-projects',
  imports: [
    NgOptimizedImage,
    CategoryComponent
],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Output() modeEmitter = new EventEmitter<string>();
  
  catOneTitle = 'Extensions';
  catOneDesc = 'A collection of web extensions by yours truly.';
  catOneImg = 'exten.webp';

  catTwoTitle = 'Applications';
  catTwoDesc = 'A collection of native apps that I\'m working on.';
  catTwoImg = 'apps.webp';

  catThreeTitle = 'Web projects';
  catThreeDesc = 'A collection of web-based projects I have had the pleasure of working on.';
  catThreeImg = 'webProj.webp';

  ngOnInit() {
    this.modeEmitter.emit("45px");
  }
}
