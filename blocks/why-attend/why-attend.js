import { createOptimizedPicture } from '../../scripts/aem.js';
import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const container = document.createElement('div');
  container.innerHTML = block.innerHTML;
  block.innerHTML = '';
//   const ul = document.createElement('ul');
//   console.log(container);
  const owlCarouselDiv = createAemElement('div', ['item-slider-carousel', 'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag'], null, null);
  console.log(owlCarouselDiv);
  [...container.children].forEach((row, index) => {
//     const li = document.createElement('li');
//     while (row.firstElementChild) li.append(row.firstElementChild);
//     [...li.children].forEach((div) => {
//       if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
//       else div.className = 'cards-card-body';
//     });
//     ul.append(li);
      const itemDiv = createAemElement('div', ['item'], null, null);
      const h3 = row.querySelector('h3');
      const lowercaseh3 = h3.textContent.trim().toLowerCase();
      const enclosingTag = index==0 ? createAemElement('span', ["item-slider-href", "bg-grey", "scrollto-target"], {'href':`#${lowercaseh3}`, 'title':`${h3.textContent.trim()}`}, null) : createAemElement('a', ["item-slider-href", "bg-grey", "scrollto-target"], {'href':`#${lowercaseh3}`, 'title':`${h3.textContent.trim()}`}, null);

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

  });

  console.log(owlCarouselDiv);
  block.append(owlCarouselDiv);

  $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 4,
            margin: 20,
            loop: true,
            nav: true,
            navText: [
                '<div class="owl-prev">prev</div>', 
                '<div class="owl-next">next</div>'
            ],
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
//   ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  // block.textContent = '';
  // block.append(ul);
}