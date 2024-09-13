export default function decorate(block){
    
    [...block.children].forEach((row) => {
     
        document.addEventListener('DOMContentLoaded', () => {
            // Get the parent div that contains all child divs
            const parentDiv = document.getElementById('networking-activities-block');
            
            // Create a new div to contain text and button elements
            const textContainer = document.createElement('div');
            textContainer.id = 'text-container';
            
            // Move the text1-div, text2-div, and button-div into the text container
            const text1Div = document.getElementById('text1-div');
            const text2Div = document.getElementById('text2-div');
            const buttonDiv = document.getElementById('button-div');
            
            textContainer.appendChild(text1Div);
            textContainer.appendChild(text2Div);
            textContainer.appendChild(buttonDiv);
            
            // Insert the text container before the image-div
            const pictureDiv = document.getElementById('picture-div');
            parentDiv.insertBefore(textContainer, imageDiv);
            
            
            textContainer.style.flex = '1';
            textContainer.style.textAlign = 'left';
            
            
          });
          console.log(parentDiv);
        
    });
   }

