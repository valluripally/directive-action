import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private item:ElementRef){
        
    }


    ngOnInit(): void {
        this.item.nativeElement.style.backgroundColor ='green';
    }
}