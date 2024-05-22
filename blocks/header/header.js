// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// // media query match that indicates mobile/tablet width
// const isDesktop = window.matchMedia('(min-width: 900px)');

// function closeOnEscape(e) {
//   if (e.code === 'Escape') {
//     const nav = document.getElementById('nav');
//     const navSections = nav.querySelector('.nav-sections');
//     const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
//     if (navSectionExpanded && isDesktop.matches) {
//       // eslint-disable-next-line no-use-before-define
//       toggleAllNavSections(navSections);
//       navSectionExpanded.focus();
//     } else if (!isDesktop.matches) {
//       // eslint-disable-next-line no-use-before-define
//       toggleMenu(nav, navSections);
//       nav.querySelector('button').focus();
//     }
//   }
// }

// function openOnKeydown(e) {
//   const focused = document.activeElement;
//   const isNavDrop = focused.className === 'nav-drop';
//   if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
//     const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
//     // eslint-disable-next-line no-use-before-define
//     toggleAllNavSections(focused.closest('.nav-sections'));
//     focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
//   }
// }

// function focusNavSection() {
//   document.activeElement.addEventListener('keydown', openOnKeydown);
// }

// /**
//  * Toggles all nav sections
//  * @param {Element} sections The container element
//  * @param {Boolean} expanded Whether the element should be expanded or collapsed
//  */
// function toggleAllNavSections(sections, expanded = false) {
//   sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
//     section.setAttribute('aria-expanded', expanded);
//   });
// }

// /**
//  * Toggles the entire nav
//  * @param {Element} nav The container element
//  * @param {Element} navSections The nav sections within the container element
//  * @param {*} forceExpanded Optional param to force nav expand behavior when not null
//  */
// function toggleMenu(nav, navSections, forceExpanded = null) {
//   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
//   const button = nav.querySelector('.nav-hamburger button');
//   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
//   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
//   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
//   // enable nav dropdown keyboard accessibility
//   const navDrops = navSections.querySelectorAll('.nav-drop');
//   if (isDesktop.matches) {
//     navDrops.forEach((drop) => {
//       if (!drop.hasAttribute('tabindex')) {
//         drop.setAttribute('role', 'button');
//         drop.setAttribute('tabindex', 0);
//         drop.addEventListener('focus', focusNavSection);
//       }
//     });
//   } else {
//     navDrops.forEach((drop) => {
//       drop.removeAttribute('role');
//       drop.removeAttribute('tabindex');
//       drop.removeEventListener('focus', focusNavSection);
//     });
//   }
//   // enable menu collapse on escape keypress
//   if (!expanded || isDesktop.matches) {
//     // collapse menu on escape press
//     window.addEventListener('keydown', closeOnEscape);
//   } else {
//     window.removeEventListener('keydown', closeOnEscape);
//   }
// }

// /**
//  * decorates the header, mainly the nav
//  * @param {Element} block The header block element
//  */
// export default async function decorate(block) {
//   // load nav as fragment
//   const navMeta = getMetadata('nav');
//   const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
//   const fragment = await loadFragment(navPath);

//   // decorate nav DOM
//   const nav = document.createElement('nav');
//   nav.id = 'nav';
//   while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

//   const classes = ['brand', 'sections', 'tools'];
//   classes.forEach((c, i) => {
//     const section = nav.children[i];
//     if (section) section.classList.add(`nav-${c}`);
//   });

//   const navBrand = nav.querySelector('.nav-brand');
//   const brandLink = navBrand.querySelector('.button');
//   if (brandLink) {
//     brandLink.className = '';
//     brandLink.closest('.button-container').className = '';
//   }

//   const navSections = nav.querySelector('.nav-sections');
//   if (navSections) {
//     navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
//       if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
//       navSection.addEventListener('click', () => {
//         if (isDesktop.matches) {
//           const expanded = navSection.getAttribute('aria-expanded') === 'true';
//           toggleAllNavSections(navSections);
//           navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//         }
//       });
//     });
//   }

//   // hamburger for mobile
//   const hamburger = document.createElement('div');
//   hamburger.classList.add('nav-hamburger');
//   hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
//       <span class="nav-hamburger-icon"></span>
//     </button>`;
//   hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
//   nav.prepend(hamburger);
//   nav.setAttribute('aria-expanded', 'false');
//   // prevent mobile nav behavior on window resize
//   toggleMenu(nav, navSections, isDesktop.matches);
//   isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

//   const navWrapper = document.createElement('div');
//   navWrapper.className = 'nav-wrapper';
//   navWrapper.append(nav);
//   block.append(navWrapper);
// }

export default function decorate(block){

  const navbar = document.createElement('nav');
  navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light');

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  const collapseDiv = document.createElement('div');
  collapseDiv.classList.add('collapse', 'navbar-collapse');
  collapseDiv.id = 'navbarSupportedContent';


  [...block.children].forEach((row,r)=>{
    if(r==0){
      createNavbarBrandAndToggleButton(containerDiv, row);
    } else if(r==1){

    }
  })


  const ul = createNavMenu(navbar);

  const ul2 = createNavMenuEnd(navbar);

  const mobileNavDiv = createMobileNav(navbar);

  const pTag = document.createElement('p');
  pTag.textContent = 'Copyright © 2023 Infosys Limited';

  collapseDiv.appendChild(mobileNavDiv);
  collapseDiv.appendChild(ul);
  collapseDiv.appendChild(pTag);

  containerDiv.appendChild(collapseDiv);

  navbar.appendChild(containerDiv);
  navbar.appendChild(ul2);
}

function createNavMenu(navbar){
  const ul = document.createElement('ul');
  ul.className = 'navbar-nav navbar-start';

  const dropdownLi = document.createElement('li');
  dropdownLi.className = 'nav-item dropdown';

  const dropdownToggle = document.createElement('a');
  dropdownToggle.className = 'nav-link dropdown-toggle';
  dropdownToggle.href = '#';
  dropdownToggle.id = 'navbarDropdown';
  dropdownToggle.role = 'button';
  dropdownToggle.setAttribute('data-toggle', 'dropdown');
  dropdownToggle.setAttribute('aria-haspopup', 'true');
  dropdownToggle.setAttribute('aria-expanded', 'false');
  dropdownToggle.title = 'Learn More';
  dropdownToggle.innerHTML = 'Learn <span class="icon-down-arrow"></span>';

  const dropdownMenu = document.createElement('div');
  dropdownMenu.id = 'menu';
  dropdownMenu.className = 'dropdown-menu';
  dropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');

  const dropdownItems = [
    { href: '/iki/explore.html', title: 'Go to Explore', text: 'Explore' },
    { href: '/iki/research.html', title: 'Go to Research', text: 'Research' },
    { href: '/iki/perspectives.html', title: 'Go to Perspectives', text: 'Perspectives' },
    { href: '/iki/podcasts.html', title: 'Go to Podcasts', text: 'Podcasts' },
    { href: '/iki/videos.html', title: 'Go to Videos', text: 'Videos' },
    { href: '/iki/events.html', title: 'Go to Events', text: 'Events' },
    { href: '/iki/books.html', title: 'Go to Books', text: 'Books' }
  ];

  dropdownItems.forEach(item => {
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = item.href;
    a.title = item.title;
    a.innerHTML = `${item.text}<span class="icon-down-arrow"></span>`;
    dropdownMenu.appendChild(a);
  });

  // Append the toggle and the menu to the dropdown li
  dropdownLi.appendChild(dropdownToggle);
  dropdownLi.appendChild(dropdownMenu);

  ul.appendChild(dropdownLi);


  const navItems = [
    { href: '/iki/iki-connect-with-us.html', title: 'Go to Connect', text: 'Connect' },
    { href: '/iki/about.html', title: 'Read About Us', text: 'About Us' },
    { href: '#', title: 'Sign In', text: 'Sign in', className: 'sign-in' }
  ];

  navItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.className = 'nav-link';
    if (item.className) a.classList.add(item.className);
    a.href = item.href;
    a.title = item.title;
    a.textContent = item.text;

    li.appendChild(a);
    ul.appendChild(li);

    navbar.appendChild(ul);
  });
  return ul;
}

function createNavMenuEnd(navbar){
  const ul = document.createElement('ul');
  ul.className = 'navbar-nav navbar-end';

  // Create the sign-in li element
  const signInLi = document.createElement('li');
  signInLi.className = 'nav-item';
  signInLi.id = 'sign-in-ul';

  const signInLink = document.createElement('a');
  signInLink.className = 'nav-link sign-in';
  signInLink.id = 'sign-in-button';
  signInLink.href = '/loginiki.html';
  signInLink.title = 'Sign In to Continue';
  signInLink.textContent = 'Sign in';

  signInLi.appendChild(signInLink);
  ul.appendChild(signInLi);

  const shareLi = document.createElement('li');
  shareLi.className = 'nav-item share-desktop';

  const shareLink = document.createElement('a');
  shareLink.className = 'nav-link';
  shareLink.href = '#';
  shareLink.title = 'Navigate to Social Media';
  shareLink.innerHTML = '<span class="icon-share"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>';

  shareLi.appendChild(shareLink);

  const socialWrapper = document.createElement('div');
  socialWrapper.className = 'social-wraper';

  const socialLinks = [
    {
        href: 'javascript:void(0)',
        onclick: "var host=window.location.href; var fbUrl = 'http://www.facebook.com/sharer/sharer.php?s=100&amp;u='.concat(host); var width=500, height=500; var left = (window.screen.width / 2) - ((width / 2) + 10); var top = (window.screen.height / 2) - ((height / 2) + 50); popUp = window.open(fbUrl,'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +''); popUp.focus(); return false;",
        className: 'social',
        title: 'Go to Facebook',
        iconClass: 'icon-facebook'
    },
    {
        href: 'javascript:void(0)',
        onclick: "twitterShare(window.location.href, encodeURIComponent(document.title));",
        className: 'social',
        title: 'Go to Twitter',
        iconClass: 'icon-twitter'
    },
    {
        href: 'javascript:void(0)',
        onclick: "var host=window.location.href; var title = document.title; var liUrl = 'http://www.linkedin.com/shareArticle?mini=true&amp;url='.concat(host); var width=500, height=500; var left = (window.screen.width / 2) - ((width / 2) + 10); var top = (window.screen.height / 2) - ((height / 2) + 50); popUp = window.open(encodeURI(liUrl),'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +''); popUp.focus(); return false;",
        className: 'social',
        title: 'Go to LinkedIn',
        iconClass: 'icon-linked-in'
    },
    {
        href: '',
        className: 'social',
        title: 'Go to ',
        iconClass: 'icon-chain'
    }
  ];

  socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.onclick = new Function(link.onclick);
    a.className = link.className;
    a.title = link.title;
    a.innerHTML = `<span class="${link.iconClass}"></span>`;
    socialWrapper.appendChild(a);
  });

  shareLi.appendChild(socialWrapper);
  ul.appendChild(shareLi);

  const searchLi = document.createElement('li');
  searchLi.className = 'nav-item search-desktop';

  const searchLink = document.createElement('a');
  searchLink.className = 'nav-link';
  searchLink.setAttribute('data-toggle', 'modal');
  searchLink.setAttribute('data-target', '#searchArticle');
  searchLink.title = 'Click to Search';
  searchLink.innerHTML = '<span class="icon-search"></span>';

  searchLi.appendChild(searchLink);
  ul.appendChild(searchLi);

  navbar.appendChild(ul);

  return ul;
}

function createMobileNav(navbar){
  const div = document.createElement('div');
  div.className = 'mobile-nav';

  // Create the social-wrapper span
  const socialWrapper = document.createElement('span');
  socialWrapper.id = 'social-id';
  socialWrapper.className = 'social-wraper';

  const socialLinks = [
    {
        href: 'javascript:void(0)',
        onclick: "var host=window.location.href; var fbUrl = 'http://www.facebook.com/sharer/sharer.php?s=100&amp;u='.concat(host); var width=500, height=500; var left = (window.screen.width / 2) - ((width / 2) + 10); var top = (window.screen.height / 2) - ((height / 2) + 50); popUp = window.open(fbUrl,'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +''); popUp.focus(); return false;",
        className: 'social',
        title: 'Go to Facebook',
        iconClass: 'icon-facebook'
    },
    {
        href: 'javascript:void(0)',
        onclick: "twitterShare(window.location.href, encodeURIComponent(document.title));",
        className: 'social',
        title: 'Go to Twitter',
        iconClass: 'icon-twitter'
    },
    {
        href: 'javascript:void(0)',
        onclick: "var host=window.location.href; var title = document.title; var liUrl = 'http://www.linkedin.com/shareArticle?mini=true&amp;url='.concat(host); var width=500, height=500; var left = (window.screen.width / 2) - ((width / 2) + 10); var top = (window.screen.height / 2) - ((height / 2) + 50); popUp = window.open(encodeURI(liUrl),'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +''); popUp.focus(); return false;",
        className: 'social',
        title: 'Go to LinkedIn',
        iconClass: 'icon-linked-in'
    },
    {
        href: '',
        className: 'social',
        title: 'Go to ',
        iconClass: 'icon-chain'
    }
  ];

  socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.onclick = new Function(link.onclick);
    a.className = link.className;
    a.title = link.title;
    a.innerHTML = `<span class="${link.iconClass}"></span>`;
    socialWrapper.appendChild(a);
  });

  div.appendChild(socialWrapper);

  const searchLink = document.createElement('a');
  searchLink.href = '#';
  searchLink.className = 'search-nav';
  searchLink.onclick = function() {
      social();
      return false;
  };
  searchLink.title = 'Find Social Media Links';
  searchLink.innerHTML = '<span class="icon-share"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>';

  div.appendChild(searchLink);

  const button = document.createElement('button');
  button.className = 'navbar-toggler';
  button.type = 'button';
  button.setAttribute('data-toggle', 'collapse');
  button.setAttribute('data-target', '#navbarSupportedContent');
  button.setAttribute('aria-controls', 'navbarSupportedContent');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Toggle navigation');

  const xCircle = document.createElement('span');
  xCircle.className = 'x-circle';
  xCircle.innerHTML = '<span class="icon-bx-x"></span>';

  button.appendChild(xCircle);
  div.appendChild(button);

  navbar.appendChild(div);
  return div;
}

function createNavbarBrandAndToggleButton(containerDiv, row){

    const a = document.createElement('a');
    a.className = 'navbar-brand';
    a.setAttribute('aria-label', 'Go to Infosys Home');

    // Create the img element
    const img = document.createElement('img');
    img.alt = 'logo';
    img.className = 'img-fluid';

    // Append the img to the a element
    a.appendChild(img);

    const div = document.createElement('div');
    div.className = 'toggle-btn';

    // Create the button element
    const button = document.createElement('button');
    button.className = 'navbar-toggler';
    button.type = 'button';
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#navbarSupportedContent');
    button.setAttribute('aria-controls', 'navbarSupportedContent');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');

    // Create the span element for the button icon
    const span = document.createElement('span');
    span.className = 'icon-bx-menu-alt-right';

    // Append the span to the button
    button.appendChild(span);

    // Append the button to the div
    div.appendChild(button);


    [...row.children].forEach((col,c)=>{
      if(c==0){
          img.setAttribute('src', col.querySelector('img').getAttribute('src'));
          
      } else{
        [...col.children].forEach((node,i)=>{
          if(i==0){
            console.log(node.textContent.trim());
            a.href = node.textContent.trim();
          } else{
            console.log(node.textContent.trim());
            a.title = node.textContent.trim();
          }
        })
      }
    })

    containerDiv.appendChild(a);
    containerDiv.appendChild(div);

    console.log(containerDiv);
}
