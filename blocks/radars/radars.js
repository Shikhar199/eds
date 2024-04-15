export default function decorate(block){
    const accordionList = document.createElement('ul');
    accordionList.setAttribute('accordion-list', '');
    
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
                [...col.childNodes].forEach((node)=>{
                     if (node.nodeType !== Node.TEXT_NODE) {
                         console.log(node.textContent.trim());
                     }
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
        console.log("list element");
        console.log(liElement);
    })
    console.log(accordionList)
    block.innerHTML = '';
    /*const mainElement = document.createElement('main');
    mainElement.classList.add("home-page-wrapper");

    const sectionElement = document.createElement('section');
    sectionElement.classList.add("home-interests-wrapper");

    const divElement = document.createElement('div');
    divElement.classList.add("interests-main");
    
    const divElement2 = document.createElement('div');
    divElement2.classList.add("row","no-gutters");

    const divElement3 = document.createElement('div');
    divElement3.classList.add("col-lg-6");

    const divElement4 = document.createElement('div');
    divElement4.classList.add("insights-wrapper", "home-overlay", "insights-hover");

    const headingElement = document.createElement('h3');
    headingElement.classList.add("interest-heading");
    headingElement.setAttribute("title", "The promise of the metaverse")
    headingElement.textContent = "The promise of the metaverse"

    divElement3.appendChild(divElement4);
    divElement2.appendChild(divElement3);
    divElement.appendChild(divElement2);
    sectionElement.appendChild(divElement);
    mainElement.appendChild(sectionElement);
    divElement4.appendChild(headingElement);

    const targetDiv = document.querySelector(".radars-container .default-content-wrapper");
    targetDiv.appendChild(mainElement);*/
    block.appendChild(accordionList);

}
