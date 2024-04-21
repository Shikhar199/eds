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

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const imgElement = document.createElement('img');
                    imgElement.setAttribute('src', col.querySelector('img').getAttribute('src'));
                    imgElement.setAttribute('alt', 'Use Generative AI with Responsibility');
                    imgElement.classList.add('img-fluid', 'insights-image');
                    insightsWrapper1.appendChild(imgElement);
                } else if (c==1){

                    const insightsDiv = document.createElement('div');
                    insightsDiv.classList.add('insights');

                    [...col.childNodes].forEach((node,i)=>{
                        if(i==1){
                            const insightsh3 = document.createElement('h3');
                            insightsh3.classList.add('interest-heading');

                            const insightsAnchor = document.createElement('a');
                            insightsAnchor.href = '/iki/perspectives/generative-ai-responsibility.html';
                            insightsAnchor.title = node.textContent.trim();
                            insightsAnchor.textContent = node.textContent.trim();

                            const insightsAnchorSpan1 = document.createElement('span');
                            insightsAnchorSpan1.classList.add('icon-long-right-arrow');

                            insightsAnchor.appendChild(insightsAnchorSpan1);
                            insightsh3.appendChild(insightsAnchor);
                            insightsDiv.appendChild(insightsh3);
                        } else if(i==3){
                            const insightsAnchor = document.createElement('a');
                            insightsAnchor.href = '/iki/perspectives.html';
                            insightsAnchor.title = node.textContent.trim();
                            insightsAnchor.textContent = node.textContent.trim();
                            insightsAnchor.classList.add('find-more-desktop');

                            const insightsAnchorSpan1 = document.createElement('span');
                            insightsAnchorSpan1.classList.add('find-more-white');
                            insightsAnchorSpan1.textContent = node.textContent.trim();

                            const insightsAnchorSpan2 = document.createElement('span');
                            insightsAnchorSpan2.classList.add('icon-chevron-right-circle-white');

                            const insightsAnchorSpan3 = document.createElement('span');
                            insightsAnchorSpan3.classList.add('icon-long-right-arrow');

                            insightsAnchorSpan1.appendChild(insightsAnchorSpan2);

                            insightsAnchor.appendChild(insightsAnchorSpan1);
                            insightsAnchor.appendChild(insightsAnchorSpan3);

                            insightsDiv.appendChild(insightsAnchor);
                        }
                    })

                    // const insightsAnchorSpan2 = document.createElement('span');
                    // insightsAnchorSpan2.classList.add('icon-long-right-arrow');

                    // insightsDiv.appendChild(insightsh3);
                    // insightsh3.appendChild(insightsAnchor);
                    // insightsAnchor.appendChild(insightsAnchorSpan1);
                    // insightsAnchor.appendChild(insightsAnchorSpan2);
                    // insightsAnchorSpan1.appendChild();
                    insightsWrapper1.appendChild(insightsDiv);
                }
            })

            row1.appendChild(firstImgDiv);
            firstImgDiv.appendChild(insightsWrapper1);

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
