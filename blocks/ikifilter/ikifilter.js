export default function decorate(block){
    const ikifilterContainer = document.querySelector(".ikifilter-container");
    ikifilterContainer.classList.add('ikihomepageexplore', 'aem-GridColumn', 'aem-GridColumn--default--12');

    ikifilterContainer.innerHTML = "";

    const sectionElement = document.createElement('section');
    sectionElement.classList.add('home-interests-wraper');

    const scriptElement = document.createElement('script');
    scriptElement.setAttribute("type","text/javascript");
    scriptElement.setAttribute("src","/content/dam/infosys-web/en/iki/js/ikifilter.js");

    ikifilterContainer.appendChild(sectionElement);
    ikifilterContainer.appendChild(scriptElement);

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const interestHeadingDiv = document.createElement('div');
    interestHeadingDiv.classList.add('interests-heading');

    sectionElement.appendChild(containerDiv);
    containerDiv.appendChild(interestHeadingDiv);

    const h2Element = document.createElement('h2');
    h2Element.textContent = "Featured";

    const btnWrapperDiv = document.createElement('div');
    btnWrapperDiv.classList.add('btn-wraper', 'modify-filter');

    interestHeadingDiv.appendChild(h2Element);
    interestHeadingDiv.appendChild(btnWrapperDiv);

    // create Explore div

    const exploreDiv = document.createElement('div');
    exploreDiv.classList.add('prespective-filter-modify', 'commonFilter', 'modal', 'fade', 'show');
    exploreDiv.id = 'videoListing';
    exploreDiv.setAttribute('tabindex','-1');
    exploreDiv.setAttribute('role','dialog');
    exploreDiv.setAttribute('aria-labelledby','videoListingLabel');
    exploreDiv.setAttribute('aria-hidden','true');
    exploreDiv.style.display = 'none';

    btnWrapperDiv.appendChild(exploreDiv);

    const modelDialogDiv = document.createElement('div');
    modelDialogDiv.classList.add('modal-dialog');
    modelDialogDiv.setAttribute('role', 'document');

    const modelContentDiv = document.createElement('div');
    modelContentDiv.classList.add('modal-content');

    exploreDiv.appendChild(modelDialogDiv);
    modelDialogDiv.appendChild(modelContentDiv);

    const modelHeaderDiv = document.createElement('div');
    modelHeaderDiv.classList.add('modal-header');

    const modelBodyDiv = document.createElement('div');
    modelBodyDiv.classList.add('modal-body');

    const listBtnDiv = document.createElement('div');
    listBtnDiv.classList.add('list-btn');
            
    modelContentDiv.appendChild(modelHeaderDiv);
    modelContentDiv.appendChild(modelBodyDiv);
    modelContentDiv.appendChild(listBtnDiv);

    [...block.children].forEach((row,r)=>{
        if(r==0){
            const exploreBtn = document.createElement('button');
            exploreBtn.classList.add('btn', 'btn-outline-black', 'btn-exp');
            exploreBtn.setAttribute('data-toggle','modal');
            exploreBtn.setAttribute('data-target','#videoListing');
            exploreBtn.setAttribute('aria-label','Go to Modify Filter');

            const exploreSpan = document.createElement('span');
            exploreSpan.classList.add('destop-only');
            exploreSpan.textContent = row.textContent.trim();

            exploreBtn.appendChild(exploreSpan);
            btnWrapperDiv.appendChild(exploreBtn);

            const h3Element = document.createElement('h3');
            h3Element.classList.add('modal-title');
            h3Element.id = 'videoListingLabel';
            h3Element.textContent = row.textContent.trim();

            const btnElement = document.createElement('button');
            btnElement.classList.add('close');
            btnElement.setAttribute('data-dismiss','modal');
            btnElement.setAttribute('aria-label','Close');

            const spanElement = document.createElement('span');
            spanElement.classList.add('icon-popup-cross');

            modelHeaderDiv.appendChild(h3Element);
            modelHeaderDiv.appendChild(btnElement);
            btnElement.appendChild(spanElement);
            
        } else if(r==1){
            const arr = row.textContent.trim().split('\n');
            console.log(arr);
            createInterestSection(arr);

        }
    })

}

function createInterestSection(arr){

    //Head Section 

    const ulElement = document.createElement('ul');
    ulElement.classList.add('interest-filter-wraper');

    const liElement = document.createElement('li');
    liElement.classList.add('interest-heading');

    ulElement.appendChild(liElement);

    const h5Element = document.createElement('h5');
    h5Element.textContent = arr[0].trim();

    liElement.appendChild(h5Element);

    const anchorElement = document.createElement('a');
    anchorElement.classList.add('navbar-toggler');
    anchorElement.setAttribute('href','#');
    anchorElement.setAttribute('data-toggle','collapse');
    anchorElement.setAttribute('data-target','#interest-data');
    anchorElement.setAttribute('aria-controls','interest-data');
    anchorElement.setAttribute('aria-expanded','false');
    anchorElement.setAttribute('aria-label','Toggle navigation');

    const spanElement = document.createElement('span');
    spanElement.classList.add('icon-long-right-arrow');

    anchorElement.appendChild(spanElement);

    liElement.appendChild(anchorElement);

    const collapsediv = document.createElement('div');
    collapsediv.classList.add('interest-data', 'collapsediv', 'hideoption');
    collapsediv.id = 'interest-data';

    const headerListingDiv = document.createElement('div');
    headerListingDiv.classList.add('header', 'header-listing');

    const goBackDiv = document.createElement('div');
    headerListingDiv.classList.add('go-back');

    collapsediv.appendChild(headerListingDiv);
    headerListingDiv.appendChild(goBackDiv);
    goBackDiv.appendChild(anchorElement);

    const closePopUpDiv = document.createElement('div');
    const btnElem = document.createElement('button');
    btnElem.classList.add('close');
    btnElem.setAttribute('data-dismiss', 'modal');
    btnElem.setAttribute('aria-label', 'Close');

    const popUpSpan = document.createElement('span');
    popUpSpan.classList.add('icon-popup-cross');

    closePopUpDiv.appendChild(btnElem);
    btnElem.appendChild(popUpSpan);

    headerListingDiv.appendChild(closePopUpDiv);

    createList(arr);

}

function createList(arr){
    const ulElem = document.createElement('ul');
    ulElem.classList.add('interest-list');
    console.log("Array ki length");
    console.log(arr.length);
    console.log(arr[0]);
    console.log(arr[arr.length-1]);

    for(let i=1;i<arr.length-1;i++){
        const liElem = document.createElement('li');
        const label = socument.createElement('label');
        label.classList.add('pill-container');

        const inputElement = document.createElement('input');
        inputElement.setAttribute("type",checkbox);
        inputElement.setAttribute("value",arr[i].trim());

        const span1 = document.createElement('span');
        span1.classList.add('checkmark');

        const span2 = document.createElement('span');
        span2.classList.add('text');
        span2.textContent = arr[i];

        label.appendChild(inputElement);
        label.appendChild(span1);
        label.appendChild(span2);

        liElem.appendChild(label);
        ulElem.appendChild(liElem);

    }
    console.log(ulElem);
}