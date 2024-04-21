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
                    const insightsDiv = createInsightsDiv(col, "/iki/perspectives/generative-ai-responsibility.html", 'icon-long-right-arrow', '/iki/perspectives.html', 'find-more-white', 'icon-chevron-right-circle-white', 'icon-long-right-arrow')
                    insightsWrapper1.appendChild(insightsDiv);
                }
            })

            row1.appendChild(firstImgDiv);
            firstImgDiv.appendChild(insightsWrapper1);
            firstImgDiv.appendChild(mobileDiv);

        } else if (index==1){
            const firstChildDiv = document.createElement('div');
            firstChildDiv.classList.add('col-lg-6', 'pr-0')

            const newRow1 = document.createElement('div');
            newRow1.classList.add('row', 'no-gutters');

            firstChildDiv.appendChild(newRow1);

            [...row.children].forEach((col,c)=>{
                const interestHiddenDiv = document.createElement('div');
                interestHiddenDiv.classList.add('col-lg-6', 'col-md-6', 'interest-hidden', 'pr-sm-3');
                if(c==0){
                    [...col.childNodes].forEach((node,i)=>{
                        if(i==0){
                            const firstImgDiv = document.createElement('div');
                            firstImgDiv.classList.add('article-wraper', 'insights-hover', 'modernization', 'mb-sm-3');
                            firstImgDiv.style.height = '141.225px';

                            const firstImg = document.createElement('img');
                            firstImg.setAttribute('src', node.querySelector('picture').querySelector('img').getAttribute('src'));
                            firstImg.classList.add('img-fluid', 'interactive-image');
                            firstImg.setAttribute('alt', 'Video');

                            const insightsDiv = createInsightsDiv(col, "/iki/perspectives/organizational-structures-drive-digital-success.html", "icon-long-right-arrow", "/iki/perspectives.html", "find-more-white", "icon-chevron-right-circle-white", "icon-long-right-arrow")

                            const mobileDiv = document.createElement("div");
                            mobileDiv.classList.add("find-more-mobile");

                            firstImgDiv.appendChild(firstImg);
                            firstImgDiv.appendChild(insightsDiv);
                            firstImgDiv.appendChild(mobileDiv);    

                        } else if(i==1){
                            const secondImgDiv = document.createElement('div');
                            secondImgDiv.classList.add('interactive-wraper', 'home-overlay', 'insights-hover');
                            secondImgDiv.style.height = '141.225px';

                            const secondImg = document.createElement('img');
                            secondImg.setAttribute('src', node.querySelector('picture').querySelector('img').getAttribute('src'));
                            secondImg.classList.add('img-fluid', 'interactive-image');
                            secondImg.setAttribute('alt', 'Video');

                            const insightsDiv = createInsightsDiv(col, "/iki/videos/insights-andrew-duncan.html", "icon-long-right-arrow", "/iki/videos/insights-andrew-duncan.html", "find-more-white", "icon-chevron-right-circle-white", "icon-long-right-arrow")

                            const mobileDiv = document.createElement("div");
                            mobileDiv.classList.add("find-more-mobile");

                            secondImgDiv.appendChild(secondImg);
                            secondImgDiv.appendChild(insightsDiv);
                            secondImgDiv.appendChild(mobileDiv);

                        } else{

                        }
                        
                    })
                }
                interestHiddenDiv.appendChild(firstImgDiv);
                interestHiddenDiv.appendChild(secondImgDiv);
            })

        }
    })
    console.log("interestHiddenDiv");
    console.log(interestHiddenDiv);

    
}


function createInsightsDiv(col, insightsAnchorHref, firstSpanClass, insightsAnchorHref2, anchorSpan1Class, anchorSpan2Class, anchorSpan3Class){
    
    const insightsDiv = document.createElement('div');
    insightsDiv.classList.add('insights');

    [...col.childNodes].forEach((node,i)=>{
        if(i==1){
            const insightsh3 = document.createElement('h3');
            insightsh3.classList.add('interest-heading');

            const insightsAnchor = document.createElement('a');
            insightsAnchor.href = insightsAnchorHref;
            insightsAnchor.title = node.textContent.trim();
            insightsAnchor.textContent = node.textContent.trim();
            insightsAnchor.classList.add('find-more-desktop');

            const insightsAnchorSpan1 = document.createElement('span');
            insightsAnchorSpan1.classList.add(firstSpanClass);

            insightsAnchor.appendChild(insightsAnchorSpan1);
            insightsh3.appendChild(insightsAnchor);
            insightsDiv.appendChild(insightsh3);
        } else if(i==3){
            const insightsAnchor = document.createElement('a');
            insightsAnchor.href = insightsAnchorHref2;
            insightsAnchor.title = node.textContent.trim();
            insightsAnchor.textContent = node.textContent.trim();
            insightsAnchor.classList.add('find-more-desktop');

            const insightsAnchorSpan1 = document.createElement('span');
            insightsAnchorSpan1.classList.add(anchorSpan1Class);
            insightsAnchorSpan1.textContent = node.textContent.trim();

            const insightsAnchorSpan2 = document.createElement('span');
            insightsAnchorSpan2.classList.add(anchorSpan2Class);

            const insightsAnchorSpan3 = document.createElement('span');
            insightsAnchorSpan3.classList.add(anchorSpan3Class);

            insightsAnchorSpan1.appendChild(insightsAnchorSpan2);

            insightsAnchor.appendChild(insightsAnchorSpan1);
            insightsAnchor.appendChild(insightsAnchorSpan3);

            insightsDiv.appendChild(insightsAnchor);
        }
    })

    return insightsDiv;
}
