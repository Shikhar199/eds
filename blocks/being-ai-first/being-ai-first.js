import { createAemElement } from '../../scripts/aem.js';

export default function decorate(block) {
    console.log(block);
    const section = createAemElement('section', ["py-75"], null, "theme");
    const article = createAemElement('article', ["container"], null, null);
    const containerDiv = createAemElement('div', ['container'], null, null); 
    const rowDiv = createAemElement('div', ['row'], null, null);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    const parentDiv = document.createAemElement('div', ['col-lg-8', 'col-md-8', 'col-md-offset-2', 'col-sm-12', 'col-xs-12', 'text-center', 'wow', 'fadeInUp', 'animated'], {'data-wow-delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'}, null);
    [...container.children].forEach((row, index) => {
        if(index==0){
            const blockHead = createAemElement('h2', ['overview-head'], null, null);
            blockHead.textContent = row.querySelector('h2').textContent.trim();
            parentDiv.append(blockHead);
        }
        if(index==1){
            const blockPara = createAemElement('p', ['overview-para'], null, null);
            blockPara.textContent = row.querySelector('div').textContent.trim();
            parentDiv.append(blockPara);
        }
    })

    rowDiv.append(parentDiv);
    containerDiv.append(rowDiv);
    article.append(containerDiv);
    section.append(article);

  //   block.append(owlCarouselDiv);
    block.append(section);

    const blockParent = document.querySelector(".being-ai-first");
    blockParent.parentElement.replaceChild(section, blockParent);

}