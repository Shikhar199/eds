// // import { getMetadata } from '../../scripts/aem.js';
// // import { loadFragment } from '../fragment/fragment.js';

import { createAemElement } from "../../../scripts/aem.js";

// // // media query match that indicates mobile/tablet width
// // const isDesktop = window.matchMedia('(min-width: 900px)');

// // function closeOnEscape(e) {
// //   if (e.code === 'Escape') {
// //     const nav = document.getElementById('nav');
// //     const navSections = nav.querySelector('.nav-sections');
// //     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
// //     if (navSectionExpanded && isDesktop.matches) {
// //       // eslint-disable-next-line no-use-before-define
// //       toggleAllNavSections(navSections);
// //       navSectionExpanded.focus();
// //     } else if (!isDesktop.matches) {
// //       // eslint-disable-next-line no-use-before-define
// //       toggleMenu(nav, navSections);
// //       nav.querySelector('button').focus();
// //     }
// //   }
// // }

// // function openOnKeydown(e) {
// //   const focused = document.activeElement;
// //   const isNavDrop = focused.className === 'nav-drop';
// //   if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
// //     const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
// //     // eslint-disable-next-line no-use-before-define
// //     toggleAllNavSections(focused.closest('.nav-sections'));
// //     focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
// //   }
// // }

// // function focusNavSection() {
// //   document.activeElement.addEventListener('keydown', openOnKeydown);
// // }

// // /**
// //  * Toggles all nav sections
// //  * @param {Element} sections The container element
// //  * @param {Boolean} expanded Whether the element should be expanded or collapsed
// //  */
// // function toggleAllNavSections(sections, expanded = false) {
// //   sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
// //     section.setAttribute('aria-expanded', expanded);
// //   });
// // }

// // /**
// //  * Toggles the entire nav
// //  * @param {Element} nav The container element
// //  * @param {Element} navSections The nav sections within the container element
// //  * @param {*} forceExpanded Optional param to force nav expand behavior when not null
// //  */
// // function toggleMenu(nav, navSections, forceExpanded = null) {
// //   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
// //   const button = nav.querySelector('.nav-hamburger button');
// //   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
// //   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
// //   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
// //   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
// //   // enable nav dropdown keyboard accessibility
// //   const navDrops = navSections.querySelectorAll('.nav-drop');
// //   if (isDesktop.matches) {
// //     navDrops.forEach((drop) => {
// //       if (!drop.hasAttribute('tabindex')) {
// //         drop.setAttribute('role', 'button');
// //         drop.setAttribute('tabindex', 0);
// //         drop.addEventListener('focus', focusNavSection);
// //       }
// //     });
// //   } else {
// //     navDrops.forEach((drop) => {
// //       drop.removeAttribute('role');
// //       drop.removeAttribute('tabindex');
// //       drop.removeEventListener('focus', focusNavSection);
// //     });
// //   }
// //   // enable menu collapse on escape keypress
// //   if (!expanded || isDesktop.matches) {
// //     // collapse menu on escape press
// //     window.addEventListener('keydown', closeOnEscape);
// //   } else {
// //     window.removeEventListener('keydown', closeOnEscape);
// //   }
// // }

// // /**
// //  * decorates the header, mainly the nav
// //  * @param {Element} block The header block element
// //  */
// // export default async function decorate(block) {
// //   // load nav as fragment
// //   const navMeta = getMetadata('nav');
// //   const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
// //   const fragment = await loadFragment(navPath);

// //   // decorate nav DOM
// //   const nav = document.createElement('nav');
// //   nav.id = 'nav';
// //   while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

// //   const classes = ['brand', 'sections', 'tools'];
// //   classes.forEach((c, i) => {
// //     const section = nav.children[i];
// //     if (section) section.classList.add(`nav-${c}`);
// //   });

// //   const navBrand = nav.querySelector('.nav-brand');
// //   const brandLink = navBrand.querySelector('.button');
// //   if (brandLink) {
// //     brandLink.className = '';
// //     brandLink.closest('.button-container').className = '';
// //   }

// //   const navSections = nav.querySelector('.nav-sections');
// //   if (navSections) {
// //     navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
// //       if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
// //       navSection.addEventListener('click', () => {
// //         if (isDesktop.matches) {
// //           const expanded = navSection.getAttribute('aria-expanded') === 'true';
// //           toggleAllNavSections(navSections);
// //           navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
// //         }
// //       });
// //     });
// //   }

// //   // hamburger for mobile
// //   const hamburger = document.createElement('div');
// //   hamburger.classList.add('nav-hamburger');
// //   hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
// //       <span class="nav-hamburger-icon"></span>
// //     </button>`;
// //   hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
// //   nav.prepend(hamburger);
// //   nav.setAttribute('aria-expanded', 'false');
// //   // prevent mobile nav behavior on window resize
// //   toggleMenu(nav, navSections, isDesktop.matches);
// //   isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

// //   const navWrapper = document.createElement('div');
// //   navWrapper.className = 'nav-wrapper';
// //   navWrapper.append(nav);
// //   block.append(navWrapper);
// // }

// export default function decorate(block){

//   const navbar = document.createElement('nav');
//   navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light');

//   const containerDiv = document.createElement('div');
//   containerDiv.classList.add('container');

//   const collapseDiv = document.createElement('div');
//   collapseDiv.classList.add('collapse', 'navbar-collapse');
//   collapseDiv.id = 'navbarSupportedContent';

//   var mobileNavDiv;
//   var ul;
//   var pTag
//   var ul2;

//   [...block.children].forEach((row,r)=>{
//     if(r==0){
//       createNavbarBrandAndToggleButton(containerDiv, row);
//     } else if(r==1){
//       mobileNavDiv = createMobileNav(navbar, row);
//     } else if(r==2){
//       ul = createNavMenu(navbar,row);
//     } else if(r==3){
//       pTag = document.createElement('p');
//       pTag.textContent = row.textContent.trim();
//     } else if(r==4){
//       ul2 = createNavMenuEnd(navbar, row);
//     }
//   })

//   collapseDiv.appendChild(mobileNavDiv);
//   collapseDiv.appendChild(ul);
//   collapseDiv.appendChild(pTag);

//   containerDiv.appendChild(collapseDiv);

//   navbar.appendChild(containerDiv);
//   navbar.appendChild(ul2);

//   // const header = document.querySelector('.header-wrapper');
//   // const headerDiv = document.querySelector('div[data-block-name="header"]');

//   // document.querySelector('body').removeChild(headerDiv);

//   // header.removeChild(headerDiv);

//   document.querySelector('header').appendChild(navbar);

//   const defaultHeader = document.querySelector('.header-container');
//   document.querySelector('main').removeChild(defaultHeader);
// }

// function createNavMenu(navbar,row){
//   const pTags = row.querySelectorAll('p');

//   const ul = document.createElement('ul');
//   ul.className = 'navbar-nav navbar-start';

//   const dropdownLi = document.createElement('li');
//   dropdownLi.className = 'nav-item dropdown';

//   const dropdownToggle = document.createElement('a');
//   dropdownToggle.className = 'nav-link dropdown-toggle';
//   dropdownToggle.href = '#';
//   dropdownToggle.id = 'navbarDropdown';
//   dropdownToggle.role = 'button';
//   dropdownToggle.setAttribute('data-toggle', 'dropdown');
//   dropdownToggle.setAttribute('aria-haspopup', 'true');
//   dropdownToggle.setAttribute('aria-expanded', 'false');
//   dropdownToggle.title = 'Learn More';
//   dropdownToggle.innerHTML = pTags[0].textContent.trim() + '<span class="icon-down-arrow"></span>';

//   const dropdownMenu = document.createElement('div');
//   dropdownMenu.id = 'menu';
//   dropdownMenu.className = 'dropdown-menu';
//   dropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');

//   const dropdownItems = [
//     { href: pTags[3].textContent.trim(), title: pTags[2].textContent.trim(), text: pTags[1].textContent.trim() },
//     { href: pTags[6].textContent.trim(), title: pTags[5].textContent.trim(), text: pTags[4].textContent.trim() },
//     { href: pTags[9].textContent.trim(), title: pTags[8].textContent.trim(), text: pTags[7].textContent.trim() },
//     { href: pTags[12].textContent.trim(), title: pTags[11].textContent.trim(), text: pTags[10].textContent.trim() },
//     { href: pTags[15].textContent.trim(), title: pTags[14].textContent.trim(), text: pTags[13].textContent.trim() },
//     { href: pTags[18].textContent.trim(), title: pTags[17].textContent.trim(), text: pTags[16].textContent.trim() },
//     { href: pTags[21].textContent.trim(), title: pTags[20].textContent.trim(), text: pTags[19].textContent.trim() }
//   ];

//   dropdownItems.forEach(item => {
//     const a = document.createElement('a');
//     a.className = 'dropdown-item';
//     a.href = item.href;
//     a.title = item.title;
//     a.innerHTML = `${item.text}<span class="icon-down-arrow"></span>`;
//     dropdownMenu.appendChild(a);
//   });

//   // Append the toggle and the menu to the dropdown li
//   dropdownLi.appendChild(dropdownToggle);
//   dropdownLi.appendChild(dropdownMenu);

//   ul.appendChild(dropdownLi);


//   const navItems = [
//     { href: pTags[24].textContent.trim(), title: pTags[23].textContent.trim(), text: pTags[22].textContent.trim() },
//     { href: pTags[27].textContent.trim(), title: pTags[26].textContent.trim(), text: pTags[25].textContent.trim() },
//     { href: pTags[29].textContent.trim(), title: pTags[28].textContent.trim(), text: pTags[28].textContent.trim(), className: 'sign-in' }
//   ];

//   navItems.forEach(item => {
//     const li = document.createElement('li');
//     li.className = 'nav-item';

//     const a = document.createElement('a');
//     a.className = 'nav-link';
//     if (item.className) a.classList.add(item.className);
//     a.href = item.href;
//     a.title = item.title;
//     a.textContent = item.text;

//     li.appendChild(a);
//     ul.appendChild(li);

//     // navbar.appendChild(ul);
//   });
//   return ul;
// }

// function createNavMenuEnd(navbar, row){
//   const pTags = row.querySelectorAll('p');
//   const anchors = row.querySelectorAll('a');

//   const ul = document.createElement('ul');
//   ul.className = 'navbar-nav navbar-end';

//   // Create the sign-in li element
//   const signInLi = document.createElement('li');
//   signInLi.className = 'nav-item';
//   signInLi.id = 'sign-in-ul';

//   const signInLink = document.createElement('a');
//   signInLink.className = 'nav-link sign-in';
//   signInLink.id = 'sign-in-button';
//   signInLink.href = pTags[0].textContent.trim();
//   signInLink.title = pTags[1].textContent.trim();
//   signInLink.textContent = pTags[2].textContent.trim();

//   signInLi.appendChild(signInLink);
//   ul.appendChild(signInLi);

//   const shareLi = document.createElement('li');
//   shareLi.className = 'nav-item share-desktop';

//   const shareLink = document.createElement('a');
//   shareLink.className = 'nav-link';
//   shareLink.href = '#';
//   shareLink.title = pTags[3].textContent.trim();
//   shareLink.innerHTML = '<span class="icon-share"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>';

//   shareLi.appendChild(shareLink);

//   const socialWrapper = document.createElement('div');
//   socialWrapper.classList.add('social-wraper');

//   const socialLinks = [
//     {
//         href: 'javascript:void(0)',
//         className: 'social',
//         title: pTags[5].textContent.trim(),
//         iconClass: 'icon-facebook'
//     },
//     {
//         href: 'javascript:void(0)',
//         onclick: "twitterShare(window.location.href, encodeURIComponent(document.title));",
//         className: 'social',
//         title: pTags[6].textContent.trim(),
//         iconClass: 'icon-twitter'
//     },
//     {
//         href: 'javascript:void(0)',
//         onclick: "var host=window.location.href; var title = document.title; var liUrl = 'http://www.linkedin.com/shareArticle?mini=true&amp;url='.concat(host); var width=500, height=500; var left = (window.screen.width / 2) - ((width / 2) + 10); var top = (window.screen.height / 2) - ((height / 2) + 50); popUp = window.open(encodeURI(liUrl),'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +''); popUp.focus(); return false;",
//         className: 'social',
//         title: pTags[8].textContent.trim(),
//         iconClass: 'icon-linked-in'
//     },
//     {
//         href: '',
//         className: 'social',
//         title: pTags[9].textContent.trim(),
//         iconClass: 'icon-chain'
//     }
//   ];

//   socialLinks.forEach((link,i) => {
//     const a = document.createElement('a');
//     a.href = link.href;
//     a.className = link.className;
//     a.title = link.title;
//     a.innerHTML = `<span class="${link.iconClass}"></span>`;

//     if(i==0){
//       a.setAttribute('onclick', "var host=window.location.href;" + 
//                                 `var fbUrl = \'${anchors[0].getAttribute('href')}\'.concat(host);`+
//                                 "var width=500, height=500;" +
//                                 "var left = (window.screen.width / 2) - ((width / 2) + 10); var top = (window.screen.height / 2) - ((height / 2) + 50);"+
//                                 "popUp = window.open(fbUrl,'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +'');"+
//                                 "popUp.focus(); return false;")
//     } else if(i==1){
//       a.setAttribute('onclick', "twitterShare(window.location.href, encodeURIComponent(document.title));");
//     } else if(i==2){
//       a.setAttribute('onclick', "var host=window.location.href;"+
//                                 "var title = document.title;"+
//                                 `var liUrl = \'${anchors[1].getAttribute('href')}\'.concat(host);`+
//                                 "var width=500, height=500; var left = (window.screen.width / 2) - ((width / 2) + 10);"+
//                                 "var top = (window.screen.height / 2) - ((height / 2) + 50);"+
//                                 "popUp = window.open(encodeURI(liUrl),'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +'');"+
//                                 "popUp.focus(); return false;")
//     }

//     socialWrapper.appendChild(a);
//   });

//   shareLi.appendChild(socialWrapper);
//   ul.appendChild(shareLi);

//   const searchLi = document.createElement('li');
//   searchLi.className = 'nav-item search-desktop';

//   const searchLink = document.createElement('a');
//   searchLink.className = 'nav-link';
//   searchLink.setAttribute('data-toggle', 'modal');
//   searchLink.setAttribute('data-target', '#searchArticle');
//   searchLink.title = 'Click to Search';
//   searchLink.innerHTML = '<span class="icon-search"></span>';

//   searchLi.appendChild(searchLink);
//   ul.appendChild(searchLi);

//   // navbar.appendChild(ul);

//   return ul;
// }

// function createMobileNav(navbar, row){
  
//   const div = document.createElement('div');
//   div.className = 'mobile-nav';

//   // Create the social-wrapper span
//   const socialWrapper = document.createElement('span');
//   socialWrapper.id = 'social-id';
//   socialWrapper.className = 'social-wraper';

//   const anchors = row.querySelectorAll('a');
//   const pTags = row.querySelectorAll('p');

//   const socialLinks = [
//     {
//         href: 'javascript:void(0)',
//         className: 'social',
//         title: pTags[1].textContent.trim(),
//         iconClass: 'icon-facebook'
//     },
//     {
//         href: 'javascript:void(0)',
//         className: 'social',
//         title: pTags[2].textContent.trim(),
//         iconClass: 'icon-twitter'
//     },
//     {
//         href: 'javascript:void(0)',
//         className: 'social',
//         title: pTags[4].textContent.trim(),
//         iconClass: 'icon-linked-in'
//     },
//     {
//         href: '',
//         className: 'social',
//         title: pTags[5].textContent.trim(),
//         iconClass: 'icon-chain'
//     }
//   ];

//   socialLinks.forEach((link,i) => {
//     const a = document.createElement('a');
//     a.href = link.href;
//     a.className = link.className;
//     a.title = link.title;
//     a.innerHTML = `<span class="${link.iconClass}"></span>`;
//     if(i==0){
//         a.setAttribute('onclick',"var host = window.location.href;" + 
//           `var fbUrl = \'${anchors[0].getAttribute('href')}\'.concat(encodeURIComponent(host)); ` + 
//           "var width = 500, height = 500; " +
//           "var left = (window.screen.width / 2) - ((width / 2) + 10);" +
//           "var top = (window.screen.height / 2) - ((height / 2) + 50);" +
//           "var popUp = window.open(fbUrl, 'popupwindow', 'scrollbars=no,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);" + 
//           "popUp.focus();" +
//           "return false;"
//         )
//     } else if(i==1){
//         a.setAttribute('onclick',"twitterShare(window.location.href, encodeURIComponent(document.title));")
//     } else if(i==2){
//         a.setAttribute('onclick'," var host = window.location.href;" + 
//           "var title = document.title;" +
//           `var liUrl = \'${anchors[1].getAttribute('href')}\'.concat(encodeURIComponent(host));` +
//           "var width = 500, height = 500; var left = (window.screen.width / 2) - ((width / 2) + 10);" +
//           "var top = (window.screen.height / 2) - ((height / 2) + 50);" + 
//           "var popUp = window.open(encodeURI(liUrl), 'popupwindow', 'scrollbars=no,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left);" + 
//           "popUp.focus();" +
//           "return false;"
//         )
//     } else if(i==3){

//     }
//     socialWrapper.appendChild(a);
//   });

//   div.appendChild(socialWrapper);

//   const searchLink = document.createElement('a');
//   searchLink.href = '#';
//   searchLink.className = 'search-nav';
//   searchLink.onclick = function() {
//       social();
//       return false;
//   };
//   searchLink.title = pTags[6].textContent.trim();
//   searchLink.innerHTML = '<span class="icon-share"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>';

//   div.appendChild(searchLink);

//   const button = document.createElement('button');
//   button.className = 'navbar-toggler';
//   button.type = 'button';
//   button.setAttribute('data-toggle', 'collapse');
//   button.setAttribute('data-target', '#navbarSupportedContent');
//   button.setAttribute('aria-controls', 'navbarSupportedContent');
//   button.setAttribute('aria-expanded', 'false');
//   button.setAttribute('aria-label', 'Toggle navigation');

//   const xCircle = document.createElement('span');
//   xCircle.className = 'x-circle';
//   xCircle.innerHTML = '<span class="icon-bx-x"></span>';

//   button.appendChild(xCircle);
//   div.appendChild(button);

//   // navbar.appendChild(div);
//   return div;
// }

// function createNavbarBrandAndToggleButton(containerDiv, row){

//     const a = document.createElement('a');
//     a.className = 'navbar-brand';
//     a.setAttribute('aria-label', 'Go to Infosys Home');

//     // Create the img element
//     var img = document.createElement('img');
//     img.alt = 'logo';
//     img.className = 'img-fluid';

//     // Append the img to the a element
//     a.appendChild(img);

//     const div = document.createElement('div');
//     div.className = 'toggle-btn';

//     // Create the button element
//     const button = document.createElement('button');
//     button.className = 'navbar-toggler';
//     button.type = 'button';
//     button.setAttribute('data-toggle', 'collapse');
//     button.setAttribute('data-target', '#navbarSupportedContent');
//     button.setAttribute('aria-controls', 'navbarSupportedContent');
//     button.setAttribute('aria-expanded', 'false');
//     button.setAttribute('aria-label', 'Toggle navigation');

//     // Create the span element for the button icon
//     const span = document.createElement('span');
//     span.className = 'icon-bx-menu-alt-right';

//     // Append the span to the button
//     button.appendChild(span);

//     // Append the button to the div
//     div.appendChild(button);


//     [...row.children].forEach((col,c)=>{
//       if(c==0){
//           img.setAttribute('src', col.querySelector('img').getAttribute('src'));
//           if (window.innerWidth < 991) {
//             img.width = 288;
//             img.height = 33.156;
//           } else {
//             img.width = 256;
//             img.height = 29.5;
//           }
//       } else{
//         [...col.children].forEach((node,i)=>{
//           if(i==0){
//             a.href = node.textContent.trim();
//           } else{
//             a.title = node.textContent.trim();
//           }
//         })
//       }
//     })

//     containerDiv.appendChild(a);
//     containerDiv.appendChild(div);
// }

export default async function decorate(block){
    block.innerHTML = '';
    console.log("welcome to header block");
    document.title = 'EMEA Confluence 2023';
    console.log(window.location.pathname + "nav");
    const navPath = window.location.pathname + "nav";
    let main;
    if(navPath && navPath.startsWith('/')){
        const resp = await fetch(`${navPath}.plain.html`);
        if(resp.ok){
            main = document.createElement('main');
            main.innerHTML = await resp.text();
            console.log(main.innerHTML);
        }
        
    }
    const imgAnchor = main.querySelector('p a');
    const picture = main.querySelector('picture');
    picture.querySelector('img').classList.add('logo', 'img-responsive');
    picture.querySelector('img').setAttribute('alt', document.title);
    // const header = createAemElement('header', ['header'], null, null);
    const article = createAemElement('article', ['container'], null, null);
    const rowDiv = createAemElement('div', ['row'], null, null);
    const nav = createAemElement('nav', ['navbar', 'navbar-default', 'navbar-fixed-top', 'scrollbg-show'], null, null);
    const containerDiv = createAemElement('div', ['container'], null, null);
    const navbarHeader = createAemElement('div', ['navbar-header'], null, null);
    // const anchor = createAemElement('a', ['d-block', 'navbar-brand'], {'href': imgAnchor.href, 'title': document.title}, null);
    // anchor.appendChild(imgAnchor);
    // navbarHeader.appendChild(anchor);
    imgAnchor.classList.add('d-block', 'navbar-brand');
    imgAnchor.setAttribute('href', imgAnchor.href);
    imgAnchor.setAttribute('title', document.title);
    navbarHeader.appendChild(imgAnchor);
    containerDiv.appendChild(navbarHeader);
    nav.appendChild(containerDiv);

    const hamburgerMenuRightDiv = createAemElement('div', ['hamburger-menu-right'], null, null);
    const hamburgerDiv = createAemElement('div', ['hamburger'], null, 'trigger-overlay');
    const overlayDiv = createAemElement('div', ['overlay', 'overlay-slidedown', 'bg-topaz-dark'], null, null);
    const burgerDiv = createIconBar('div', ['burger'], 3, 2);
    hamburgerDiv.appendChild(burgerDiv);
    hamburgerMenuRightDiv.appendChild(hamburgerDiv);
    const btn = createIconBar('button', ['overlay-close'], 3, 1);
    overlayDiv.appendChild(btn);

    const outerDiv = createAemElement('div', ['col-lg-8', 'col-md-8', 'col-sm-8', 'col-xs-6'], null, null);
    const overlay = createAemElement('div', ['overlay-mt1', 'mb-20'], null, null);
    const anchorClone = imgAnchor.cloneNode(true);
    anchorClone.classList.add('d-block');
    anchorClone.setAttribute('title', 'Go to Confluence Home');
    anchorClone.setAttribute('aria-label', 'Go to Confluence Home');

    const pictureClone = picture.cloneNode(true); 
    pictureClone.classList.add('logo', 'logo-inner', 'img-responsive');
    pictureClone.setAttribute('alt', 'EMEA Confluence 2023');

    anchorClone.appendChild(pictureClone);

    overlay.appendChild(anchorClone);
    outerDiv.appendChild(overlay);

    overlayDiv.appendChild(outerDiv);

    const lists = main.querySelectorAll('ul');

    const firstLiOuterDiv = createFirstListOuterDiv(lists[0]);
    const secondListOuterDiv = createSecondListOuterDiv(lists[1]);
    overlayDiv.appendChild(firstLiOuterDiv);
    overlayDiv.appendChild(secondListOuterDiv);
    hamburgerMenuRightDiv.appendChild(overlayDiv);
    console.log(hamburgerMenuRightDiv);
    console.log(nav);
    rowDiv.appendChild(nav);
    rowDiv.appendChild(hamburgerMenuRightDiv);
    article.append(rowDiv);
    // header.append(article);
    // console.log(header);
    // block.append(header);
    const divInsideHeader = document.querySelector('.header-wrapper .header');

    if (divInsideHeader) {
        divInsideHeader.remove();
    }

    let header = document.querySelector('.header-wrapper');
    header.classList.add('header');
    header.appendChild(article);

    const navbar = document.querySelector('nav');

    // Listen for the scroll event on the window
    burgerDiv.addEventListener('click', () => {
        // Check if the user has scrolled more than 0 pixels from the top
        // if (window.scrollY > 0) {
        //     // Add the class 'show-strip' if scrolled down
        //     navbar.classList.add('show-strip');
        // } else {
        //     // Remove the class 'show-strip' if back at the top
        //     navbar.classList.remove('show-strip');
        // }
        console.log("burger menu clicked");
        overlayDiv.classList.toggle('show');
    });

    window.addEventListener('click', () => {
        // Check if the user has scrolled more than 0 pixels from the top
        if (window.scrollY > 0) {
            // Add the class 'show-strip' if scrolled down
            navbar.classList.add('show-strip');
        } else {
            // Remove the class 'show-strip' if back at the top
            navbar.classList.remove('show-strip');
        }
    });

}

function createIconBar(parentElementType, parentElementClass, numberOfChildren, noOfChildClasses){
    let parent;
    if(parentElementType==='button'){
        parent = createAemElement(parentElementType, parentElementClass, {'type': 'button'}, null);
    } else {
        parent = createAemElement(parentElementType, parentElementClass, null, null);
    }
    if(noOfChildClasses===2){
        for(let i=0; i<numberOfChildren; i++){
            const iconBar = createAemElement('div', ['icon-bar', 'icon-bar'+(i+1)], null, null);
            iconBar.innerHTML = '&nbsp;';  
            parent.appendChild(iconBar);
        }
    } else{
        for(let i=0; i<numberOfChildren; i++){
            const iconBar = createAemElement('div', ['icon-bar'+(i+1)], null, null);
            iconBar.innerHTML = '&nbsp;';
            parent.appendChild(iconBar);  
        }
    }
    return parent;
}

function createFirstListOuterDiv(unorderedList){
    const outerDiv = createAemElement('div', ['col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12'], null, null);
    const nav = createAemElement('nav', null, null, null);
    unorderedList.classList.add('row', 'close-overlay');
    for(let i=0; i<unorderedList.children.length; i++){
        const listItem = unorderedList.children[i];
        const span = createAemElement('span', null, null, null);
        span.innerHTML = '&nbsp;';
        listItem.appendChild(span);
        listItem.classList.add('col-lg-6', 'col-md-6', 'col-sm-6', 'col-xs-12');
        listItem.querySelector('a').classList.add('scrollto-target');
        console.log(listItem.querySelector('a').textContent.trim());
        let aHref = listItem.querySelector('a').textContent.trim().toLowerCase().replace(' ', '-');
        listItem.querySelector('a').setAttribute('href', "#"+aHref);
        listItem.querySelector('a').setAttribute('title', listItem.querySelector('a').textContent.trim());
    }
    outerDiv.appendChild(nav);
    nav.appendChild(unorderedList);
    return outerDiv;
}

function createSecondListOuterDiv(unorderedList){
    const outerDiv = createAemElement('div', ['col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12'], null, null);
    const rowDiv = createAemElement('div', ['row'], null, null);
    const menuDiv = createAemElement('div', ['col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12', 'menu-link'], null, null);
    unorderedList.classList.add('close-overlay', 'menu-link');
    unorderedList.id = 'external_links';
    for(let i=0; i<unorderedList.children.length; i++){
        const listItem = unorderedList.children[i];
        listItem.querySelector('a').classList.add('archives-list-link');
        if(listItem.querySelector('a').textContent.trim()==='Americas Confluence'){
            listItem.querySelector('a').setAttribute('title','EMEA Confluence');
        }else{
            listItem.querySelector('a').setAttribute('title', listItem.querySelector('a').textContent.trim());
        }
    }
    outerDiv.appendChild(rowDiv);
    rowDiv.appendChild(menuDiv);
    menuDiv.appendChild(unorderedList);
    return outerDiv;
}