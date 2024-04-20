export default function decorate(block){

    // Create div element with class "interests-main"
    const interestsMain = document.createElement('div');
    interestsMain.classList.add('interests-main');

    // Create div element with class "row" and "no-gutters"
    const row1 = document.createElement('div');
    row1.classList.add('row', 'no-gutters');

    // Create div element with class "row" and "no-gutters"
    const row2 = document.createElement('div');
    row2.classList.add('row', 'no-gutters', 'mt-sm-3');

    interestsMain.appendChild(row1);
    interestsMain.appendChild(row2);
    
    [...block.children].forEach((row,index)=>{
        if(index==0){
            const firstImgDiv = document.createElement('div');
            firstImgDiv.classList.add('col-lg-6', 'mb-15', 'pr-0', 'pr-lg-3')
            
            // Create insights wrapper div with classes "insights-wraper", "home-overlay", and "insights-hover"
            const insightsWrapper1 = document.createElement('div');
            insightsWrapper1.classList.add('insights-wraper', 'home-overlay', 'insights-hover');
            insightsWrapper1.style.height = '282.45px';

            const imgElement = document.createElement('img');
            imgElement.setAttribute('src', col.querySelector('img').getAttribute('src'));
            imgElement.setAttribute('alt', 'Use Generative AI with Responsibility');
            imgElement.classList.add('img-fluid', 'insights-image');

            row1.appendChild(firstImgDiv);
            firstImgDiv.appendChild(insightsWrapper1);
            insightsWrapper1.appendChild(imgElement);

        } else if (index==1){

        }
    })
    console.log(interestsMain);
    // // Create section element with class "home-interests-wraper"
    // const section = document.createElement('section');
    // section.classList.add('home-interests-wraper');

    // // Create div element with class "interests-main"
    // const interestsMain = document.createElement('div');
    // interestsMain.classList.add('interests-main');

    // // Create div element with class "row" and "no-gutters"
    // const row1 = document.createElement('div');
    // row1.classList.add('row', 'no-gutters');

    // // Create first column div with classes "col-lg-6", "mb-15", "pr-0", and "pr-lg-3"
    // const col1 = document.createElement('div');
    // col1.classList.add('col-lg-6', 'mb-15', 'pr-0', 'pr-lg-3');

    // // Create insights wrapper div with classes "insights-wraper", "home-overlay", and "insights-hover"
    // const insightsWrapper1 = document.createElement('div');
    // insightsWrapper1.classList.add('insights-wraper', 'home-overlay', 'insights-hover');
    // insightsWrapper1.style.height = '282.45px';

    
}
