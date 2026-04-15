
// Navigation Active Link Highlighting

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(item => item.classList.remove('active-link'));
      this.classList.add('active-link');
    });
  });
});

// Swiper Initialization for My Skills Section

function MySkills() {
  const swiper = new Swiper('.swiper', {

    direction: 'vertical',
    loop: true,


    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}


const swiperJS = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  }
});

// Typewriter Effect for Hero Section

const texts = ["I'm a Junior Web Developer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
      if (count === texts.length) count = 0;

      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      document.getElementById('typewriter').textContent = letter;

      if (letter.length === currentText.length) {
        setTimeout(() => erase(), 1000);
      } else {
        setTimeout(type, 100);
      }
    }

    function erase() {
      letter = currentText.slice(0, --index);
      document.getElementById('typewriter').textContent = letter;

      if (letter.length === 0) {
        count++;
        setTimeout(type, 500); 
      } else {
        setTimeout(erase, 50); 
      }
    }

  
    type();


    // Initialize Testimonial owlCarousel

    $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      dots:true,
      autoplay:true,
      autoplayTimeout:4000,
      responsive:{
        0:{ items:1 },
        576:{ items:1 },
        768:{ items:1 },
        992:{ items:2 }
      }
    });
  });

  // Timer JS

  const counters = document.querySelectorAll('.counter');
  const speed = 1000;
  const done = new WeakSet();

  function updateCount(counter) {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(() => updateCount(counter), 50);
    } else {
      counter.innerText = target;
    }
  }

  function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        if (!done.has(counter)) {
          updateCount(counter);
          done.add(counter);
        }
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.5 
  });

  counters.forEach(counter => observer.observe(counter));


    // Smooth Scroll 

  function smoothScroll(target, duration = 1000, offset = 50) {
    const element = document.querySelector(target);
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

 
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"), 1200, 50); 

    });
  });

// Scroll Bar
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById('scrollProgressBar').style.height = scrollPercent + "%";
});
