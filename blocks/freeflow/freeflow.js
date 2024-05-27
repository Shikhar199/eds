export default function decorate(block){

    console.log("Block from freeflow");
    console.log(block);

    var headElement =  document.querySelector('head');

    const freeflowContainer = document.querySelector(".freeflow-container");
    freeflowContainer.classList.add('freeflowhtml', 'aem-GridColumn', 'aem-GridColumn--default--12');

    freeflowContainer.innerHTML = '';
    // freeflowContainer.style.maxHeight = '542px';

    const freeflowSectionElement = document.createElement('section');

    const freeflowWraperDiv = document.createElement('div');
    freeflowWraperDiv.classList.add('home-bussness-heading-wraper');

    const freeflowContainerDiv = document.createElement('div');
    freeflowContainerDiv.classList.add('container');

    const freeflowSliderContainer = document.createElement('div');
    freeflowSliderContainer.classList.add('sliderContainer');

    const freeflowSlickSlider = document.createElement('div');
    freeflowSlickSlider.classList.add('slider', 'single-item');

    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('progressBarContainer');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const bannerSlickDiv = document.createElement('div');
    bannerSlickDiv.classList.add('banner-slick', 'banner-item');

    progressBarContainer.appendChild(containerDiv);
    containerDiv.appendChild(bannerSlickDiv);


    freeflowContainer.appendChild(freeflowSectionElement);
    freeflowSectionElement.appendChild(freeflowWraperDiv);
    freeflowSectionElement.appendChild(freeflowSliderContainer);
    freeflowSliderContainer.appendChild(freeflowSlickSlider);
    freeflowSliderContainer.appendChild(progressBarContainer);
    freeflowWraperDiv.appendChild(freeflowContainerDiv);

    [...block.children].forEach((row,r)=>{
        if(r==0){
            const h1Element = document.createElement('h1');
            h1Element.textContent = row.textContent.trim();
            freeflowContainerDiv.appendChild(h1Element);
        } else{
            const bannerWrapDiv = document.createElement('div');
            bannerWrapDiv.classList.add('banner-wraper');
            const bannerImgDiv = document.createElement('div');
            bannerImgDiv.classList.add('banner-image');
            bannerWrapDiv.appendChild(bannerImgDiv);

            // code for prgressbar container div

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const slickInnerDiv = document.createElement('div');
            slickInnerDiv.classList.add('slick-inner');

            const progressBarSpan = document.createElement('span');
            progressBarSpan.classList.add('progressBar');

            const inProgressDiv = document.createElement('div');
            inProgressDiv.classList.add('inProgress', 'inProgress0');
            inProgressDiv.style.width = '0%';

            progressBarSpan.appendChild(inProgressDiv)

            itemDiv.appendChild(slickInnerDiv);
            itemDiv.appendChild(progressBarSpan);

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const imgElement = document.createElement('img');
                    imgElement.classList.add('img-fluid', 'hero-banner');
                    imgElement.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));
                    // imgElement.style.width = '100vw';
                    // imgElement.style.aspectRatio = '19.17/9';
                    bannerImgDiv.appendChild(imgElement);
                } else if(c==1){
                    const containerDiv = document.createElement('div');
                    containerDiv.classList.add('container');

                    const bannerMainDiv = document.createElement('div');
                    bannerMainDiv.classList.add('banner-main');

                    containerDiv.appendChild(bannerMainDiv);

                    const anchorElement = document.createElement('a');
                    anchorElement.classList.add('btn', 'btn-secondary');

                    const pElement = document.createElement('p');
                    pElement.classList.add('heading1');

                    bannerMainDiv.appendChild(anchorElement);
                    bannerMainDiv.appendChild(pElement);

                    // progressbar container code
                    const innerDetailsDiv = document.createElement('div');
                    innerDetailsDiv.classList.add('inner-details');

                    var anchorElem = document.createElement('a');


                    [...col.children].forEach((node,i)=>{
                        if(i==0){
                            bannerMainDiv.querySelector('a').setAttribute("href",node.textContent.trim());
                            anchorElem.setAttribute("href",node.textContent.trim());
                        } else if(i==1){
                            bannerImgDiv.querySelector('img').setAttribute("alt",node.textContent.trim());
                            bannerMainDiv.querySelector('a').setAttribute("aria-label",node.textContent.trim());
                            pElement.textContent = node.textContent.trim();

                            //progressbar container code
                            const h4Element = document.createElement('h4');
                            h4Element.textContent = node.textContent.trim();
                            innerDetailsDiv.appendChild(h4Element);
                            anchorElem.setAttribute("aria-label", node.textContent.trim());

                        } else if(i==2){
                            bannerMainDiv.querySelector('a').setAttribute("title","Report");
                            bannerMainDiv.querySelector('a').textContent = "Report";

                            //progressbar container code
                            const pElement = document.createElement('p');
                            pElement.textContent = node.textContent.trim();
                            innerDetailsDiv.appendChild(pElement);
                        } else if(i==3){
                            const outerDiv = document.createElement('div');
                            anchorElem.classList.add('find-more');
                            anchorElem.textContent = node.textContent.trim();
                            outerDiv.appendChild(anchorElem);

                            const span1 = document.createElement('span');
                            const span2 = document.createElement('span');
                            span1.classList.add('icon-chevron-right-circle-white');
                            span2.classList.add('icon-long-right-arrow');

                            anchorElem.appendChild(span1);
                            anchorElem.appendChild(span2);

                            innerDetailsDiv.appendChild(outerDiv);
                        }
                    })
                    bannerImgDiv.appendChild(containerDiv);
                    slickInnerDiv.appendChild(innerDetailsDiv)
                }
                
            })
            freeflowSlickSlider.appendChild(bannerWrapDiv);
            bannerSlickDiv.appendChild(itemDiv);

        }
    })

    console.log(freeflowContainer);

    // const link1 = document.createElement('link');
    // const link2 = document.createElement('link');
    // const link3 = document.createElement('link');

    // link1.setAttribute('href','/styles/styles1.css');
    // link1.setAttribute('rel','preload');
    // link1.setAttribute('as','style');
    // link1.setAttribute('onload',"this.onload=null;this.rel='stylesheet'");

    // link2.setAttribute('href','/styles/styles2.css');
    // link2.setAttribute('rel','preload');
    // link2.setAttribute('as','style');
    // link2.setAttribute('onload',"this.onload=null;this.rel='stylesheet'");

    // link3.setAttribute('href','/styles/styles3.css');
    // link3.setAttribute('rel','stylesheet');
    // link3.setAttribute('as','style');
    // link3.setAttribute('onload',"this.onload=null;this.rel='stylesheet'");

    // document.head.appendChild(link1);
    // document.head.appendChild(link2);
    // document.head.appendChild(link3);

    trackDivPosition();
}

function trackDivPosition() {
    var div = document.querySelector('.freeflow-container');
    var rect = div.getBoundingClientRect(); // Get the position of the div

    // Log the initial position (before delay)
    console.log(' Freeflow Initial position (x, y):', rect.left, ',', rect.top);

    // Move the div after 5 seconds
    setTimeout(function() {
      div.style.top = '150px'; // Move the div 100px down
      div.style.left = '150px'; // Move the div 100px right

      // Log the position after the delay
      var rectAfter = div.getBoundingClientRect();
      console.log(' Freeflow Position after 5 seconds (x, y):', rectAfter.left, ',', rectAfter.top);
    }, 10000); // 5 seconds delay
  }