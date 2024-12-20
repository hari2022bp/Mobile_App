import { Directive, ElementRef, HostListener, Input } from '@angular/core';
    @Directive({
        selector: '[appInputRestriction]'
    })
    export class ValidationDirective {
    constructor(private _el: ElementRef) { }
      @HostListener('input', ['$event']) onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
       
      //  this._el.nativeElement.value = initalValue.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
      this._el.nativeElement.value = initalValue.replace(/[<>{}]/g, '');
        if ( initalValue !== this._el.nativeElement.value) {
          event.stopPropagation();
        }
      }

     
    }