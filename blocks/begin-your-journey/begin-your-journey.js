export default function decorate(block){
    console.log(block);
    console.log("Block inner:"+ block.innerHTML);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';

    var h2content = container.querySelector('h2');
    var pcontent = container.querySelector('div');
    var h3content = container.querySelector('h3');
    var lists = container.querySelectorAll('ul');

    var parentDivClass = ['col-lg-3', 'col-md-4', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInLeft'];
    var h2Class = ['h2-head', 'mb-20'];
    var pClass = ['speakers-para', 'fontweight400'];
    var h3Class = ['faq-head'];

    var parentDiv = createParentDiv(parentDivClass, h2Class, pClass, h3Class, h2content, pcontent, h3content, lists);

    var accordionParentDiv = createAemElement('div', ['col-lg-8', 'col-md-8', 'col-lg-offset-1', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInDown', 'animated'], {'data-wow-delay':'0.4s', 'style':'visibility: visible;-webkit-animation-delay: 0.4s; -moz-animation-delay: 0.4s; animation-delay: 0.4s;'}, null);
    var tabAccordionDiv = createAemElement('div',['bs-example', 'bs-example-tabs', 'tab-accordion-bg'],{'data-example-id':'togglable-tabs'}, null);
    var tabContentDiv = createAemElement('div',['tab-content'],null,"myTabContent");
    var firstdiv = createAemElement('div',['tab-pane', 'fade', 'active', 'in'],null, null);
    var secondDiv = createAemElement('div',['panel-group', 'accordion-faqs'],{'role':'tablist', 'aria-multiselectable':'true'}, "tab-accordion1");
    [...container.children].forEach((row,r)=>{

        if(r>=4 && r<=7){
            var id;
            if(r=4){
                id = row.querySelector('div').textContent.trim();
                console.log("row id:" + id);
                firstdiv.id = id;
            }else{
                var panelDiv = document.createElement('div');
                panelDiv.className = 'panel panel-default';
                var panelHeading;
                var panelCollapse;
                [...row.children].forEach((col,c)=>{
                    if(c==0){
                        var panelHeading = createPanelHeading(col[c]);
                        panelDiv.append(panelHeading);
                    }
                    if(c==1){
                        var collapseId = 'collapse' + r + c;
                        var panelCollapse = createPanelCollapse(col[c],collapseId);
                        panelDiv.append(panelCollapse);
                    }
                });
                secondDiv.append(panelDiv);
            }
        }
    });
    firstdiv.append(secondDiv);
    tabContentDiv.append(firstdiv);
    tabAccordionDiv.append(tabContentDiv);
    accordionParentDiv.append(tabAccordionDiv);

    const section = document.createElement('section');
    section.id = 'faqs';
    section.className = 'journey py-75';

    const article = document.createElement('article');
    article.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    row.append(parentDiv);
    row.append(accordionParentDiv);

    article.append(row);
    section.append(article);
    block.append(section);
    console.log("Block:"+ block);

}
$("#menu-border-line a").click(function () {
		$("html,body").animate({
			scrollTop: $(".tab-accordion-bg").offset().top - 100,
		}, 700);
	});
//$(window).scroll(function () {
//    if ($(this).scrollTop() !== 0) {
//      $(".scroll-up").fadeIn(700);
//      //$("#logo").attr("fill", "#007cc3");
//      $(".scrollbg-show").addClass("show-strip");
//      //$(".hamburger").addClass("bg-sapphire-dark");
//    } else {
//      $(".scroll-up").fadeOut(700);
//      //$("#logo").attr("fill", "#fff");
//      $(".scrollbg-show").removeClass("show-strip");
//      //$(".hamburger").removeClass("bg-sapphire-dark");
//    }
//  });
 
//$(".scroll-up").click(function () {
//    $("body,html").animate({
//      scrollTop: 0
//    }, 700);
//    $(".navbar-brand").focus();
//  });
 
//$(".scrollto-target").click(function (e) {
//    e.preventDefault();
//    $("html, body").animate({
//      scrollTop: $($(this).attr("href")).offset().top - 75,
//    }, 700);
//  });

function createParentDiv(parentDivClass, h2Class, pClass, h3Class, h2content, pcontent, h3content, lists){

    const parentDiv = document.createElement('div');
    for(let cls in parentDivClass){
        parentDiv.classList.add(parentDivClass[cls]);
    }
    parentDiv.setAttribute("data-wow-delay","0.2s");

    const blockHead = document.createElement('h2');
    for(let cls in h2Class){
        blockHead.classList.add(h2Class[cls]);
    }
    blockHead.textContent = h2content.textContent.trim();

    const para = document.createElement('p');
    for(let cls in pClass){
        para.classList.add(pClass[cls]);
    }
    para.textContent = pcontent.textContent.trim();
    para.setAttribute("data-wow-delay","0.2s");
    para.setAttribute("style","visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;");

    const h3block = document.createElement('h3');
    for(let cls in h3Class){
        h3block.classList.add(h3Class[cls]);
    }
    h3block.textContent = h3content.textContent.trim();

    const firstList = lists[0];
    const Ullist = document.createElement('ul');
    Ullist.className = 'nav nav-tabs';
    Ullist.id = 'menu-border-line';
    Ullist.setAttribute('role','tablist');
    const firstListChildren = Array.from(firstList.children);
        for(let i=0;i<firstListChildren.length;i++){
            if(i==0){
                firstListChildren[i].classList.add('active');
            }
            var atag= document.createElement('a');
            atag.setAttribute("href", "#"+firstListChildren[i].textContent);
            atag.setAttribute("data-toggle", "tab");
            atag.textContent = firstListChildren[i].textContent.trim();
            firstListChildren[i].innerHTML = "";
            firstListChildren[i].append(atag);
            Ullist.append(firstListChildren[i]);
        }
    parentDiv.append(blockHead);
    parentDiv.append(para);
    parentDiv.append(h3block);
    parentDiv.append(Ullist);
    return parentDiv;

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
function createPanelHeading(col){

    var testing = col.querySelectorAll('h4');
    console.log("Heading h4 content"+ testing[0].textContent.trim());
    var childPanelDiv = document.createElement('div');
    childPanelDiv.className = 'panel-heading';
    childPanelDiv.setAttribute('role','tab');
    var h4Tag = document.createElement('h4');
    var aTag = createAemElement('a',null,{'data-toggle':'collapse', 'data-parent':'#tab-accordion1', 'href':'#collapse1', 'aria-expanded':'true', 'aria-controls':'collapse1'},null);
    aTag.textContent = testing[0].textContent.trim();
    h4Tag.append(aTag);
    childPanelDiv.append(h4Tag);
    return childPanelDiv;
}

function createPanelCollapse(col, id){
    var testing = col.querySelectorAll('p');
        console.log("Para p content"+ testing[1].textContent.trim());
    var panelCollapseDiv = createAemElement('div',['panel-collapse', 'collapse', 'in'],{'role':'tabpanel', 'aria-expanded':'true'},id);
    var panelBodyDiv = document.createElement('div');
    panelBodyDiv.className = 'panel-body';
    var pTag = document.createElement('p');
    pTag.textContent = testing[1].textContent.trim();
    panelBodyDiv.append(pTag);
    panelCollapseDiv.append(panelBodyDiv);
    return panelCollapseDiv;
}