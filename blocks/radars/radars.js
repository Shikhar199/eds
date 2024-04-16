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
                const firstDivElement = document.createElement('div');
                divElement.classList.add('section-content');
                firstDivElement.classList.add('section-title');
                [...col.childNodes].forEach((node,i)=>{
                     if (node.nodeType !== Node.TEXT_NODE) {
                         if(i==1){
                             const h3Element = document.createElement('h3');
                             const h4Element = document.createElement('h4');
                             h3Element.textContent = node.textContent.trim();
                             h4Element.textContent = node.textContent.trim();
                             divElement.appendChild(h3Element);
                             firstDivElement.appendChild(h4Element);
                         } else if(i==3){
                             const pElement = document.createElement('p');
                             pElement.textContent = node.textContent.trim();
                             divElement.appendChild(pElement);
                         }
                     }
                     liElement.appendChild(firstDivElement);
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
    block.innerHTML = '';
    
    block.appendChild(accordionList);

    const radarsWrapperParent = document.querySelector('.section.radars-container');

    // Find the div.radars-wrapper element
    const radarsWrapper = document.querySelector('.radars-wrapper');

    // Find the h1#our-radars element
    const ourRadarsHeading = document.getElementById('our-radars');

    // Find the div.radars.block element
    const radarsBlock = document.querySelector('.radars.block');

    // Remove the radarsWrapper element if it exists
    if (radarsWrapper) {
        radarsWrapperParent.removeChild(radarsWrapper);
    }

    // Append radarsBlock as a sibling of ourRadarsHeading
    if (radarsBlock && ourRadarsHeading) {
        ourRadarsHeading.parentNode.insertBefore(radarsBlock, ourRadarsHeading.nextSibling);
    }

    let accordion = document.querySelectorAll('.accordion-list');
    let accordList = document.querySelectorAll('.accordion-list li');
    let accordionTitle = document.querySelectorAll('.accordion-list li .section-title');
    const firstAccordionItem = document.querySelector('.accordion-list li:first-child');
    
    // Add the 'active' class to the first accordion item
    firstAccordionItem.classList.add('active');

    console.log(accordion);
    console.log(accordList);
    console.log(accordionTitle);
    
    let counter = 0;
    let activeInterval;
    
    function toggleAccordion(){
        // Remove 'active' class from all accordion items
        accordList.forEach(item => item.classList.remove('active'));
        // Add 'active' class to the clicked accordion item
        this.classList.add('active');
        // Clear any existing interval
        clearInterval(activeInterval);
        // Start a new interval after 3000 milliseconds
        activeInterval = setInterval(activeAccordion, 5000);
    }

    // Attach click event listener to each accordion item
    accordList.forEach(item => item.addEventListener('click', toggleAccordion));

    // Start the initial interval after 3000 milliseconds
    setTimeout(() => {
        activeInterval = setInterval(activeAccordion, 5000);
    }, 3000);

    function activeAccordion(){
         // Remove 'active' class from all accordion items
        accordList.forEach(item => item.classList.remove('active'));
    
        // Add 'active' class to the current accordion item
        accordList[counter].classList.add('active');
    
        // Increment counter and reset if it exceeds the length of accordList
        counter++;
        if (counter === accordList.length) {
            counter = 0;
        }
    }
}


