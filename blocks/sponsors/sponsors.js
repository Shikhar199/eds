export default function decorate(block) {
    const section = document.querySelector('.sponsors-container');
  
    const wrapper = document.createElement('div');
    wrapper.className = 'sponsors-wrapper';

    let container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    console.log(container);

    // Create left and right containers
    const leftContainer = document.createElement('div');
    leftContainer.className = 'left-container';

    const rightContainer = document.createElement('div');
    rightContainer.className = 'right-container';

    // Add the sponsors title to the left container
    const blockHead = document.createElement('h2');
    blockHead.classList.add('h2-head', 'pb40', 'center-text');
    blockHead.textContent = container.querySelector('#sponsors').textContent.trim();
    leftContainer.appendChild(blockHead);

    // Create the sponsors block for the right container
    const sponsorsBlock = document.createElement('div');
    sponsorsBlock.className = 'sponsors block';
    sponsorsBlock.setAttribute('data-block-name', 'sponsors');
    sponsorsBlock.setAttribute('data-block-status', 'loaded');

    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const categories = ['diamond', 'gold', 'digital'];
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        const categoryButton = document.createElement('button');
        categoryButton.id = category;
        categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryButton.className = 'category-button';
        categoryDiv.appendChild(categoryButton);

        const categoryElement = container.querySelector(`#${category}`);
        const categoryContent = categoryElement.parentElement.nextElementSibling;
        
        if (categoryContent) {
            const clonedContent = categoryContent.cloneNode(true);
            clonedContent.classList.add('category-content');
            clonedContent.style.display = 'none'; // Hide content initially
            categoryDiv.appendChild(clonedContent);
        }

        buttonContainer.appendChild(categoryDiv);

        // Add event listener to the button
        categoryButton.addEventListener('click', () => {
            // Hide all category contents
            document.querySelectorAll('.category-content').forEach(content => {
                content.style.display = 'none';
            });
            // Show the clicked category content
            const contentToShow = categoryDiv.querySelector('.category-content');
            if (contentToShow) {
                contentToShow.style.display = 'block';
            }
        });
    });

    sponsorsBlock.appendChild(buttonContainer);
    rightContainer.appendChild(sponsorsBlock);
  
    wrapper.appendChild(leftContainer);
    wrapper.appendChild(rightContainer);
  
    section.appendChild(wrapper);
    block.innerHTML = '';   
    block.append(section);
}
