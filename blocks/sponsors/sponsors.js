export default function decorate(block) {
    const section = document.querySelector('.sponsors-container');
    if (!section) {
        console.error('Section .sponsors-container not found');
        return;
    }

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
    if (sponsorsTitle) {
        blockHead.textContent = sponsorsTitle.textContent.trim();
        leftContainer.appendChild(blockHead);
    } else {
        console.error('#sponsors element not found');
    }

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

    console.log('Diamond: ' + diamondVal);
    console.log('Gold: ' + goldVal);
    console.log('Digital: ' + digitalVal);

    function createButton(text, className, contentId) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        button.addEventListener('click', () => {
            document.querySelectorAll('.content-div').forEach(div => div.style.display = 'none');
            document.getElementById(contentId).style.display = 'block';
        });
        return button;
    }

    sponsorsBlock.appendChild(createButton(diamondVal, 'diamond-button', 'diamond-content'));
    sponsorsBlock.appendChild(createButton(goldVal, 'gold-button', 'gold-content'));
    sponsorsBlock.appendChild(createButton(digitalVal, 'digital-button', 'digital-content'));
    rightContainer.appendChild(sponsorsBlock);
    wrapper.appendChild(leftContainer);
    wrapper.appendChild(rightContainer);

    section.appendChild(wrapper);
    console.log(section);
    console.log(block);
    // block.appendChild(section);

    // Create content divs
    const diamondContent = document.createElement('div');
    diamondContent.id = 'diamond-content';
    diamondContent.className = 'content-div';

    [...container.children].forEach((div, index) => {
        console.log(`Div ${index}:`, div);
    });

    // Find the image in the 3rd row, 1st column
    // [...container.children].forEach((row, r) => {
    //     console.log(`Processing row ${r}`);
    //     if (r == 3) {
    //         console.log('Found the third row');
    //         // Get the first column of the third row
    //         const firstColumn = row.querySelector('td:nth-child(1)');
    //         if (firstColumn) {
    //             console.log('Found the first column in the third row');
    //             // Check if the first column contains an image
    //             const imageElement = firstColumn.querySelector('img');
    //             if (imageElement) {
    //                 // Log the image path to the console
    //                 console.log('Image path:', imageElement.src);

    //                 // Create a new image element and set its source to the found image's source
    //                 const newImage = document.createElement('img');
    //                 newImage.src = imageElement.src;
    //                 newImage.alt = imageElement.alt || 'Diamond Image';

    //                 // Append the new image to diamondContent
    //                 diamondContent.appendChild(newImage);
    //             } else {
    //                 console.error('No image found in the first column of the third row');
    //             }
    //         } else {
    //             console.error('First column not found in the third row');
    //         }
    //     }
    // });

    const goldContent = document.createElement('div');
    goldContent.id = 'gold-content';
    goldContent.className = 'content-div';
    goldContent.textContent = 'Gold Content';

    const digitalContent = document.createElement('div');
    digitalContent.id = 'digital-content';
    digitalContent.className = 'content-div';
    digitalContent.textContent = 'Digital Content';

    // Append content divs to the section
    section.appendChild(diamondContent);
    section.appendChild(goldContent);
    section.appendChild(digitalContent);

    // Initially hide all content divs
    document.querySelectorAll('.content-div').forEach(div => div.style.display = 'none');
    block.appendChild(section);
}
