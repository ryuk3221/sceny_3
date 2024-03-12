//Выпадающие менюшки выдвигающего меню
const dropdownShow = (event) => {
  const { target } = event;
  const parent = target.closest('.dropdown-item');
  const dropList = parent.querySelector('ul');
  const arrowIcon = parent.querySelector('.drop-arrow');
  parent.classList.toggle('dropdown-item--open');

  if (parent.classList.contains('dropdown-item--open')) {
    dropList.style.height = dropList.scrollHeight + 'px';
    arrowIcon.style.transform = 'rotate(180deg)';
  }  else {
    dropList.style.height = '0px';
    arrowIcon.style.transform = 'rotate(0deg)';
  }

};


//Получаю родительский элемент и отслеживаю на нём клик
const drawerCatalogMenu = document.querySelector('.header__catalog'); 

drawerCatalogMenu.addEventListener('click', (event) => {
  const { target } = event;
  if (target.closest('.tabs-inner__dropdown-head')) {
    
    dropdownShow(event);
  }
});


//Скрипты для табов при наведении  в выдвижном меню
const drawerCatalogTabs = document.querySelectorAll('.header__catalog-tab');

//Функция которая открывает нужные список ссылок по id
const drawerTabContentShow = (event) => {
  const { target } = event;
  const id = target.closest('.catalog-tab').id;   //Здесь я извлекаю id из элемента на который навели
  //получаю все списки ссылок
  const tabLinks = document.querySelectorAll('.header__tab-content');

  //удаляю активный класс у всех табов
  drawerCatalogTabs.forEach(el => {
    el.classList.remove('header__catalog-tab--active');
  });

  target.closest('.catalog-tab').classList.add('header__catalog-tab--active');

  //скрываю все списки ссылок
  tabLinks.forEach(el => {
    el.style.display = 'none';
  });
  //отображаю нужный
  document.querySelector(`[data-links="${id}"]`).style.display = 'block';
};

drawerCatalogTabs.forEach(el => {
  el.onmouseover = drawerTabContentShow;
});

//Получаю кнопку для открытия попапа каталога 
const popupCatalogBtn = document.querySelector('.header__catalog-open');
//Полуаю попап каталога
const popupCatalog = document.querySelector('.header__catalog');

//Фунция которая скрывает/отображает попап
const popupCatalogShow = () => {
  popupCatalog.classList.toggle('popup--open');
};

popupCatalogBtn.onclick = popupCatalogShow;

//Получаю кнопку закрытия каталог попапа
const popupCloseBtn = document.querySelector('.header__catalog-inner--hide');

popupCloseBtn.onclick = popupCatalogShow;

popupCatalog.onclick = (event) => {
  const { target } = event;
  
  if (target.classList.contains('popup')) {
    popupCatalogShow();
  } 
};


const mobileDrawerDropItemsParent = document.querySelector('.mobile-drawer__links-box');

//Получаю все dropdown айтемы в мобильном выдвижном меню
const mobileDropdownItems = mobileDrawerDropItemsParent.querySelectorAll('.mobile-drawer__dropdown-item');


mobileDrawerDropItemsParent.onclick = (event) => {
  const { target } = event;

  if (target.closest('.mobile-drawer__dropdown-head')) {
    const parent = target.closest('.dropdown-item');
    const dropList = parent.querySelector('ul');
    const arrowIcon = parent.querySelector('.drop-arrow');
    mobileDropdownItems.forEach(item => {
      if (item != event.target.closest('.mobile-drawer__dropdown-item')) {
        item.classList.remove('dropdown-item--open');
        const ul = item.querySelector('ul');
        ul.style.height = '0px';
        const arrowIcon = item.querySelector('.drop-arrow');
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    });
    parent.classList.toggle('dropdown-item--open');
    if (parent.classList.contains('dropdown-item--open')) {
      dropList.style.height = dropList.scrollHeight + 'px';
      arrowIcon.style.transform = 'rotate(180deg)';
    }  else {
      dropList.style.height = '0px';
      arrowIcon.style.transform = 'rotate(0deg)';
    }
  }

  else if (target.closest('.sub-dropdown__head')) {
    const subDropdownLists = document.querySelectorAll('.mobile-drawer__sub-dropdown');
    const parent = target.closest('.dropdown-item');
    const dropList = parent.querySelector('ul');
    const arrowIcon = parent.querySelector('.drop-arrow');
    subDropdownLists.forEach(item => {
      if (item != target.closest('.mobile-drawer__sub-dropdown')) {
        item.classList.remove('dropdown-item--open');
        const ul = item.querySelector('ul');
        ul.style.height = '0px';
        const arrowIcon = item.querySelector('.drop-arrow');
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    });
    parent.classList.toggle('dropdown-item--open');
    if (parent.classList.contains('dropdown-item--open')) {
      dropList.style.height = dropList.scrollHeight + 'px';
      arrowIcon.style.transform = 'rotate(180deg)';
      const parentUl = parent.closest('.tabs-inner__dropdown-list');
      parentUl.style.height = parentUl.scrollHeight + dropList.scrollHeight + 'px';
    }  else {
      dropList.style.height = '0px';
      arrowIcon.style.transform = 'rotate(0deg)';
      const parentUl = parent.closest('.tabs-inner__dropdown-list');
      parentUl.style.height = parentUl.scrollHeight - dropList.scrollHeight + 'px';
    }
  } 

};


//Получаю кнопку (бургер)
const burger = document.querySelector('.header__burger');
//Мобильное меню
const mobileMenu = document.querySelector('.mobile-drawer');
//кнопка закрытия мобильного меню
const mobileMenuClose = document.querySelector('.mobile-drawer__btn-close');

const mobileMenuOpen = () => {
  mobileMenu.classList.toggle('popup--open');
};

burger.onclick = mobileMenuOpen;
mobileMenuClose.onclick = mobileMenuOpen;
mobileMenu.onclick = (event) => {
  if (event.target.classList.contains('mobile-drawer')) {
    mobileMenuOpen();
  }
};


//Полуачю кнопку открытия popup поиска
const searchBtnOpen = document.querySelector('.header__search-btn');
//Попап с поиском
const searchPopup = document.querySelector('.search-popup');

//Ф-ия  открывающая попап с поиском
const searchPopupShow = (event) => {
  searchPopup.classList.toggle('popup--open');
};

searchBtnOpen.onclick = searchPopupShow;


searchPopup.onclick = (event) => {
  if (event.target.classList.contains('search-popup')) {
    searchPopupShow();
  }
  else if (event.target.closest('.search-popup__btn-close')) {
    searchPopupShow();
  }
};
