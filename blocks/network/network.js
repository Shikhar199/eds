export default function decorate(block){
    
     [...block.children].forEach((row) => {

          document.addEventListener('DOMContentLoaded', () => {
               // Get the container for network activities
               const networkWrapper = document.querySelector('.network-wrapper');
               
               // Create a new container for left side elements
               const leftContainer = document.createElement('div');
               leftContainer.className = 'left-container';
               
               // Get all child divs inside the network block
               const networkBlockDivs = document.querySelectorAll('.network.block > div');
               
               // Append the first four divs (title, text1, text2, and button) to the left container
               for (let i = 0; i < networkBlockDivs.length - 1; i++) {
                 leftContainer.appendChild(networkBlockDivs[i]);
               }
               
               // Create a new container for the picture
               const pictureContainer = document.createElement('div');
               pictureContainer.className = 'picture-container';
               pictureContainer.appendChild(networkBlockDivs[networkBlockDivs.length - 1]);
             
               // Clear existing content and append new layout
               networkWrapper.innerHTML = '';
               networkWrapper.appendChild(leftContainer);
               networkWrapper.appendChild(pictureContainer);
             
               // Apply CSS styles
               const style = document.createElement('style');
               style.innerHTML = `
                 .network-wrapper {
                   display: flex;
                   justify-content: space-between;
                   align-items: flex-start;
                 }
                 .left-container {
                   max-width: 60%;
                 }
                 .picture-container {
                   max-width: 40%;
                 }
                 .network block > div {
                   margin-bottom: 1rem;
                 }
               `;
               document.head.appendChild(style);
             });
             

     
   
        
     });
   }

