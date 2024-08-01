export default function decorate(block){
    const container = block.innerHtml;
    block.innerHtml = '';
    console.log(container);
    container.querySelector('');
}