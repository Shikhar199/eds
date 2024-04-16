export default function decorate(block){
    const accordionList = document.createElement('ul');
    accordionList.classList.add('accordion-list');
    
    [...block.children].forEach((row)=>{
        const liElement = document.createElement('li');
        liElement.classList.add("enterprises", "home-overlay");

        [...row.children].forEach((col,c)=>{
            if (c === 0) { // First column contains image
                const imgElement = document.createElement('img');
                imgElement.setAttribute('src', col.querySelector('img').getAttribute('src'));
                imgElement.setAttribute('alt', 'Sustainability');
                imgElement.classList.add('img-fluid', 'theme-image');
                liElement.appendChild(imgElement);
            } else if (c === 1) { // Second column contains text
                const divElement = document.createElement('div');
                [...col.childNodes].forEach((node,i)=>{
                     if (node.nodeType !== Node.TEXT_NODE) {
                         console.log(node.textContent.trim());
                         if(i==1){
                             const h3Element = document.createElement('h3');
                             h3Element.textContent = node.textContent.trim();
                             divElement.appendChild(h3Element);
                         } else if(i==3){
                             const pElement = document.createElement('p');
                             pElement.textContent = node.textContent.trim();
                             divElement.appendChild(pElement);
                         }
                     }
                     liElement.appendChild(divElement);
                })
                /*const divElement = document.createElement('div');
                const h3Element = document.createElement('h3');
                const pElement = document.createElement('p');
                console.log(col.querySelector('p').textContent);
                h3Element.textContent = col.querySelector('strong').textContent;
                pElement.textContent = col.querySelector('p').textContent;
                divElement.appendChild(h3Element);
                divElement.appendChild(pElement);
                liElement.appendChild(divElement);*/
            }

        })
        accordionList.appendChild(liElement);
    })
    console.log(accordionList)
    block.innerHTML = '';
    
    block.appendChild(accordionList);

    const radarsWrapperParent = document.querySelector('.section.radars-container');

    // Find the div.radars-wrapper element
    const radarsWrapper = document.querySelector('.radars-wrapper');

    // Find the h1#our-radars element
    const ourRadarsHeading = document.getElementById('our-radars');

    // Find the div.radars.block element
    const radarsBlock = document.querySelector('.radars.block');

    console.log(radarWrapperParent);
    console.log(radarsWrapper);
    console.log(ourRadarsHeading);
    console.log(radarsBlock);
        
    // Remove the radarsWrapper element if it exists
    if (radarsWrapper) {
        radarsWrapperParent.removeChild(radarsWrapper);
    }

    // Append radarsBlock as a sibling of ourRadarsHeading
    if (radarsBlock && ourRadarsHeading) {
        ourRadarsHeading.parentNode.insertBefore(radarsBlock, ourRadarsHeading.nextSibling);
    }


}

