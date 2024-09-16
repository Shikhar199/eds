import { createOptimizedPicture } from '../../scripts/aem.js';
import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const section = createAemElement('section', ["unmissable", "bg-light-white", "py-75"], null, "why-attend");
  const article = createAemElement('article', ["container"], null, null); 
  const rowDiv = createAemElement('div', ['row'], null, null);
  const headingWrapperDiv = createAemElement('div', ['col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-12', 'wow', 'fadeInDown', 'animated'], { 'data-wow-delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'}, null);
  const owlParentDiv = createAemElement('div', ['col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12', 'pad0-mob', 'wow', 'fadeInUp', 'animated'], {'data-wow-delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'}, null);


  const container = document.createElement('div');
  container.innerHTML = block.innerHTML;
  block.innerHTML = '';

  const owlCarouselDiv = createAemElement('div', ['item-slider-carousel', 'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag'], null, null);
  console.log(owlCarouselDiv);

  [...container.children].forEach((row, index) => {
      if(index==0){
          const h2 = createAemElement('h2', ['h2-head', 'mb-50'], null, null);
          h2.textContent = row.querySelector('h2').textContent.trim();
          headingWrapperDiv.append(h2);
      }
      else{
            const itemDiv = createAemElement('div', ['item'], null, null);
            const h3 = row.querySelector('h3');
            const lowercaseh3 = h3.textContent.trim().toLowerCase();
            const enclosingTag = index==1 ? createAemElement('span', ["item-slider-href", "bg-grey", "scrollto-target"], {'href':`#${lowercaseh3}`, 'title':`${h3.textContent.trim()}`}, null) : createAemElement('a', ["item-slider-href", "bg-grey", "scrollto-target"], {'href':`#${lowercaseh3}`, 'title':`${h3.textContent.trim()}`}, null);

            h3.classList.add('item-slider-head', 'text-center');

            const imgWrapperDiv = createAemElement('div', ["item-img-wrapper"], null, null);
      
            const img = document.createElement('img');
            img.setAttribute('src', row.querySelector('picture').querySelector('img').getAttribute('src'));
            img.alt = h3.textContent.trim();
            img.classList.add("img-responsive");

            imgWrapperDiv.append(img);

            const contentWrapperDiv = createAemElement('div', ["item-cnt-wrapper", "pb75"], null, null);
            const pTag = createAemElement('p', ["item-slider-para", "mb-0", "fontweight400"], null, null);

            pTag.textContent = row.lastElementChild.textContent.trim();
            contentWrapperDiv.append(pTag);

            enclosingTag.append(h3);
            enclosingTag.append(imgWrapperDiv);
            enclosingTag.append(contentWrapperDiv);

            itemDiv.append(enclosingTag)

            owlCarouselDiv.append(itemDiv);
      }

  });
  owlParentDiv.append(owlCarouselDiv);
  rowDiv.append(headingWrapperDiv);
  rowDiv.append(owlParentDiv);
  article.append(rowDiv);
  section.append(article);
  console.log(section);
  console.log(owlCarouselDiv);
//   block.append(owlCarouselDiv);
  block.append(section);

  const blockParent = document.querySelector(".why-attend-container");
  blockParent.parentElement.replaceChild(section, blockParent);
}

  $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 4,
            margin: 20,
            loop: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1 // 1 item on small screens
                },
                600: {
                    items: 3 // 2 items on medium screens
                },
                1000: {
                    items: 4 // 4 items on large screens
                }
            }
        });
    });

    createCustomNav();

    function createCustomNav(){
        console.log("Creating custom nav");
        $('.owl-nav').html('<div class="owl-prev">prev</div><div class="owl-next">next</div>');

        // Prev button
        $('.owl-prev').click(function() {
            owl.trigger('prev.owl.carousel');
        });

        // Next button
        $('.owl-next').click(function() {
            owl.trigger('next.owl.carousel');
        });
    }

//   ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  // block.textContent = '';
  // block.append(ul);

