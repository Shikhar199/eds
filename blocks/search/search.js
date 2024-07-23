export default function decorate(block){
    console.log(block);
    [...block.children].forEach((row)=>
        [row.children].forEach((col)=>{
            console.log(col.innerHTML);
        })
    )
}