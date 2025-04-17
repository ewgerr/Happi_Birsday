// script.js    
  // Отримуємо всі зображення
  const images = document.querySelectorAll('.image img');
  console.log(images);

  // Функція для перевірки видимості зображення
  const revealImages = () => {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        img.classList.add('visible'); // Додаємо клас, якщо зображення у видимій області
      }
    });
  };

  // Викликаємо функцію при завантаженні сторінки та прокрутці
  window.addEventListener('scroll', revealImages);
  window.addEventListener('load', revealImages);
  console.log('Скрипт завантажено');