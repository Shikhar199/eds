import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    const rowDiv = createAemElement('div', ['row'], null, null);
    const article = createAemElement('article', ['container'], null, null);
    const section = createAemElement('section', ['speakes-sec', 'py-75'], null, "speakers");

    const blockHead = container.children[0].querySelector('h2').textContent.trim();
    const blockDescription = container.children[1].querySelector('div').textContent.trim();

    const outerDiv = createAemElement('div', ['col-lg-3', 'col-md-3', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInLeft', 'mb-50-xs', 'animated'], {'data-wow-delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'}, null);

    const heading = createAemElement('h2', ['h2-head', 'mb-20'], null, null);
    heading.textContent = blockHead;
    const paragraph = createAemElement('p', ['speakers-para', 'fontweight400'], null, null);
    paragraph.textContent = blockDescription;

    outerDiv.append(heading);
    outerDiv.append(paragraph);

    console.log(outerDiv);

    const parentCarouselDiv = createAemElement('div', ['col-lg-9', 'col-md-9', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInRight', 'pad0-mob', 'animated'], {'data-wow-delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'}, null);

    const speakerCarouselDiv = createAemElement('div', ['item-slider-carousel', 'owl-carousel', 'owl-theme', 'mb-50', 'owl-loaded', 'owl-drag'], null, null);
    for(let i=2; i<container.children.length-1; i=i+2){
        
        const pictureDiv = container.children[i];
        const descriptionDiv = container.children[i+1];

        const speakerName = pictureDiv.querySelector('h3').textContent.trim();
        const speakerDescription = descriptionDiv.querySelector('div').textContent.trim();

        const itemDiv = createAemElement('div', ['item'], null, null);

        const anchorTag = createAemElement('a', ['item-slider-href', 'bg-light-white'], {"href":"javascript:void(0)", "data-toggle":"modal"}, null, null);
        anchorTag.setAttribute('data-target', '#'+speakerName.toLocaleLowerCase().replace(' ', ''));
        anchorTag.setAttribute('title',speakerName);

        var itemImageWraperDiv = createAemElement('div', ['item-img-wrapper'], null, null);
        const img = createAemElement('img', ['img-responsive', 'center-block', 'speaker-position', 'img-height'], {'alt':speakerName}, null);
        img.setAttribute('src', pictureDiv.querySelector('picture').querySelector('img').getAttribute('src'));
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

    const btnInfo = container.children[container.children.length-1].querySelectorAll('div');
    const btnText = btnInfo[0].textContent.trim();
    const btnLink = btnInfo[1].textContent.trim();
    const btnDiv = createAemElement('div', ['text-center'], null, null);
    const btnAnchor = createAemElement('a', ['cta-link', 'hero-banner-cta'], {'title':btnText, 'href':btnLink}, null);
    btnDiv.append(btnAnchor);

    parentCarouselDiv.append(speakerCarouselDiv);
    parentCarouselDiv.append(btnDiv);

    rowDiv.append(outerDiv);
    rowDiv.append(parentCarouselDiv);

    article.append(rowDiv);
    section.append(article);

    console.log(section);

    block.append(section);

    const blockParent = document.querySelector(".speakers-container");
    blockParent.parentElement.replaceChild(section, blockParent);
}