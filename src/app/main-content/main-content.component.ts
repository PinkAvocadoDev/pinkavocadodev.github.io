import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-content',
  imports: [ RouterOutlet ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  @ViewChild("refCont") refCont!: ElementRef;
  onActivate(event: any) {
    if(event.modeEmitter){
      event.modeEmitter.subscribe((data: string) => {
        this.refCont.nativeElement.style.marginTop = data;
      });
    }
  }
}
