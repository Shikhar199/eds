import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // const footerMeta = getMetadata('footer');
  // block.textContent = '';

  // // load footer fragment
  // const footerPath = footerMeta.footer || '/footer';
  // const fragment = await loadFragment(footerPath);

  // // decorate footer DOM
  // const footer = document.createElement('div');
  // while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // block.append(footer);

  const xfDiv = document.createElement("div");
  xfDiv.classList.add('experiencefragment', 'aem-GridColumn', 'aem-GridColumn--default--12');

  const xfContentDiv = document.createElement("div");
  xfContentDiv.classList.add('xf-content-height');

  const aemGridDiv = document.createElement("div");
  aemGridDiv.classList.add('aem-Grid', 'aem-Grid--12', 'aem-Grid--default--12');

  const freeflowDiv = document.createElement("div");
  freeflowDiv.classList.add('freeflowhtml', 'aem-GridColumn', 'aem-GridColumn--default--12');

  var styleElement = document.createElement('style');
  var cssRules = '.xf-content-height { min-height: 0px; margin: 0px; }';
  styleElement.textContent = cssRules;

  const footer = document.createElement('footer');
  footer.id = 'footer';

  const goUpDiv = document.createElement('div');
  goUpDiv.id = 'go-up';
  goUpDiv.classList.add('go-upNavigation', 'show');

  xfDiv.appendChild(xfContentDiv);
  xfContentDiv.appendChild(aemGridDiv);
  aemGridDiv.appendChild(freeflowDiv);

  freeflowDiv.appendChild(styleElement);
  freeflowDiv.appendChild(footer);
  freeflowDiv.appendChild(goUpDiv);

  // create footer element 

  // create 1st article

  const firstArticle = document.createElement('article');
  firstArticle.classList.add('iki-subscribtion-footer');

  const containerFluidDiv = document.createElement('div');
  containerFluidDiv.classList.add('container-fluid');

  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  [...block.children].forEach((row,r)=>{
      createRowChild(row,r);
      // rowDiv.appendChild(child);
  })

  console.log("XFDIV", xfDiv);

}

function createRowChild(row,r){

  if(r==1){
      // const childDiv = document.createElement('div');
      // childDiv.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12', 'text-center', 'p0', 'podcast-box');
      console.log(row);
      var data = row.querySelectorAll('p');
      console.log(data);

  }
}
