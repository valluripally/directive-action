import { parseHostBindings } from '@angular/compiler';
import { Directive,ElementRef,HostBinding,HostListener,Input,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string ='blue';

  @HostBinding('style.backgroundColor') backgroundColor :string =this.defaultColor;

  


  constructor( private item:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.item.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseOnHover(eventData:Event){
    // this.renderer.setStyle(this.item.nativeElement,'background-color','blue');
   this.backgroundColor =this.highlightColor;
  }

  @HostListener('mouseleave') mouseOnMovingAside(eventData:Event){
    // this.renderer.setStyle(this.item.nativeElement,'background-color','transparent');
    this.backgroundColor =this.defaultColor;
  }

}
