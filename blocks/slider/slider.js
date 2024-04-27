// (function(){
//     const jqueryScript = document.createElement('script');
//     jqueryScript.src = '/scripts/jquery.js';
//     jqueryScript.setAttribute("type","module");
//     document.head.appendChild(jqueryScript);

//     const slickScript = document.createElement('script');
//     slickScript.src = '/scripts/slick.js';
//     slickScript.setAttribute("type","module");
//     document.head.appendChild(slickScript);

//     // jqueryScript.onload = slickScript.onload = function() {
//     //     console.log('jQuery has been loaded');
//     //     decorate(block);
//     //     // Call the decorate function after jQuery has loaded
//     // };
//     console.log("Hi");
// })();

export default function decorate(block){
    import('/scripts/jquery.js').then(($) => {
        console.log('jQuery has been loaded');
        import('/scripts/slick.js').then(() => {
            console.log('Slick min js has been loaded');
            // import('/scripts/main.js').then(() => {

    // const jqueryScript = document.createElement('script');
    // jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    // const mainEle = document.querySelector('main');
    // mainEle.insertBefore(jqueryScript, mainEle.firstChild);

    // const slickjs = document.createElement('script');
    // slickjs.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js';
    // slickjs.setAttribute("integrity","sha512-HGOnQO9+SP1V92SrtZfjqxxtLmVzqZpjFFekvzZVWoiASSQgSr4cw9Kqd2+l8Llp4Gm0G8GIFJ4ddwZilcdb8A==")
    // slickjs.setAttribute("crossorigin","anonymous");
    // slickjs.setAttribute("referrerpolicy","no-referrer")

    // mainEle.insertBefore(slickjs, mainEle.children[1]);

    // const slickThemeCss = document.createElement('link');
    // slickThemeCss.setAttribute("rel","stylesheet");
    // slickThemeCss.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css");
    // slickThemeCss.setAttribute("integrity","sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==");
    // slickThemeCss.setAttribute("crossorigin","anonymous");
    // slickThemeCss.setAttribute("referrerpolicy","no-referrer")

    // const slickcss = document.createElement('link');
    // slickcss.setAttribute("rel","stylesheet");
    // slickcss.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css");
    // slickcss.setAttribute("integrity","sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==");
    // slickcss.setAttribute("crossorigin","anonymous");
    // slickcss.setAttribute("referrerpolicy","no-referrer")
    
    // document.head.appendChild(slickThemeCss);
    // document.head.appendChild(slickcss)
    // includejQuery()
    // .then(() => {
    //     // jQuery is now available
    //     console.log('jQuery has been loaded');
    //     // Call the decorate function after jQuery is loaded
    // })
    // .catch((error) => {
    //     console.error('Error loading jQuery:', error);
    // });

            const mainElement = document.createElement('main');

            const sectionElement = document.createElement('section');
            sectionElement.classList.add('home-most-popular-wraper');

            const containerDivElement = document.createElement('div');
            containerDivElement.classList.add('container', 'at-element-marker', 'at-element-click-tracking');

            const trackDiv = document.createElement('div');
            trackDiv.classList.add('at-track-click-16533046466222491');

            const headingElement = document.createElement('h2');
            headingElement.textContent = "Most Popular";

            const mostPopularDiv = document.createElement('div');
            mostPopularDiv.classList.add('most-popular-carousel');

            const mostPopularSlickDiv = document.createElement('div');
            mostPopularSlickDiv.classList.add('most-popular-slick', 'most-popular-slick-at', 'slick-initialized', 'slick-slider', 'slick-dotted');

            const prevBtn = document.createElement('button');
            prevBtn.classList.add('slick-prev', 'slick-arrow');
            prevBtn.setAttribute('aria-label', 'Previous');
            prevBtn.textContent = "Previous";

            const slickListDiv = document.createElement('div');
            slickListDiv.classList.add('slick-list', 'draggable');

            const slickTrackDiv = document.createElement('div');
            slickTrackDiv.classList.add('slick-track');
    // slickTrackDiv.style.opacity = '1';
    // slickTrackDiv.style.width = '8856px';
    // slickTrackDiv.style.transform = 'translate3d(-3936px, 0px, 0px)';

    //create ul
            const ulEle = document.createElement('ul');
            ulEle.classList.add('slick-dots');
            ulEle.setAttribute("role","tablist");

            [...block.children].forEach((row,r)=>{
                const slickItem = createSlickItem(row,r);
                slickTrackDiv.appendChild(slickItem);

                // create li
                const liEle = document.createElement('li');
                liEle.setAttribute("role","presentation");

                var idno = 30*1+r;
                var ariaLabel = r+1+" of 4"
                const liBtn = document.createElement('button');
                liBtn.setAttribute("role","tab");
                liBtn.id = "slick-slide-control"+idno;
                liBtn.setAttribute('aria-controls','slick-slide'+idno);
                liBtn.setAttribute('aria-label',ariaLabel);
                liBtn.textContent = r+1;

                liEle.appendChild(liBtn);
                ulEle.appendChild(liEle);
            })

            // $('.most-popular-slick-at').slick({

            console.log(slickTrackDiv);
            console.log(ulEle);
            console.log(prevBtn);

            const nextBtn = document.createElement('button');
            nextBtn.classList.add('slick-next', 'slick-arrow');
            nextBtn.setAttribute('aria-label', 'Next');
            nextBtn.textContent = "Next";

            console.log(nextBtn);

            var scriptElement = document.createElement('script');
            var scriptCode = `
            $('.slick-track').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                buttons: true,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                           },
                    {
                        breakpoint: 767,
                        settings: "unslick",
                    }
                ]
            });`;

            scriptElement.innerHTML = scriptCode;


            // slickListDiv.appendChild(slickTrackDiv);
            // mostPopularSlickDiv.appendChild(prevBtn);
            // mostPopularSlickDiv.appendChild(slickListDiv);
            // mostPopularSlickDiv.appendChild(nextBtn);
            // mostPopularSlickDiv.appendChild(ulEle);
            // mostPopularDiv.appendChild(mostPopularSlickDiv);
            // trackDiv.appendChild(headingElement);
            // trackDiv.appendChild(mostPopularDiv);
            // trackDiv.appendChild(scriptElement);
            // containerDivElement.appendChild(trackDiv);
            // sectionElement.appendChild(containerDivElement);
            // mainElement.appendChild(sectionElement);

            document.querySelector(".slider-container").innerHTML='';

            document.querySelector(".slider-container").appendChild(mainElement);

            document.querySelector(".slider-container").classList.add('ikislider', 'aem-GridColumn', 'aem-GridColumn--default--12');

            console.log(sectionElement);
            // }).catch(error=>{
            //     console.error('Error loading main.js:', error);
            // })

            import('/scripts/main.js').then(() => {
                console.log("main.js loaded");
            }).catch(error=>{
                console.error('Error loading main.js:', error);
            })

            const outerScriptElement = document.createElement('script');

            // Set the type attribute of the script element
            outerScriptElement.type = 'text/javascript';

            // Set the content of the script element
            outerScriptElement.textContent = `
            $('.popular-card').each(function(index){
                console.log("Popular card: " + index);
                if (index > 0) {
                    $(this).removeClass("popular-main-mobile").addClass("popular-sub-mobile");
                    $(this).children(".temp-mobile").addClass("sub-mobile").removeClass("temp-mobile");
                    console.log("class updated for mobile");
                }
            });
            `;

            document.querySelector(".ikislider").appendChild(outerScriptElement);


        }).catch(error=>{
            console.error('Error loading Slick.js:', error);
        })

    }).catch(error => {
        console.error('Error loading jQuery:', error);
    });

}

function createSlickItem(row,r){
    var slickId = 30*1+r;
    const popularSlickItemDiv = document.createElement('div');
    popularSlickItemDiv.classList.add('most-popular-slick-item', 'slick-slide');
    popularSlickItemDiv.style.width = '467px';
    popularSlickItemDiv.setAttribute("role","tabpanel");
    popularSlickItemDiv.id="slick-slide"+slickId;
    popularSlickItemDiv.setAttribute("aria-describedby","slick-slide-control"+slickId);
    popularSlickItemDiv.setAttribute("data-slick-index",r);

    const popularCardDiv = document.createElement('div');
    if(r==0){
        popularCardDiv.classList.add('card', 'popular-card', 'popular-main-mobile');
    } else{
        popularCardDiv.classList.add('card', 'popular-card', 'popular-sub-mobile');
    }
    

    popularSlickItemDiv.appendChild(popularCardDiv);

    [...row.children].forEach((col,c)=>{
        var cardImageDiv="";
        var imgElement="";
        if(c==0){
            cardImageDiv = document.createElement('div');
            cardImageDiv.classList.add('card-image');

            const anchorElement = document.createElement('a');

            var imgElement = document.createElement('img');
            imgElement.classList.add('card-img-top');
            imgElement.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));

            cardImageDiv.appendChild(anchorElement);
            anchorElement.appendChild(imgElement);
            popularCardDiv.appendChild(cardImageDiv);

        } else if(c==1){
            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');
            var cardBodyAnchorElement;
            [...col.childNodes].forEach((node,i)=>{
                if(i==1){
                    const h5Element = document.createElement('h5');
                    h5Element.classList.add('card-title');
                    h5Element.textContent = node.textContent.trim();
                    popularCardDiv.appendChild(h5Element);
                } else if(i==3){
                    const h4Element = document.createElement('h4');
                    cardBodyAnchorElement = document.createElement('a');
                    cardBodyAnchorElement.setAttribute("title", node.textContent.trim());
                    cardBodyAnchorElement.textContent = node.textContent.trim();

                    h4Element.appendChild(cardBodyAnchorElement);
                    cardBodyDiv.appendChild(h4Element);
                } else if(i==5){
                    const pElement = document.createElement('p');
                    pElement.textContent = node.textContent.trim();
                    pElement.classList.add('card-text');
                    cardBodyDiv.appendChild(pElement);
                } else if(i==7){
                    const ulElement = document.createElement('ul');
                    const liElement = document.createElement('li');
                    ulElement.appendChild(liElement);
                    liElement.textContent = node.textContent.trim();
                    cardBodyDiv.appendChild(ulElement);
                } else if(i==9){
                    cardBodyAnchorElement.setAttribute("href", node.textContent.trim())
                   // var selectorString = 'div[data-slick-index="' + r + '"]';
                    const anchorEle = popularCardDiv.querySelector(".card-image").querySelector('a');
                    anchorEle.setAttribute("href",node.textContent.trim());
                }
            })
            popularCardDiv.appendChild(cardBodyDiv);
        }
    })
    return popularSlickItemDiv;
}

// function includeScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.body.appendChild(script);
//     });
// }

// function interval() {
//     if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
//       progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
//       startProgressbar();
//     } else {
//       percentTime += 1 / (time + 5);
//       $('.inProgress' + progressBarIndex).css({
//         width: percentTime + "%"
//       });
//       if (percentTime >= 100) {
//         $('.single-item').slick('slickNext');
//         progressBarIndex++;
//         if (progressBarIndex > 3) {
//           progressBarIndex = 0;
//         }
//         startProgressbar();
//       }
//     }
//   }

// function includejQuery() {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
//         script.onload = resolve;
//         script.onerror = reject;
//         document.head.appendChild(script);
//     });
// }