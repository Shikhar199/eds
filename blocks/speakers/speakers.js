import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    [...container.children].forEach((row, index) => {
        var speakerName = row.querySelector('h3').textContent.trim(); 
        if(index!==0 && index % 2 == 0){
            var itemImageWraperDiv = createAemElement('div', ['item-img-wrapper'], null, null);
            const img = document.createAemElement('img', ['img-responsive', 'center-block', 'speaker-position', 'img-height'], {'alt':speakerName}, null);
            img.setAttribute('src', row.querySelector('picture').querySelector('img').getAttribute('src'));
            itemImageWraperDiv.append(img);
        }
    })
}