import { Directive, Input, ElementRef, Renderer2, OnInit, AfterViewInit, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[marginLeft]'
})
export class MvpMarginLeftDirective implements AfterViewInit {

  @Input() marginLeft: string;

  constructor(
   private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'margin-left', `${this.marginLeft}px`);
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[marginRight]'
})
export class MvpMarginRightDirective implements AfterViewInit {

  @Input() marginRight: string;

  constructor(
   private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'margin-right', `${this.marginRight}px`);
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[marginTop]'
})
export class MvpMarginTopDirective implements AfterViewInit {

  @Input() marginTop: string;

  constructor(
   private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'margin-top', `${this.marginTop}px`);
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[marginBottom]'
})
export class MvpMarginBottomDirective implements AfterViewInit {

  @Input() marginBottom: string;

  constructor(
   private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'margin-bottom', `${this.marginBottom}px`);
  }
}

