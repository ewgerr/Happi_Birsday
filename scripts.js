const photos = [
    'img/1.jpeg',
    'img/331.jpg',
    'img/10.jpg',
    'img/332.jpg',
    'img/333.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg',
    'img/16.jpg',
    'img/17.jpg',
    'img/18.jpg',
    'img/19.jpg',
    'img/2.jpeg',
    'img/20.jpg',
    'img/21.jpg',
    'img/22.jpg',
    'img/23.jpg',
    'img/24.jpg',
    'img/25.jpg',
    'img/26.jpg',
    'img/27.jpg',
    'img/3.png',
    'img/31.JPG',
    'img/33.jpg',
    'img/34.jpg',
    'img/5 (1).jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/9.jpg',
  ];

  let currentIndex = 0;

    function renderGallery() {
      const gallery = document.getElementById('gallery');
      gallery.style.transform = `translateX(-${currentIndex * 33.33}%)`;
      gallery.innerHTML = '';
      photos.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Фото ${i + 1}`;
        img.onclick = () => openModal(src);
        gallery.appendChild(img);
      });
    }

    function showNext() {
      if (currentIndex + 3 < photos.length) {
        currentIndex++;
        renderGallery();
      }
    }

    function showPrevious() {
      if (currentIndex > 0) {
        currentIndex--;
        renderGallery();
      }
    }

    function openModal(src) {
      const modal = document.getElementById('modal');
      const modalImg = document.getElementById('modal-img');
      modalImg.src = src;
      modal.style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

    function startAutoScroll(interval = 3000) {
        setInterval(() => {
          if (currentIndex + 3 < photos.length) {
            showNext();
          } else {
            currentIndex = 0; 
            // renderGallery();
            showPrevious(); 
          }
        }, interval);
      }
      
    renderGallery();
    startAutoScroll();