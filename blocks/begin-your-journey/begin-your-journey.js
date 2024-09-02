export default function decorate(block){
    console.log(block);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    var h2content = container.querySelector('h2');
    var pcontent = container.querySelector('p');
    var h3content = container.querySelector('h3');

    console.log("h2content:"+ h2content);
    console.log("pcontent:"+ pcontent);
    console.log("h3content:"+ h3content);
    var parentDivClass = ['col-lg-3', 'col-md-4', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInLeft'];
    var h2Class = ['h2-head', 'mb-20'];
    var pClass = ['speakers-para', 'fontweight400'];
    var h3Class = ['faq-head'];

    var section = createSelectionDiv(parentDivClass, h2Class, pClass, h3Class, h2content, pcontent, h3content);
    block.append(section);
    console.log("Block:"+ block);

	}
	$("#menu-border-line a").click(function () {
		$("html,body").animate({
			scrollTop: $(".tab-accordion-bg").offset().top - 100,
		}, 700);
	});
	$(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
      $(".scroll-up").fadeIn(700);
      //$("#logo").attr("fill", "#007cc3");
      $(".scrollbg-show").addClass("show-strip");
      //$(".hamburger").addClass("bg-sapphire-dark");
    } else {
      $(".scroll-up").fadeOut(700);
      //$("#logo").attr("fill", "#fff");
      $(".scrollbg-show").removeClass("show-strip");
      //$(".hamburger").removeClass("bg-sapphire-dark");
    }
  });
 
  $(".scroll-up").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 700);
    $(".navbar-brand").focus();
  });
 
  $(".scrollto-target").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 75,
    }, 700);
  });

function createSelectionDiv(parentDivClass, h2Class, pClass, h3Class, h2content, pcontent, h3content){

    const section = document.createElement('section');
    section.id = 'faqs';
    section.className = 'journey py-75';

    const article = document.createElement('article');
    article.className = 'container';

    const row = document.createElement('div');
    row.className = 'row';

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

    section.append(article);
    section.append(row);
    parentDiv.append(blockHead);
    parentDiv.append(para);
    parentDiv.append(h3block);
    section.append(parentDiv);
    return section;

}

