import { NgOptimizedImage, NgIf } from '@angular/common';
import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-project-list',
  imports: [
    NgOptimizedImage,
    NgIf
],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  @Output() nodeEmitter = new EventEmitter<string>();
  @Input() type! : string;

  ngOnInit(){
    this.nodeEmitter.emit('45px');
  }
}
