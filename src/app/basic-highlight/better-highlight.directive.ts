import { Directive,ElementRef,HostListener,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {



  constructor( private item:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.item.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseOnHover(eventData:Event){
    this.renderer.setStyle(this.item.nativeElement,'background-color','blue');

  }

  @HostListener('mouseleave') mouseOnMovingAside(eventData:Event){
    this.renderer.setStyle(this.item.nativeElement,'background-color','transparent');

  }

}
