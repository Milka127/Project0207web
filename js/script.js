window.addEventListener('DOMContentLoaded', () => {

  // Slider

  const slides = document.querySelectorAll('.offer__slide'), // Задаем значение всем слайдам
        prev = document.querySelector('.offer__slider-prev'), // Подключаем стрелочки
        next = document.querySelector('.offer__slider-next'), // След слайд
        total = document.querySelector('#total'), // Обращаемся к цифрам у слайда 
        current = document.querySelector('#current'); // Обращаемся к цифрам у слайда
  let slideIndex = 1; // Задаем значение переменной

  showSlides(slideIndex);
  // Обнуление счетчика после нажатие на стрелочки
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }
  // Показание и скрытие слайдов
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1; // По окончанию слайдов он возращает к первому слайду
    }

    if (n < 1) {
      slideIndex = slides.length; // В обратную сторону
    }

    slides.forEach(item => item.style.display = 'none'); // Скрываем все фото
    slides[slideIndex - 1].style.display = 'block'; // Делаем нужный слайд первым
    // Обнуление счетчика после нажатие на стрелочки
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }
  
  function plusSlides(n) {
    showSlides(slideIndex += n); // Увеличиваем или уменьшаем значение
  }

  prev.addEventListener('click', () => {
    plusSlides(-1); // Слайд назад
  });

  next.addEventListener('click', () => {
    plusSlides(1); // Слайд вперед
  });

  // Slide 2

  const slider = document.querySelectorAll('.offe__slide'), // Задаем значение всем слайдам
        prer = document.querySelector('.offe__slider-prev'), // Подключаем стрелочки
        nexr = document.querySelector('.offe__slider-next'), // След слайд
        totar = document.querySelector('#totar'), // Обращаемся к цифрам у слайда 
        currenr = document.querySelector('#currenr'); // Обращаемся к цифрам у слайда
  let slideInder = 1; // Задаем значение переменной

  showSlider(slideInder);
  // Обнуление счетчика после нажатие на стрелочки
  if (slider.length < 10) {
    totar.textContent = `0${slider.length}`;
  } else {
    totar.textContent = slider.length;
  }
  // Показание и скрытие слайдов
  function showSlider(n) {
    if (n > slider.length) {
      slideInder = 1; // По окончанию слайдов он возращает к первому слайду
    }

    if (n < 1) {
      slideInder = slider.length; // В обратную сторону
    }

    slider.forEach(item => item.style.display = 'none'); // Скрываем все фото
    slider[slideInder - 1].style.display = 'block'; // Делаем нужный слайд первым
    // Обнуление счетчика после нажатие на стрелочки
    if (slider.length < 10) {
      currenr.textContent = `0${slideInder}`;
    } else {
      currenr.textContent = slideInder;
    }
  }
  
  function plusSlider(n) {
    showSlider(slideInder += n); // Увеличиваем или уменьшаем значение
  }

  prer.addEventListener('click', () => {
    plusSlider(-1); // Слайд назад
  });

  nexr.addEventListener('click', () => {
    plusSlider(1); // Слайд вперед
  });

});