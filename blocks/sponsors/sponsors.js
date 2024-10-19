export default function decorate(block) {
    const section = document.querySelector('.sponsors-container');
    
    const wrapper = document.createElement('div');
    wrapper.className = 'sponsors-wrapper';

    let container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    console.log(container);
    block.innerHTML = '';

    // Create left and right containers
    const leftContainer = document.createElement('div');
    leftContainer.className = 'left-container';

    const rightContainer = document.createElement('div');
    rightContainer.className = 'right-container';

    // Add the sponsors title to the left container
    const blockHead = document.createElement('h2');
    blockHead.classList.add('h2-head', 'pb40');
    const sponsorsTitle = container.querySelector('#sponsors');
    blockHead.textContent = sponsorsTitle.textContent.trim();
    leftContainer.appendChild(blockHead);

    // Create the sponsors block for the right container
    const sponsorsBlock = document.createElement('div');
    sponsorsBlock.className = 'sponsors block';
    sponsorsBlock.setAttribute('data-block-name', 'sponsors');
    sponsorsBlock.setAttribute('data-block-status', 'loaded');

    const diamondElement = container.querySelector('#diamond');
    const goldElement = container.querySelector('#gold');
    const digitalElement = container.querySelector('#digital');

    const diamondVal = diamondElement.textContent;
    const goldVal = goldElement.textContent;
    const digitalVal = digitalElement.textContent;

    function createButton(text, className, contentId, activeClass) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        button.addEventListener('click', () => {
            document.querySelectorAll('.content-div').forEach(div => {
                div.style.display = 'none';
                div.classList.remove('active-diamond', 'active-gold', 'active-digital'); 
            });
            const contentDiv = document.getElementById(contentId);
            contentDiv.style.display = 'block';
            contentDiv.classList.add(activeClass); 
    
            // Remove active class from all buttons
            document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    
            // Add active class to the clicked button
            button.classList.add('active');
        });
        return button;
    }
    

    sponsorsBlock.appendChild(createButton(diamondVal, 'diamond-button', 'diamond-content', 'active-diamond'));
    sponsorsBlock.appendChild(createButton(goldVal, 'gold-button', 'gold-content', 'active-gold'));
    sponsorsBlock.appendChild(createButton(digitalVal, 'digital-button', 'digital-content', 'active-digital'));

    // Create a popup element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.className = 'popup';
    document.body.appendChild(popup);

    // Create an overlay element
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    document.body.appendChild(overlay);

    function showPopup(rowData) {
        popup.innerHTML = ''; 
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '×'; 
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });
        popup.appendChild(closeButton);

        const content = document.createElement('div');
        content.className = 'popup-content';
        content.innerHTML = rowData; 
        popup.appendChild(content);

        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Close the popup when clicking on the overlay
    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    function processRows(container, startRow, endRow, contentDiv, type) {
        let rowContainer;
        [...container.children].forEach((row, r) => {
            if (r >= startRow && r <= endRow) {
                const pictureElement = row.querySelector('picture');
                if (pictureElement) {
                    const imageElement = pictureElement.querySelector('img');
                    if (imageElement) {
                        const newImage = document.createElement('img');
                        newImage.src = imageElement.src;
                        newImage.alt = imageElement.alt || `${type} Image`;
                        newImage.style.cursor = 'pointer'; 

                        newImage.addEventListener('click', () => {
                            showPopup(row.innerHTML); 
                        });

                        if (!rowContainer || rowContainer.children.length >= 3) {
                            rowContainer = document.createElement('div');
                            rowContainer.className = `${type}-row`;
                            contentDiv.appendChild(rowContainer);
                        }
                        rowContainer.appendChild(newImage);
                    } else {
                        console.error(`No image found within the picture element in ${type} row ${r}`);
                    }
                } else {
                    console.error(`No picture element found in ${type} row ${r}`);
                }
            }
        });
    }

    // Create content divs for diamond, gold, and digital
    const diamondContent = document.createElement('div');
    diamondContent.id = 'diamond-content';
    diamondContent.className = 'content-div active-diamond';

    const goldContent = document.createElement('div');
    goldContent.id = 'gold-content';
    goldContent.className = 'content-div';

    const digitalContent = document.createElement('div');
    digitalContent.id = 'digital-content';
    digitalContent.className = 'content-div';

    processRows(container, 2, 2, diamondContent, 'diamond');
    processRows(container, 4, 8, goldContent, 'gold');
    processRows(container, 10, 24, digitalContent, 'digital');

    
    sponsorsBlock.appendChild(diamondContent);
    sponsorsBlock.appendChild(goldContent);
    sponsorsBlock.appendChild(digitalContent);
    
    rightContainer.appendChild(sponsorsBlock);
    
    wrapper.appendChild(leftContainer);
    wrapper.appendChild(rightContainer);

    section.appendChild(wrapper);

    // Initially hide all content divs
    document.querySelectorAll('.content-div').forEach(div => div.style.display = 'none');

    // Show diamond content by default
    document.getElementById('diamond-content').style.display = 'block';

    block.appendChild(section);
}
