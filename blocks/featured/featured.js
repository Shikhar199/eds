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

    const firstChildDiv = document.createElement('div');
    firstChildDiv.classList.add('col-lg-6', 'pr-0')

    const newRow1 = document.createElement('div');
    newRow1.classList.add('row', 'no-gutters');

    firstChildDiv.appendChild(newRow1);

    const interestHiddenDiv = document.createElement('div');
    interestHiddenDiv.classList.add('col-lg-6', 'col-md-6', 'interest-hidden', 'pr-sm-3');

    firstChildDiv.appendChild(newRow1);
    newRow1.appendChild(interestHiddenDiv);
    
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
                    const insightsDiv = createInsightsDiv(col, 'insights', "/iki/perspectives/generative-ai-responsibility.html", 'icon-long-right-arrow', '/iki/perspectives.html', 'find-more-white', 'icon-chevron-right-circle-white', 'icon-long-right-arrow')
                    insightsWrapper1.appendChild(insightsDiv);
                }
            })

            row1.appendChild(firstImgDiv);
            row1.appendChild(firstChildDiv);
            firstImgDiv.appendChild(insightsWrapper1);
            firstImgDiv.appendChild(mobileDiv);

        } else if (index==1){
            const firstImgDiv = document.createElement('div');
            firstImgDiv.classList.add('article-wraper', 'insights-hover', 'modernization', 'mb-sm-3');
            firstImgDiv.style.height = '141.225px';

            const mobileDiv = document.createElement("div");
            mobileDiv.classList.add("find-more-mobile");

            [...row.children].forEach((col,c)=>{
                
                if(c==0){
                    const firstImg = document.createElement('img');
                    firstImg.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));
                    firstImg.classList.add('img-fluid', 'interactive-image');
                    firstImg.setAttribute('alt', 'Video');
                    firstImgDiv.appendChild(firstImg);

                } else if(c==1){
                    const insightsDiv = createInsightsDiv(col, 'insights', "/iki/perspectives/organizational-structures-drive-digital-success.html", "icon-long-right-arrow", "/iki/perspectives.html", "find-more-white", "icon-chevron-right-circle-white", "icon-long-right-arrow")
                    firstImgDiv.appendChild(insightsDiv);

                } 
            })

            interestHiddenDiv.appendChild(firstImgDiv);
            interestHiddenDiv.appendChild(mobileDiv);  

        } else if (index==2){
            const secondImgDiv = document.createElement('div');
            secondImgDiv.classList.add('interactive-wraper', 'home-overlay', 'insights-hover');
            secondImgDiv.style.height = '141.225px';

            const mobileDiv = document.createElement("div");
            mobileDiv.classList.add("find-more-mobile");

            [...row.children].forEach((col,c)=>{
                
                if(c==0){
                    const secondImg = document.createElement('img');
                    secondImg.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));
                    secondImg.classList.add('img-fluid', 'interactive-image');
                    secondImg.setAttribute('alt', 'Video');
                    secondImgDiv.appendChild(secondImg);

                } else if(c==1){
                    const insightsDiv = createInsightsDiv(col, 'insights', "/iki/videos/insights-andrew-duncan.html", "icon-long-right-arrow", "/iki/videos/insights-andrew-duncan.html", "find-more-white", "icon-chevron-right-circle-white", "icon-long-right-arrow")
                    secondImgDiv.appendChild(insightsDiv);
                } 
            })

            interestHiddenDiv.appendChild(secondImgDiv);
            interestHiddenDiv.appendChild(mobileDiv); 

        } else if (index==3){
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('col-lg-6', 'col-md-6', 'interest-hidden', 'pr-0');

            const podcastWrapperDiv = document.createElement('div');
            podcastWrapperDiv.classList.add('podcast-wraper', 'home-overlay', 'insights-hover');
            podcastWrapperDiv.style.height = '282.45px';
            
            const mobileDiv = document.createElement("div");
            mobileDiv.classList.add("find-more-mobile");

            columnDiv.appendChild(podcastWrapperDiv);

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const imgElement = document.createElement('img');
                    imgElement.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));
                    imgElement.classList.add('img-fluid', 'podcast-image');
                    imgElement.setAttribute('alt', 'Ahead in the Cloud: Delivering Scale and Service in the Credit Union Cloud with Anurag Sharma')
                    podcastWrapperDiv.appendChild(imgElement);
                } else if(c==1){
                    const insightsDiv = createInsightsDiv(col, 'insights', "/iki/podcasts/ahead-cloud/credit-union-cloud.html", 'icon-long-right-arrow', "/iki/podcasts.html", 'find-more-white', 'icon-chevron-right-circle-white', 'icon-long-right-arrow')
                    podcastWrapperDiv.appendChild(insightsDiv);
                }
            })
            columnDiv.appendChild(mobileDiv);
            newRow1.appendChild(columnDiv);

        } else if (index==4){
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('col-lg-6', 'col-md-6', 'interest-hidden', 'pr-sm-3');

            const caseStudyWrapperDiv = document.createElement('div');
            caseStudyWrapperDiv.classList.add('case-study-wraper', 'insights-hover');
            caseStudyWrapperDiv.style.height = '100%';

            const mobileDiv = document.createElement("div");
            mobileDiv.classList.add("find-more-mobile");

            columnDiv.appendChild(caseStudyWrapperDiv);

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const imgElement = document.createElement('img');
                    imgElement.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));
                    imgElement.classList.add('img-fluid', 'podcast-image');
                    imgElement.setAttribute('alt', 'Tech Navigator: Building the Human-centric Future')
                    caseStudyWrapperDiv.appendChild(imgElement);
                } else if(c==1){
                    const insightsDiv = createInsightsDiv(col, 'case-study-content', "/iki/research/tech-navigator.html", 'icon-long-right-arrow', "/iki/research.html", 'find-more-white', 'icon-chevron-right-circle-white', 'icon-long-right-arrow')
                    caseStudyWrapperDiv.appendChild(insightsDiv);
                }
            })
            columnDiv.appendChild(mobileDiv);
            row2.appendChild(columnDiv);

        } else if (index==5){
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('col-lg-6', 'col-md-6', 'interest-hidden', 'pr-0');

            const qualityEngDiv = document.createElement('div');
            qualityEngDiv.classList.add('quality-engg', 'insights-hover');

            const mobileDiv = document.createElement("div");
            mobileDiv.classList.add("find-more-mobile");

            columnDiv.appendChild(qualityEngDiv);

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    const imgElement = document.createElement('img');
                    imgElement.setAttribute('src', col.querySelector('picture').querySelector('img').getAttribute('src'));
                    imgElement.classList.add('img-fluid', 'podcast-image');
                    imgElement.setAttribute('alt', 'The Live Enterprise: How Large Companies can Act more like Startups')
                    qualityEngDiv.appendChild(imgElement);
                } else if(c==1){
                    const insightsDiv = createInsightsDiv(col, 'quality-content', "/content/dam/infosys-web/en/live-enterprise-book/index.html", 'icon-long-right-arrow', "/iki/books.html", 'find-more-white', 'icon-chevron-right-circle-white', 'icon-long-right-arrow')
                    qualityEngDiv.appendChild(insightsDiv);
                }
            })
            columnDiv.appendChild(mobileDiv);
            row2.appendChild(columnDiv);
        }

    })

    console.log(interestsMain);

    var section = document.createElement('section');
    section.classList.add('home-interests-wraper');
    section.appendChild(interestsMain);

    var outerDiv = document.createElement('div');
    outerDiv.classList.add('freeflowhtml', 'aem-GridColumn', 'aem-GridColumn--default--12');

    var mainElement = document.createElement('main');
    mainElement.classList.add('home-page-wraper');

    outerDiv.appendChild(mainElement);
    mainElement.appendChild(interestsMain);

    var parent = document.querySelector('main');
    var oldDiv = document.querySelector('.featured-container');
    parent.replaceChild(outerDiv, oldDiv);    
    
}
    


function createInsightsDiv(col, outerDivClass, insightsAnchorHref, firstSpanClass, insightsAnchorHref2, anchorSpan1Class, anchorSpan2Class, anchorSpan3Class){
    
    const insightsDiv = document.createElement('div');
    insightsDiv.classList.add(outerDivClass);

    [...col.childNodes].forEach((node,i)=>{
        if(i==1){
            const insightsh3 = document.createElement('h3');
            insightsh3.classList.add('interest-heading');

            const insightsAnchor = document.createElement('a');
            insightsAnchor.href = insightsAnchorHref;
            insightsAnchor.title = node.textContent.trim();
            insightsAnchor.textContent = node.textContent.trim();
            // insightsAnchor.classList.add('find-more-desktop');

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
        // console.log(node);
    })

    return insightsDiv;
}
