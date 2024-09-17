export default function decorate(block){
    
     [...block.children].forEach((row) => {
               console.log(row);
          
               // Select the network block
               const networkBlock = document.querySelector('.network.block');
               
               // Create containers for left and right sections
               const leftContainer = document.createElement('div');
               leftContainer.className = 'left-container';
               
               const rightContainer = document.createElement('div');
               rightContainer.className = 'right-container';
             
               // Get all child divs
               const childDivs = Array.from(networkBlock.children);

               const networkingTitleDiv = childDivs[0]; // This is the div containing "Networking Activities"
               const h2Element = document.createElement('h2');
               h2Element.textContent = networkingTitleDiv.textContent; // Copy text content
               h2Element.className = 'networking-title';// Add a class for styling
               networkingTitleDiv.replaceWith(h2Element); // Replace the div with the new <h2>

               // Replace the "Button : View more" div with an actual <button> element
              const buttonDiv = childDivs[4]; // The div that contains the "Button : View more" text
               const buttonElement = document.createElement('button');
              buttonElement.textContent = 'View More'; // Set the button's text
              buttonElement.className = 'view-more-btn'; // Add a class for styling (optional)

              // // You can also add event listeners or actions to the button if needed
              // buttonElement.addEventListener('click', function() {
              // alert('Button clicked!'); 
              // });

              // Add a click event listener that redirects to the desired URL
              buttonElement.addEventListener('click', function() {
              window.location.href = 'https://www.infosys.com/confluence/2023/emea/networking-activities.html'; // Replace with your desired URL
              });

             // Replace the button div with the new <button> element
             buttonDiv.replaceWith(buttonElement);

               // Move the text and button divs to the left container
               leftContainer.appendChild(h2Element); // Networking Activities
               leftContainer.appendChild(childDivs[2]); // Vienna awaits
               leftContainer.appendChild(childDivs[3]); // Historical text
               leftContainer.appendChild(buttonElement); // Button
             
               
                // Move the picture div to the right container
                  const pictureDiv = childDivs[1]; // This is the picture div

               // Get the img element inside the picture tag
               const imgElement = pictureDiv.querySelector('img');

              // Set the width and height of the image
              imgElement.style.width = '800px'; 
              imgElement.style.height = '350px'; 

              // Append the picture div to the right container
              rightContainer.appendChild(pictureDiv);

     

             
               // Clear the existing content of networkWrapper and append new containers
               const networkWrapper = document.querySelector('.network-wrapper');
               networkWrapper.innerHTML = '';
               networkWrapper.appendChild(leftContainer);
               networkWrapper.appendChild(rightContainer);
               console.log(networkWrapper);

               // Change font size of text inside left container
             const leftTextElements = leftContainer.querySelectorAll('div'); // Select all divs and h2 inside leftContainer
             leftTextElements.forEach(element => {
             element.style.fontSize = '20px'; // Set font size (you can adjust the value)
             });

             const leftElement = leftContainer.querySelectorAll('h2'); 
             leftElement.forEach(element => {
             element.style.fontSize = '35px'; 
             });
               
          //    });
             
   
        
     });
   }

