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
                var id = 'collapse' + r;
                [...row.children].forEach((col,c)=>{
                    if(c==0){
                        var panelHeading = createPanelHeading(col, id);
                        panelDiv.append(panelHeading);
                    }
                    if(c==1){
//                        var collapseId = 'collapse' + r + c;
                        var panelCollapse = createPanelCollapse(col,id);
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
            var id = 'collapse' + r;
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    var panelHeading = createPanelHeading(col, id);
                    panelDiv.append(panelHeading);
                }
                if(c==1){
//                    var collapseId = 'collapse' + r + c;
                    var panelCollapse = createPanelCollapse(col,id);
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
            var id = 'collapse' + r;
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    var panelHeading = createPanelHeading(col, id);
                    panelDiv.append(panelHeading);
                }
                if(c==1){
//                    var collapseId = 'collapse' + r + c;
                    var panelCollapse = createPanelCollapse(col,id);
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
            var id = 'collapse' + r;
            [...row.children].forEach((col,c)=>{
                if(c==0){
                    var panelHeading = createPanelHeading(col, id);
                    panelDiv.append(panelHeading);
                }
                if(c==1){
//                    var collapseId = 'collapse' + r + c;
                    var panelCollapse = createPanelCollapse(col,id);
                    panelDiv.append(panelCollapse);
                }
            });
            hotelPanelDiv.append(panelDiv);
                if(r==20){
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
            const myArray = firstListChildren[i].textContent.split(" ")[0].toLowerCase();
            atag.setAttribute("href", "#"+myArray);
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
function createPanelHeading(col, id){

    var testing = col.querySelector('h4');
    console.log("Heading h4 content"+ testing.textContent.trim());
    var childPanelDiv = document.createElement('div');
    childPanelDiv.className = 'panel-heading';
    childPanelDiv.setAttribute('role','tab');
    var h4Tag = document.createElement('h4');
    var hrefValue = '#' + id;
    var aTag = createAemElement('a',['collapsed'],{'data-toggle':'collapse', 'data-parent':'#tab-accordion1', 'href':hrefValue, 'aria-expanded':'false', 'aria-controls':id},null);
    aTag.textContent = testing.textContent.trim();
    h4Tag.append(aTag);
    childPanelDiv.append(h4Tag);
    return childPanelDiv;
}

function createPanelCollapse(col, id){
    var testing = col.querySelector('h5');
     console.log("Para p content"+ testing.textContent.trim());
    var panelCollapseDiv = createAemElement('div',['panel-collapse', 'collapse'],{'role':'tabpanel', 'aria-expanded':'false'},id);
    var panelBodyDiv = document.createElement('div');
    panelBodyDiv.className = 'panel-body';
    var pTag = document.createElement('p');
    pTag.textContent = testing.textContent.trim();
    panelBodyDiv.append(pTag);
    panelCollapseDiv.append(panelBodyDiv);
    return panelCollapseDiv;
}

//// Get all the <li> elements within the ".nav-tabs" container
//var tabs = document.querySelectorAll('.nav-tabs li');
//
//// Add a click event listener to each <li> element
//tabs.forEach(function(tab) {
//  tab.addEventListener('click', function() {
//    // Remove the "active" class from all <li> elements
//    tabs.forEach(function(tab) {
//      tab.classList.remove('active');
//    });
//    // Add the "active" class to the clicked <li> element
//    this.classList.add('active');
//  });
//});
//
//// Get all the <a> elements within the ".nav-tabs" container
//var tabLinks = document.querySelectorAll('.nav-tabs a');
//
//// Add a click event listener to each <a> element
//tabLinks.forEach(function(tabLink) {
//  tabLink.addEventListener('click', function(e) {
//    e.preventDefault();
//    var targetPaneId = this.getAttribute('href');
//
//    // Remove the "active" class from all tab-panes
//    var tabPanes = document.querySelectorAll('.tab-pane');
//    tabPanes.forEach(function(tabPane) {
//      tabPane.classList.remove('active', 'in');
//    });
//
//    // Add the "active" class to the target tab-pane
//    var targetPane = document.querySelector(targetPaneId);
//    targetPane.classList.add('active', 'in');
//  });
//});


(function (s) {
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
	})(jQuery),

	(function (a) {
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
    })(jQuery),
	(function (r) {
        "use strict";
        var a = function (t) {
            this.element = r(t);
        };
        function e(i) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("bs.tab");
                e || t.data("bs.tab", (e = new a(this))), "string" == typeof i && e[i]();
            });
        }
        (a.VERSION = "3.4.1"),
            (a.TRANSITION_DURATION = 150),
            (a.prototype.show = function () {
                var t = this.element,
                    e = t.closest("ul:not(.dropdown-menu)"),
                    i = t.data("target");
                if ((i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active"))) {
                    var o = e.find(".active:last a"),
                        n = r.Event("hide.bs.tab", { relatedTarget: t[0] }),
                        s = r.Event("show.bs.tab", { relatedTarget: o[0] });
                    if ((o.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented())) {
                        var a = r(document).find(i);
                        this.activate(t.closest("li"), e),
                            this.activate(a, a.parent(), function () {
                                o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
                            });
                    }
                }
            }),
            (a.prototype.activate = function (t, e, i) {
                var o = e.find("> .active"),
                    n = i && r.support.transition && ((o.length && o.hasClass("fade")) || !!e.find("> .fade").length);
                function s() {
                    o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
                        t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        i && i();
                }
                o.length && n ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), o.removeClass("in");
            });
        var t = r.fn.tab;
        (r.fn.tab = e),
            (r.fn.tab.Constructor = a),
            (r.fn.tab.noConflict = function () {
                return (r.fn.tab = t), this;
            });
        var i = function (t) {
            t.preventDefault(), e.call(r(this), "show");
        };
        r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
    })(jQuery),
        (function (n) {
            "use strict";
            (n.fn.emulateTransitionEnd = function (t) {
                var e = !1,
                    i = this;
                n(this).one("bsTransitionEnd", function () {
                    e = !0;
                });
                return (
                    setTimeout(function () {
                        e || n(i).trigger(n.support.transition.end);
                    }, t),
                    this
                );
            }),
                n(function () {
                    (n.support.transition = (function o() {
                        var t = document.createElement("bootstrap"),
                            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                        for (var i in e) if (t.style[i] !== undefined) return { end: e[i] };
                        return !1;
                    })()),
                        n.support.transition &&
                            (n.event.special.bsTransitionEnd = {
                                bindType: n.support.transition.end,
                                delegateType: n.support.transition.end,
                                handle: function (t) {
                                    if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                                },
                            });
                });
        })(jQuery)
