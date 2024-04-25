export default function decorate(block){
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

    const btn = document.createElement('button');
    btn.classList.add('slick-prev', 'slick-arrow');
    btn.setAttribute('aria-label', 'Previous');
    btn.textContent = "Previous";

    const slickListDiv = document.createElement('div');
    slickListDiv.classList.add('slick-list', 'draggable');

    const slickTrackDiv = document.createElement('div');
    slickTrackDiv.classList.add('slick-track');
    slickTrackDiv.style.opacity = '1';
    slickTrackDiv.style.width = '8856px';
    slickTrackDiv.style.transform = 'translate3d(-3936px, 0px, 0px)';


    [...block.children].forEach((row,r)=>{
        const slickItem = createSlickItem(row,r);
        slickTrackDiv.appendChild(slickItem);
    })
    console.log(slickTrackDiv);
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
                    console.log(document.querySelector(".data-slick-index"+r));
                }
            })
            popularCardDiv.appendChild(cardBodyDiv);
        }
    })
    return popularSlickItemDiv;
}