export default function decorate(block){
    console.log(block);
    const container = block.innerHTML;
    console.log(isDOMElement(container)); 
    console.log(isDOMElement(block));
    console.log(container instanceof Node);
    console.log(container instanceof Element);
    block.innerHTML = '';
    var lists = container.querySelectorAll('ul');
    block.append(lists);
    console.log(lists);

    // var parentDivClass = ['col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12', 'pr-5'];
    // createSelectionDiv();
    
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

// function createSelectionDiv(){

// }