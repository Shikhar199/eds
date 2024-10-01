import { createAemElement } from '../../scripts/aem.js';

var accord3Div;
export default function decorate(block){
    console.log(block);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    [...container.children].forEach((row, index) => {
        console.log(row);
    })
}