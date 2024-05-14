export default function decorate(block){
    
    // Create section-1 

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

    const firstChildDiv = document.createElement('div');
    firstChildDiv.classList.add('col-lg-6', 'pr-0')

    const newRow1 = document.createElement('div');
    newRow1.classList.add('row', 'no-gutters');

    firstChildDiv.appendChild(newRow1);

    [...block.children].forEach((row,index)=>{
        if(index==0){
            const firstImgDiv = document.createElement('div');
            firstImgDiv.classList.add('col-lg-6', 'mb-15', 'pr-0', 'pr-lg-3')
            
            const mobileDiv = document.createElement('div');
            mobileDiv.classList.add('find-more-mobile');

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
                    const insightsDiv = createInsightsDiv(col, 'insights', 'icon-long-right-arrow', 'find-more-white', 'icon-chevron-right-circle-white', 'icon-long-right-arrow')
                    insightsWrapper1.appendChild(insightsDiv);
                }
            })

            row1.appendChild(firstImgDiv);
            row1.appendChild(firstChildDiv);
            firstImgDiv.appendChild(insightsWrapper1);
            firstImgDiv.appendChild(mobileDiv);
        }  
    })
}


function createInsightsDiv(col, outerDivClass, firstSpanClass, anchorSpan1Class, anchorSpan2Class, anchorSpan3Class){
    
    const insightsDiv = document.createElement('div');
    insightsDiv.classList.add(outerDivClass);

    [...col.childNodes].forEach((node,i)=>{
        // if(i==1){
        
        //     const insightsh3 = document.createElement('h3');
        //     insightsh3.classList.add('interest-heading');

        //     const insightsAnchor = document.createElement('a');
        //     insightsAnchor.href = insightsAnchorHref;
        //     insightsAnchor.title = node.textContent.trim();
        //     insightsAnchor.textContent = node.textContent.trim();
        //     insightsAnchor.setAttribute("target", "_blank")
        //     // insightsAnchor.classList.add('find-more-desktop');

        //     const insightsAnchorSpan1 = document.createElement('span');
        //     insightsAnchorSpan1.classList.add(firstSpanClass);

        //     insightsAnchor.appendChild(insightsAnchorSpan1);
        //     insightsh3.appendChild(insightsAnchor);
        //     insightsDiv.appendChild(insightsh3);
        // } else if(i==3){
        //     const insightsAnchor = document.createElement('a');
        //     insightsAnchor.href = insightsAnchorHref2;
        //     insightsAnchor.title = node.textContent.trim();
        //     // insightsAnchor.textContent = node.textContent.trim();
        //     insightsAnchor.classList.add('find-more-desktop');

        //     const insightsAnchorSpan1 = document.createElement('span');
        //     insightsAnchorSpan1.classList.add(anchorSpan1Class);

        //     const insightsAnchorSpan2 = document.createElement('span');
        //     insightsAnchorSpan2.classList.add(anchorSpan2Class);

        //     const insightsAnchorSpan3 = document.createElement('span');
        //     insightsAnchorSpan3.classList.add(anchorSpan3Class);

        //     insightsAnchorSpan1.appendChild(insightsAnchorSpan2);
        //     insightsAnchorSpan1.appendChild(document.createTextNode(node.textContent.trim()));
        //     // insightsAnchorSpan1.textContent = '';

        //     insightsAnchor.appendChild(insightsAnchorSpan1);
        //     insightsAnchor.appendChild(insightsAnchorSpan3);

        //     insightsDiv.appendChild(insightsAnchor);
        // }
        // console.log(node);

        console.log(node.textContent.trim());
        console.log(i);
    })

    return insightsDiv;
}