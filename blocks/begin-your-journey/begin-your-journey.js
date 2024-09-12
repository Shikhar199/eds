export default function decorate(block){
    console.log(block);
    console.log("Block inner:"+ block.innerHTML);
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';

    var h2content = container.querySelector('h2');
    var pcontent = container.querySelector('h5');
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

    var registrationPanelDiv = createAemElement('div',['panel-group', 'accordion-faqs'],{'role':'tablist', 'aria-multiselectable':'true'}, "tab-accordion1");
    var travelPanelDiv = createAemElement('div',['panel-group', 'accordion-faqs'],{'role':'tablist', 'aria-multiselectable':'true'}, "tab-accordion2");
    var conferencePanelDiv = createAemElement('div',['panel-group', 'accordion-faqs'],{'role':'tablist', 'aria-multiselectable':'true'}, "tab-accordion3");
    var hotelPanelDiv = createAemElement('div',['panel-group', 'accordion-faqs'],{'role':'tablist', 'aria-multiselectable':'true'}, "tab-accordion4");

    [...container.children].forEach((row,r)=>{
        if(r>=5 && r<=7){
                var panelDiv = document.createElement('div');
                panelDiv.className = 'panel panel-default';
                var panelHeading;
                var panelCollapse;
                [...row.children].forEach((col,c)=>{
                    if(c==0){
                        var panelHeading = createPanelHeading(col);
                        panelDiv.append(panelHeading);
                    }
                    if(c==1){
                        var collapseId = 'collapse' + r + c;
                        var panelCollapse = createPanelCollapse(col,collapseId);
                        panelDiv.append(panelCollapse);
                    }
                });
                registrationPanelDiv.append(panelDiv);
                if(r==7){
                    var registrationdiv = createAemElement('div',['tab-pane', 'fade', 'active', 'in'],null, 'registration');
                    registrationdiv.append(registrationPanelDiv);
                    tabContentDiv.append(registrationdiv);
                }

        }
        else if(r==9){

            var panelDiv = document.createElement('div');
            panelDiv.className = 'panel panel-default';
            var panelHeading;
            var panelCollapse;
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    var panelHeading = createPanelHeading(col);
                    panelDiv.append(panelHeading);
                }
                if(c==1){
                    var collapseId = 'collapse' + r + c;
                    var panelCollapse = createPanelCollapse(col,collapseId);
                    panelDiv.append(panelCollapse);
                }
            });
            travelPanelDiv.append(panelDiv);
            var traveldiv = createAemElement('div',['tab-pane', 'fade'],null, 'travel');
            traveldiv.append(travelPanelDiv);
            tabContentDiv.append(traveldiv);
        }
        else if(r>=11 && r<=15){

            var panelDiv = document.createElement('div');
            panelDiv.className = 'panel panel-default';
            var panelHeading;
            var panelCollapse;
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    var panelHeading = createPanelHeading(col);
                    panelDiv.append(panelHeading);
                }
                if(c==1){
                    var collapseId = 'collapse' + r + c;
                    var panelCollapse = createPanelCollapse(col,collapseId);
                    panelDiv.append(panelCollapse);
                }
            });
            conferencePanelDiv.append(panelDiv);
                if(r==15){
                    var conferencediv = createAemElement('div',['tab-pane', 'fade'],null, 'conference');
                    conferencediv.append(conferencePanelDiv);
                    tabContentDiv.append(conferencediv);
                }
        }
        else if(r>=17 && r<=20){

            var panelDiv = document.createElement('div');
            panelDiv.className = 'panel panel-default';
            var panelHeading;
            var panelCollapse;
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    var panelHeading = createPanelHeading(col);
                    panelDiv.append(panelHeading);
                }
                if(c==1){
                    var collapseId = 'collapse' + r + c;
                    var panelCollapse = createPanelCollapse(col,collapseId);
                    panelDiv.append(panelCollapse);
                }
            });
            hotelPanelDiv.append(panelDiv);
                if(r==15){
                    var hoteldiv = createAemElement('div',['tab-pane', 'fade'],null, 'hotel');
                    hoteldiv.append(hotelPanelDiv);
                    tabContentDiv.append(hoteldiv);
                }
        }
    });

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


function createParentDiv(parentDivClass, h2Class, pClass, h3Class, h2content, pcontent, h3content, lists){

    const parentDiv = document.createElement('div');
    for(let cls in parentDivClass){
        parentDiv.classList.add(parentDivClass[cls]);
    }
    parentDiv.setAttribute("data-wow-delay","0.2s");
    parentDiv.setAttribute("style","visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;");
    
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
//    para.setAttribute("data-wow-delay","0.2s");


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

    var testing = col.querySelector('h4');
    console.log("Heading h4 content"+ testing.textContent.trim());
    var childPanelDiv = document.createElement('div');
    childPanelDiv.className = 'panel-heading';
    childPanelDiv.setAttribute('role','tab');
    var h4Tag = document.createElement('h4');
    var aTag = createAemElement('a',['collapsed'],{'data-toggle':'collapse', 'data-parent':'#tab-accordion1', 'href':'#collapse1', 'aria-expanded':'true', 'aria-controls':'collapse1'},null);
    aTag.textContent = testing.textContent.trim();
    h4Tag.append(aTag);
    childPanelDiv.append(h4Tag);
    return childPanelDiv;
}

function createPanelCollapse(col, id){
    var testing = col.querySelector('h5');
     console.log("Para p content"+ testing.textContent.trim());
    var panelCollapseDiv = createAemElement('div',['panel-collapse', 'collapse', 'in'],{'role':'tabpanel', 'aria-expanded':'true'},id);
    var panelBodyDiv = document.createElement('div');
    panelBodyDiv.className = 'panel-body';
    var pTag = document.createElement('p');
    pTag.textContent = testing.textContent.trim();
    panelBodyDiv.append(pTag);
    panelCollapseDiv.append(panelBodyDiv);
    return panelCollapseDiv;
}
function (s) {
        "use strict";
        function n(t, e) {
            (this.$body = s(document.body)),
                (this.$scrollElement = s(t).is(document.body) ? s(window) : s(t)),
                (this.options = s.extend({}, n.DEFAULTS, e)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)),
                this.refresh(),
                this.process();
        }
	}
	
	
	
	function (a) {
        "use strict";
        var r = function (t, e) {
            (this.$element = a(t)),
                (this.options = a.extend({}, r.DEFAULTS, e)),
                (this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')),
                (this.transitioning = null),
                this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        function n(t) {
            var e,
                i = t.attr("data-target") || ((e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
            return a(document).find(i);
        }
        function l(o) {
            return this.each(function () {
                var t = a(this),
                    e = t.data("bs.collapse"),
                    i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
                !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", (e = new r(this, i))), "string" == typeof o && e[o]();
            });
        }
        (r.VERSION = "3.4.1"),
            (r.TRANSITION_DURATION = 350),
            (r.DEFAULTS = { toggle: !0 }),
            (r.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height";
            }),
            (r.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t,
                        e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                        var i = a.Event("show.bs.collapse");
                        if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
                            e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));
                            var o = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                            var n = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[o](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                            };
                            if (!a.support.transition) return n.call(this);
                            var s = a.camelCase(["scroll", o].join("-"));
                            this.$element.one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s]);
                        }
                    }
                }
            }),
            (r.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = a.Event("hide.bs.collapse");
                    if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
                        var e = this.dimension();
                        this.$element[e](this.$element[e]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var i = function () {
                            (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        if (!a.support.transition) return i.call(this);
                        this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION);
                    }
                }
            }),
            (r.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (r.prototype.getParent = function () {
                return a(document)
                    .find(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        a.proxy(function (t, e) {
                            var i = a(e);
                            this.addAriaAndCollapsedClass(n(i), i);
                        }, this)
                    )
                    .end();
            }),
            (r.prototype.addAriaAndCollapsedClass = function (t, e) {
                var i = t.hasClass("in");
                t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
            });
        var t = a.fn.collapse;
        (a.fn.collapse = l),
            (a.fn.collapse.Constructor = r),
            (a.fn.collapse.noConflict = function () {
                return (a.fn.collapse = t), this;
            }),
            a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
                var e = a(this);
                e.attr("data-target") || t.preventDefault();
                var i = n(e),
                    o = i.data("bs.collapse") ? "toggle" : e.data();
                l.call(i, o);
            });
    }
	
