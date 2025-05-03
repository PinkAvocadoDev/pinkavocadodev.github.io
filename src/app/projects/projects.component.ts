import {Component, EventEmitter, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Output() modeEmitter = new EventEmitter<string>();
  ngOnInit() {
    this.modeEmitter.emit("45px");
  }
}
