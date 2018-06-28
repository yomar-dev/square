import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){}
    @Input('resaltar') publicidad: boolean = false;
    ngOnInit(){
        if(this.publicidad === true){
            this.renderer.setStyle(this.elRef.nativeElement, 'text-shadow', '1px 1px 2px #fff');
        }
    }
};