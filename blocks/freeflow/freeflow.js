export default function decorate(block){

    console.log("Block from freeflow");
    console.log(block);

    var jqueryScript = document.createElement('script')
    jqueryScript.setAttribute("src","/blocks/jquery/jquery.js");

    var slickScript = document.createElement('script')
    slickScript.setAttribute("src","/blocks/slick/slick.js");

    var headElement =  document.querySelector('head');

    headElement.appendChild(jqueryScript);
    headElement.appendChild(slickScript);

    const freeflowContainer = document.querySelector(".freeflow-container");
    freeflowContainer.classList.add('freeflowhtml', 'aem-GridColumn', 'aem-GridColumn--default--12');

    freeflowContainer.innerHTML = '';

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

    // const elementToRemove = document.querySelector('.hero-container');
    // elementToRemove.remove();

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

    // import('/scripts/jquery.js').then(($) => {
    //     console.log('jQuery has been loaded');
    //     import('/scripts/slick.js').then(() => {
    //         console.log('Slick min js has been loaded');

    //         var mainjsScript = document.createElement('script')
    //         mainjsScript.setAttribute("src","/scripts/main.js");
    //         mainjsScript.setAttribute('defer', true);

            // freeflowSliderContainer.appendChild(mainjsScript);

            // import('/scripts/main.js').then(() => {
            //     console.log("main.js loaded");
            // }).catch(error=>{
            //     console.error('Error loading main.js:', error);
            // })
    //         // var freeflowScriptElement = document.createElement('script');
    //         // var freeflowScriptCode = `$(".slider").slick({
    //         //     infinite: true,
    //         //     arrows: false,
    //         //     dots: false,
    //         //     autoplay: false,
    //         //     fade: true,
    //         //     cssEase: 'linear',
    //         //     speed: 800,
    //         //     slidesToShow: 1,
    //         //     slidesToScroll: 1,
    //         //     responsive: [{
    //         //         breakpoint: 991,
    //         //         settings: {
    //         //           asNavFor: '.banner-slick',
    //         //         }
    //         //       },
    //         //       {
    //         //         breakpoint: 767,
    //         //         settings: {
    //         //           asNavFor: '.banner-slick',
    //         //         }
    //         //       },
    //         //       {
    //         //         breakpoint: 375,
    //         //         settings: {
    //         //           asNavFor: '.banner-slick',
    //         //         }
    //         //       }
              
    //         //     ]
    //         //   })`;

    //         //   freeflowScriptElement.innerHTML = freeflowScriptCode;
    //         //   freeflowSectionElement.appendChild(freeflowScriptElement);

    //     }).catch(error=>{
    //         console.error('Error loading slick.js:', error);
    //     })
    // }).catch(error=>{
    //     console.error('Error loading jquery.js:', error);
    // })


    // import('/scripts/jquery.js').then(($) => {
    //     console.log('jQuery has been loaded');

    //     import('/scripts/slick.js').then(() => {
    //         console.log('Slick min js has been loaded');

    //         // Initialize slick slider with jQuery
    //         $(".slider").slick({
    //             infinite: true,
    //             arrows: false,
    //             dots: false,
    //             autoplay: false,
    //             fade: true,
    //             cssEase: 'linear',
    //             speed: 800,
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             responsive: [{
    //                 breakpoint: 991,
    //                 settings: {
    //                     asNavFor: '.banner-slick',
    //                 }
    //             },
    //             {
    //                 breakpoint: 767,
    //                 settings: {
    //                     asNavFor: '.banner-slick',
    //                 }
    //             },
    //             {
    //                 breakpoint: 375,
    //                 settings: {
    //                     asNavFor: '.banner-slick',
    //                 }
    //             }
    //             ]
    //         });

    //     }).catch(error => {
    //         console.error('Error loading slick.js:', error);
    //     });
    // }).catch(error => {
    //     console.error('Error loading jquery.js:', error);
    // });

}