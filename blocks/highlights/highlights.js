export default function decorate(block){

// Create the main container
const section = document.createElement('div');
section.className = 'section highlights-container';
section.setAttribute('data-section-status', 'loaded');
section.style = '';

// Create the wrapper
const wrapper = document.createElement('div');
wrapper.className = 'highlights-wrapper';

// Create the block
const block = document.createElement('div');
block.className = 'highlights block';
block.setAttribute('data-block-name', 'highlights');
block.setAttribute('data-block-status', 'loaded');

// Create a container for the images
const imageContainer = document.createElement('div');
imageContainer.style.display = 'flex';
imageContainer.style.justifyContent = 'space-between';

// Create the first highlight section
const highlight1 = document.createElement('div');
highlight1.style.flex = '1';
highlight1.style.marginRight = '10px';
highlight1.className = 'highlight1';

// Create the first picture section
const picture1 = document.createElement('picture');
const source1_1 = document.createElement('source');
source1_1.type = 'image/webp';
source1_1.srcset = './media_1ef8ae03aaa8532d9231d0f5d2515d4eafee026d7.png?width=2000&format=webply&optimize=medium';
source1_1.media = '(min-width: 600px)';
const source1_2 = document.createElement('source');
source1_2.type = 'image/webp';
source1_2.srcset = './media_1ef8ae03aaa8532d9231d0f5d2515d4eafee026d7.png?width=750&format=webply&optimize=medium';
const source1_3 = document.createElement('source');
source1_3.type = 'image/png';
source1_3.srcset = './media_1ef8ae03aaa8532d9231d0f5d2515d4eafee026d7.png?width=2000&format=png&optimize=medium';
source1_3.media = '(min-width: 600px)';
const img1 = document.createElement('img');
img1.loading = 'lazy';
img1.alt = '';
img1.src = './media_1ef8ae03aaa8532d9231d0f5d2515d4eafee026d7.png?width=750&format=png&optimize=medium';
img1.width = 800;
img1.height = 500;
picture1.appendChild(source1_1);
picture1.appendChild(source1_2);
picture1.appendChild(source1_3);
picture1.appendChild(img1);
const highlight1Text = document.createElement('div');
highlight1Text.textContent = 'Highlights';
highlight1Text.className = 'highlight1-text';
highlight1.appendChild(picture1);
highlight1.appendChild(highlight1Text);

// Create the second highlight section
const highlight2 = document.createElement('div');
highlight2.style.flex = '1';
highlight2.style.marginLeft = '10px';
highlight2.className = 'highlight2';

// Create the second picture section
const picture2 = document.createElement('picture');
const source2_1 = document.createElement('source');
source2_1.type = 'image/webp';
source2_1.srcset = './media_182a612fa1dc8cd23c97469f54aa2b65df99527b6.png?width=2000&format=webply&optimize=medium';
source2_1.media = '(min-width: 600px)';
const source2_2 = document.createElement('source');
source2_2.type = 'image/webp';
source2_2.srcset = './media_182a612fa1dc8cd23c97469f54aa2b65df99527b6.png?width=750&format=webply&optimize=medium';
const source2_3 = document.createElement('source');
source2_3.type = 'image/png';
source2_3.srcset = './media_182a612fa1dc8cd23c97469f54aa2b65df99527b6.png?width=2000&format=png&optimize=medium';
source2_3.media = '(min-width: 600px)';
const img2 = document.createElement('img');
img2.loading = 'lazy';
img2.alt = '';
img2.src = './media_182a612fa1dc8cd23c97469f54aa2b65df99527b6.png?width=750&format=png&optimize=medium';
img2.width = 800;
img2.height = 500;
picture2.appendChild(source2_1);
picture2.appendChild(source2_2);
picture2.appendChild(source2_3);
picture2.appendChild(img2);
const highlight2Text = document.createElement('div');
highlight2Text.textContent = 'Insights';
highlight2Text.className = 'highlight2-text';
highlight2.appendChild(picture2);
highlight2.appendChild(highlight2Text);

// Append both highlights to the image container
imageContainer.appendChild(highlight1);
imageContainer.appendChild(highlight2);

// Append the image container to the block
block.appendChild(imageContainer);

// Append the block to the wrapper
wrapper.appendChild(block);

// Append the wrapper to the main container
section.appendChild(wrapper);

// Append the main container to the body or any other desired parent element
document.body.appendChild(section);

// Add CSS for hover effects
const style = document.createElement('style');
style.textContent = `
  .highlight1:hover .highlight1-text {
    color: red;
  }
  .highlight2:hover .highlight2-text {
    color: blue;
  }
`;
document.head.appendChild(style);
}
