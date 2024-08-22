export default function decorate(block){
    console.log(block);
    [...block.children].forEach((row,index)=>{
        var rowDiv = document.createElement('div');
		rowDiv.classList.add('row');
        var containerDiv = document.createElement('div');
        containerDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInLeft', 'animated');
 
        // Create the h2 element
        if(index==0){
            var h2Element = document.createElement('h2');
            h2Element.classList.add('h2-head', 'mb-20');
            h2Element.setAttribute('data-wow-delay', '0.2s');
            h2Element.style.visibility = 'visible';
            h2Element.style.webkitAnimationDelay = '0.2s';
            h2Element.style.mozAnimationDelay = '0.2s';
            h2Element.style.animationDelay = '0.2s';
            h2Element.innerText = row.textContent.trim();
            containerDiv.appendChild(h2Element);
        }
		if(index == 1){
			var pElement = document.createElement('p');
			pElement.classList.add('speakers-para', 'fontweight400');
			pElement.innerHTML = row.textContent.trim();
			containerDiv.appendChild(pElement);
		}
		if(index == 2){
			var h3Element = document.createElement('h3');
			h3Element.classList.add('faq-head"');
			h3Element.innerHTML = row.textContent.trim();
			containerDiv.appendChild(h3Element);
		}
        // Create the ul element
		if(index == 3){
        var UlElement = document.createElement('ul');
		UlElement.classList.add('nav', 'nav-tabs');
		UlElement.setAttribute('id', 'menu-border-line');
		UlElement.setAttribute('role', 'tablist');
        // Create li elements for day-selection
            var panelArr = row.textContent.trim().split("\n");
            console.log(panelArr);
            console.log(panelArr.length);
            for(let i=0;i<panelArr.length;i++){
				var li = document.createElement('li');
					if(i==0){
						li.classList.add('active');
					}
					var a = document.createElement('a');
					a.setAttribute('href', panelArr[i].trim());
					a.setAttribute('data-toggle', 'tab');
					a.innerHTML = panelArr[i].trim();
					UlElement.appendChild(li);
				}
				containerDiv.appendChild(UlElement);
			}
			rowDiv.appendChild(containerDiv);
		if(row >= 4){
			[...row.children].forEach((col,index)=>{

			}
		}
	});
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
}