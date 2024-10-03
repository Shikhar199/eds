import { createAemElement } from '../../scripts/aem.js';

var accord3Div;
export default function decorate(block){
    console.log(block);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    const lineBreak = document.createElement('br')
    let positionRelativeDiv = createAemElement('div', ['row', 'position-relative'], null, null);
    let videoDiv = createAemElement('div', ['video-size'], null, null);
    let textDiv = createAemElement('div', ['video-txt', 'text-center'], null, null);
    let blockTitle;
    let blockHead;
    let descParentDiv = createAemElement('div', ['col-lg-8', 'col-lg-offset-2', 'col-md-8', 'col-md-offset-2', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInUp', 'animated'], {'data-wow-delay':'0.3s', 'style':'visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;'}, null);
    positionRelativeDiv.append(videoDiv);
    positionRelativeDiv.append(textDiv);

    console.log(positionRelativeDiv);

    [...container.children].forEach((row, index) => {
        console.log(row);
        if(index==0){
            let h2ParentDiv = createAemElement('div', ['col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInUp', 'animated'], {'data-wow-delay':'0.3s', 'style':'visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;'}, null);
            // const img = document.createElement('img');
            const img = row.querySelector('picture');
            blockTitle = row.querySelector('h2').textContent.trim();
            blockHead = row.querySelector('h2');
            blockHead.classList.add('h2-head', 'mb-20', 'wow', 'fadeInDown', 'animated');
            blockHead.setAttribute('data-wow-delay','0.2s');
            blockHead.setAttribute('style','visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;');
            // img.setAttribute('src', row.querySelector('picture').querySelector('img').getAttribute('src'));
            img.alt = blockTitle.trim();
            img.classList.add("venue-img");
            videoDiv.append(img);
            textDiv.append(h2ParentDiv);
            h2ParentDiv.append(blockHead);

        } else if(index==1){
            let descParas = row.querySelectorAll('p');
            let blockDesc = createAemElement('p', [], null, null);
            blockDesc.textContent = descParas[0].textContent.trim();
            if(descParas[1]){
                let blockAnchor = descParas[1].querySelector('a');
                blockAnchor.classList.add('color-white', 'fs-20');
                blockAnchor.setAttribute('target','_blank');
                blockAnchor.setAttribute('rel','noopener noreferrer');
                blockDesc.append(lineBreak);
                blockDesc.append(blockAnchor);
            }
            descParentDiv.append(blockDesc);

        } else if(index==2){
            let btnText = row.querySelector('div').textContent.trim();
            let directionPara = createAemElement('p', ['direction-txt'], null, null);
            let directionAnchor = createAemElement('a', ['1border_switch_effect', 'direction', 'cta-link'], {'href':'javascript:void(0);', 'title':btnText}, null);
            directionAnchor.textContent = btnText;
            directionPara.append(directionAnchor);
            descParentDiv.append(directionPara);
        }
    })

    const directionMapDiv = createAemElement('div', ['direction-map'], null, null);
    const directionAnchor = createAemElement('a', ['direction-close'], {'href':'javascript:void(0);', 'title':'Close'}, null);    
    const closeIcon = createAemElement('i', ['fa', 'fa-times'], {'aria-hidden': 'true'}, null);
    directionAnchor.append(closeIcon);

    // const iframe = document.createElement('iframe');
    // iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0344014073994!2d16.3833942!3d48.2059533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077463295b23%3A0xbc6ab3d32c053806!2sAm%20Stadtpark%201%2C%201030%20Wien%2C%20Austria!5e0!3m2!1sen!2sin!4v1694669253657!5m2!1sen!2sin';
    // // iframe.src = '../iframe/iframe.html';
    // // iframe.src = `${window.hlx.codeBasePath}/blocks/iframe/iframe.html`;
    // iframe.width = '600';
    // iframe.height = '450';
    // iframe.style.border = '0';
    // iframe.allowFullscreen = true;
    // iframe.loading = 'lazy';
    // iframe.referrerPolicy = 'no-referrer-when-downgrade';

    directionMapDiv.append(directionAnchor);
    fetchHtml('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0344014073994!2d16.3833942!3d48.2059533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077463295b23%3A0xbc6ab3d32c053806!2sAm%20Stadtpark%201%2C%201030%20Wien%2C%20Austria!5e0!3m2!1sen!2sin!4v1694669253657!5m2!1sen!2sin').then(iframeHtml=>{
        console.log(iframeHtml);
        directionMapDiv.append(iframe);
    }).catch((error)=>{
        console.log(error);
    })
    // addIframe(directionMapDiv);
    // directionMapDiv.append(iframe);
    // console.log(iframeHtml);

    descParentDiv.append(directionMapDiv);

    textDiv.append(descParentDiv);

    const section = document.createElement('section');
    section.classList.add('color-white');
    section.id = 'venue';

    const article = document.createElement('article'); 
    article.classList.add('container');

    section.append(article);
    article.append(positionRelativeDiv);

    const blockParent = document.querySelector(".venue-container");
    blockParent.parentElement.replaceChild(section, blockParent);
    // block.parentNode.replaceChild(section, block);
    // console.log(block);
    // block.append(section);
}

async function fetchHtml(url) {
    let container;
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const html = await response.text(); // Read the response as text (HTML format)
      
      // Optionally, you could insert this HTML into your page
      container = document.createElement('div');
      container.innerHTML = html;
      console.log(container.innerHTML);
    //   document.body.appendChild(container);  // Or append to any specific container
      
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
    return container.innerHTML;
}
  
  

function addIframe(directionMapDiv){
    document.addEventListener('DOMContentLoaded', function() {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0344014073994!2d16.3833942!3d48.2059533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077463295b23%3A0xbc6ab3d32c053806!2sAm%20Stadtpark%201%2C%201030%20Wien%2C%20Austria!5e0!3m2!1sen!2sin!4v1694669253657!5m2!1sen!2sin';
        iframe.width = '600';
        iframe.height = '450';
        iframe.style.border = '0';
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

        const directionMapDiv = document.querySelector('.direction-map');  // Ensure that this element is in the DOM
        if (directionMapDiv) {
            directionMapDiv.appendChild(iframe);
        }
    });
}