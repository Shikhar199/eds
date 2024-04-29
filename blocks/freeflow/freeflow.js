export default function decorate(block){
    const freeflowContainer = document.querySelector(".freeflow-container");
    freeflowContainer.classList.add('freeflowhtml', 'aem-GridColumn', 'aem-GridColumn--default--12');

    freeflowContainer.innerHTML = '';

    const sectionElement = document.createElement('section');

    const wraperDiv = document.createElement('div');
    wraperDiv.classList.add('home-bussness-heading-wraper');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('sliderContainer');

    const slickSlider = document.createElement('div');
    slickSlider.classList.add('slider', 'single-item', 'slick-initialized', 'slick-slider');

    freeflowContainer.appendChild(sectionElement);
    sectionElement.appendChild(wraperDiv);
    wraperDiv.appendChild(containerDiv);

    [...block.children].forEach((row,r)=>{
        if(r==0){
            const h1Element = document.createElement('h1');
            h1Element.textContent = row.textContent.trim();
            containerDiv.appendChild(h1Element);
        } else{
            const bannerWrapDiv = document.createElement('div');
            bannerWrapDiv.classList.add('banner-wraper');
            const bannerImgDiv = document.createElement('div');
            bannerImgDiv.classList.add('banner-image');
            bannerWrapDiv.appendChild(bannerImgDiv);

            [...row.children].forEach((col,c)=>{
                // if(c==0){
                //     const imgElement = document.createElement('img');

                // }
                console.log(col.textContent.trim());
            })
        }
    })
}