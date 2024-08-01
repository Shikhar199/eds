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
    block.append(lists);
    console.log(lists);

    var parentDivClass = ['col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12', 'pr-5'];
    var h2Class = ['h2-head', 'mb-20', 'wow', 'fadeInDown', 'animated'];
    var agendaDivClass = ['day-selection', 'wow', 'fadeInUp', 'animated'];
    var panelDivAttr = ['sectionKeynote','sectionSpotlight','sectionDiscussion','sectionBreakout','sectionAll'];
    var selectionDivClass = {'class':['wow', 'fadeInUp', 'animated'], 'delay':'0.2s', 'style':'visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;'} 

    createSelectionDiv(parentDivClass, h2Class, agendaDivClass, panelDivAttr, blockHeading, selectionDivClass,lists);
    
    // [...container.children].forEach((row,index)=>{
        
    //     var containerDiv = document.createElement('div');
    //     containerDiv.classList.add('col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12', 'pr-5');

    //     // Create the h2 element
    //     if(index==0){
    //         var h2Element = document.createElement('h2');
    //         h2Element.classList.add('h2-head', 'mb-20', 'wow', 'fadeInDown', 'animated');
    //         h2Element.setAttribute('data-wow-delay', '0.2s');
    //         h2Element.style.visibility = 'visible';
    //         h2Element.style.webkitAnimationDelay = '0.2s';
    //         h2Element.style.mozAnimationDelay = '0.2s';
    //         h2Element.style.animationDelay = '0.2s';
    //         h2Element.innerText = row.textContent.trim();
    //         containerDiv.appendChild(h2Element);
    //     }
    //     // Create the day-selection div
    //     var daySelectionDiv = document.createElement('div');
    //     daySelectionDiv.classList.add('day-selection', 'wow', 'fadeInUp', 'animated');
    //     daySelectionDiv.setAttribute('data-wow-delay', '0.2s');
    //     daySelectionDiv.style.visibility = 'visible';
    //     daySelectionDiv.style.webkitAnimationDelay = '0.2s';
    //     daySelectionDiv.style.mozAnimationDelay = '0.2s';
    //     daySelectionDiv.style.animationDelay = '0.2s';

    //     // Create the ul element for day-selection
    //     var daySelectionUl = document.createElement('ul');

    //     var days = [];
    //     // Create li elements for day-selection
    //     if(index==1){
    //         var panelArr = row.textContent.trim().split("\n");
    //         console.log(panelArr);
    //         console.log(panelArr.length);
    //         for(let i=0;i<panelArr.length;i++){
    //             var day = {};
    //             console.log("Panle 1 -",panelArr[i].trim());
    //             day.dataDay = 'agendaaccord'+i;
    //             day.text = panelArr[i].trim();
    //             days[i] = day;
    //         }
    //         // console.log(days);

    //         days.forEach(function(day) {
    //             var li = document.createElement('li');
    //             li.setAttribute('data-day', day.dataDay);
    //             li.classList.add('text-uppercase');
    //             if (day.active) li.classList.add('active');
    //             li.innerText = day.text;
    //             daySelectionUl.appendChild(li);
    //         });
    //         daySelectionDiv.appendChild(daySelectionUl);
    //         containerDiv.appendChild(daySelectionDiv);
    //     }
      
    //     // console.log(daySelectionDiv);

    //     // Create the panel-selection div
    //     var panelSelectionDiv = document.createElement('div');
    //     panelSelectionDiv.classList.add('panel-selection', 'wow', 'fadeInUp', 'animated');
    //     panelSelectionDiv.setAttribute('data-wow-delay', '0.2s');
    //     panelSelectionDiv.style.visibility = 'visible';
    //     panelSelectionDiv.style.webkitAnimationDelay = '0.2s';
    //     panelSelectionDiv.style.mozAnimationDelay = '0.2s';
    //     panelSelectionDiv.style.animationDelay = '0.2s';

    //     // Create the ul element for panel-selection
    //     var panelSelectionUl = document.createElement('ul');

    //     // console.log(panelSelectionUl);

    //     var panels = [];

    //     if(index==2){
    //         console.log("Index is 2");
    //         var panelArr = row.textContent.trim().split("\n");
    //         console.log(panelArr);
    //         console.log(panelArr.length);
    //         for(let i=0;i<panelArr.length;i++){
    //             var panel = {};
    //             console.log("Panle 1 -",panelArr[i].trim());
    //             panel.dataDay = 'section'+panelArr[i].trim();
    //             panel.text = panelArr[i].trim();
    //             if(i==3){
    //                 panel.classList = ['d-none'];
    //             } else if(i==4){
    //                 panel.classList = ['d-block', 'active'];
    //             } else{
    //                 panel.classList = ['d-block'];
    //             }
    //             panels[i] = panel;
    //         }
    //         console.log(panels);

    //         panels.forEach(function(panel) {
    //             var li = document.createElement('li');
    //             li.setAttribute('data-panel', panel.dataPanel);
    //             panel.classList.forEach(function(cls) {
    //               li.classList.add(cls);
    //             });
    //             li.innerText = panel.text;
    //             panelSelectionUl.appendChild(li);
    //         });
    //         console.log(panelSelectionDiv);

    //         panelSelectionDiv.appendChild(panelSelectionUl);
    
    //         // Append all elements to the main container
    //         containerDiv.appendChild(panelSelectionDiv);
    //     }

    //     if(index==3){

    //     }

    //     // Append the container to the body or any other desired parent element
    //     document.body.appendChild(containerDiv);

    // })
}

function createSelectionDiv(parentDivClass, h2Class, agendaDivClass, panelDivAttr, blockHeading, selectionDivClass, lists){
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

    const daySelectionDiv = document.createElement('div');
    for(let i=0;i<selectionDivClass.class.length;i++){
        daySelectionDiv.classList.add(selectionDivClass.class[i]);
    }
    daySelectionDiv.classList.add('day-selection');
    daySelectionDiv.setAttribute('data-wow-delay', selectionDivClass.delay);
    daySelectionDiv.setAttribute('style', selectionDivClass.style);

    const agendaUl = document.createElement('ul');
    const firstListChildren = Array.from(firstList.children);
    for(let i=0;i<firstListChildren.length;i++){
        console.log(i);
        firstListChildren[i].setAttribute("data-day","agendaaccord"+i);
        firstListChildren[i].classList.add('text-uppercase');
        agendaUl.append(firstListChildren[i]);
    }

    const panelSelectionDiv = document.createElement('div');
    for(let i=0;i<selectionDivClass.class.length;i++){
        panelSelectionDiv.classList.add(selectionDivClass.class[i]);
    }
    panelSelectionDiv.classList.add('panel-selection');
    panelSelectionDiv.setAttribute('data-wow-delay', selectionDivClass.delay);
    panelSelectionDiv.setAttribute('style', selectionDivClass.style);


    console.log(daySelectionDiv);
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

    console.log(agendaUl);
    console.log(panelUl);

}
