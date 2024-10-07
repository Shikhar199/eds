export default function decorate(block) {
    // Find the existing highlights container
    const section = document.querySelector('.highlights-container');
  
    // Create the wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'highlights-wrapper';
  
    // Create the block
    const highlighblock = document.createElement('div');
    highlighblock.className = 'highlights block';
    highlighblock.setAttribute('data-block-name', 'highlights');
    highlighblock.setAttribute('data-block-status', 'loaded');
  
    // Create a container for the images
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
  
    // Select the existing images and get their paths
    const imgElements = document.querySelectorAll('.highlights-container img');
    const imagePath1 = imgElements[0].src;
    const imagePath2 = imgElements[1].src;
  
    // Create the first highlight section
    const highlight1 = document.createElement('div');
    highlight1.className = 'highlight1';
  
    // Create the first picture section
    const picture1 = document.createElement('picture');
    const img1 = document.createElement('img');
    img1.loading = 'lazy';
    img1.alt = '';
    img1.src = imagePath1;
    img1.className = 'image';
    picture1.appendChild(img1);
    const highlight1Text = document.createElement('div');
    highlight1Text.textContent = 'Highlights';
    highlight1Text.className = 'highlight1-text overlay-text';
    highlight1.appendChild(picture1);
    highlight1.appendChild(highlight1Text);
  
    // Create the second highlight section
    const highlight2 = document.createElement('div');
    highlight2.className = 'highlight2';
  
    // Create the second picture section
    const picture2 = document.createElement('picture');
    const img2 = document.createElement('img');
    img2.loading = 'lazy';
    img2.alt = '';
    img2.src = imagePath2;
    img2.className = 'image';
    picture2.appendChild(img2);
    const highlight2Text = document.createElement('div');
    highlight2Text.textContent = 'Insights';
    highlight2Text.className = 'highlight2-text overlay-text';
    highlight2.appendChild(picture2);
    highlight2.appendChild(highlight2Text);
  
    // Append both highlights to the image container
    imageContainer.appendChild(highlight1);
    imageContainer.appendChild(highlight2);
  
    // Append the image container to the block
    highlighblock.appendChild(imageContainer);
  
    // Append the block to the wrapper
    wrapper.appendChild(highlighblock);
  
    // Append the wrapper to the main container
    section.appendChild(wrapper);
    block.append(section);
  }