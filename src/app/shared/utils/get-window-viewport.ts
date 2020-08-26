import { Inject } from '@angular/core';

import { WINDOW } from './../providers';
import { Debounce } from './debounce';

export class GetWindowViewPort {

  constructor(@Inject(WINDOW) public window: Window) { }

  /**
   * Gets the innerWidth value from the window object on page-enter and on resize event and updates the
   * mobile or desktop viewports accordingly. The debounce function executes the callback method after
   * the declared miliseconds on the second argument.
   */
  public get width() {
    let innerWidth = this.window.innerWidth;

    const returnedFunction = Debounce.debounce(() => {
      return innerWidth = this.window.innerWidth;
    }, 400, '');

    this.window.addEventListener('resize', returnedFunction);

    return innerWidth;
  }
}


