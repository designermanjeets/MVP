import { Directive, Input, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[paddingTop]'
})
export class MvpPaddingTopDirective implements AfterViewInit {

  @Input() paddingTop: string;

  constructor(
    private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'padding-top', `${this.paddingTop}px`);
  }

}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[paddingRight]'
})
export class MvpPaddingRightDirective implements AfterViewInit {

  @Input() paddingRight: string;

  constructor(
    private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'padding-right', `${this.paddingRight}px`);
  }

}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[paddingBottom]'
})
export class MvpPaddingBottomDirective implements AfterViewInit {

  @Input() paddingBottom: string;

  constructor(
    private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'padding-bottom', `${this.paddingBottom}px`);
  }

}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[paddingLeft]'
})
export class MvpPaddingLeftDirective implements AfterViewInit {

  @Input() paddingLeft: string;

  constructor(
    private elmRef: ElementRef, private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elmRef.nativeElement, 'padding-left', `${this.paddingLeft}px`);
  }

}

