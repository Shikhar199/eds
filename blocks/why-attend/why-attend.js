import { createOptimizedPicture } from '../../scripts/aem.js';
import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const container = document.createElement('div');
  container.innerHTML = block.innerHTML;
  block.innerHTML = '';
//   const ul = document.createElement('ul');
//   console.log(container);
  const owlCarouselDiv = createAemElement('div', ['item-slider-carousel', 'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag']);
  console.log(owlCarouselDiv);
  [...container.children].forEach((row) => {
//     const li = document.createElement('li');
//     while (row.firstElementChild) li.append(row.firstElementChild);
//     [...li.children].forEach((div) => {
//       if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
//       else div.className = 'cards-card-body';
//     });
//     ul.append(li);
  });
//   ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  // block.textContent = '';
  // block.append(ul);
}