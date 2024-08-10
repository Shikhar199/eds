var accord3Div;
export default function decorate(block){
    console.log(block);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    var lists = container.querySelectorAll('ul');
    var blockHeading = container.querySelector('h2');

    var parentDivClass = ['col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12', 'pr-5'];
    var h2Class = ['h2-head', 'mb-20', 'wow', 'fadeInDown', 'animated'];
    var agendaDivClass = ['day-selection', 'wow', 'fadeInUp', 'animated'];
    var panelDivClass = ['panel-selection', 'wow', 'fadeInUp', 'animated'];
    var panelDivAttr = ['sectionKeynote','sectionSpotlight','sectionDiscussion','sectionBreakout','sectionAll'];

    var agendaaccordParentDiv = createAemElement('div', ["col-lg-8","col-md-8","col-sm-12","col-xs-12","accordian-main","wow","fadeInRight","animated"], {'data-wow-delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'});
    
    var parentDiv = createSelectionDiv(parentDivClass, h2Class, agendaDivClass, panelDivAttr, blockHeading, panelDivClass,lists);
    block.append(parentDiv);

    var panel1Heading = "";
    var panel2Heading = "";

    var accord1Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord1");   
    var accord2Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord2");
    accord3Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord3");

    var sub1Head = createAemElement('p', ['agenda-subhead'], null, null);
    var sub2Head = createAemElement('p', ['agenda-subhead'], null, null);
    var sub3Head = createAemElement('p', ['agenda-subhead'], null, null);

    var supTag = document.createElement('sup');
    supTag.textContent = 'th';

    sub1Head.appendChild(supTag);
    sub2Head.appendChild(supTag);
    sub3Head.appendChild(supTag);

    accord1Div.append(sub1Head);
    accord2Div.append(sub2Head);
    accord3Div.append(sub3Head);

    [...container.children].forEach((row,r)=>{
        if(r==3){
            panel1Heading = row.textContent.trim();
            sub1Head.textContent = panel1Heading;    
        }

        if(r==4){
            [...row.children].forEach((col,c)=>{
                var panelDiv = createPanel(col, null, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']});
                accord1Div.append(panelDiv);
            })
        }

        if(r==5){
            panel2Heading = row.textContent.trim();
            sub2Head.textContent = panel2Heading;    
        }

        if(r==6){
            [...row.children].forEach((col,c)=>{
                var panelDiv = createPanel(col, null, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']});
                accord2Div.append(panelDiv);
            })
        }

        if(r>=7&&r<=25){
            // console.log("Hi");
            createPanelWithImage(row, r);
        }
        // if(r==10){
        //     createPanelWithImage(row, r);
        // }
    })
}

function createSelectionDiv(parentDivClass, h2Class, agendaDivClass, panelDivAttr, blockHeading, panelDivClass, lists){
    const firstList = lists[0];
    const secondList = lists[1];
    const parentDiv = document.createElement('div');
    for(let cls in parentDivClass){
        parentDiv.classList.add(parentDivClass[cls]);
    }

    const blockHead = document.createElement('h2');
    for(let cls in h2Class){
        blockHead.classList.add(h2Class[cls]);
    }
    blockHead.setAttribute("data-wow-delay","0.2s");
    blockHead.setAttribute("style","visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;");
    blockHead.textContent = blockHeading.textContent.trim();

    const agendaDiv = document.createElement('div');
    for(let cls in agendaDivClass){
        agendaDiv.classList.add(agendaDivClass[cls]);
    }
    agendaDiv.setAttribute("data-wow-delay","0.2s");
    agendaDiv.setAttribute("style","visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;");

    const agendaUl = document.createElement('ul');
    const firstListChildren = Array.from(firstList.children);
    for(let i=0;i<firstListChildren.length;i++){
        firstListChildren[i].setAttribute("data-day","agendaaccord"+i);
        firstListChildren[i].classList.add('text-uppercase');
        agendaUl.append(firstListChildren[i]);
    }

    agendaDiv.append(agendaUl);

    const panelSelectionDiv = document.createElement('div');
    for(let cls in panelDivClass){
        panelSelectionDiv.classList.add(panelDivClass[cls]);
    }
    panelSelectionDiv.setAttribute("data-wow-delay","0.2s");
    panelSelectionDiv.setAttribute("style","visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;");

    const panelUl = document.createElement('ul');
    const secondListChildren = Array.from(secondList.children);
    for(let i=0;i<secondListChildren.length;i++){
        secondListChildren[i].setAttribute("data-day",panelDivAttr[i]);
        if(i==3){
            secondListChildren[i].classList.add('d-none');
        } else{
            secondListChildren[i].classList.add('d-block');
        }
        panelUl.append(secondListChildren[i]);
    }

    panelSelectionDiv.append(panelUl);

    parentDiv.append(blockHead);
    parentDiv.append(agendaDiv);
    parentDiv.append(panelSelectionDiv);

    return parentDiv;

}

function createPanel(col, anchorAttributes, isRoleTab, classes, tagClasses){
    var panelDiv = document.createElement('div');
    if(classes!==null){
        for(let cls of classes.outerPanelClass){
            panelDiv.classList.add(cls);
        }
    }
    

    var panelHeadingDiv = document.createElement('div');
    panelHeadingDiv.classList.add('panel-heading');
    
    if(isRoleTab){
        panelHeadingDiv.setAttribute('role','tab');
    }

    var anchorEle = document.createElement('a');
    if(anchorAttributes !== null){
        for(let attr in anchorAttributes){
            anchorEle.setAttribute(attr, anchorAttributes[attr]);
        }
    }

    var panelInnerDiv = document.createElement('div');
    panelInnerDiv.classList.add('panel-inner');

    var panelBlockDiv = document.createElement('div');
    if(classes!==null){
        for(let cls of classes.panelBlockClass){
            panelBlockDiv.classList.add(cls);
        }
    }

    var panelTimeDiv = document.createElement('div');
    panelTimeDiv.classList.add('panel-time');

    var ptags = col.querySelectorAll('p'); 

    if(ptags.length===3){
        var tagDiv = document.createElement('div');
        for(let cls of tagClasses){
            tagDiv.classList.add(cls);
        }
        tagDiv.textContent = ptags[0].textContent.trim();
        panelInnerDiv.appendChild(tagDiv);
        var heading = document.createElement('h4');
        heading.textContent = ptags[2].textContent.trim();

        panelTimeDiv.append(ptags[1]);
    } else{
        var heading = document.createElement('h4');
        heading.textContent = ptags[1].textContent.trim();

        panelTimeDiv.append(ptags[0]);
    }
        panelBlockDiv.append(panelTimeDiv);
        panelBlockDiv.append(heading);
        panelInnerDiv.append(panelBlockDiv);
        anchorEle.append(panelInnerDiv);
        panelHeadingDiv.append(anchorEle);
        panelDiv.append(panelHeadingDiv);

    return panelDiv;
}

function createAemElement(tag, classes, attributes, elementId){
    const tagElement = document.createElement(tag);

    if(classes!==null){
        for(let cls of classes){
            tagElement.classList.add(cls);
        }
    }

    if(attributes!==null){
        for(let attr in attributes){
            tagElement.setAttribute(attr,attributes[attr]);
        }
    }

    if(elementId!==null){
        tagElement.id = elementId;
    }
    return tagElement;

}

function createPanelWithImage(row, r){
    var agendaAttr;
    if(r==11){
        agendaAttr = 'agenda'+12;
    } else {
        agendaAttr = 'agenda'+(r-7);
    }
    console.log(agendaAttr);
    if(r==11){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, agendaAttr);
    } else if(r==13) {
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda14');
    } else if(r==14) {
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda4');
    } else if(r==15) {
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda5');        
    } else {
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne", "aria-expanded":"false", "style":"height: 0px;"}, agendaAttr);
    }
    const panelBodyDiv = createAemElement('div', ["panel-body"], null, null);
    if(r==9 || r==10 || r==14){
        panelBodyDiv.classList.add('agenda-border');
    }
    var panel = null;
    [...row.children].forEach((col,c)=>{
        
            if(c==0){
                if(col.hasChildNodes()){
                    if(r==7){
                        panel = createPanel(col , null, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']});
                        accord3Div.append(panel);
                    } else if(r==8){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#'+agendaAttr, 'aria-expanded':'false', 'aria-controls':agendaAttr, 'class':'collapsed'}, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']});
                        accord3Div.append(panel);
                    } else if(r==9){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#'+agendaAttr, 'aria-expanded':'false', 'aria-controls':agendaAttr, 'class':'collapsed'}, false, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']});
                        accord3Div.append(panel);
                    } else if(r==10){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#'+agendaAttr, 'aria-expanded':'false', 'aria-controls':agendaAttr, 'class':'collapsed'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionDiscussion', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accord3Div.append(panel);
                    } else if(r==11){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#'+agendaAttr, 'aria-expanded':'false', 'aria-controls':agendaAttr}, true, {'outerPanelClass':['panel', 'no-result', 'sectionKeynote', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accord3Div.append(panel);
                    } else if(r==12){
                        console.log("r is 12");
                        panel = createPanel(col , {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']},[]);
                        accord3Div.append(panel);
                    } else if(r==13){
                        console.log("r is 13");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda14', 'aria-expanded':'false', 'aria-controls':'agenda4'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionSpotlight', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-coral-medium']);
                        accord3Div.append(panel);
                    } else if(r==14){
                        console.log("r is 14");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda4', 'aria-expanded':'false', 'aria-controls':'agenda4'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionDiscussion', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accord3Div.append(panel);
                    } else if(r==15){
                        console.log("r is 15");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord2', 'href':'#agenda5', 'aria-expanded':'false', 'aria-controls':'agenda5'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionKeynote', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accord3Div.append(panel);
                    } else{
                        console.log("r > 15");
                        panel = createPanel(col, {}, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']}, ['pksns']);
                        accord3Div.append(panel);
                    }
                     
                }  
            } else if(c==1){
                if(col.hasChildNodes()){
                    var description = document.createElement('p');
                    description.classList.add('mt-10');
                    description.innerHTML = col.innerHTML.trim();
                    panelBodyDiv.appendChild(description);
                }
            } else if(c==2){
                if(col.hasChildNodes()){
                    const moderatorsDetails = col.querySelectorAll('p');
                    var moderatorsDetailsArr = Array.from(moderatorsDetails);
                    const moderatorLimit = Math.floor((moderatorsDetailsArr.length)/4);
                    let len = moderatorsDetailsArr.length;
                    var card = "";
                    // Create Moderators
                    for(let i=0 ; i< moderatorLimit; i++){
                        if(i==0){
                            if(r==10 || r==14){
                                card = createCards(moderatorsDetailsArr.slice(0,6), "moderators", i, ['panel-inner', 'mt-20', 'mb-20']);
                            }
                            else{
                                card = createCards(moderatorsDetailsArr.slice(0,6), "moderators", i, ['mb-20']);
                            }
                        } else{
                            card = createCards(moderatorsDetailsArr.slice(4*i+2,len), "moderators", i, []);
                        }
                        panelBodyDiv.appendChild(card);
                    }
                }
                
            } else if(c==3){
                // Create Speakers
                if(r==11){
                    console.log("inside 11 row last column");
                }
                if(col.hasChildNodes()){
                    const speakersDetails = col.querySelectorAll('p');
                    var speakersDetailsArr = Array.from(speakersDetails);
                    const speakerLimit = Math.floor((speakersDetailsArr.length)/4);
                    let len = speakersDetailsArr.length;
                    if(r==14){
                        console.log(len);
                        console.log(speakersDetailsArr);
                    }
                    var card="";
                    for(let i=0 ; i< speakerLimit;i++){
                        if(i==0){
                            if(r==9){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner']);
                            } else if(r==10){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'mb-20']);
                            } else if(r==11){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border', 'mb-20']);
                            } else if(r==13){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border', 'mb-20']);
                            } else if(r==14){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'mb-20']);
                            } else if(r==15){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border', 'mb-20']);
                            } else {
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border']);
                            }
                        } else{
                            if(r==14 && i==speakerLimit-1){
                                card = createCards(speakersDetailsArr.slice(4*i+2, len), "speakers", i, ['panel-inner']);
                            } else{
                                card = createCards(speakersDetailsArr.slice(4*i+2, 4*i+6), "speakers", i, ['panel-inner','mb-20']);
                                if(r==14){
                                    console.log(card);
                                }
                            }
                        }
                        panelBodyDiv.appendChild(card);
                    }
                }
            }
        })
        console.log(panelBodyDiv);
        if(panelBodyDiv.hasChildNodes()){
            agendaDiv.appendChild(panelBodyDiv);
            panel.appendChild(agendaDiv);
        }        
        console.log(panel);
}

function createAgendaDiv(col, agendaid, classes, attributes){
    var agendaDiv = document.createElement('div');
    agendaDiv.id = agendaid;

    for(let cls of classes){
        agendaDiv.classList.add(cls);
    }

    for(let key in attributes){
        agendaDiv.key = attributes[key];
    }

    var outerPanelDiv = document.createElement('div');
    outerPanelDiv.classList.add('panel-body', 'agenda-border');

    var description = document.createElement('p');
    description.classList.add('mt-10');
    description.textContent = col.textContent.trim();

    var panelInnerDiv = document.createElement('div');
    panelInnerDiv.classList.add('panel-inner', 'mt-20', 'mb-20');

    var pictureDiv = document.createElement('div');
    pictureDiv.classList.add('agenda-tag');

    const panelDetailsDiv = document.createElement('div');
    panelDetailsDiv.classList.add('panel-details');

    // Create the <p> element with class 'text-uppercase' and set its text content
    const moderatorP = document.createElement('p');
    moderatorP.classList.add('text-uppercase');
    moderatorP.textContent = 'Moderator';

    panelDetailsDiv.appendChild(moderatorP);

    const anchor = document.createElement('a');
    anchor.href = '/confluence/2023/emea/speakers.html#allan';
    anchor.title = 'Allan Wilkins';
    anchor.classList.add('sp-href');

    // Create the speaker-details div
    const speakerDetailsDiv = document.createElement('div');
    speakerDetailsDiv.classList.add('speaker-details');

    const speakerImgDiv = document.createElement('div');
    speakerImgDiv.classList.add('speaker-img');

    // Create the <img> element with the required attributes
    const speakerImg = document.createElement('img');
    speakerImg.src = '/content/dam/infosys-web/en/confluence/images/2023/emea/allan-wilkins.jpg';
    speakerImg.alt = 'Allan Wilkins';

    // Append the <img> element to the speaker-img div
    speakerImgDiv.appendChild(speakerImg);

    // Append the speaker-img div to the speaker-details div
    speakerDetailsDiv.appendChild(speakerImgDiv);

    const speakerH5 = document.createElement('h5');

    // Create the <b> element and set its text content
    const speakerB = document.createElement('b');
    speakerB.textContent = 'Allan Wilkins,';

    // Create the <span> element with class 'd-block' and set its text content
    const speakerSpan = document.createElement('span');
    speakerSpan.classList.add('d-block');
    speakerSpan.textContent = 'VP Advisory, Gartner';

    // Append the <b> element and the <span> element to the <h5> element
    speakerH5.appendChild(speakerB);
    speakerH5.appendChild(speakerSpan);

    speakerDetailsDiv.appendChild(speakerH5);

    // Append the speaker-details div to the anchor tag
    anchor.appendChild(speakerDetailsDiv);

    // Append the anchor tag to the main container div
    panelDetailsDiv.appendChild(anchor);

}

function createCards(details, type, i, pannelInnerClass){
    var panelInnerDiv = document.createElement('div');
    for(let cls of pannelInnerClass){
        panelInnerDiv.classList.add(cls);
    }

    var pictureDiv = document.createElement('div');
    pictureDiv.classList.add('agenda-tag');

    const img = document.createElement('img');
    img.setAttribute('src', details[0].querySelector('picture').querySelector('img').getAttribute('src'));
    img.setAttribute("width","20px");
    img.setAttribute("alt","");

    pictureDiv.append(img);

    const panelDetailsDiv = document.createElement('div');
    panelDetailsDiv.classList.add('panel-details');

    if(i==0){
        const moderatorP = document.createElement('p');
        moderatorP.classList.add('text-uppercase');
        moderatorP.textContent = details[1].textContent.trim();
        panelDetailsDiv.appendChild(moderatorP);
    }

    const anchor = document.createElement('a');
    anchor.href = details[details.length-1].textContent.trim();
    anchor.title = details[details.length-3].textContent.trim();
    anchor.classList.add('sp-href');
            
    const speakerDetailsDiv = document.createElement('div');
    speakerDetailsDiv.classList.add('speaker-details');
            
    const speakerImgDiv = document.createElement('div');
    speakerImgDiv.classList.add('speaker-img');

    const speakerImg = document.createElement('img');
    speakerImg.setAttribute('src', details[details.length-4].querySelector('picture').querySelector('img').getAttribute('src'));
    speakerImg.alt = details[details.length-3].textContent.trim();

    speakerImgDiv.appendChild(speakerImg);

    speakerDetailsDiv.appendChild(speakerImgDiv);

    const speakerH5 = document.createElement('h5');

    const speakerB = document.createElement('b');
    speakerB.textContent = details[details.length-3].textContent.trim();

    const speakerSpan = document.createElement('span');
    speakerSpan.classList.add('d-block');
    speakerSpan.textContent = details[details.length-2].textContent.trim();

    speakerH5.appendChild(speakerB);
    speakerH5.appendChild(speakerSpan);

    speakerDetailsDiv.appendChild(speakerH5);

    anchor.appendChild(speakerDetailsDiv);

    panelDetailsDiv.appendChild(anchor);

    panelInnerDiv.appendChild(pictureDiv);
    panelInnerDiv.appendChild(panelDetailsDiv);

    return panelInnerDiv;

}