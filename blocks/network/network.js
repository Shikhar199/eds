export default function decorate(block){
    
     [...block.children].forEach((row) => {
               console.log(row);
          // document.addEventListener('DOMContentLoaded', () => {
               // Select the network block
               const networkBlock = document.querySelector('.network.block');
               
               // Create containers for left and right sections
               const leftContainer = document.createElement('div');
               leftContainer.className = 'left-container';
               
               const rightContainer = document.createElement('div');
               rightContainer.className = 'right-container';
             
               // Get all child divs
               const childDivs = Array.from(networkBlock.children);
               // Move the text and button divs to the left container
               leftContainer.appendChild(childDivs[0]); // Networking Activities
               leftContainer.appendChild(childDivs[2]); // Vienna awaits
               leftContainer.appendChild(childDivs[3]); // Historical text
               leftContainer.appendChild(childDivs[4]); // Button
             
               // // Move the picture div to the right container
               // rightContainer.appendChild(childDivs[1]);
                // Move the picture div to the right container
                  const pictureDiv = childDivs[1]; // This is the picture div

               // Get the img element inside the picture tag
               const imgElement = pictureDiv.querySelector('img');

              // Set the width and height of the image
              imgElement.style.width = '600px'; // Example width
              imgElement.style.height = '300px'; // Example height

              // Append the picture div to the right container
              rightContainer.appendChild(pictureDiv);

     

             
               // Clear the existing content of networkWrapper and append new containers
               const networkWrapper = document.querySelector('.network-wrapper');
               networkWrapper.innerHTML = '';
               networkWrapper.appendChild(leftContainer);
               networkWrapper.appendChild(rightContainer);
               console.log(networkWrapper);
               
          //    });
             
   
        
     });
   }

