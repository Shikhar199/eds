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

  containerFluidDiv.appendChild(rowDiv);

  [...block.children].forEach((row,r)=>{
      const child = createRowChild(row,r);
      if(typeof child !== 'undefined' && child!==null){
        rowDiv.appendChild(child);
      }
  })

  footer.appendChild(firstArticle);
  firstArticle.appendChild(containerFluidDiv);

  var parent = document.querySelector('main');
  const footerContainer = document.querySelector('.footer-container');
  parent.replaceChild(xfDiv, footerContainer); 

  console.log("ROWDIV", rowDiv);


  // Create second article

  const secondArticle = document.createElement('article');
  const firstArticleChild = document.createElement('div');
  firstArticleChild.classList.add('container', 'pt50', 'pb50');

  const rowDiv2 = document.createElement('div');
  rowDiv2.classList.add('row');

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
      console.log("RowchildDiv",rowChildDiv);
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

    //Email checker div

    const emailCheckerDiv = document.createElement('div');
    emailCheckerDiv.classList.add('email-checker');
    emailCheckerDiv.id = 'email64zxca-container';
    emailCheckerDiv.setAttribute('aria-hidden', 'true');

    const emailCheckerLabel = document.createElement('label');
    emailCheckerLabel.setAttribute('label','email64zxca');
    emailCheckerLabel.style.boxSizing = 'border-box';

    emailCheckerDiv.appendChild(emailCheckerLabel);

    const input1 = document.createElement('input');
    input1.setAttribute('type','text');
    input1.id = 'email64zxca';
    input1.setAttribute('name','email64zxc');
    input1.setAttribute('tabindex', '-1');
    input1.setAttribute('autocomplete', 'backup-email');
    input1.setAttribute('placeholder','Your company email');

    const errorMsg = document.createElement('p');
    errorMsg.id = 'errormsgiki';
    errorMsg.style.fontSize = '14px';

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.classList.add('iki-sub-btn', 'bg-topaz-medium');

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'hidden');
    input2.setAttribute('value','infysp');
    input2.id='sptextiki';
    input2.setAttribute('name', 'sptext');

    const input3 = document.createElement('input');
    input3.setAttribute('type', 'hidden');
    input3.setAttribute('name', 'camFormName');
    input3.setAttribute('value', 'connect-iki');

    const input4 = document.createElement('input');
    input4.setAttribute('type', 'hidden');
    input4.setAttribute('name', 'camId');

    const input5 = document.createElement('input');
    input5.setAttribute('type', 'hidden');
    input4.setAttribute('name', 'camCustId');

    const input6 = document.createElement('input');
    input6.setAttribute('type', 'hidden');
    input6.setAttribute('name', 'Source');
    input6.setAttribute('value', 'IKI Footer Subscribe');

    const fieldset = createFieldSet();
    console.log("FieldSet", fieldset);

    rowChildDiv.appendChild(span);
    span.appendChild(subDiv);
    subDiv.appendChild(formHeading);
    subDiv.appendChild(contactForm);

    contactForm.appendChild(emailCheckerDiv);
    contactForm.appendChild(input1);
    contactForm.appendChild(errorMsg);
    contactForm.appendChild(submitBtn);
    contactForm.appendChild(input2);
    contactForm.appendChild(input3);
    contactForm.appendChild(input4);
    contactForm.appendChild(input5);
    contactForm.appendChild(input6);
    contactForm.appendChild(fieldset);

    const thankYouDiv = document.createElement('div');
    thankYouDiv.id='thankyousub';
    thankYouDiv.style.display = 'none';
    thankYouDiv.style.padding = '25px';

    const ptag = document.createElement('p');
    ptag.className = ''; 
    var strong = document.createElement('strong');

    ptag.appendChild(strong);

    thankYouDiv.appendChild(ptag);

    const blindIkiDiv = document.createElement('div');
    blindIkiDiv.id = 'blindiki';

    subDiv.appendChild(thankYouDiv);
    subDiv.appendChild(blindIkiDiv);

    // create anchor

    const anchor = document.createElement('a');
    anchor.classList.add('box', 'wow', 'fadeInLeft');
    anchor.setAttribute('data-wow-delay', '0.9s');
    anchor.style.opacity = '1';
    anchor.style.transform = 'scale3d(1,1,1)';

    const boxContentDiv = document.createElement('div');
    boxContentDiv.classList.add('box-content');
    
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('iki-icons', 'icon-insight');

    const textSpan = document.createElement('span');

    anchor.appendChild(boxContentDiv);
    boxContentDiv.appendChild(iconSpan);
    boxContentDiv.appendChild(textSpan);

    rowChildDiv.appendChild(anchor);

    for(let i=0;i<data.length;i++){
      if(i==0){
          formHeading.textContent = data[0].textContent.trim();
      } else if(i==1){
          contactForm.setAttribute('action',data[1].textContent.trim());
      } else if(i==2){
          emailCheckerLabel.textContent = data[2].textContent.trim();
      } else if(i==3){
          submitBtn.textContent = data[3].textContent.trim();
      } else if(i==4){
          strong.textContent = data[4].textContent.trim();
      } else if(i==5){
          anchor.setAttribute('title', data[5].textContent.trim());
          anchor.setAttribute('aria-label', data[5].textContent.trim());
          textSpan.textContent = data[5].textContent.trim()
      }
    }

    return rowChildDiv;

  } else if(r==3){
    const rowChildDiv = document.createElement('div');
    rowChildDiv.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12', 'text-center', 'p0', 'podcast-box', 'podcast-box-link');
    rowChildDiv.id = 'sub-podcasts';

    const tootltipSpan = document.createElement('span');
    tootltipSpan.classList.add('tooltip-content', 'clearfix');

    const list = document.createElement('ul');
    list.classList.add('bg-topaz-dark');

    for(let i=0;i<4;i++){
      var liEle;
        if(i==0){
          liEle = createLi('icon-apple', data[0].textContent.trim(), data[1].textContent.trim());
        } else if(i==1){
          liEle = createLi('icon-google', data[2].textContent.trim(), data[3].textContent.trim());
        } else if(i==2){
          liEle = createLi('icon-spotify', data[4].textContent.trim(), data[5].textContent.trim());
        } else if(i==3){
          liEle = createLi('icon-sound-cloud', data[6].textContent.trim(), data[7].textContent.trim());
        }
        list.appendChild(liEle);  
    }
    rowChildDiv.appendChild(tootltipSpan);
    tootltipSpan.appendChild(list);

    // create anchor

    const anchor = document.createElement('a');
    anchor.classList.add('box', 'wow', 'fadeInLeft');
    anchor.setAttribute('data-wow-delay', '1.2s');
    anchor.href = 'javascript:void(0);'
    anchor.setAttribute('title', data[8].textContent.trim());
    anchor.setAttribute('aria-label', data[8].textContent.trim());

    const boxContentDiv = document.createElement('div');
    boxContentDiv.classList.add('box-content');
    
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('iki-icons', 'icon-podcasts');

    const textSpan = document.createElement('span');
    textSpan.textContent = data[8].textContent.trim();

    anchor.appendChild(boxContentDiv);
    boxContentDiv.appendChild(iconSpan);
    boxContentDiv.appendChild(textSpan);

    rowChildDiv.appendChild(anchor);

    return rowChildDiv;
  } else if(r==4){
    const rowChildDiv = document.createElement('div');
    rowChildDiv.classList.add('col-lg-2', 'col-md-3', 'col-sm-4', 'col-12', 'col-xs-12');

    const heading = document.createElement('h3');
    heading.classList.add('ftr-head', 'mt-xs-20');

    const list = createLinksList('list-unstyled', 'footer-txt', data, heading)
    console.log(list);

    rowChildDiv.appendChild(heading);
    rowChildDiv.appendChild(list);

    return rowChildDiv; 
  }
}

function createLinksList(ulclass1, ulclass2, data, heading){
    const unorderedList = document.createElement('ul');
    unorderedList.classList.add(ulclass1, ulclass2);
    var li="";
    for(let i=0;i<data.length;i++){
        if(i==0){
            heading.textContent = data[i].textContent.trim();
        } else if(i%2==1){
            li = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.textContent = data[i].textContent.trim();
            anchor.setAttribute('title',data[i].textContent.trim());
            anchor.setAttribute('href', data[i+1].textContent.trim());
            li.appendChild(anchor);
            unorderedList.appendChild(li);
        }
    }
    return unorderedList;
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
    { id: 'industry', name: 'industry' , value:'Financial Services'}, 
    { id: 'sub_industry', name: 'sub_industry' , value:'Investment Services'}, 
    { id: 'db_employee_count', name: 'db_employee_count' , value:'105'}, 
    { id: 'db_isp', name: 'db_isp' , value:'true'}, 
    { id: 'db_primary_sic', name: 'db_primary_sic' , value:'6211'}, 
    { id: 'db_primary_naics', name: 'db_primary_naics' , value:'523120'}, 
    { id: 'db_street_address', name: 'db_street_address' , value:'1 Alewife Ctr Ste 130'}, 
    { id: 'city', name: 'city' , value:'Cambridge'}, 
    { id: 'state', name: 'state' , value:'MA'}, 
    { id: 'zip', name: 'zip' , value:'02140'}, 
    { id: 'db_country', name: 'db_country' , value:'US'},
    { id: 'country', name: 'country' , value:'United States'},
    { id: 'office_phone', name: 'office_phone' , value:'413-200-8701'},
    { id: 'db_stock_ticker', name: 'db_stock_ticker' , value:''},
    { id: 'db_web_site', name: 'db_web_site' , value:'onshape.com'},
    { id: 'db_annual_sales', name: 'db_annual_sales' , value:'1203000'},
    { id: 'revenue_range', name: 'revenue_range' , value:'$1M - $5M'},
    { id: 'db_employee_range', name: 'db_employee_range' , value:'Mid-Market'},
    { id: 'db_b2b', name: 'db_b2b' , value:'true'},
    { id: 'db_b2c', name: 'db_b2c' , value:'true'},
    { id: 'db_traffic', name: 'db_traffic' , value:'Low'},
    { id: 'db_latitude', name: 'db_latitude' , value:'42.4'},
    { id: 'db_longitude', name: 'db_longitude' , value:'-71.14'},
    { id: 'fortune_1000', name: 'fortune_1000' , value:'false'},
    { id: 'forbes_2000', name: 'forbes_2000' , value:'false'},
    { id: 'db_hq_sid', name: 'db_hq_sid' , value:'122552602'},
    { id: 'db_domestichq_sid', name: 'db_domestichq_sid' , value:'122552602'},
    { id: 'db_worldhq_sid', name: 'db_worldhq_sid' , value:'122552602'},
    { id: 'db_information_level', name: 'db_information_level' , value:'Detailed'},
    { id: 'db_audience', name: 'db_audience' , value:'SOHO'},
    { id: 'db_audience_segment', name: 'db_audience_segment' , value:''},
    { id: 'db_company_size', name: 'db_company_size' , value:'$1M - $5M'},
    { id: 'db_access_type', name: 'db_access_type' , value:'corporate'},
    { id: 'db_hq_company_name', name: 'db_hq_company_name' , value:'Onshape Inc'},
    { id: 'db_hq_demandbase_sid', name: 'db_hq_demandbase_sid' , value:'122552602'},
    { id: 'db_hq_marketing_alias', name: 'db_hq_marketing_alias' , value:'Onshape'},
    { id: 'db_hq_industry', name: 'db_hq_industry' , value:'Financial Services'},
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

function createLi(iconClass, data, link){
    const li = document.createElement('li');
    li.style.opacity = '1';

    const productAnchor = document.createElement('a');
    productAnchor.setAttribute('target','_blank');
    productAnchor.setAttribute('rel','noopener noreferrer');
    productAnchor.setAttribute('title', data);
    productAnchor.setAttribute('href', link);

    const icon = document.createElement('i');
    icon.classList.add(iconClass);

    const pTag = document.createElement('p');
    pTag.textContent = data;

    li.appendChild(productAnchor);
    productAnchor.appendChild(icon);
    productAnchor.appendChild(pTag);

    return li;

}
