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
    var accord3Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord3");
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
            var accord3Panel = createPanelWithImage(row, r, accord3Div);
            accord3Div.append(accord3Panel);
        }

        if(r>=22&&r<=32){
            var accord4Panel = createPanelWithImage(row, r, accord4Div);
            accord4Div.append(accord4Panel);
        }
        // if(r==10){
        //     createPanelWithImage(row, r);
        // }
    })
    accordParentDiv.append(accord1Div);
    accordParentDiv.append(accord2Div);
    accordParentDiv.append(accord3Div);
    accordParentDiv.append(accord4Div);

    block.append(accordParentDiv);
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

function createPanelWithImage(row, r, accordDiv){
    var agendaAttr;
    if(r==11){
        agendaAttr = 'agenda'+12;
    } else {
        agendaAttr = 'agenda'+(r-7);
    }
    console.log(agendaAttr);
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
                        console.log("r is 8");
                        panel = createPanel(col , {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']},[]);
                        accordDiv.append(panel);
                    } else if(r==9){
                        console.log("r is 9");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda1', 'aria-expanded':'false', 'aria-controls':'agenda1', 'class':'collapsed'}, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']}, []);
                        accordDiv.append(panel);
                    } else if(r==10){
                        console.log("r is 10");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda2', 'aria-expanded':'false', 'aria-controls':'agenda2', 'class':'collapsed'}, false, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block', 'pl-0']},[]);
                        accordDiv.append(panel);
                    } else if(r==11){
                        console.log("r is 11");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#'+'agenda3', 'aria-expanded':'false', 'aria-controls':'agenda3', 'class':'collapsed'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionDiscussion', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==12){
                        console.log("r is 12");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda12', 'aria-expanded':'false', 'aria-controls':'agenda12'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionKeynote', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==13){
                        console.log("r is 13");
                        panel = createPanel(col , {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']},[]);
                        accordDiv.append(panel);
                    } else if(r==14){
                        console.log("r is 14");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda14', 'aria-expanded':'false', 'aria-controls':'agenda4'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionSpotlight', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-coral-medium']);
                        accordDiv.append(panel);
                    } else if(r==15){
                        console.log("r is 15");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda4', 'aria-expanded':'false', 'aria-controls':'agenda4'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionDiscussion', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==16){
                        console.log("r is 16");
                        panel = createPanel(col , {'data-toggle':'collapse', 'data-parent':'#agendaaccord2', 'href':'#agenda5', 'aria-expanded':'false', 'aria-controls':'agenda5'}, true, {'outerPanelClass':['panel', 'no-result', 'sectionKeynote', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==20 || r==21){
                        console.log("r is 20");
                        panel = createPanel(col, {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==22 || r==23){
                        console.log("r is 22 or 23");
                        panel = createPanel(col, {}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionAll'],'panelBlockClass': ['panel-block', 'pl-0']}, []);
                        accordDiv.append(panel);
                    } else if(r==24){
                        console.log("r is 24");
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord5', 'href':'#agenda6', 'aria-expanded':'false', 'aria-controls':'agenda6'}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionKeynote'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else if(r==25){
                        console.log("r is 25");
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda13', 'aria-expanded':'false', 'aria-controls':'agenda13'}, true, {'outerPanelClass':['panel', 'no-result', 'd-block', 'sectionDiscussion'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==26){
                        console.log("r is 26");
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda11', 'aria-expanded':'false', 'aria-controls':'agenda11'}, true, {'outerPanelClass':['panel', 'sectionSpotlight', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-coral-medium']);
                        accordDiv.append(panel);
                    } else if(r==27){
                        console.log("r is 27");
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda7', 'aria-expanded':'false', 'aria-controls':'agenda7'}, true, {'outerPanelClass':['panel', 'sectionDiscussion', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==29){
                        console.log("r is 29");
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda8', 'aria-expanded':'false', 'aria-controls':'agenda8'}, true, {'outerPanelClass':['panel', 'no-result'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==30){
                        console.log("r is 30");
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord1', 'href':'#agenda9', 'aria-expanded':'false', 'aria-controls':'agenda9'}, true, {'outerPanelClass':['panel', 'sectionDiscussion', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns', 'bg-amethyst-medium']);
                        accordDiv.append(panel);
                    } else if(r==31){
                        console.log("r is 31");
                        panel = createPanel(col, {'data-toggle':'collapse', 'data-parent':'#agendaaccord4', 'href':'#agenda10', 'aria-expanded':'false', 'aria-controls':'agenda10'}, true, {'outerPanelClass':['panel', 'sectionKeynote', 'no-result', 'd-block'],'panelBlockClass': ['panel-block']}, ['pksns']);
                        accordDiv.append(panel);
                    } else {
                        console.log("r > 15");
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


//$(document).ready(function () {
    $(window).on("load", function () {
        // Menu Script
        /* ------------- onclick Menu body scroll hidden  ---------------*/
        $(document).on("click", "body", function (e) {
          if (!$(e.target).is("#trigger-overlay > .burger")) {
            $(".overlay").removeClass("open");
            $("body").removeAttr("style");
          }
        });
      
        $("#trigger-overlay").click(function () {
          $("body").css("overflow-y", "hidden");
        });
        $(".overlay-close, .close-overlay").click(function () {
          $("body").removeAttr("style");
        });
      
        //hero banner Slider
        var home_banner_slider_length = $(".home-banner-slider").find(".item").length;
        //alert(home_banner_slider_length);
        $(".home-banner-slider").owlCarousel({
          dots: home_banner_slider_length > 1 ? true : false,
          nav: home_banner_slider_length > 1 ? true : false,
          touchDrag: home_banner_slider_length > 1 ? true : false,
          mouseDrag: home_banner_slider_length > 1 ? true : false,
          loop: home_banner_slider_length > 1 ? true : false,
          autoplay: home_banner_slider_length > 1 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: home_banner_slider_length > 1 ? true : false,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            768: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
        });
      
        //Sponsors Slider
        // var r = $(".sponsor_slider"),
        //   sponsor_slider_length = r.find(".item").length;
        // s = r.owlCarousel({
        var sponsor_slider_length = $(".sponsor_slider").find(".item").length;
        //alert(sponsor_slider_length);
        var $owlCarousel = $(".sponsor_slider").owlCarousel({
          //dotsData: sponsor_slider_length > 1 ? true : false,
          //dots: sponsor_slider_length > 1 ? true : false,
          dotsData: true,
          dots: true,
          nav: sponsor_slider_length > 1 ? false : false,
          touchDrag: sponsor_slider_length > 1 ? true : false,
          mouseDrag: sponsor_slider_length > 1 ? true : false,
          loop: sponsor_slider_length > 1 ? false : false,
          autoplay: sponsor_slider_length > 1 ? false : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: sponsor_slider_length > 1 ? true : false,
          //autoHeightClass: 'owl-height',
          autoHeight: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            768: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
        });
      
        //$(".sponsor-logo .close").click(function () {
        //      $(".sponsor-logo .close").hasClass("slider-play"),
        //        s.trigger("play.owl.autoplay"),
        //        $(".sponsor-logo .close").removeClass("slider-play");
        //    }),
        //    $(".slider-stop").click(function () {
        //      $(".sponsor-logo .close").addClass("slider-play"),
        //        s.trigger("stop.owl.autoplay");
        //    });
      
        $owlCarousel.trigger('refresh.owl.carousel');
        //hero banner Slider
        var hero_slider_length = $("#hero_slider_carousel").find(".item").length;
        //alert(hero_slider_length);
        $("#hero_slider_carousel").owlCarousel({
          dots: hero_slider_length > 1 ? true : false,
          nav: hero_slider_length > 1 ? true : false,
          touchDrag: hero_slider_length > 1 ? true : false,
          mouseDrag: hero_slider_length > 1 ? true : false,
          loop: hero_slider_length > 1 ? true : false,
          autoplay: hero_slider_length > 1 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: hero_slider_length > 1 ? true : false,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            768: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
        });
      
        /* ------------- Minds Unite SLIDER ---------------*/
        var minds_unite_slider_length = $(".minds-unite-carousel").find(".item").length;
        $(".minds-unite-carousel").owlCarousel({
          dots: minds_unite_slider_length > 3 ? false : false,
          nav: minds_unite_slider_length > 3 ? true : false,
          touchDrag: minds_unite_slider_length > 3 ? true : false,
          mouseDrag: minds_unite_slider_length > 3 ? true : false,
          loop: minds_unite_slider_length > 3 ? true : false,
          autoplay: minds_unite_slider_length > 3 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: minds_unite_slider_length > 3 ? true : false,
          margin: 15,
          responsive: {
            0: {
              items: 1,
              nav: minds_unite_slider_length > 1 ? true : false,
              loop: minds_unite_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            600: {
              items: 2,
              nav: minds_unite_slider_length > 1 ? true : false,
              loop: minds_unite_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            768: {
              items: 3,
              slideBy: 3,
            },
            1030: {
              margin: 75,
              items: 3,
              slideBy: 3,
            },
          },
        });
      
        /* ------------- Item SLIDER ---------------*/
        var item_slider_length = $(".item-slider-carousel").find(".item").length;
        $(".item-slider-carousel").owlCarousel({
          dots: item_slider_length > 4 ? false : false,
          nav: item_slider_length > 4 ? true : false,
          touchDrag: item_slider_length > 4 ? true : false,
          mouseDrag: item_slider_length > 4 ? true : false,
          loop: item_slider_length > 4 ? true : false,
          autoplay: item_slider_length > 4 ? false : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: item_slider_length > 4 ? true : false,
          margin: 20,
          responsive: {
            0: {
              items: 1,
              nav: item_slider_length > 1 ? true : false,
              loop: item_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            600: {
              items: 2,
              nav: item_slider_length > 1 ? true : false,
              loop: item_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            768: {
              items: 3,
              slideBy: 3,
            },
            1200: {
              items: 4,
              slideBy: 4,
            },
          },
        });
      
        /* ------------- Item SLIDER ---------------*/
        var gallery_item_carousel_length = $(".gallery-item-carousel").find(".item").length;
        $(".gallery-item-carousel").owlCarousel({
          dots: gallery_item_carousel_length > 3 ? false : false,
          nav: gallery_item_carousel_length > 3 ? true : false,
          touchDrag: gallery_item_carousel_length > 3 ? true : false,
          mouseDrag: gallery_item_carousel_length > 3 ? true : false,
          loop: gallery_item_carousel_length > 3 ? true : false,
          autoplay: gallery_item_carousel_length > 3 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: gallery_item_carousel_length > 3 ? true : false,
          margin: 20,
          responsive: {
            0: {
              items: 1,
              stagePadding: 60,
            },
            600: {
              items: 1,
              stagePadding: 150,
            },
            768: {
              items: 3,
              slideBy: 3,
            },
            1030: {
              items: 3,
              slideBy: 3,
            },
          },
        });
      
        // Agenda Script
        function timezone() {
          var timereload = $(".time-reload").length;
          /*console.log(timereload);*/
      
          function disp(divs) {
            for (var i = 0; i < divs.length; i++) {
              var $this = divs[i];
              var startTime = divs[i].dataset.starttime;
              var endTime = divs[i].dataset.endtime;
              divs[i].innerHTML = localtime(startTime) + " - Your local time."; //+localtime(endTime) +
            }
          }
          disp($(".time-reload").toArray());
      
          function localtime(time) {
            var d = new Date(time);
            var theminutes = d.getMinutes();
            var thehours = d.getHours();
            if (theminutes < 10) {
              theminutes = "0";
              theminutes += d.getMinutes();
            } else {
              theminutes = d.getMinutes();
              thehours = d.getHours();
            }
            return thehours + ":" + theminutes;
          }
      
          function giventime(time) {
            var d = new Date(time);
            var theminutes = d.getUTCMinutes();
            var thehours = d.getUTCHours();
            if (theminutes < 10) {
              theminutes = "0";
              theminutes += d.getUTCMinutes();
            } else {
              theminutes = d.getUTCMinutes();
              thehours = d.getUTCHours();
            }
            return thehours + ":" + theminutes;
          }
        }
        timezone();
      
        // Speaker FILTER
        $(".panel-selection-speaker ul li").click(function () {
          $(".panel-selection-speaker ul li").removeClass("active");
          $(this).addClass("active");
          var $panel_name = $(this).data("panel-name");
          if ($panel_name == "showAll") {
            $(".no-item").removeClass("d-none");
            $(".no-item").addClass("d-block");
            $(".no-blocks-available").addClass("d-none");
            $(".no-blocks-available").removeClass("d-block");
            $(".item-profile-bio").addClass("d-none");
            $(".item-profile-bio").removeClass("d-block");
          } else {
            // console.log($panel_name);
            $(".item-profile-bio").addClass("d-none");
            $(".item-profile-bio").removeClass("d-block");
            $(".no-item").addClass("d-none");
            $(".no-item").removeClass("d-block");
            $(".no-item." + $panel_name).removeClass("d-none");
            $(".no-item." + $panel_name).addClass("d-block");
      
            if ($(".no-item." + $panel_name).hasClass("d-block")) {
              $(".no-blocks-available").addClass("d-none");
              $(".no-blocks-available").removeClass("d-block");
            } else {
              $(".no-blocks-available").removeClass("d-none");
              $(".no-blocks-available").addClass("d-block");
            }
          }
          $("html, body").animate({
            scrollTop: $(".speakes-sec").offset().top - 75,
          }, 1000);
        });
      
        var screen_size = $(window).width();
        if (screen_size >= 767) {
          var cols = $(".no-item");
          cols.click(function () {
            var $class_name = $(this).find(".item-slider-head").html().toLowerCase().split(/\s+/).join("-");
            var $profile_name = $(this).find(".item-slider-head").html();
            var $profile_designation = $(this).find(".item-slider-para").html();
            var $data_para = $(this).find(".expand-para").html();
      
            console.log($data_para);
      
            $(".item-profile-bio").remove();
      
            var group = ($(this).index() + 1) / 4;
            if (Number.isInteger(group)) {
              group = Math.trunc(group);
              j = group * 4 - 1;
            } else {
              group = Math.trunc(group);
              j = (group + 1) * 4 - 1;
            }
      
            if (cols.get(j) === undefined) j = $(".no-item").length - 1;
      
            $(cols.get(j)).after('<div class="item-profile-bio col-lg-12 col-md-12 col-sm-12 col-xs-12 ' + $class_name + '"><div class="item-bio  bg-light-white mb-30"><div class="speaker-bio-details"><a href="javascript:void(0);" title="Close" class="speaker-close">&times</a><h4 class="profile-name">' + $profile_name + '</h4><p class="profile-designation">' + $profile_designation + "</p>" + $data_para + "</div></div>");
      
            j = 0;
      
            $(".speaker-close").click(function () {
              console.log($class_name);
              $($class_name).attr("id", "asdsadsa");
              // $('.item-profile-bio').addClass('d-none');
              // $('.item-profile-bio').removeClass('d-block');
              $(".item-profile-bio").remove();
              $("html, body").animate({
                scrollTop: $(".speakes-sec").offset().top - 100,
              }, 1000);
            });
      
            $("html, body").animate({
              scrollTop: $(".item-profile-bio").offset().top - 50,
            }, 1000);
          });
        } else {
          var cols = $(".no-item");
          cols.click(function () {
            var $class_name = $(this).find(".item-slider-head").html().toLowerCase().split(/\s+/).join("-");
            var $profile_name = $(this).find(".item-slider-head").html();
            var $profile_designation = $(this).find(".item-slider-para").html();
            var $data_para = $(this).find(".expand-para").html();
      
            $(".item-profile-bio").remove();
      
            $(this).after('<div class="item-profile-bio col-lg-12 col-md-12 col-sm-12 col-xs-12' + $class_name + '"><div class="item-bio bg-light-white mb-30"><div class="speaker-bio-details"><a href="javascript:void(0);" title="Close" class="speaker-close">&times</a><h2 class="profile-name">' + $profile_name + '</h2><p class="profile-designation">' + $profile_designation + "</p>" + $data_para + "</div></div>");
      
            $(".speaker-close").click(function () {
              $(".item-profile-bio").addClass("d-none");
              $(".item-profile-bio").removeClass("d-block");
            });
      
            $("html, body").animate({
                scrollTop: $(".item-profile-bio").offset().top - 50,
              },
              1000
            );
          });
        }
      
        // Speaker Filter END
      
        // APAC Insights Filter Start
      
        var year = $(".year");
        year.click(function () {
          $(".year").removeClass("active-year");
          $(this).addClass("active-year");
          var year_num = $(this).data("year");
          if (year_num == "viewall") {
            $(".sort-year").removeClass("d-none");
            $(".sort-year").addClass("d-block");
          } else {
            $(".sort-year").addClass("d-none");
            $(".sort-year").removeClass("d-block");
            $(".sort-year." + year_num).removeClass("d-none");
            $(".sort-year." + year_num).addClass("d-block");
          }
      
          $("html, body").animate({
              scrollTop: $(".scrollto").offset().top - 100,
            },
            700
          );
        });
      
        // APAC Insights Filter END
      
        // Confluence Insights By Drop Dwn Script START
      
        var $gridFilter = $(".grid-filter"),
          $gridItem = $gridFilter.find(".grid-item"),
          $region_location = $('select[name="region"]'),
          $region_year = $('select[name="year"]'),
          $select = $("select.trainee-filter"),
          $viewAll = $("#rf-view-all");
      
        var $region = [],
          $year = [];
      
        function showAll() {
          $region_location.prop("selectedIndex", 0);
          $region_year.prop("selectedIndex", 0);
          $gridItem.show().removeClass("selected third");
          $gridFilter.removeClass("filtered");
        }
      
        function filterItems() {
          var $activeClass = "";
      
          if ($region_year.val() !== "*") {
            $activeClass += $region_year.val();
          }
          if ($region_location.val() !== "*") {
            $activeClass += $region_location.val();
          }
      
          if ($activeClass !== "") {
            $gridItem.hide().removeClass("selected").removeClass("third");
            $gridFilter
              .addClass("filtered")
              .find($activeClass)
              .show()
              .addClass("selected")
              .filter(function (index, element) {
                return index % 3 == 2;
              })
              .addClass("third");
          } else {
            showAll();
          }
        }
      
        // Build array of items to generate options for Select Menus
        $.each($gridItem, function () {
          var $d = $(this).attr("data-region"),
            $l = $(this).attr("data-year");
      
          if ($.inArray($d, $region) === -1 && $d !== "") {
            $region.push($d);
          }
          if ($.inArray($l, $year) === -1 && $l !== "") {
            $year.push($l);
          }
        });
      
        // Order Items Alphabetically within array
        $region.sort();
        $year.sort();
      
        // Build REGION options
        for (var z = 0; z < $region.length; z++) {
          var $class = $region[z].toLowerCase();
          $class = $class.replace(/\s/g, "-").replace("-&-", "-");
      
          $region_location.append(
            '<option value=".region-' + $class + '">' + $region[z] + "</option>"
          );
        }
      
        // Build YEAR Options
        for (var l = 0; l < $year.length; l++) {
          var $loc = $year[l].toLowerCase().replace(",", "").replace(/(\s)/g, "-");
      
          $region_year.append(
            '<option value=".year-' + $loc + '">' + $year[l] + "</option>"
          );
        }
      
        // Trigger Changes
        $select.on("change", function () {
          filterItems();
          $("html, body").animate({
              scrollTop: $(".scrollto").offset().top - 100,
            },
            700
          );
        });
      
        $viewAll.on("click", function (e) {
          e.preventDefault();
          showAll();
          $("html, body").animate({
              scrollTop: $(".scrollto").offset().top - 100,
            },
            700
          );
        });
      
        // Confluence Insights By Drop Dwn Script END
        var dataId = [];
        $('.panel-selection ul li').each(function () {
          dataId.push($(this).data('panel'));
        });
        // console.log(dataId[0]);
      
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
        // $('.panel-selection ul li').click(function () {
        //     $('.panel-selection ul li').removeClass('active');
        //     $(this).addClass('active');
        //     var $panel = $(this).data('panel');
        //     if ($panel == 'sectionAll') {
        //         $('.panel').removeClass('d-none');
        //         $('.panel').addClass('d-block');
        //     }
        //     else {
        //         $('.panel').addClass('d-none');
        //         $('.panel').removeClass('d-block');
        //         $('.days.active .' + $panel).removeClass('d-none');
        //         $('.days.active .' + $panel).addClass('d-block');
        //     }
        //     $('html, body').animate({
        //         scrollTop: $(".accordian-main").offset().top - 100,
        //     }, 700);
      
        // });
        /*$(".cta-toggle").click(function () {
          $(this).find(".popup-cnt").toggleClass("popup-cnt-open");
        });*/
      
        $("#menu-border-line a").click(function () {
          $("html,body").animate({
            scrollTop: $(".tab-accordion-bg").offset().top - 100,
          }, 700);
        });
      
        /* ------------- SCROLL UP FUNCTION HOME Pages ---------------*/
        $(window).scroll(function () {
          if ($(this).scrollTop() !== 0) {
            $(".scroll-up").fadeIn(700);
            //$("#logo").attr("fill", "#007cc3");
            $(".scrollbg-show").addClass("show-strip");
            //$(".hamburger").addClass("bg-sapphire-dark");
          } else {
            $(".scroll-up").fadeOut(700);
            //$("#logo").attr("fill", "#fff");
            $(".scrollbg-show").removeClass("show-strip");
            //$(".hamburger").removeClass("bg-sapphire-dark");
          }
        });
      
        $(".scroll-up").click(function () {
          $("body,html").animate({
            scrollTop: 0
          }, 700);
          $(".navbar-brand").focus();
        });
      
        $(".scrollto-target").click(function (e) {
          e.preventDefault();
          $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 75,
          }, 700);
        });
      
        /* ------------- Country Selection Part ---------------*/
        $(document).on("click", ".select-country, .option-country > ul > li", function () {
          $(".option-country").toggleClass("open-country");
          if ($(".option-country").hasClass("open-country")) {
            $(".down-arrow").addClass("up-arrow").removeClass("down-arrow");
          } else {
            $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
          }
        });
        $(document).on("click", "body", function (e) {
          if (!$(e.target).is(".select-country > a")) {
            $(".option-country.open-country").removeClass("open-country");
            $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
          }
        });
      
        $(".direction").click(function () {
          $(".direction-map").fadeIn(700), $(".venue-video").get(0).pause();
        });
      
        $(".direction-close").click(function () {
          $(".direction-map").fadeOut(700), $(".venue-video").get(0).play();
        });
      
        // End
      });
      