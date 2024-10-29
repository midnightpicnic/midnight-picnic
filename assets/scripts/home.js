document.addEventListener("DOMContentLoaded", () => {
  function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  }

  const svgAnimateWrappers = document.querySelectorAll('svg-animate');
  svgAnimateWrappers.forEach(svgAnimateWrapper => {
    if (!isChrome()) {
      const svgElement = svgAnimateWrapper.querySelector('svg');
      if (svgElement) {
        svgAnimateWrapper.parentNode.replaceChild(svgElement, svgAnimateWrapper);
      }
    }
  });
    
  const stampsContainer = document.querySelector("section#hero");
  const asterisk = document.querySelector('.asterisk');
  const slideIn = document.querySelector('.slide-in');
  const sarah = document.querySelector('#sarah');
  const draggableElements = document.querySelectorAll(".draggable");
  const cards = document.querySelectorAll('#contact .card');

  let stampIndex = 0;
  const stampUrls = Array.from({ length: 10 }, (_, i) => `stamp${i + 1}.svg`);

  const addStamp = (x, y) => {
    const img = document.createElement("img");
    img.src = `/assets/images/${stampUrls[stampIndex]}`;
    img.classList.add("stamp");

    img.onload = () => {
      const offsetX = x < window.innerWidth / 2 ? img.width / 2 : -img.width / 2;
      img.style.left = `${x - stampsContainer.offsetLeft + offsetX}px`;

      const topOffset = y > stampsContainer.offsetTop && y < stampsContainer.offsetTop + 11.5
        ? img.height / 2
        : y > stampsContainer.offsetTop + stampsContainer.clientHeight - 11.5
        ? -img.height / 2
        : 0;

      img.style.top = `${y - stampsContainer.offsetTop + topOffset}px`;
      stampsContainer.appendChild(img);
      stampIndex = (stampIndex + 1) % stampUrls.length;

      setTimeout(() => img.remove(), 5000);
    };
  };

  document.addEventListener("click", (event) => {
    if (event.target.closest("section#hero")) {
      const { pageX: x, pageY: y } = event.touches ? event.touches[0] : event;
      addStamp(x, y);
    }
  });

  if (asterisk) {
    asterisk.addEventListener('click', () => slideIn?.classList.add('show'));
  }

  if (sarah) {
    sarah.addEventListener('click', (e) => {
      if (e.target !== asterisk) slideIn?.classList.remove('show');
    });
  }

  let whichDown = null;
  let initX, initY, firstX, firstY;

  window.addEventListener("mouseup", () => {
    if (whichDown) {
      whichDown.style.zIndex = 1;
      whichDown = null;
    }
  });

  window.addEventListener("mousemove", (e) => {
    if (!whichDown) return;
    whichDown.style.zIndex = 9;
    whichDown.style.left = `${initX + e.pageX - firstX}px`;
    whichDown.style.top = `${initY + e.pageY - firstY}px`;
  });

  draggableElements.forEach((element) => {
    element.addEventListener("mousedown", (e) => {
      e.preventDefault();
      whichDown = element;
      initX = element.offsetLeft;
      initY = element.offsetTop;
      firstX = e.pageX;
      firstY = e.pageY;
    });
  });

  cards.forEach((card) => {
    const form = document.querySelector(`.form-wrapper[data-form-id="${card.dataset.cardId}"]`);
    if (card.classList.contains('active')) {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }

    card.addEventListener('click', (event) => {
        event.preventDefault();
        const cardId = card.dataset.cardId;

        document.querySelectorAll('.form-wrapper').forEach((f) => f.style.display = 'none');
        form.style.display = form.style.display === 'block' ? 'none' : 'block';
    });
});
});