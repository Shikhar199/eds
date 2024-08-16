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

    var parentDiv = createSelectionDiv(parentDivClass, h2Class, agendaDivClass, panelDivAttr, blockHeading, panelDivClass,lists);
    block.append(parentDiv);

    console.log(block);

    var panel1Heading = "";
    var panel2Heading = "";
    var panel3Heading = "";
    var panel4Heading = "";

    var accordParentDiv = createAemElement('div', ['col-lg-8', 'col-md-8', 'col-sm-12', 'col-xs-12', 'accordian-main', 'wow', 'fadeInRight', 'animated'], {'data-wow-delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'}, null);

    var accord1Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord1");   
    var accord2Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord2");
    var accord3Div = createAemElement('div', ['days', 'active'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord3");
    var accord4Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord4");

    var sub1Head = createAemElement('p', ['agenda-subhead'], null, null);
    var sub2Head = createAemElement('p', ['agenda-subhead'], null, null);
    var sub3Head = createAemElement('p', ['agenda-subhead'], null, null);
    var sub4Head = createAemElement('p', ['agenda-subhead'], null, null);
    // <p class="agenda-subhead">Thursday, December 7<sup>th</sup></p>


    var supTag = document.createElement('sup');
    supTag.textContent = 'th';

    sub1Head.appendChild(supTag);
    sub2Head.appendChild(supTag);
    sub3Head.appendChild(supTag);
    sub4Head.appendChild(supTag);

    accord1Div.append(sub1Head);
    accord2Div.append(sub2Head);
    accord3Div.append(sub3Head);
    accord4Div.append(sub4Head);

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

        if(r==7){
            panel3Heading = row.textContent.trim();
            sub3Head.textContent = panel3Heading;
        }
        
        if(r==21){
            panel4Heading = row.textContent.trim();
            sub4Head.textContent = panel4Heading;
        }

        if(r>=8&&r<=20){
            // console.log("Hi");
            // var accord3Panel = createPanelWithImage(row, r, accord3Div);
            // console.log(accord3Panel);
            // accord3Div.append(accord3Panel);
            createPanelWithImage(row, r, accord3Div);
        }

        if(r>=22&&r<=32){
            // var accord4Panel = createPanelWithImage(row, r, accord4Div);
            // accord4Div.append(accord4Panel);
            createPanelWithImage(row, r, accord4Div);
        }
        // if(r==10){
        //     createPanelWithImage(row, r);
        // }
    })
    accordParentDiv.append(accord1Div);
    accordParentDiv.append(accord2Div);
    accordParentDiv.append(accord3Div);
    accordParentDiv.append(accord4Div);

    const section = document.createElement('section');
    section.id = 'agenda';
    section.className = 'agenda bg-light-white py-75';

    const article = document.createElement('article');
    article.className = 'container';

    block.append(accordParentDiv);

    const colLeft = block.querySelector('.col-lg-4');
    const colRight = block.querySelector('.col-lg-8');

    const row = document.createElement('div');
    row.className = 'row';

    row.appendChild(colLeft);
    row.appendChild(colRight);

    // Append the row to the article
    article.appendChild(row);

    // Append the article to the section
    section.appendChild(article);

    console.log(colLeft);
    console.log(colRight);
    console.log(section);
    
    block.parentNode.replaceChild(section, block);

    console.log(block);
    functionality();
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
        if(i==2){
            firstListChildren[i].classList.add('active');    
        }
        firstListChildren[i].setAttribute("data-day","agendaaccord"+(i+1));
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
        secondListChildren[i].setAttribute("data-panel",panelDivAttr[i]);
        if(i==4){
            secondListChildren[i].classList.add('active');
        }
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

function createPanelWithImage(row, r, accordDiv){
    var agendaAttr;
    if(r==11){
        agendaAttr = 'agenda'+12;
    } else {
        agendaAttr = 'agenda'+(r-7);
    }
    if(r==9){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne", 'aria-expanded':'false', 'style':'height: 0px;'}, 'agenda1');
    } else if(r==10){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne", "aria-expanded":"false", "style":"height: 0px;"}, 'agenda2');
    } else if(r==11){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne", "aria-expanded":"false", "style":"height: 0px;"}, 'agenda3');
    } else if(r==12){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda12');
    } else if(r==14) {
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda14');
    } else if(r==15) {
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda4');
    } else if(r==16) {
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda5');        
    } else if(r==22){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda6');
    } else if(r==23){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda13');
    } else if(r==24){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda6');       
    } else if(r==25){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda13');
    } else if(r==26){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda11');
    } else if(r==27){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda7');
    } else if(r==28 || r==30){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda9');
    } else if(r==29){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda8');
    } else if(r==31){
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne"}, 'agenda10');
    } else{
        var agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne", "aria-expanded":"false", "style":"height: 0px;"}, agendaAttr);
    }
    const panelBodyDiv = createAemElement('div', ["panel-body"], null, null);
    if(r==9 || r==10 || r==11 || r==14 || r==22 || r==27 || r==28 || r==29 || r==30 || r==31){
        panelBodyDiv.classList.add('agenda-border');
    }
    var panel = null;
    [...row.children].forEach((col,c)=>{
        
            if(c==0){
                if(col.hasChildNodes()){
                    if(r==8){
                        panel = createPanel(col , {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']},[]);
                        accordDiv.append(panel);
                    } else if(r==9){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda1', 'aria-expanded':'false', 'aria-controls':'agenda1', 'class':'collapsed'}, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']}, []);
                        accordDiv.append(panel);
                    } else if(r==10){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda2', 'aria-expanded':'false', 'aria-controls':'agenda2', 'class':'collapsed'}, false, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']},[]);
                        accordDiv.append(panel);
                    } else if(r==11){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#'+'agenda3', 'aria-expanded':'false', 'aria-controls':'agenda3', 'class':'collapsed'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionDiscussion', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==12){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda12', 'aria-expanded':'false', 'aria-controls':'agenda12'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionKeynote', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==13){
                        panel = createPanel(col , {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']},[]);
                        accordDiv.append(panel);
                    } else if(r==14){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda14', 'aria-expanded':'false', 'aria-controls':'agenda4'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionSpotlight', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-coral-medium']);
                        accordDiv.append(panel);
                    } else if(r==15){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda4', 'aria-expanded':'false', 'aria-controls':'agenda4'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionDiscussion', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==16){
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord2', 'href':'#agenda5', 'aria-expanded':'false', 'aria-controls':'agenda5'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionKeynote', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==20 || r==21){
                        panel = createPanel(col, {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==22 || r==23){
                        panel = createPanel(col, {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']}, []);
                        accordDiv.append(panel);
                    } else if(r==24){
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord5', 'href':'#agenda6', 'aria-expanded':'false', 'aria-controls':'agenda6'}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionKeynote'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==25){
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda13', 'aria-expanded':'false', 'aria-controls':'agenda13'}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionDiscussion'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==26){
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda11', 'aria-expanded':'false', 'aria-controls':'agenda11'}, true, {'outerPanelClass':['panel', 'sectionSpotlight', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-coral-medium']);
                        accordDiv.append(panel);
                    } else if(r==27){
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda7', 'aria-expanded':'false', 'aria-controls':'agenda7'}, true, {'outerPanelClass':['panel', 'sectionDiscussion', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==29){
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda8', 'aria-expanded':'false', 'aria-controls':'agenda8'}, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==30){
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda9', 'aria-expanded':'false', 'aria-controls':'agenda9'}, true, {'outerPanelClass':['panel', 'sectionDiscussion', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==31){
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord4', 'href':'#agenda10', 'aria-expanded':'false', 'aria-controls':'agenda10'}, true, {'outerPanelClass':['panel', 'sectionKeynote', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else {
                        panel = createPanel(col, {}, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']}, []);
                        accordDiv.append(panel);
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
                            if(r==10 || r==11 || r==14 || r==15 || r==27 || r==28 || r==29 || r==30 || r==31){
                                card = createCards(moderatorsDetailsArr.slice(0,6), "moderators", i, ['panel-inner', 'mt-20', 'mb-20']);
                            } else if(r==23||r==25){
                                card = createCards(moderatorsDetailsArr.slice(0,6), "moderators", i, ['panel-inner', 'agenda-border', 'mb-20']);
                            }else{
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
                            if(r==10){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner']);
                            } else if(r==11){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'mb-20']);
                            } else if(r==12){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border', 'mb-20']);
                            } else if(r==14){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border', 'mb-20']);
                            } else if(r==15){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'mb-20']);
                            } else if(r==16||r==26){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border', 'mb-20']);
                            } else if(r==23){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'mt-20', 'mb-20']);
                            } else if(r==24){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'mt-20', 'mb-20']);
                            } else if(r==25){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner']);
                            } else if(r==27 || r==28 || r==29 || r==30){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'mb-20']);
                            } else if(r==31){
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner']);
                            }else {
                                card = createCards(speakersDetailsArr.slice(0,6), "speakers", i, ['panel-inner', 'agenda-border']);
                            }
                        } else{
                            if((r==14||r==15||r==27||r==28||r==24||r==30) && i==speakerLimit-1){
                                card = createCards(speakersDetailsArr.slice(4*i+2, len), "speakers", i, ['panel-inner']);
                            } else{
                                card = createCards(speakersDetailsArr.slice(4*i+2, 4*i+6), "speakers", i, ['panel-inner','mb-20']);
                            }
                        }
                        panelBodyDiv.appendChild(card);
                    }
                }
            }
        })
        if(panelBodyDiv.hasChildNodes()){
            agendaDiv.appendChild(panelBodyDiv);
            panel.appendChild(agendaDiv);
        }  
        return panel;      
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

function functionality(){
    // Confluence Insights By Drop Dwn Script END
    var dataId = [];
    $('.panel-selection ul li').each(function () {
        dataId.push($(this).data('panel'));
    });

    // sectionSpecial
    if ($(".days.active ." + dataId[0]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-block').addClass('d-none');
    }

    // sectionKeynote
    if ($(".days.active ." + dataId[1]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-block').addClass('d-none');
    }

    // sectionChat
    if ($(".days.active ." + dataId[2]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-block').addClass('d-none');
    }

    // sectionSpotlight
    if ($(".days.active ." + dataId[3]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-block').addClass('d-none');
    }

    // sectionDiscussion
    if ($(".days.active ." + dataId[4]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-block').addClass('d-none');
    }

    // sectionBreakout
    if ($(".days.active ." + dataId[5]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-block').addClass('d-none');
    }

    // sectionShowcase
    if ($(".days.active ." + dataId[6]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-block').addClass('d-none');
    }

    // sectionAll
    if ($(".days.active ." + dataId[7]).hasClass("d-block")) {
        $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-none').addClass('d-block');
    } else {
        $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-block').addClass('d-none');
    }


    $(".day-selection ul li").click(function () {
        $(".panel-selection ul li").removeClass("active");
        $('.panel-selection ul li[data-panel="sectionAll"]').addClass("active");
        $(".day-selection ul li").removeClass("active");
        $(this).addClass("active");
        $(".panel").removeClass("d-none");
        $(".panel").addClass("d-block");
        $(".accordian-main").find("p.no-blocks-available").remove();
        var $day = $(this).data("day");
        if ($day == "bothdays") {
            $(".days").addClass("active");
        } else {
            $(".days").removeClass("active");
            $("#" + $day).addClass("active");
        }
        // sectionSpecial
        if ($(".days.active ." + dataId[0]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-block').addClass('d-none');
        }

        // sectionKeynote
        if ($(".days.active ." + dataId[1]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-block').addClass('d-none');
        }

        // sectionChat
        if ($(".days.active ." + dataId[2]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-block').addClass('d-none');
        }

        // sectionSpotlight
        if ($(".days.active ." + dataId[3]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-block').addClass('d-none');
        }

        // sectionDiscussion
        if ($(".days.active ." + dataId[4]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-block').addClass('d-none');
        }

        // sectionBreakout
        if ($(".days.active ." + dataId[5]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-block').addClass('d-none');
        }

        // sectionShowcase
        if ($(".days.active ." + dataId[6]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-block').addClass('d-none');
        }

        // sectionAll
        if ($(".days.active ." + dataId[7]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-none').addClass('d-block');
        } else {
            $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-block').addClass('d-none');
        }

        $("html, body").animate({
            scrollTop: $(".accordian-main").offset().top - 100,
        },
            700
        );
    });

    $(".panel-selection ul li").click(function () {
        console.log("panel clicked");
        $(".panel-selection ul li").removeClass("active");
        $(this).addClass("active");
        var $panel = $(this).data("panel");
        if ($panel == "sectionAll") {
            $(".no-result").removeClass("d-none");
            $(".no-result").addClass("d-block");
            // if ($('.days.active .' + $panel).hasClass('d-block')) {
            //   $('.accordian-main').find('p.no-blocks-available').remove();
            // } else {
            $(".accordian-main").find("p.no-blocks-available").remove();
            //   $('.accordian-main').append("<p class='no-blocks-available'>No Result Found!</p>");
            // }
        } else {
            $(".no-result").addClass("d-none");
            $(".no-result").removeClass("d-block");
            $(".days.active ." + $panel).removeClass("d-none");
            $(".days.active ." + $panel).addClass("d-block");
            if ($(".days.active ." + $panel).hasClass("d-block")) {
                //console.log($panel);
                $(".accordian-main").find("p.no-blocks-available").remove();
            } else {
                $(".accordian-main").find("p.no-blocks-available").remove();
                $(".accordian-main").append(
                    "<p class='no-blocks-available'>No Result Found!</p>"
                );
            }
        }
        $("html, body").animate({
            scrollTop: $(".accordian-main").offset().top - 100,
        },
            700
        );
    });
}