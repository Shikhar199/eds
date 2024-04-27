export default function decorate(block){
    import('/scripts/jquery.js').then(($) => {
        console.log('jQuery has been loaded');
        import('/scripts/slick.js').then(() => {
            console.log('Slick min js has been loaded');

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

            slickListDiv.appendChild(slickTrackDiv);

            // $('.most-popular-slick-at').slick({

            const nextBtn = document.createElement('button');
            nextBtn.classList.add('slick-next', 'slick-arrow');
            nextBtn.setAttribute('aria-label', 'Next');
            nextBtn.textContent = "Next";

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

            document.querySelector(".slider-container").innerHTML='';

            document.querySelector(".slider-container").appendChild(mainElement);

            document.querySelector(".slider-container").classList.add('ikislider', 'aem-GridColumn', 'aem-GridColumn--default--12');

            console.log(sectionElement);

            const outerScriptElement = document.createElement('script');

            // Set the type attribute of the script element
            outerScriptElement.type = 'text/javascript';

            // Set the content of the script element
            outerScriptElement.textContent = `
            $('.popular-card').each(function(index){
                if (index > 0) {
                    $(this).removeClass("popular-main-mobile").addClass("popular-sub-mobile");
                    $(this).children(".temp-mobile").addClass("sub-mobile").removeClass("temp-mobile");
                    console.log("class updated for mobile");
                }
            });
            `;

            // document.querySelector(".ikislider").appendChild(mainElement);
            mainElement.appendChild(sectionElement);
            sectionElement.appendChild(containerDivElement);
            containerDivElement.appendChild(trackDiv);
            trackDiv.appendChild(headingElement);
            trackDiv.appendChild(mostPopularDiv);
            trackDiv.appendChild(scriptElement);

            mostPopularDiv.appendChild(mostPopularSlickDiv);
            mostPopularSlickDiv.appendChild(prevBtn);
            mostPopularSlickDiv.appendChild(slickListDiv);
            mostPopularSlickDiv.appendChild(nextBtn);
            mostPopularSlickDiv.appendChild(ulEle);

            slickTrackDiv.appendChild(mostPopularSlickDiv);

            console.log(slickTrackDiv);

            document.querySelector(".ikislider").appendChild(outerScriptElement);

            // import('/scripts/main.js').then(() => {
            //     console.log("main.js loaded");
            // }).catch(error=>{
            //     console.error('Error loading main.js:', error);
            // })


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