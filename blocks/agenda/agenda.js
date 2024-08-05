export default function decorate(block){
    console.log(block);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    console.log(container instanceof Node);
    console.log(container instanceof Element);
    block.innerHTML = '';
    console.log(container);
    var lists = container.querySelectorAll('ul');
    var blockHeading = container.querySelector('h2');
    console.log(lists);

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
    var accord3Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord3");

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
                var panelDiv = createPanel(col);
                accord1Div.append(panelDiv);
            })
        }

        if(r==5){
            panel2Heading = row.textContent.trim();
            sub2Head.textContent = panel2Heading;    
        }

        if(r==6){
            [...row.children].forEach((col,c)=>{
                var panelDiv = createPanel(col, null, true);
                accord2Div.append(panelDiv);
            })
        }

        if(r==7||r==8||r==9||r==10){
            console.log("Hi");
            createPanelWithImage(row, r);
        }
    })
    console.log(accord1Div);

    console.log(accord2Div);
}

function createSelectionDiv(parentDivClass, h2Class, agendaDivClass, panelDivAttr, blockHeading, panelDivClass, lists){
    const firstList = lists[0];
    const secondList = lists[1];
    console.log(firstList.innerHTML);
    const parentDiv = document.createElement('div');
    for(let cls in parentDivClass){
        parentDiv.classList.add(parentDivClass[cls]);
    }

    console.log(parentDiv);

    const blockHead = document.createElement('h2');
    for(let cls in h2Class){
        blockHead.classList.add(h2Class[cls]);
    }
    blockHead.setAttribute("data-wow-delay","0.2s");
    blockHead.setAttribute("style","visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;");
    blockHead.textContent = blockHeading.textContent.trim();

    console.log(blockHead);

    const agendaDiv = document.createElement('div');
    for(let cls in agendaDivClass){
        agendaDiv.classList.add(agendaDivClass[cls]);
    }
    agendaDiv.setAttribute("data-wow-delay","0.2s");
    agendaDiv.setAttribute("style","visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;");

    console.log(agendaDiv);

    const agendaUl = document.createElement('ul');
    const firstListChildren = Array.from(firstList.children);
    for(let i=0;i<firstListChildren.length;i++){
        console.log(i);
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

    // console.log(daySelectionDiv);
    console.log(panelSelectionDiv);

    const panelUl = document.createElement('ul');
    const secondListChildren = Array.from(secondList.children);
    for(let i=0;i<secondListChildren.length;i++){
        console.log(i);
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

function createPanel(col, anchorAttributes, isRoleTab){
    var panelDiv = document.createElement('div');
    panelDiv.classList.add('panel', 'no-result');

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
    panelBlockDiv.classList.add('panel-block', 'pl-0');

    var panelTimeDiv = document.createElement('div');
    panelTimeDiv.classList.add('panel-time');

    var ptags = col.querySelectorAll('p');
    
    var heading = document.createElement('h4');
    heading.textContent = ptags[1].textContent.trim();

    panelTimeDiv.append(ptags[0]);
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

    const agendaDiv = createAemElement('div', ['panel-collapse', 'collapse'], {"role":"tabpanel", "aria-labelledby":"questionOne", "aria-expanded":"false", "style":"height: 0px;"}, "agenda3");
    const panelBodyDiv = createAemElement('div', ["panel-body", "agenda-border"], null, null);
    
    [...row.children].forEach((col,c)=>{
        if(r==7){
            const panel = createPanel(col ,null, true);
            console.log(panel);
            console.log(col.textContent.trim());
        } else if(r==10){
            if(c==0){
                const panel = createPanel(col ,{"data-toggle":"collapse", "data-parent":"#agendaaccord1", "href":"#agenda3", "aria-expanded":"false", "aria-controls":"agenda3", "class":"collapsed"}, true);   
            } else if(c==1){
                var description = document.createElement('p');
                description.classList.add('mt-10');
                description.textContent = col.textContent.trim();
            } else if(c==2){
                console.log(col);
                // Create Moderators
                var panelInnerDiv = document.createElement('div');
                panelInnerDiv.classList.add('panel-inner', 'mt-20', 'mb-20');

                var pictureDiv = document.createElement('div');
                pictureDiv.classList.add('agenda-tag');

                const panelDetailsDiv = document.createElement('div');
                panelDetailsDiv.classList.add('panel-details');

                const moderatorP = document.createElement('p');
                moderatorP.classList.add('text-uppercase');
                moderatorP.textContent = 'Moderator';

                const anchor = document.createElement('a');
                anchor.href = '/confluence/2023/emea/speakers.html#allan';
                anchor.title = 'Allan Wilkins';
                anchor.classList.add('sp-href');
            
                const speakerDetailsDiv = document.createElement('div');
                speakerDetailsDiv.classList.add('speaker-details');
            
                const speakerImgDiv = document.createElement('div');
                speakerImgDiv.classList.add('speaker-img');

                const speakerImg = document.createElement('img');
                speakerImg.src = '/content/dam/infosys-web/en/confluence/images/2023/emea/allan-wilkins.jpg';
                speakerImg.alt = 'Allan Wilkins';

                speakerImgDiv.appendChild(speakerImg);

                speakerDetailsDiv.appendChild(speakerImgDiv);

                const speakerH5 = document.createElement('h5');

                const speakerB = document.createElement('b');
                speakerB.textContent = 'Allan Wilkins,';

                const speakerSpan = document.createElement('span');
                speakerSpan.classList.add('d-block');
                speakerSpan.textContent = 'VP Advisory, Gartner';

                speakerH5.appendChild(speakerB);
                speakerH5.appendChild(speakerSpan);

                speakerDetailsDiv.appendChild(speakerH5);

                anchor.appendChild(speakerDetailsDiv);

                panelDetailsDiv.appendChild(moderatorP);
                panelDetailsDiv.appendChild(anchor);

                panelInnerDiv.appendChild(agendaDiv);
                panelInnerDiv.appendChild(panelDetailsDiv);

            } else if(c==3){
                // Create Speakers
            }
        }
        
    })
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