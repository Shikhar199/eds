export default function decorate(block){
    console.log(block);
    [...block.children].forEach((row,index)=>{
        console.log(row.textContent.trim());
    })
}