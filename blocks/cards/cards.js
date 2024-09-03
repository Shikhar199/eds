import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  console.log(block);
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}























// <div class="cards block" data-block-name="cards" data-block-status="loaded">
//           <div>
//             <div>
//               <picture>
//                 <source type="image/webp" srcset="./media_1ad9a4e15380f167eb46f25c14a12e46cf9dbd3dd.jpeg?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
//                 <source type="image/webp" srcset="./media_1ad9a4e15380f167eb46f25c14a12e46cf9dbd3dd.jpeg?width=750&amp;format=webply&amp;optimize=medium">
//                 <source type="image/jpeg" srcset="./media_1ad9a4e15380f167eb46f25c14a12e46cf9dbd3dd.jpeg?width=2000&amp;format=jpeg&amp;optimize=medium" media="(min-width: 600px)">
//                 <img loading="lazy" alt="" src="./media_1ad9a4e15380f167eb46f25c14a12e46cf9dbd3dd.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" width="1600" height="750">
//               </picture>
//             </div>
//             <div>
//               <p><strong>Infosys TechCompass</strong></p>
//               <p>A strategic view of how technology evolves over time and the trends that drive their adoption</p>
//             </div>
//           </div>
//           <div>
//             <div>
//               <picture>
//                 <source type="image/webp" srcset="./media_1bb91826e4fcd3fc00c85000e851d32e2570855f3.jpeg?width=2000&amp;format=webply&amp;optimize=medium" media="(min-width: 600px)">
//                 <source type="image/webp" srcset="./media_1bb91826e4fcd3fc00c85000e851d32e2570855f3.jpeg?width=750&amp;format=webply&amp;optimize=medium">
//                 <source type="image/jpeg" srcset="./media_1bb91826e4fcd3fc00c85000e851d32e2570855f3.jpeg?width=2000&amp;format=jpeg&amp;optimize=medium" media="(min-width: 600px)">
//                 <img loading="lazy" alt="" src="./media_1bb91826e4fcd3fc00c85000e851d32e2570855f3.jpeg?width=750&amp;format=jpeg&amp;optimize=medium" width="1600" height="750">
//               </picture>
//             </div>
//             <div>
//               <p><strong>Gen AI Radar - North</strong></p>
//               <p>Firms in US and Canada see generative AI as a driver of growth and are committing high spends</p>
//             </div>
//           </div>
//         </div>