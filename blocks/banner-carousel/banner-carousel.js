import { bindSwipeToElement } from '../../scripts/scripts.js';
import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
import { createAemElement } from '../../scripts/aem.js';

function nextElement(el, selector) {
  if (selector) {
    const next = el.nextElementSibling;
    if (next && next.matches(selector)) {
      return next;
    }
    return undefined;
  }
  return el.nextElementSibling;
}

function previousElement(el, selector) {
  if (selector) {
    const prev = el.previousElementSibling;
    if (prev && prev.matches(selector)) {
      return prev;
    }
    return undefined;
  }
  return el.previousElementSibling;
}

function slideNext(block, slides, slidesNo, pagination) {
  const width = block.offsetWidth;
  let margin = slides.offsetLeft;
  if (margin <= width * (slidesNo - 1) * -1) {
    margin = 0;
  } else {
    margin -= width;
  }
  slides.style.marginLeft = `${margin}px`;

  // change active indicator
  const activeItem = pagination.querySelector('.active');
  activeItem.classList.remove('active');
  const nextItem = nextElement(activeItem, '.indicator');
  if (nextItem) {
    nextItem.classList.add('active');
  } else {
    pagination.firstElementChild.classList.add('active');
  }
  activeItem.getAttribute('data-slide');
}

function marginRecalc(block, slides, pagination) {
  const activeItem = pagination.querySelector('.active');
  const activeSlideNo = activeItem.getAttribute('data-slide');
  const width = block.offsetWidth;
  const margin = width * (activeSlideNo - 1) * -1;
  slides.style.marginLeft = `${margin}px`;
}

function slidePrev(block, slides, slidesNo, pagination) {
  const width = block.offsetWidth;
  let margin = slides.offsetLeft;
  if (margin === 0) {
    margin = width * (slidesNo - 1) * -1;
  } else {
    margin += width;
  }
  slides.style.marginLeft = `${margin}px`;

  // change active indicator
  const activeItem = pagination.querySelector('.active');
  activeItem.classList.remove('active');
  const prevItem = previousElement(activeItem, '.indicator');
  if (prevItem) {
    prevItem.classList.add('active');
  } else {
    pagination.lastElementChild.classList.add('active');
  }
  activeItem.getAttribute('data-slide');
}

function SliderTimer(fn, t) {
  let timerObj = setInterval(fn, t);

  this.stop = () => {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  };

  // start timer using current settings (if it's not already running)
  this.start = () => {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }
    return this;
  };

  // start with new or original interval, stop current interval
  this.reset = (newT = t) => {
    this.t = newT;
    return this.stop()
      .start();
  };
}

function initializeScroll(block, slidesNo) {
  const prevBTN = block.querySelector('.control-container .prev');
  const slides = block.querySelector(':scope > div:first-child');
  const nextBTN = block.querySelector('.control-container .next');
  const pagination = block.querySelector('.control-container .image-pagination');
  if (slidesNo > 1) {
    // automatic slide every 5secs
    const timer = new SliderTimer(() => {
      slideNext(block, slides, slidesNo, pagination);
    }, 5000);
    nextBTN.classList.remove('hide');
    prevBTN.classList.remove('hide');
    // next/prev buttons initialization
    nextBTN.addEventListener('click', () => {
      slideNext(block, slides, slidesNo, pagination);
      timer.reset(5000);
    });

    prevBTN.addEventListener('click', () => {
      slidePrev(block, slides, slidesNo, pagination);
      timer.reset();
    });

    // swipe events initialization
    bindSwipeToElement(block);
    block.addEventListener('swipe-RTL', () => {
      slideNext(block, slides, slidesNo, pagination);
      timer.reset();
    });
    block.addEventListener('swipe-LTR', () => {
      slidePrev(block, slides, slidesNo, pagination);
      timer.reset();
    });
  }
  // window resize
  window.addEventListener('resize', () => {
    marginRecalc(block, slides, pagination);
  });
}

export default function decorate(block) {
    console.log(block);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    const cols = [...container.children];
    console.log(cols);
    console.log(cols.length);
    let entries = '';
    // create carousel section
    const parentCarousel = createAemElement('div', ['home-banner-slider', 'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag'], null, null);
    cols.forEach((slide, index) => {
        console.log(slide);
        var carousel = createAemElement('div', null, null, null);
        var imgDiv = createAemElement('div', ['repeated-css', 'bg-amethyst-medium'], null, null);
        const bannerPic = slide.querySelector('picture');
        const bannerImg = bannerPic.querySelector('img');
        bannerImg.setAttribute('alt','');
        bannerImg.classList.add('slide-image', 'hidden-xs');
        imgDiv.append(bannerImg);
        console.log(imgDiv);

        // Create the main div with class 'hero-banner-caption'
        const heroBannerCaption = createAemElement('div', ['hero-banner-caption'], null, null);

        // Create the container div
        const container = createAemElement('div', ['container'], null, null);

        // Create the row div
        const row = createAemElement('div', ['row'], null, null);

        // Create the column div
        const col = createAemElement('div', ['col-lg-7', 'col-md-6', 'col-sm-12', 'col-xs-12'], null, null);

        const heading = createAemElement('h2', ['hero-banner-head'], null, null);

        const h2 = slide.querySelector('h2');
        const headingHTML = h2.innerHTML;

        // Split the content by the <br> tag to separate the two parts
        const [firstPart, secondPart] = headingHTML.split('<br>');

        // Trim any extra whitespace
        const firstText = firstPart.trim();  // "EMEA Confluence"
        const secondText = secondPart.trim();

        heading.innerHTML = firstText + '<span class="block">'+ secondText + '</span>';

        col.appendChild(heading);
        const paragraphs = slide.querySelectorAll('p');
        console.log(paragraphs);

        if(paragraphs.length===3){
            var paraHTML = paragraphs[1].innerHTML;
            var[firstpara, secondpara] = paraHTML.split('<br>');
            console.log(firstpara);
            console.log(secondpara);
            var lineBreak = document.createElement('br');
            var description = createAemElement('p', ['hero-banner-para', 'fontweight400'], null, null);
            description.append(firstpara);
            description.append(lineBreak);
            description.append(secondpara);
            col.append(description);
        }
        const lastParagraph = paragraphs[paragraphs.length - 1];

        const link = createAemElement('a', ['cta-link', 'hero-banner-cta'], {'aria-label': 'Go to View Session Archives Page', 'href': '/confluence/insights.html', 'title': lastParagraph.textContent});
        link.textContent = 'View Session Archives';

        // Append the heading and link to the column div
        col.appendChild(link);

        // Append the column div to the row
        row.appendChild(col);

        // Append the row to the container
        container.appendChild(row);

        // Append the container to the main div
        heroBannerCaption.appendChild(container);

        // Append the main div to the body or any other desired parent element

        console.log(heroBannerCaption);

        carousel.append(imgDiv);
        carousel.append(heroBannerCaption);
        parentCarousel.append(carousel);
  });
  console.log(parentCarousel);
  block.append(parentCarousel);

  $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 1,
            // margin: 10,
            loop: true,
            nav: true
        });
    });
  // create indicators section
//   const indicatorsHTML = `
// <div class="control-container">
//     <div class="prev hide">&#10094</div>
//     <div class="image-pagination">
//       ${entries}
//     </div>
//     <div class="next hide">&#10095</div>
//   </div>`;
//   block.innerHTML = carousel.outerHTML + indicatorsHTML;
//   initializeScroll(block, cols.length);
}