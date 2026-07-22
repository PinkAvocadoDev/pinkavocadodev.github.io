import { Component, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @ViewChild("cat") cat!: ElementRef<HTMLDivElement>;

  @Input() title  : string='';
  @Input() desc : string=''
  @Input() imgUri : string='';

  constructor(private renderer : Renderer2){}

  ngAfterViewInit(){
    const el = this.cat.nativeElement;

    this.renderer.setStyle(el,'background', 'url("assets/bgs/'+this.imgUri+'") no-repeat');
    this.renderer.setStyle(el,'background-size', '250px');
  }
}
