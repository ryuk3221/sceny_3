class HoverGallery {
  constructor (selector) {
    this.selector = selector;
    this.imagesBoxes = document.querySelectorAll(selector);
  }

  #renderHoverItems(box) {
    const hoverItems = document.createElement('div');
    hoverItems.classList.add('hover-gallery');
    const countImages = box.querySelectorAll('img').length;
    const hoverItemsDots = document.createElement('div');
    hoverItemsDots.classList.add('hover-gallery-dots');
    
    for (let i = 0; i < countImages; i++) {
      const hoverItem = document.createElement('div');
      hoverItem.classList.add('hover-gallery-item');
      hoverItems.appendChild(hoverItem);

      const hoverDot = document.createElement('div');
      hoverDot.classList.add('hover-gallery-item-dot');
      hoverItemsDots.appendChild(hoverDot);
      
    }

    box.appendChild(hoverItems);
    box.appendChild(hoverItemsDots);

    box.querySelectorAll('img')[0].classList.add('active');
    box.querySelectorAll('.hover-gallery-item-dot')[0].classList.add('active');
  }

  render() {
    this.imagesBoxes.forEach(box => {
      this.#renderHoverItems(box);
      box.onmouseover = (event) => {
        const { target } = event;
        const parent = target.closest('.hover-gallery-parent');
        const dots = parent.querySelectorAll('.hover-gallery-item-dot');
        const images = parent.querySelectorAll('.recommend-item__img');
        const hoverItems = parent.querySelectorAll('.hover-gallery-item');
        if (target.classList.contains('hover-gallery-item')) {
          for (let i = 0; i < hoverItems.length; i++) {
            if (event.target == hoverItems[i]) {
              dots.forEach(dot => {
                dot.classList.remove('active');
              });
              dots[i].classList.add('active');
              images.forEach(img => {
                img.classList.remove('active');
              });
              images[i].classList.add('active');
            }
          }
        } else if (target.classList.contains('hover-gallery')) {
          dots.forEach(dot => {
            dot.classList.remove('active');
          });
          dots[0].classList.add('active');
          images.forEach(img => {
            img.classList.remove('active');
          });
          images[0].classList.add('active');
        }
      };
    })
  }
  
}
