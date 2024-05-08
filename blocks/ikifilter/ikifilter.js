export default function decorate(block){

    // import('/scripts/slick.js').then(($) => {
    //     console.log('jQuery has been loaded');
        // import('/blocks/ikilogin.js').then(() => {
        //     console.log(' IKI login js has been loaded');
            // import('/scripts/main.js').then(() => {
            //     console.log(' main js has been loaded');
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
    exploreDiv.classList.add('prespective-filter-modify', 'commonFilter', 'modal', 'fade');
    exploreDiv.id = 'videoListing';
    exploreDiv.setAttribute('tabindex','-1');
    exploreDiv.setAttribute('role','dialog');
    exploreDiv.setAttribute('aria-labelledby','videoListingLabel');
    exploreDiv.setAttribute('aria-hidden','true');
    // exploreDiv.style.display = 'none';

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
            const ulElem = createInterestSection(arr,r,"interest-data");
            modelBodyDiv.appendChild(ulElem);

        } else if(r==2){
            const arr = row.textContent.trim().split('\n');
            const ulElem = createInterestSection(arr,r,"technologies-data");
            modelBodyDiv.appendChild(ulElem);

        } else if(r==3){
            const arr = row.textContent.trim().split('\n');
            const ulElem = createInterestSection(arr,r,"content-data");
            modelBodyDiv.appendChild(ulElem);

        } else if (r==4){
            const btnElementMobile = document.createElement('button');
            btnElementMobile.setAttribute("type","button");
            btnElementMobile.classList.add('btn', 'btn-apply', 'btn-dark', 'mobile-only');
            btnElementMobile.textContent = "apply";

            const btnElementDesktop = document.createElement('button');
            btnElementDesktop.setAttribute("type","button");
            btnElementDesktop.classList.add('btn', 'btn-apply', 'btn-dark', 'desktop-only');
            btnElementDesktop.textContent = "apply";

            listBtnDiv.appendChild(btnElementMobile);
            listBtnDiv.appendChild(btnElementDesktop);

        }
    })

    // Load other scripts first
    // Promise.all([
    //     // Load other scripts here
    //     // For example:
    //     loadScript('/blocks/bundle.js'),
    //     loadScript('/scripts/slick.js'),
    //     loadScript('/blocks/iki.js'),
    //     loadScript('/blocks/ikilogin.js')
    // ]).then(function() {
    //     // All other scripts have been loaded, now load main.js
    //     console.log("Loading main.js");
    //     loadMainScript();
    // }).catch(function(error) {
    //     console.error('Error loading scripts:', error);
    // });

    loadScripts();
    //         import('/blocks/iki.js').then(() => {
    //             console.log('iki has been loaded');
    //         }).catch(error=>{
    //             console.error('Error loading iki.js:', error);
    //         })
            // }).catch(error=>{
            //     console.error('Error loading main.js:', error);
            // })
        // }).catch(error=>{
        //     console.error('Error loading ikilogin.js:', error);
        // })
    // }).catch(error=>{
    //     console.error('Error loading jquery.js:', error);
    // })
    // loadLibraries();

    // import('/scripts/jquery.js')
    // .then(() => {
    //     console.log('jQuery has been loaded');
    //     // Execute code that relies on jQuery here
    //     import('/blocks/iki.js').then(() => {
    //         console.log('iki has been loaded');
    //     }).catch(error=>{
    //         console.error('Error loading iki.js:', error);
    //     })
    // })
    // .catch(error => {
    //     console.error('Error loading jquery.js:', error);
    // });
}

function createInterestSection(arr,r,data){

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
    anchorElement.setAttribute('data-target', '#'+data);
    anchorElement.setAttribute('aria-controls', data);
    anchorElement.setAttribute('aria-expanded','false');
    anchorElement.setAttribute('aria-label','Toggle navigation');

    const spanElement = document.createElement('span');
    spanElement.classList.add('icon-long-right-arrow');

    anchorElement.appendChild(spanElement);

    // creating collapse div

    const collapsediv = document.createElement('div');
    collapsediv.classList.add('interest-data', 'collapse', 'hideoption');
    collapsediv.id = data;

    const headerListingDiv = document.createElement('div');
    headerListingDiv.classList.add('header', 'header-listing');

    collapsediv.appendChild(headerListingDiv);

    const goBackDiv = document.createElement('div');
    goBackDiv.classList.add('go-back');
    goBackDiv.appendChild(anchorElement);

    const closePopUpDiv = document.createElement('div');
    closePopUpDiv.classList.add('close-pop-up');

    headerListingDiv.appendChild(goBackDiv);
    headerListingDiv.appendChild(closePopUpDiv);

    const btnElem = document.createElement('button');
    btnElem.classList.add('close');
    btnElem.setAttribute('data-dismiss', 'modal');
    btnElem.setAttribute('aria-label', 'Close');

    const popUpSpan = document.createElement('span');
    popUpSpan.classList.add('icon-popup-cross');

    closePopUpDiv.appendChild(btnElem);
    btnElem.appendChild(popUpSpan);

    headerListingDiv.appendChild(closePopUpDiv);

    const ulElem = createList(arr,r);

    const anchorElement2 = document.createElement('a');
    anchorElement2.classList.add('navbar-toggler');
    anchorElement2.setAttribute('href','#');
    anchorElement2.setAttribute('data-toggle','collapse');
    anchorElement2.setAttribute('data-target', '#'+data);
    anchorElement2.setAttribute('aria-controls', data);
    anchorElement2.setAttribute('aria-expanded','false');
    anchorElement2.setAttribute('aria-label','Toggle navigation');

    const spanElement2 = document.createElement('span');
    spanElement2.classList.add('icon-long-right-arrow');

    anchorElement2.appendChild(spanElement2);

    liElement.appendChild(anchorElement2);
    liElement.appendChild(collapsediv);

    const btnWraperDiv = document.createElement('div');
    btnWraperDiv.classList.add('btn-wraper');
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary');
    btn.setAttribute('type', 'button');
    btn.textContent='continue';
    btn.addEventListener('click', hideOptions);

    btnWraperDiv.appendChild(btn);

    collapsediv.appendChild(ulElem);
    collapsediv.appendChild(btnWraperDiv);
    // liElement.appendChild(collapsediv);

    const ulElem2 = createList(arr,r);

    const interestListLi = document.createElement('li');
    interestListLi.classList.add('interest-list-wraper');
    interestListLi.appendChild(ulElem2);

    ulElement.appendChild(interestListLi);

    const viewAllLi = document.createElement('li');
    viewAllLi.classList.add('view-all');

    ulElement.appendChild(viewAllLi);

    const liEle = document.createElement('li');
    ulElement.appendChild(liEle);

    const anchor = document.createElement('a');
    anchor.classList.add('view-more');
    anchor.textContent = 'View All';
    anchor.setAttribute('href', '#');

    const h2Ele = document.createElement('h2');
    h2Ele.textContent = arr[0].trim(); 

    goBackDiv.appendChild(anchorElement);
    goBackDiv.appendChild(h2Ele);

    viewAllLi.appendChild(anchor);

    // interestListLi.appendChild(ulElem);

    return ulElement;

}

function createList(arr,r){
    const ulElem = document.createElement('ul');
    ulElem.classList.add('interest-list');
    if(r==1){
        ulElem.classList.add('industry');
    } else if(r==2){
        ulElem.classList.add('technology');
    } else if(r==3){
        ulElem.classList.add('assettype');
    }

    for(let i=1;i<arr.length-1;i++){
        const liElem = document.createElement('li');
        const label = document.createElement('label');
        label.classList.add('pill-container');

        const inputElement = document.createElement('input');
        inputElement.type = 'checkbox';
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
    return ulElem;
}

function hideOptions(){
    console.log("hide");
}

function loadScripts() {
    var ikijsScript = document.createElement('script')
    ikijsScript.setAttribute("src","/blocks/iki.js");
    // ikijsScript.setAttribute('defer', true);

    var ikiloginjsScript = document.createElement('script')
    ikiloginjsScript.setAttribute("src","/blocks/ikilogin.js");
    // ikiloginjsScript.setAttribute('defer', true);

    var bundleScript = document.createElement('script')
    bundleScript.setAttribute("src","/blocks/bundle.js");
    // bundleScript.setAttribute('defer', true);

    var mainjsScript = document.createElement('script')
    mainjsScript.setAttribute("src","/scripts/main.js");
    // mainjsScript.setAttribute('defer', true);

    var jqueryScript = document.createElement('script')
    jqueryScript.setAttribute("src","/scripts/jquery.js");

    var slickScript = document.createElement('script')
    slickScript.setAttribute("src","/scripts/slick.js");
    slickScript.setAttribute('defer', true);

    var mainElement = document.querySelector('main');
    var headElement =  document.querySelector('head');
    var bodyElement = document.querySelector('body');

    mainElement.appendChild(bundleScript);
    headElement.appendChild(jqueryScript);
    headElement.appendChild(slickScript);
    mainElement.appendChild(ikijsScript);
    mainElement.appendChild(ikiloginjsScript);
    // window.onload = function() {
    //     var mainjsScript = document.createElement('script');
    //     mainjsScript.src = "/scripts/main.js";
    //     mainjsScript.defer = true;
    //     document.body.appendChild(mainjsScript);
    // }
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        // Document is already ready or has already loaded, call the function directly
        loadMainScript();
    } else {
        // Document is still loading, add an event listener for DOMContentLoaded
        document.addEventListener("DOMContentLoaded", loadMainScript);
    }
    // mainElement.appendChild(mainjsScript);

}

function loadMainScript() {
    var script = document.createElement('script');
    script.src = "/scripts/main.js";
    script.defer = true;
    document.body.appendChild(script);
}

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         var script = document.createElement('script');
//         script.src = src;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.body.appendChild(script);
//     });
// }

// function loadMainScript() {
//     var mainScript = document.createElement('script');
//     mainScript.src = '/scripts/main.js';
//     document.body.appendChild(mainScript);
// }
