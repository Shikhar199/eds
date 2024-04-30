import * as $ from '/scripts/jquery.js';

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
    freeflowSliderContainer.classList.add('sliderContainer');

    const freeflowSlickSlider = document.createElement('div');
    freeflowSlickSlider.classList.add('slider', 'single-item', 'slick-initialized', 'slick-slider');

    freeflowContainer.appendChild(freeflowSectionElement);
    freeflowSectionElement.appendChild(freeflowWraperDiv);
    freeflowSectionElement.appendChild(freeflowSliderContainer);
    freeflowSliderContainer.appendChild(freeflowSlickSlider);
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

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const imgElement = document.createElement('img');
                    imgElement.classList.add('img-fluid', 'hero-banner');
                    imgElement.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));
                    bannerImgDiv.appendChild(imgElement);
                } else if(c==1){
                    console.log("Image");
                    console.log(col);
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

                    [...col.children].forEach((node,i)=>{
                        if(i==0){
                            bannerMainDiv.querySelector('a').setAttribute("href",node.textContent.trim());
                        } else if(i==1){
                            bannerImgDiv.querySelector('img').setAttribute("alt",node.textContent.trim());
                            bannerMainDiv.querySelector('a').setAttribute("aria-label",node.textContent.trim());
                            pElement.textContent = node.textContent.trim();
                        } else if(i==2){
                            bannerMainDiv.querySelector('a').setAttribute("title",node.textContent.trim());
                            bannerMainDiv.querySelector('a').textContent = node.textContent.trim();
                        }
                    })
                    bannerImgDiv.appendChild(containerDiv);
                }
                
            })
            freeflowSlickSlider.appendChild(bannerWrapDiv);
        }
    })
    // import('/scripts/jquery.js').then((jqueryModule) => {
    //     console.log('jQuery has been loaded');
    //     const $ = jqueryModule.default;
    //     console.log("$");
    //     console.log($);
    //     import('/scripts/slick.js').then(() => {
    //         console.log('Slick min js has been loaded');
        
    //         // import('/scripts/main.js').then(() => {
    //         //     console.log("main.js loaded");
    //         // }).catch(error=>{
    //         //     console.error('Error loading main.js:', error);
    //         // })
    //         // var scriptElement = document.createElement('script');
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
    //                   asNavFor: '.banner-slick',
    //                 }
    //               },
    //               {
    //                 breakpoint: 767,
    //                 settings: {
    //                   asNavFor: '.banner-slick',
    //                 }
    //               },
    //               {
    //                 breakpoint: 375,
    //                 settings: {
    //                   asNavFor: '.banner-slick',
    //                 }
    //               }
              
    //             ]
    //           });

    //         //   scriptElement.innerHTML = scriptCode;
    //         //   freeflowSectionElement.appendChild(scriptElement);


    //     }).catch(error=>{
    //         console.error('Error loading slick.js:', error);
    //     })
    // }).catch(error=>{
    //     console.error('Error loading jquery.js:', error);
    // })



    document.addEventListener('DOMContentLoaded',() => {
        console.log('jQuery has been loaded');

        import('/scripts/slick.js').then(() => {
            console.log('Slick min js has been loaded');

            // Initialize slick slider with jQuery
            $(".slider").slick({
                infinite: true,
                arrows: false,
                dots: false,
                autoplay: false,
                fade: true,
                cssEase: 'linear',
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        asNavFor: '.banner-slick',
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        asNavFor: '.banner-slick',
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        asNavFor: '.banner-slick',
                    }
                }
                ]
            });

        }).catch(error => {
            console.error('Error loading slick.js:', error);
        });

    }).catch(error => {
        console.error('Error loading jquery.js:', error);
    });

}