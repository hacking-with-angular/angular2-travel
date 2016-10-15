import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[high-light]'
})

export class HighlightDirective {
    constructor(render: Renderer, el: ElementRef) {
        render.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
        console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
    }
}
//import { Directive, ElementRef, Renderer } from '@angular/core';
//
//@Directive({ selector: '[highlight]' })
///** Highlight the attached element in gold */
//export class HighlightDirective {
//    constructor(renderer: Renderer, el: ElementRef) {
//        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gold');
//        console.log(
//            `* AppRoot highlight called for ${el.nativeElement.tagName}`);
//    }
//}
