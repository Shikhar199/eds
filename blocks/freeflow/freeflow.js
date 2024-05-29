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

                    // Preload LCP images
                    // if(r==1 && c==0){
                    //     console.log("Inside Preload LCP");
                    //     const link = document.createElement('link');
                    //     link.rel = 'preload';
                    //     link.as = 'image';
                    //     link.fetchpriority="high";
                    //     link.type="image/webp";
                    //     link.href = col.querySelector('picture').querySelector('img').getAttribute('src');
                    //     // const head = document.head;
                    //     // head.insertBefore(link, head.children[2]);
                    //     document.head.appendChild(link);
                    // }
                    // if(r==1 && c==0){
                        imgElement.srcset= col.querySelector('picture').querySelector('img').getAttribute('src')+"?width=480&format=jpeg 480w,"+
                        col.querySelector('picture').querySelector('img').getAttribute('src')+"?width=750&format=jpeg 750w,"+
                        col.querySelector('picture').querySelector('img').getAttribute('src')+"?width=1080&format=jpeg 1080w,"+
                        col.querySelector('picture').querySelector('img').getAttribute('src')+"?width=1500&format=jpeg 1500w,"+
                        col.querySelector('picture').querySelector('img').getAttribute('src')+"?width=1920&format=jpeg 1920w,";

                        imgElement.sizes = '(max-width: 767px) 100vw, 100vw';
                        imgElement.loading = 'lazy';
                    
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

    const googleFontLink = document.createElement('link');
    googleFontLink.rel = 'preload';
    googleFontLink.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap'; // Update this to your actual CSS file path
    googleFontLink.as = 'style';
    googleFontLink.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
    };

    // Append the preload link to the head
    document.head.appendChild(googleFontLink);
    
    // Create the noscript element with a fallback link
    const noscriptElement = document.createElement('noscript');
    noscriptElement.innerHTML = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap">'; // Update this to your actual CSS file path
    
    // Append the noscript element to the head
    document.head.appendChild(noscriptElement);

    const typekitLink = document.createElement('link');
    typekitLink.rel = 'preload';
    typekitLink.href = 'https://use.typekit.net/nkq8fly.css'; // Update this to your actual CSS file path
    typekitLink.as = 'style';
    typekitLink.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
    };

    // Append the preload link to the head
    document.head.appendChild(typekitLink);
    
    // Create the noscript element with a fallback link
    const noscriptTypekitElement = document.createElement('noscript');
    noscriptTypekitElement.innerHTML = '<link rel="stylesheet" href="https://use.typekit.net/nkq8fly.css">'; // Update this to your actual CSS file path
    
    // Append the noscript element to the head
    document.head.appendChild(noscriptTypekitElement);

}
