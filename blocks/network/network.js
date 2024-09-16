export default function decorate(block){
    
     [...block.children].forEach((row) => {

          document.addEventListener('DOMContentLoaded', () => {
               // Select the network block
               const networkBlock = document.querySelector('.network.block');
               
               // Create containers for left and right sections
               const leftContainer = document.createElement('div');
               leftContainer.className = 'left-container';
               
               const rightContainer = document.createElement('div');
               rightContainer.className = 'right-container';
             
               // Get all child divs
               const childDivs = Array.from(networkBlock.children);
              console.log(childDivs);
               // Move the text and button divs to the left container
               leftContainer.appendChild(childDivs[0]); // Networking Activities
               leftContainer.appendChild(childDivs[2]); // Vienna awaits
               leftContainer.appendChild(childDivs[3]); // Historical text
               leftContainer.appendChild(childDivs[4]); // Button
             
               // Move the picture div to the right container
               rightContainer.appendChild(childDivs[1]);
             
               // Clear the existing content of networkWrapper and append new containers
               const networkWrapper = document.querySelector('.network-wrapper');
               networkWrapper.innerHTML = '';
               networkWrapper.appendChild(leftContainer);
               networkWrapper.appendChild(rightContainer);
               console.log(networkWrapper);
               
             });
             
             

     
   
        
     });
   }

