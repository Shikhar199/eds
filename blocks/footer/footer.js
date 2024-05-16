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
      const child = createRowChild(row,r);
      rowDiv.appendChild(child);
  })


  console.log("ROWDIV", rowDiv);

}

function createRowChild(row,r){

  var data = row.querySelectorAll('p');

  if(r==0){
      const rowChildDiv = document.createElement('div');
      rowChildDiv.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12', 'text-center', 'p0', 'podcast-box');

      const anchor = document.createElement('a');

      rowChildDiv.appendChild(anchor);

      const fadeInDiv = document.createElement('div');
      fadeInDiv.classList.add('box', 'wow', 'fadeInLeft');
      fadeInDiv.setAttribute('data-wow-delay',"0.3s");

      const boxContentDiv = document.createElement('div');
      boxContentDiv.classList.add('box-content');
      
      const iconSpan = document.createElement('span');
      iconSpan.classList.add('iki-icons', 'icon-connect');

      const textSpan = document.createElement('span');

      anchor.appendChild(fadeInDiv);
      fadeInDiv.appendChild(boxContentDiv);
      boxContentDiv.appendChild(iconSpan);
      boxContentDiv.appendChild(textSpan);

      updateAttributes(data, anchor, textSpan);

      return rowChildDiv;

  } else if(r==1){
      const rowChildDiv = document.createElement('div');
      rowChildDiv.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12', 'text-center', 'p0', 'podcast-box');

      const anchor = document.createElement('a');

      rowChildDiv.appendChild(anchor);

      const fadeInDiv = document.createElement('div');
      fadeInDiv.classList.add('box', 'wow', 'fadeInLeft');
      fadeInDiv.setAttribute('data-wow-delay',"0.6s");

      const boxContentDiv = document.createElement('div');
      boxContentDiv.classList.add('box-content');
      
      const iconSpan = document.createElement('span');
      iconSpan.classList.add('iki-icons', 'icon-request-expert');

      const textSpan = document.createElement('span');

      anchor.appendChild(fadeInDiv);
      fadeInDiv.appendChild(boxContentDiv);
      boxContentDiv.appendChild(iconSpan);
      boxContentDiv.appendChild(textSpan);

      updateAttributes(data, anchor, textSpan);

      return rowChildDiv;

  } else if(r==2){
    const rowChildDiv = document.createElement('div');
    rowChildDiv.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12', 'text-center', 'p0', 'podcast-box', 'podcast-box-link');
    rowChildDiv.id = 'subscribeinsights';

    // create span first child of rowchoilddiv
    const span = document.createElement('span');
    span.classList.add('tooltip-content', 'clearfix');

    const subDiv = document.createElement('div');
    subDiv.classList.add('sub-ins', 'bg-topaz-dark');

    const formHeading = document.createElement('h4');
    formHeading.classList.add('h4-head', 'fontweight400');

    const contactForm = document.createElement('form');
    contactForm.id = "subscribeEmail";
    contactForm.setAttribute('name', 'subscribeEmail');
    contactForm.setAttribute('onsubmit', 'return validateikisub(this);');
    contactForm.setAttribute('method','post');
    contactForm.setAttribute('actions', 'https://marcom.infosys.com/services/forms/v1/response');

    //Email checker div

    const emailCheckerDiv = document.createElement('div');
    emailCheckerDiv.classList.add('email-checker');
    emailCheckerDiv.id = 'email64zxca-container';
    emailCheckerDiv.setAttribute('aria-hidden', 'true');

    const emailCheckerLabel = document.createElement('label');
    emailCheckerLabel.setAttribute('label','email64zxca');
    emailCheckerLabel.style.boxSizing = 'border-box';

    emailCheckerDiv.appendChild(emailCheckerLabel);

    const input1 = document.createTextNode('input');
    input1.setAttribute('type','text');
    input1.id = 'email64zxca';
    input1.setAttribute('name','email64zxc');
    input1.setAttribute('tabindex', '-1');
    input1.setAttribute('autocomplete', 'backup-email');

    const errorMsg = document.createElement('p');
    errorMsg.id = 'errormsgiki';
    errorMsg.style.fontSize = '14px';

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.classList.add('iki-sub-btn', 'bg-topaz-medium');

    const input2 = document.createTextNode('input');
    input2.setAttribute('type', 'hidden');
    input2.setAttribute('value','infysp');
    input2.id='sptextiki';
    input2.setAttribute('name', 'sptext');

    const input3 = document.createTextNode('input');
    input3.setAttribute('type', 'hidden');
    input3.setAttribute('name', 'camFormName');
    input3.setAttribute('value', 'connect-iki');

    const input4 = document.createTextNode('input');
    input4.setAttribute('type', 'hidden');
    input4.setAttribute('name', 'camId');

    const input5 = document.createTextNode('input');
    input5.setAttribute('type', 'hidden');
    input4.setAttribute('name', 'camCustId');

    const input6 = document.createTextNode('input');
    input6.setAttribute('type', 'hidden');
    input6.setAttribute('name', 'Source');
    input6.setAttribute('value', 'IKI Footer Subscribe');

    const fieldset = createFieldSet();
    console.log("FieldSet", fieldset);



  } else if(r==3){

  }
}

function updateAttributes(data, anchor, textSpan){
  for(let i=0;i<data.length;i++){
    if(i==0){
        anchor.setAttribute('href',data[0].textContent.trim());
    } else if(i==1){
        anchor.setAttribute('aria-label',data[1].textContent.trim());
    } else if(i==2){
        anchor.setAttribute('title',data[2].textContent.trim());
        textSpan.textContent = data[2].textContent.trim();
    }
  }
}

function createFieldSet(){
  var fieldset = document.createElement('fieldset');
  fieldset.id = 'db_data_container';
  fieldset.style.border = 'none';

  var data = [
    { id: 'db_registry_company_name', name: 'db_registry_company_name' , value: 'SITI NETWORKS LIMITED' },
    { id: 'db_registry_city', name: 'db_registry_city' , value: 'Delhi' }, 
    { id: 'db_registry_state', name: 'db_registry_state' , value: 'DL' },
    { id: 'db_region_name', name: 'db_region_name' , value: 'National Capital Territory of Delhi' }, 
    { id: 'db_registry_zip_code', name: 'db_registry_zip_code' , value: '110003' },
    { id: 'db_registry_area_code', name: 'db_registry_area_code' , value:''}, 
    { id: 'db_registry_dma_code', name: 'db_registry_dma_code' , value:''}, 
    { id: 'db_registry_country', name: 'db_registry_country' , value:'India'},
    { id: 'db_registry_country_code', name: 'db_registry_country_code' , value:'IN'},
    { id: 'db_registry_country_code3', name: 'db_registry_country_code3' , value:''}, 
    { id: 'db_registry_latitude', name: 'db_registry_latitude' , value:'28.65'},
    { id: 'db_registry_longitude', name: 'db_registry_longitude' , value:'77.24'}, 
    { id: 'company_name', name: 'company_name' , value:'Onshape Inc'}, 
    { id: 'demandbase_sid', name: 'demandbase_sid' , value:'122552602'}, 
    { id: 'demandbase_sid', name: 'demandbase_sid' , value:'122552602'}, 
];

  data.forEach(function(item) {
      var input = document.createElement('input');
      input.type = 'hidden';
      input.id = item.id;
      input.name = item.id; // You may modify this if needed
      input.value = item.value;
      fieldset.appendChild(input);
  });


  return fieldset;
}
