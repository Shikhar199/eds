export default function decorate(block){
    const freeflowContainer = document.querySelector(".freeflow-container");
    freeflowContainer.classList.add('freeflowhtml', 'aem-GridColumn', 'aem-GridColumn--default--12');

    freeflowContainer.innerHTML = '';

    const freeflowSectionElement = document.createElement('section');

    const freeflowWraperDiv = document.createElement('div');
    freeflowWraperDiv.classList.add('home-bussness-heading-wraper');

    const freeflowContainerDiv = document.createElement('div');
    freeflowContainerDiv.classList.add('container');

    const freeflowSliderContainer = document.createElement('div');
    freeflowSliderContainer.classList.add('freeflowSliderContainer');

    const freeflowSlickSlider = document.createElement('div');
    freeflowSlickSlider.classList.add('slider', 'single-item', 'slick-initialized', 'slick-slider');

    freeflowContainer.appendChild(freeflowSectionElement);
    freeflowSectionElement.appendChild(freeflowWraperDiv);
    freeflowWraperDiv.appendChild(freeflowContainerDiv);

    [...block.children].forEach((row,r)=>{
        if(r==0){
            const freeflowh1Element = document.createElement('h1');
            freeflowh1Element.textContent = row.textContent.trim();
            freeflowContainerDiv.appendChild(freeflowh1Element);
        } else{
            const freeflowbannerWrapDiv = document.createElement('div');
            freeflowbannerWrapDiv.classList.add('banner-wraper');
            const freeflowBannerImgDiv = document.createElement('div');
            freeflowBannerImgDiv.classList.add('banner-image');
            freeflowbannerWrapDiv.appendChild(freeflowBannerImgDiv);

            [...row.children].forEach((col,c)=>{
                // if(c==0){
                //     const imgElement = document.createElement('img');

                // }
                console.log(col.textContent.trim());
            })
        }
    })
}