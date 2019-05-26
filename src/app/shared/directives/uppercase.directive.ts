import { Directive, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-upper-case]'
})
export class UpperCaseDirective {
    constructor(
        private _EleRef: ElementRef,
        private _Renderer: Renderer2
    ) {}
    @HostListener('keypress') onkeypress() {
        console.log('value', (this._EleRef.nativeElement as HTMLInputElement));
        
    }
}