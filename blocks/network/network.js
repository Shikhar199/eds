export default function decorate(block){
    
     [...block.children].forEach((row) => {

        // Get the section element by its ID
const section = document.querySelector('#networking');

// Get the article element within the section
const article = section.querySelector('article');

// Get the row div within the article
const row = article.querySelector('.row');

// Get the first column (col-lg-5) in the row
const col1 = row.querySelector('.col-lg-5');

// Get the heading (h2) within the first column
const heading = col1.querySelector('h2');

// Get the paragraphs (p) within the first column
const paragraphs = col1.querySelectorAll('p');

// Get the "View More" link within the first column
const viewMoreLink = col1.querySelector('a.cta-link');

// Get the second column (col-lg-7) in the row
const col2 = row.querySelector('.col-lg-7');

// Get the image within the second column
const image = col2.querySelector('img');

// Log the elements to the console (for testing purposes)
console.log('Section:', section);
console.log('Article:', article);
console.log('Row:', row);
console.log('First Column:', col1);
console.log('Heading:', heading);
console.log('Paragraphs:', paragraphs);
console.log('View More Link:', viewMoreLink);
console.log('Second Column:', col2);
console.log('Image:', image);

     
    //     document.addEventListener('DOMContentLoaded', () => {
    //         // Get the parent div that contains all child divs
    //         const parentDiv = document.getElementById('networking-activities-block');
            
    //         // Create a new div to contain text and button elements
    //         const textContainer = document.createElement('div');
    //         textContainer.id = 'text-container';
            
    //         // Move the text1-div, text2-div, and button-div into the text container
    //         const text1Div = document.getElementById('text1-div');
    //         const text2Div = document.getElementById('text2-div');
    //         const buttonDiv = document.getElementById('button-div');
            
    //         textContainer.appendChild(text1Div);
    //         textContainer.appendChild(text2Div);
    //         textContainer.appendChild(buttonDiv);
            
    //         // Insert the text container before the image-div
    //         const pictureDiv = document.getElementById('picture-div');
    //         parentDiv.insertBefore(textContainer, imageDiv);
            
            
    //         textContainer.style.flex = '1';
    //         textContainer.style.textAlign = 'left';
            
            
    //       });
    //       console.log(parentDiv);
        
     });
   }

