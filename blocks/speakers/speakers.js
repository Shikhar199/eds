import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    const speakerCarouselDiv = createAemElement('div', ['item-slider-carousel', 'owl-carousel', 'owl-theme', 'mb-50', 'owl-loaded', 'owl-drag'], null, null);
    for(let i=2; i<container.children.length; i=i+2){
        
        const pictureDiv = container.children[i];
        const descriptionDiv = container.children[i+1];

        const itemDiv = createAemElement('div', ['item'], null, null);

        const anchorTag = createAemElement('a', ['item-slider-href', 'bg-light-white'], {"href":"javascript:void(0)", "data-toggle":"modal"}, null, null);
        anchorTag.setAttribute('data-target', '#'+speakerName.toLocaleLowerCase().replace(' ', ''));
        anchorTag.setAttribute('title',speakerName);

        var itemImageWraperDiv = createAemElement('div', ['item-img-wrapper'], null, null);
        const img = createAemElement('img', ['img-responsive', 'center-block', 'speaker-position', 'img-height'], {'alt':speakerName}, null);
        img.setAttribute('src', row.querySelector('picture').querySelector('img').getAttribute('src'));
        itemImageWraperDiv.append(img);

        itemDiv.append(anchorTag);

        anchorTag.append(itemImageWraperDiv);

        var itemContentWraperDiv = createAemElement('div', ['item-cnt-wrapper', 'pb75'], null, null);
            
        var h3 = createAemElement('h3', ['item-slider-head'], null, null);
        h3.textContent = speakerName;
            
        var p = createAemElement('p', ['item-slider-para'], null, null);
        p.textContent = speakerDescription;

        itemContentWraperDiv.append(h3);
        itemContentWraperDiv.append(p);

        anchorTag.append(itemContentWraperDiv);

        speakerCarouselDiv.append(itemDiv);

    }
    console.log(speakerCarouselDiv);

}