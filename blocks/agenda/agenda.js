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

    var panelHeading = "";
    var accord1Div = createAemElement('div', ['days'], {'role':'tablist', 'aria-multiselectable':'true'}, "agendaaccord1");   

    var subHead = document.createElement('p');
    subHead.classList.add('agenda-subhead');

    var supTag = document.createElement('sup');
    supTag.textContent = 'th';

    subHead.appendChild(supTag);

    accord1Div.append(subHead);

    [...container.children].forEach((row,r)=>{
        if(r==3){
            panelHeading = row.textContent.trim();
            subHead.textContent = panelHeading;    
        }

        if(r==4){
            [...row.children].forEach((col,c)=>{
                var panelDiv = createPanel(col);
                accord1Div.append(panelDiv);
            })
        }
    })
    console.log(accord1Div);

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

function createPanel(col){
    var panelDiv = document.createElement('div');
    panelDiv.classList.add('panel', 'no-result');

    var panelHeadingDiv = document.createElement('div');
    panelHeadingDiv.classList.add('panel-heading');
    panelHeadingDiv.setAttribute('role','tab');

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
    panelHeadingDiv.append(panelInnerDiv);
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
