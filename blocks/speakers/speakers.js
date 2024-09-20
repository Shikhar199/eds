import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);
    for(let i=0; i<container.children.length ;i++){
        const childDiv = container.children[i];
        console.log(childDiv);
    }
    // [...container.children].forEach((row, index) => {
    //     var speakerName;
    //     const itemDiv = createAemElement('div', ['item'], null, null);
    //     const anchorTag = createAemElement('a', ['item-slider-href', 'bg-light-white'], {"href":"javascript:void(0)", "data-toggle":"modal"}, null, null);
    //     if(index!==0 && index % 2 == 0){
    //         speakerName = row.querySelector('h3').textContent.trim(); 
            
    //         anchorTag.setAttribute('data-target', '#'+speakerName.toLocaleLowerCase());
    //         anchorTag.setAttribute('title',speakerName);

    //         var itemImageWraperDiv = createAemElement('div', ['item-img-wrapper'], null, null);
    //         const img = createAemElement('img', ['img-responsive', 'center-block', 'speaker-position', 'img-height'], {'alt':speakerName}, null);
    //         img.setAttribute('src', row.querySelector('picture').querySelector('img').getAttribute('src'));
    //         itemImageWraperDiv.append(img);

    //         itemDiv.append(anchorTag);
    //         itemDiv.append(itemImageWraperDiv);

    //         console.log(itemImageWraperDiv);

    //     } else if(index!==1 && index%2==1){
    //         var speakerDescription = row.querySelector('div').textContent.trim();
    //         var itemContentWraperDiv = createAemElement('div', ['item-cnt-wrapper', 'pb75'], null, null);
            
    //         var h3 = createAemElement('h3', ['item-slider-head'], null, null);
    //         h3.textContent = speakerName;
            
    //         var p = createAemElement('p', ['item-slider-para'], null, null);
    //         p.textContent = speakerDescription;

    //         itemContentWraperDiv.append(h3);
    //         itemContentWraperDiv.append(p);

    //         itemDiv.append(itemContentWraperDiv);
    //         console.log(itemContentWraperDiv);
    //     }

    //     console.log(itemDiv);


    // })
}