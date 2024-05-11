export default function decorate(block){

    console.log("Block from freeflow");
    console.log(block);

    var jqueryScript = document.createElement('script')
    jqueryScript.setAttribute("src","/scripts/jquery.js");
    jqueryScript.async = false;

    var slickScript = document.createElement('script')
    slickScript.setAttribute("src","/blocks/slick/slick.js");

    var headElement =  document.querySelector('head');
    
    // headElement.appendChild(jqueryScript);
    // headElement.appendChild(slickScript);


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
        // import('/blocks/slick/slick.js').then(() => {
        //     console.log('Slick min js has been loaded');

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

        // }).catch(error=>{
        //     console.error('Error loading slick.js:', error);
        // })
    // }).catch(error=>{
    //     console.error('Error loading jquery.js:', error);
    // })


    // import('/blocks/jquery/jquery.js').then(($) => {
    //     console.log('jQuery has been loaded');

    //     import('/blocks/slick/slick.js').then(() => {
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

    // loadLibraries().then(() => {
    //     import('/blocks/main/main.js').then(() => {
    //         console.log("main.js loaded");
    //     }).catch(error=>{
    //         console.error('Error loading main.js:', error);
    //     })    
    // });
    // loadLibraries();

    // import('/scripts/jquery.js')
    // .then(($) => {
    //     console.log('jQuery has been loaded');

    //     // Load Slick.js after jQuery is loaded
    //     return import('/scripts/slick.js');
    // })
    // import('/scripts/slick.js').then(() => {
    //     // console.log('Slick.js has been loaded');

    //     // // Load main.js after Slick.js is loaded
    //     // return import('/scripts/main.js');
    //     console.log('Slick.js has been loaded');

    //     // Check if both jQuery and Slick.js are loaded
    //     // if (window.$ && window.$.fn.slick) {
    //     //     console.log('jQuery and Slick are both loaded');
    //     //     console.log('jQuery version:', $.fn.jquery);
    //     //     // // Load main.js after Slick.js is loaded
    //     //     $('.single-item').slick('slickNext');
    //     //     return import('/scripts/main.js');
    //     // } else {
    //     //     console.log('jQuery or Slick not loaded yet');
    //     // }

    //     if ($.fn.slick) {
    //         console.log('Slick methods are available');
    //         console.log(document.querySelector(".single-item"));
    //         $('.single-item').on('init', function() {
    //             console.log('Slick is fully initialized');
    //             // $('.single-item').slick('slickNext');
    //             // callSlickNext();
    //         });

    //         // Call slickNext if Slick is available
            
    //         // $('.single-item').slick('slickNext');
    //     } else {
    //         console.log('Slick not loaded or initialized yet');
    //     }


    //     // $('.single-item').slick({
    //     //     // Slick options
    //     // }).then(() => {
    //     //     // Slick is fully initialized, call slickNext
    //     //     $('.single-item').slick('slickNext');
    //     // });
    // })
    // .then(() => {
    //     console.log('main.js has been loaded');
    //     // return import('/scripts/main.js');
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });

    var ikijsScript = document.createElement('script')
    ikijsScript.setAttribute("src","/blocks/iki/iki.js");
    // ikijsScript.setAttribute('defer', true);

    var ikiloginjsScript = document.createElement('script')
    ikiloginjsScript.setAttribute("src","/blocks/ikilogin/ikilogin.js");
    // ikiloginjsScript.setAttribute('defer', true);

    var bundleScript = document.createElement('script')
    bundleScript.setAttribute("src","/blocks/bundle/bundle.js");
    // bundleScript.setAttribute('defer', true);

    var mainjsScript = document.createElement('script')
    mainjsScript.setAttribute("src","/scripts/main.js");
    // mainjsScript.setAttribute('defer', true);

    var jqueryScript = document.createElement('script')
    jqueryScript.setAttribute("src","/scripts/jquery.js");

    var slickScript = document.createElement('script')
    slickScript.setAttribute("src","/scripts/slick.js");
    // slickScript.setAttribute('defer', true);

    var mainElement = document.querySelector('main');
    var headElement =  document.querySelector('head');
    var bodyElement = document.querySelector('body');

    mainElement.appendChild(bundleScript);
    headElement.appendChild(jqueryScript);
    headElement.appendChild(slickScript);
    mainElement.appendChild(ikijsScript);
    mainElement.appendChild(ikiloginjsScript);

}

// (async function loadLibraries() {
//     try {
//       await import('/blocks/jquery/jquery.js');
//       console.log('jQuery has been loaded');
  
//       await import('/blocks/slick/slick.js');
//       console.log('Slick min js has been loaded');

//     //   await new Promise(resolve => setTimeout(resolve, 10000));
  
//       // Your code using jQuery and Slick here
//     } catch (error) {
//       console.error('Error loading libraries:', error);
//     }
//   })();

async function loadLibraries() {
    var jqueryScript = document.createElement('script');
    jqueryScript.src = '/blocks/jquery/jquery.js';
    jqueryScript.defer = true; // Defer execution until after parsing
    document.head.appendChild(jqueryScript);
  
    var slickScript = document.createElement('script');
    slickScript.src = '/blocks/slick/slick.js';
    slickScript.defer = true; // Defer execution until after parsing
    document.head.appendChild(slickScript);
  
    try {
      await import('/blocks/jquery/jquery.js'); // Wait for jQuery
      console.log('jQuery has been loaded');
  
      await import('/blocks/slick/slick.js'); // Wait for Slick.js
      console.log('Slick min js has been loaded');

    //   await new Promise(resolve => setTimeout(resolve, 20000));
  
      // Create the script tag for main.js (after libraries are loaded)
      var mainScript = document.createElement('script');
      mainScript.src = '/scripts/main.js';
      document.body.appendChild(mainScript);

    // const component = document.createElement('div');
    // component.innerHTML = `
    //   <script src="/scripts/main.js"></script>
    // `;
    // console.log("component",component);
    // document.body.appendChild(component);

    } catch (error) {
      console.error('Error loading libraries:', error);
    }
  }

