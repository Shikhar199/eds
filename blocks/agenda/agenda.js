export default function decorate(block){
    console.log(block);
    [...block.children].forEach((row,index)=>{
        console.log(row.textContent.trim());
        if(index==1){
            console.log("Panle 1 -",row.textContent.trim());
        }
        if(index==2){
            console.log("Panle 2 -",row.textContent.trim());
        }
        // Create the main container div
        // var containerDiv = document.createElement('div');
        // containerDiv.classList.add('col-lg-4', 'col-md-4', 'col-sm-12', 'col-xs-12', 'pr-5');

        // Create the h2 element
//         if(index==0){
//             var h2Element = document.createElement('h2');
//             h2Element.classList.add('h2-head', 'mb-20', 'wow', 'fadeInDown', 'animated');
//             h2Element.setAttribute('data-wow-delay', '0.2s');
//             h2Element.style.visibility = 'visible';
//             h2Element.style.webkitAnimationDelay = '0.2s';
//             h2Element.style.mozAnimationDelay = '0.2s';
//             h2Element.style.animationDelay = '0.2s';
//             h2Element.innerText = row.textContent.trim();
//         }
//         // Create the day-selection div
//         var daySelectionDiv = document.createElement('div');
//         daySelectionDiv.classList.add('day-selection', 'wow', 'fadeInUp', 'animated');
//         daySelectionDiv.setAttribute('data-wow-delay', '0.2s');
//         daySelectionDiv.style.visibility = 'visible';
//         daySelectionDiv.style.webkitAnimationDelay = '0.2s';
//         daySelectionDiv.style.mozAnimationDelay = '0.2s';
//         daySelectionDiv.style.animationDelay = '0.2s';

//         // Create the ul element for day-selection
//         var daySelectionUl = document.createElement('ul');

//         // Create li elements for day-selection
//         if(index==1 || index==2 || index==3 || index==4){
//             var days = [
//                 { dataDay: 'agendaaccord1', text:  },
//                 { dataDay: 'agendaaccord2', text: 'Analyst & Advisor Day' },
//                 { dataDay: 'agendaaccord3', text: 'DAY 1 - EMEA Confluence', active: true },
//                 { dataDay: 'agendaaccord4', text: 'DAY 2 - EMEA Confluence' }
//             ];
//         }

//         days.forEach(function(day) {
//           var li = document.createElement('li');
//           li.setAttribute('data-day', day.dataDay);
//           li.classList.add('text-uppercase');
//           if (day.active) li.classList.add('active');
//           li.innerText = day.text;
//           daySelectionUl.appendChild(li);
//         });

// daySelectionDiv.appendChild(daySelectionUl);

// // Create the panel-selection div
// var panelSelectionDiv = document.createElement('div');
// panelSelectionDiv.classList.add('panel-selection', 'wow', 'fadeInUp', 'animated');
// panelSelectionDiv.setAttribute('data-wow-delay', '0.2s');
// panelSelectionDiv.style.visibility = 'visible';
// panelSelectionDiv.style.webkitAnimationDelay = '0.2s';
// panelSelectionDiv.style.mozAnimationDelay = '0.2s';
// panelSelectionDiv.style.animationDelay = '0.2s';

// // Create the ul element for panel-selection
// var panelSelectionUl = document.createElement('ul');

// // Create li elements for panel-selection
// var panels = [
//   { dataPanel: 'sectionKeynote', text: 'Keynote', classList: ['d-block'] },
//   { dataPanel: 'sectionSpotlight', text: 'Spotlight', classList: ['d-block'] },
//   { dataPanel: 'sectionDiscussion', text: 'Panel Discussion', classList: ['d-block'] },
//   { dataPanel: 'sectionBreakout', text: 'Breakout', classList: ['d-none'] },
//   { dataPanel: 'sectionAll', text: 'View all', classList: ['d-block', 'active'] }
// ];

// panels.forEach(function(panel) {
//   var li = document.createElement('li');
//   li.setAttribute('data-panel', panel.dataPanel);
//   panel.classList.forEach(function(cls) {
//     li.classList.add(cls);
//   });
//   li.innerText = panel.text;
//   panelSelectionUl.appendChild(li);
// });

// panelSelectionDiv.appendChild(panelSelectionUl);

// // Append all elements to the main container
// containerDiv.appendChild(h2Element);
// containerDiv.appendChild(daySelectionDiv);
// containerDiv.appendChild(panelSelectionDiv);

// // Append the container to the body or any other desired parent element
// document.body.appendChild(containerDiv);

    })
}