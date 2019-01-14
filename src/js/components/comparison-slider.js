const { body } = document;

export default class Comparison {
  constructor(el) {
    this.el = el;
    [this.elWidth] = getComputedStyle(this.el).width.split('px');
    this.imageBefore = this.el.querySelector('.comparison__before');

    this.el.addEventListener('mouseover', e => {
      this.mousemove(e);
      body.addEventListener('mousemove', this.mousemove);
    });
    this.el.addEventListener('mouseout', e => {
      body.removeEventListener('mousemove', this.mousemove);
    });

    // Touch
    // this.el.addEventListener('touchstart', e => {
    //   this.touchmove(e);
    //   body.addEventListener('touchmove', this.touchmove);
    // });
    // this.el.addEventListener('touchend', e => {
    //   body.removeEventListener('touchmove', this.touchmove);
    // });
  }

  mousemove = e => {
    e.preventDefault();

    let position = e.clientX - this.el.getBoundingClientRect().left + 3;

    if (position > this.elWidth) {
      position = this.elWidth;
    }
    if (position < 0) {
      position = 1;
    }
    this.imageBefore.style.width = `${position}px`;
  };

  touchmove = e => {
    e.preventDefault();

    let position =
      e.touches[0].clientX - this.el.getBoundingClientRect().left + 3;

    if (position > this.elWidth) {
      position = this.elWidth;
    }
    if (position < 0) {
      position = 1;
    }
    this.imageBefore.style.width = `${position}px`;
  };
}
