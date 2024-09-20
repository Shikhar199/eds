import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    [...container.children].forEach((row, index) => {
        if(index % 2 == 0){
            // const itemDiv = createAemElement('div', ['item'], null, null);

            // const img = document.createElement('img');
            // img.setAttribute('src', row.querySelector('picture').querySelector('img').getAttribute('src'));
            // img.alt = h3.textContent.trim();
            // img.classList.add("img-responsive");

            console.log(row);
        }
    })
}