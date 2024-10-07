export default function decorate(block){

    const section = document.querySelector('.highlights-container');
  
    const wrapper = document.createElement('div');
    wrapper.className = 'highlights-wrapper';

    let container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    console.log(container);

    const blockHead = document.createElement('h2');
    blockHead.classList.add('h2-head', 'pb40', 'center-text');
    blockHead.textContent = container.querySelector('#highlights--insights').textContent.trim();
  
    const highlightblock = document.createElement('div');
    highlightblock.className = 'highlights block';
    highlightblock.setAttribute('data-block-name', 'highlights');
    highlightblock.setAttribute('data-block-status', 'loaded');
  
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
  
    const imgElements = document.querySelectorAll('.highlights-container img');
    const imagePath1 = imgElements[0].src;
    const imagePath2 = imgElements[1].src;

    const url1 = 'https://www.infosys.com/confluence/2023/emea/photo-gallery.html'; // Replace with your desired URL
    const url2 = 'https://www.infosys.com/confluence/2023/emea/insights.html'; // Replace with your desired URL
    
  
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
    const link1 = document.createElement('a');
    link1.href = url1;
    link1.appendChild(picture1);
    const highlight1Text = document.createElement('div');
    highlight1Text.textContent = 'Highlights';
    highlight1Text.className = 'highlight1-text overlay-text';
    highlight1.appendChild(link1);
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
    // Wrap the second picture in an anchor tag
  const link2 = document.createElement('a');
  link2.href = url2;
  link2.appendChild(picture2);

  const highlight2Text = document.createElement('div');
  highlight2Text.textContent = 'Insights';
  highlight2Text.className = 'highlight2-text overlay-text';
  highlight2.appendChild(link2);
  highlight2.appendChild(highlight2Text);

   
  
    // Append both highlights to the image container
    imageContainer.appendChild(highlight1);
    imageContainer.appendChild(highlight2);
  
    // Append the image container to the block
    highlightblock.appendChild(blockHead);
    highlightblock.appendChild(imageContainer);
  
    // Append the block to the wrapper
    wrapper.appendChild(highlightblock);
  
    // Append the wrapper to the main container
    section.appendChild(wrapper);
    block.innerHTML = '';   
    block.append(section);
  }
  
  