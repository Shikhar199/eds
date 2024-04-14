export default function decorate(block){
    const mainElement = document.createElement('main');
    mainElement.classList.add("home-page-wrapper");

    const sectionElement = document.createElement('section');
    sectionElement.classList.add("home-interests-wrapper");

    const divElement = document.createElement('div');
    divElement.classList.add("interests-main");
    
    const divElement2 = document.createElement('div');
    divElement2.classList.add("row","no-gutters");

    const divElement3 = document.createElement('div');
    divElement3.classList.add("col-lg-6");

    const divElement4 = document.createElement('div');
    divElement4.classList.add("insights-wrapper", "home-overlay", "insights-hover");

    const headingElement = document.createElement('h3');
    headingElement.classList.add("interest-heading");
    headingElement.setAttribute("title", "The promise of the metaverse")
    headingElement.textContent = "The promise of the metaverse"

    divElement3.appendChild(divElement4);
    divElement2.appendChild(divElement3);
    divElement.appendChild(divElement2);
    sectionElement.appendChild(divElement);
    mainElement.appendChild(sectionElement);
    divElement4.appendChild(headingElement);

    const targetDiv = document.querySelector(".radars-container .default-content-wrapper");
    targetDiv.appendChild(mainElement);

}
