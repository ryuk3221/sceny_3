//Страаница товара (карточки)
if (document.querySelector('.product-page')) {
  const smallSlider = new Swiper('.small-slider', {
    direction: "vertical",
    spaceBetween: 12,
    slidesPerView: 6,
  });

  const bigSlider = new Swiper('.big-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: smallSlider,
    },
  });

  //Получаю секцию product, отслеживаю клик
  const productSection = document.querySelector('.product');

  productSection.addEventListener('click', (event) => {
    const { target } = event;
    //dropdown
    if (target.closest('.product__dropdown-head')) {
      const dropItem = target.closest('.product__dropdown-item');
      const dropContent = dropItem.querySelector('.product__dropdown-content');
      dropItem.classList.toggle('product-dropdown--active');

      if (dropItem.classList.contains('product-dropdown--active')) {
        dropContent.style.marginTop = '24px';
        dropContent.style.height = dropContent.scrollHeight + 'px';
      } else {
        dropContent.style.marginTop = '0';
        dropContent.style.height = '0';
      }
    }
    //recommend-items popups
    else if (target.closest('.recommend-item--clickable')) {
      const parent = target.closest('.product__recommend-item');
      const popup = parent.querySelector('.recommend-item__popup');
      popup.classList.add('popup--open');
    }
    else if (
      target.classList.contains('recommend-item__popup') || 
      target.closest('.recommend-item-popup__btn-close')
    ) {
      target.closest('.recommend-item__popup').classList.remove('popup--open')
    }
  });


  const recommendSmallSlider = new Swiper('.recommend-item-popup__small-slider', {
    direction: "vertical",
    spaceBetween: 12,
    slidesPerView: 4,
  });

  const recommendBigSlider = new Swiper('.recommend-item-popup__big-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: recommendSmallSlider,
    },
  });

  
  const hoverGallery = new HoverGallery('.hover-images-box');

  hoverGallery.render();
  
  const similarProduct = new Swiper('.recommend__items', {
    spaceBetween: 40,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".recomend-swiper-next",
      prevEl: ".recomend-swiper-prev",
    }
  });

}


//Главная страница
else if (document.querySelector('.home-page')) {
  const bannerSlider = new Swiper('.home-banner__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".home-banner-next",
      prevEl: ".home-banner-prev",
    },
    pagination: {
      el: ".banner-pagination",
    },
  });

  const homeEventsSlider = new Swiper('.home-events__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 40,
    navigation: {
      nextEl: ".home-events__slider-next",
      prevEl: ".home-events__slider-prev",
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".reviews-slider-next",
      prevEl: ".reviews-slider-prev",
    },
  });

}


//Страница о нас
else if (document.querySelector('.about-page')) {
  const aboutSlider = new Swiper('.about__slider', {
    navigation: {
      nextEl: ".about-slider-next",
      prevEl: ".about-slider-prev"
    }
  });
}

//Страница проекта
else if (document.querySelector('.project-page')) {
  const projectSlider = new Swiper('.project__slider', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 8,
    navigation: {
      nextEl: '.project-slider-next',
      prevEl: '.project-slider-prev'
    }
  });

  const servicesSlider = new Swiper('.services__slider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
      nextEl: '.services-slider-next',
      prevEl: '.services-slider-prev'
    }
  });

  const homeEventsSlider = new Swiper('.home-events__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 40,
    navigation: {
      nextEl: ".home-events__slider-next",
      prevEl: ".home-events__slider-prev",
    },
  });
}


//Странциа корзины
else if (document.querySelector('.cart-page')) {
  const hoverGallery = new HoverGallery('.hover-images-box');

  hoverGallery.render();
  
  const similarProduct = new Swiper('.recommend__items', {
    spaceBetween: 40,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".recomend-swiper-next",
      prevEl: ".recomend-swiper-prev",
    }
  });
}