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
  const cols = [...block.children];
  console.log(cols);
  let entries = '';
  // create carousel section
  const carousel = document.createElement('div');
  cols.forEach((slide, index) => {
    console.log(slide);
    var imgDiv1 = createAemElement('div', ['repeated-css', 'bg-amethyst-medium'], null, null);
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('repeated-css', 'bg-amethyst-medium');
    const bannerPic = slide.querySelector('picture');
    const bannerImg = bannerPic.querySelector('img');
    bannerImg.setAttribute('alt','slide-image hidden-xs');
    imgDiv.append(bannerImg);
    console.log(imgDiv);
    console.log(imgDiv1);

    // Create the main div with class 'hero-banner-caption'
const heroBannerCaption = document.createElement('div');
heroBannerCaption.className = 'hero-banner-caption';

// Create the container div
const container = document.createElement('div');
container.className = 'container';

// Create the row div
const row = document.createElement('div');
row.className = 'row';

// Create the column div
const col = document.createElement('div');
col.className = 'col-lg-7 col-md-6 col-sm-12 col-xs-12';

// Create the heading element
// var heading = slide.querySelector('h2').textContent.trim();
// const headingHTML = heading.innerHTML;

// Split the content by the <br> tag to separate the two parts
const [firstPart, secondPart] = headingHTML.split('<br>');

// Trim any extra whitespace
const firstText = firstPart.trim();  // "EMEA Confluence"
const secondText = secondPart.trim();

const heading = document.createElement('h2');
heading.className = 'hero-banner-head';
heading.innerHTML = firstText + '<span class="block">'+ secondText + '</span>';

const paragraphs = document.querySelector('.text-container');

// Select the last <p> element
const lastParagraph = paragraphs[paragraphs.length - 1];
// Create the anchor link
const link = document.createElement('a');
link.href = '/confluence/insights.html';
link.className = 'cta-link hero-banner-cta';
link.title = lastParagraph.textContent;
link.setAttribute('aria-label', 'Go to View Session Archives Page');
link.textContent = 'View Session Archives';

// Append the heading and link to the column div
col.appendChild(heading);
col.appendChild(link);

// Append the column div to the row
row.appendChild(col);

// Append the row to the container
container.appendChild(row);

// Append the container to the main div
heroBannerCaption.appendChild(container);

// Append the main div to the body or any other desired parent element
document.body.appendChild(heroBannerCaption);
console.log(heroBannerCaption);
    console.log(imgDiv);
    const optimizedPic = createOptimizedPicture(bannerImg.src, bannerImg.alt, false, [{ media: '(min-width: 600px)', width: '2000' }, { width: '1200' }]);
    console.log(optimizedPic);
    slide.prepend(optimizedPic);
    // bannerPic.remove();
    slide.classList.add('carousel-slide');
    slide.lastElementChild.classList.add('text-container');
    carousel.append(slide);
    console.log(carousel);
    //entries += `<div data-slide="${index + 1}" class="indicator ${index === 0 ? 'active' : ''}"></div>`;
  });
  // create indicators section
  const indicatorsHTML = `
<div class="control-container">
    <div class="prev hide">&#10094</div>
    <div class="image-pagination">
      ${entries}
    </div>
    <div class="next hide">&#10095</div>
  </div>`;
  block.innerHTML = carousel.outerHTML + indicatorsHTML;
  initializeScroll(block, cols.length);
}