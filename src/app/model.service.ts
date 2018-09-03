import {ElementRef, ViewChild} from '@angular/core';

export class ModelService {
  private backdrop: ElementRef;
  private model_container: ElementRef;
  isShow = false;

  init(backdrop: ElementRef, model: ElementRef) {
    this.model_container = model;
    this.backdrop = backdrop;
  }

  show() {
    this.model_container.nativeElement.style.display = 'block';
    this.model_container.nativeElement.style.opacity = 1;
    this.model_container.nativeElement.classList.add('fadeIn');
    document.querySelector('body').style.overflow = 'hidden';

    setTimeout(() => {
      this.backdrop.nativeElement.style.display = 'block';
      this.backdrop.nativeElement.classList.add('fadeIn');
    }, 300);
  }

  hide() {
    this.model_container.nativeElement.style.display = 'none';
    this.model_container.nativeElement.style.opacity = 0;
    this.backdrop.nativeElement.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  }
}
