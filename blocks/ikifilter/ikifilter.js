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

    [...block.children].forEach((row,r)=>{
        console.log(r);
        console.log(row.textContent.trim());
        // if(r==0){
        //     const exploreBtn = document.createElement('button');
        //     exploreBtn.classList.add('btn', 'btn-outline-black', 'btn-exp');
        //     exploreBtn.setAttribute('data-toggle','modal');
        //     exploreBtn.setAttribute('data-target','#videoListing');
        //     exploreBtn.setAttribute('aria-label','Go to Modify Filter');

        //     const exploreSpan = document.createElement('span');
        //     exploreSpan.classList.add('destop-only');
        //     exploreSpan.textContent = row.textContent.trim();

        //     exploreBtn.appendChild(exploreSpan);
        //     btnWrapperDiv.appendChild(exploreBtn);
        // }
    })

    const exploreDiv = document.createElement('div');

    btnWrapperDiv.appendChild(exploreDiv);

}