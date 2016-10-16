import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[chighlight]'
})

export class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
    }
}
