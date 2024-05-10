// if (window.$ && window.slick) {
    !function(i) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
    }(function(i) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(t, o) {
                var s, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: i(t),
                    appendDots: i(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return i('<button type="button" />').text(t + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                },
                n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                },
                i.extend(n, n.initials),
                n.activeBreakpoint = null,
                n.animType = null,
                n.animProp = null,
                n.breakpoints = [],
                n.breakpointSettings = [],
                n.cssTransitions = !1,
                n.focussed = !1,
                n.interrupted = !1,
                n.hidden = "hidden",
                n.paused = !0,
                n.positionProp = null,
                n.respondTo = null,
                n.rowCount = 1,
                n.shouldClick = !0,
                n.$slider = i(t),
                n.$slidesCache = null,
                n.transformType = null,
                n.transitionType = null,
                n.visibilityChange = "visibilitychange",
                n.windowWidth = 0,
                n.windowTimer = null,
                s = i(t).data("slick") || {},
                n.options = i.extend({}, n.defaults, o, s),
                n.currentSlide = n.options.initialSlide,
                n.originalSettings = n.options,
                void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
                n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
                n.visibilityChange = "webkitvisibilitychange"),
                n.autoPlay = i.proxy(n.autoPlay, n),
                n.autoPlayClear = i.proxy(n.autoPlayClear, n),
                n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
                n.changeSlide = i.proxy(n.changeSlide, n),
                n.clickHandler = i.proxy(n.clickHandler, n),
                n.selectHandler = i.proxy(n.selectHandler, n),
                n.setPosition = i.proxy(n.setPosition, n),
                n.swipeHandler = i.proxy(n.swipeHandler, n),
                n.dragHandler = i.proxy(n.dragHandler, n),
                n.keyHandler = i.proxy(n.keyHandler, n),
                n.instanceUid = e++,
                n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                n.registerBreakpoints(),
                n.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }
        ,
        e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
            var s = this;
            if ("boolean" == typeof t)
                o = t,
                t = null;
            else if (t < 0 || t >= s.slideCount)
                return !1;
            s.unload(),
            "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
            s.$slides = s.$slideTrack.children(this.options.slide),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            s.$slides.each(function(e, t) {
                i(t).attr("data-slick-index", e)
            }),
            s.$slidesCache = s.$slides,
            s.reinit()
        }
        ,
        e.prototype.animateHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({
                    height: e
                }, i.options.speed)
            }
        }
        ,
        e.prototype.animateSlide = function(e, t) {
            var o = {}
              , s = this;
            s.animateHeight(),
            !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
            !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(i) {
                    i = Math.ceil(i),
                    !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                    s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                    s.$slideTrack.css(o))
                },
                complete: function() {
                    t && t.call()
                }
            })) : (s.applyTransition(),
            e = Math.ceil(e),
            !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
            s.$slideTrack.css(o),
            t && setTimeout(function() {
                s.disableTransition(),
                t.call()
            }, s.options.speed))
        }
        ,
        e.prototype.getNavTarget = function() {
            var e = this
              , t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)),
            t
        }
        ,
        e.prototype.asNavFor = function(e) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each(function() {
                var t = i(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0)
            })
        }
        ,
        e.prototype.applyTransition = function(i) {
            var e = this
              , t = {};
            !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
            !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }
        ,
        e.prototype.autoPlay = function() {
            var i = this;
            i.autoPlayClear(),
            i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
        }
        ,
        e.prototype.autoPlayClear = function() {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer)
        }
        ,
        e.prototype.autoPlayIterator = function() {
            var i = this
              , e = i.currentSlide + i.options.slidesToScroll;
            i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
            i.currentSlide - 1 == 0 && (i.direction = 1))),
            i.slideHandler(e))
        }
        ,
        e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
            e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
            e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }
        ,
        e.prototype.buildDots = function() {
            var e, t, o = this;
            if (!0 === o.options.dots) {
                for (o.$slider.addClass("slick-dotted"),
                t = i("<ul />").addClass(o.options.dotsClass),
                e = 0; e <= o.getDotCount(); e += 1)
                    t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                o.$dots = t.appendTo(o.options.appendDots),
                o.$dots.find("li").first().addClass("slick-active")
            }
        }
        ,
        e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
            e.slideCount = e.$slides.length,
            e.$slides.each(function(e, t) {
                i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
            }),
            e.$slider.addClass("slick-slider"),
            e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
            e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
            e.$slideTrack.css("opacity", 0),
            !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
            i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
            e.setupInfinite(),
            e.buildArrows(),
            e.buildDots(),
            e.updateDots(),
            e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
            !0 === e.options.draggable && e.$list.addClass("draggable")
        }
        ,
        e.prototype.buildRows = function() {
            var i, e, t, o, s, n, r, l = this;
            if (o = document.createDocumentFragment(),
            n = l.$slider.children(),
            l.options.rows > 1) {
                for (r = l.options.slidesPerRow * l.options.rows,
                s = Math.ceil(n.length / r),
                i = 0; i < s; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c))
                        }
                        d.appendChild(a)
                    }
                    o.appendChild(d)
                }
                l.$slider.empty().append(o),
                l.$slider.children().children().children().css({
                    width: 100 / l.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }
        ,
        e.prototype.checkResponsive = function(e, t) {
            var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
            if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
            r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
                "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                !0 === e && (r.currentSlide = r.options.initialSlide),
                r.refresh(e)),
                l = s) : (r.activeBreakpoint = s,
                "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
                !0 === e && (r.currentSlide = r.options.initialSlide),
                r.refresh(e)),
                l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                r.options = r.originalSettings,
                !0 === e && (r.currentSlide = r.options.initialSlide),
                r.refresh(e),
                l = s),
                e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
            }
        }
        ,
        e.prototype.changeSlide = function(e, t) {
            var o, s, n, r = this, l = i(e.currentTarget);
            switch (l.is("a") && e.preventDefault(),
            l.is("li") || (l = l.closest("li")),
            n = r.slideCount % r.options.slidesToScroll != 0,
            o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
            e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o,
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t),
                l.children().trigger("focus");
                break;
            default:
                return
            }
        }
        ,
        e.prototype.checkNavigable = function(i) {
            var e, t;
            if (e = this.getNavigableIndexes(),
            t = 0,
            i > e[e.length - 1])
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break
                    }
                    t = e[o]
                }
            return i
        }
        ,
        e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
            !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
            e.$slider.off("focus.slick blur.slick"),
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
            e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
            e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
            e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
            e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
            e.$list.off("click.slick", e.clickHandler),
            i(document).off(e.visibilityChange, e.visibility),
            e.cleanUpSlideEvents(),
            !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
            i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
            i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
            i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
            i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }
        ,
        e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
            e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.cleanUpRows = function() {
            var i, e = this;
            e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
            e.$slider.empty().append(i))
        }
        ,
        e.prototype.clickHandler = function(i) {
            !1 === this.shouldClick && (i.stopImmediatePropagation(),
            i.stopPropagation(),
            i.preventDefault())
        }
        ,
        e.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(),
            t.touchObject = {},
            t.cleanUpEvents(),
            i(".slick-cloned", t.$slider).detach(),
            t.$dots && t.$dots.remove(),
            t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
            t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
            t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                i(this).attr("style", i(this).data("originalStyling"))
            }),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slideTrack.detach(),
            t.$list.detach(),
            t.$slider.append(t.$slides)),
            t.cleanUpRows(),
            t.$slider.removeClass("slick-slider"),
            t.$slider.removeClass("slick-initialized"),
            t.$slider.removeClass("slick-dotted"),
            t.unslicked = !0,
            e || t.$slider.trigger("destroy", [t])
        }
        ,
        e.prototype.disableTransition = function(i) {
            var e = this
              , t = {};
            t[e.transitionType] = "",
            !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
        }
        ,
        e.prototype.fadeSlide = function(i, e) {
            var t = this;
            !1 === t.cssTransitions ? (t.$slides.eq(i).css({
                zIndex: t.options.zIndex
            }),
            t.$slides.eq(i).animate({
                opacity: 1
            }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
            t.$slides.eq(i).css({
                opacity: 1,
                zIndex: t.options.zIndex
            }),
            e && setTimeout(function() {
                t.disableTransition(i),
                e.call()
            }, t.options.speed))
        }
        ,
        e.prototype.fadeSlideOut = function(i) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(i).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(i),
            e.$slides.eq(i).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }
        ,
        e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
            var e = this;
            null !== i && (e.$slidesCache = e.$slides,
            e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.filter(i).appendTo(e.$slideTrack),
            e.reinit())
        }
        ,
        e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
                t.stopImmediatePropagation();
                var o = i(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                    e.autoPlay())
                }, 0)
            })
        }
        ,
        e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }
        ,
        e.prototype.getDotCount = function() {
            var i = this
              , e = 0
              , t = 0
              , o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow)
                    ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                        e = t + i.options.slidesToScroll,
                        t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else if (!0 === i.options.centerMode)
                o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            else
                o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1
        }
        ,
        e.prototype.getLeft = function(i) {
            var e, t, o, s, n = this, r = 0;
            return n.slideOffset = 0,
            t = n.$slides.first().outerHeight(!0),
            !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
            s = -1,
            !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
            r = t * n.options.slidesToShow * s),
            n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
            r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
            r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
            r = (i + n.options.slidesToShow - n.slideCount) * t),
            n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
            r = 0),
            !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
            n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
            e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
            !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
            e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
            !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
            e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
            e += (n.$list.width() - o.outerWidth()) / 2)),
            e
        }
        ,
        e.prototype.getOption = e.prototype.slickGetOption = function(i) {
            return this.options[i]
        }
        ,
        e.prototype.getNavigableIndexes = function() {
            var i, e = this, t = 0, o = 0, s = [];
            for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
            o = -1 * e.options.slidesToScroll,
            i = 2 * e.slideCount); t < i; )
                s.push(t),
                t = o + e.options.slidesToScroll,
                o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }
        ,
        e.prototype.getSlick = function() {
            return this
        }
        ,
        e.prototype.getSlideCount = function() {
            var e, t, o = this;
            return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
            !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                    return e = n,
                    !1
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }
        ,
        e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(i)
                }
            }, e)
        }
        ,
        e.prototype.init = function(e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
            t.buildRows(),
            t.buildOut(),
            t.setProps(),
            t.startLoad(),
            t.loadSlider(),
            t.initializeEvents(),
            t.updateArrows(),
            t.updateDots(),
            t.checkResponsive(!0),
            t.focusHandler()),
            e && t.$slider.trigger("init", [t]),
            !0 === t.options.accessibility && t.initADA(),
            t.options.autoplay && (t.paused = !1,
            t.autoPlay())
        }
        ,
        e.prototype.initADA = function() {
            var e = this
              , t = Math.ceil(e.slideCount / e.options.slidesToShow)
              , o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount
            });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }),
            null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                var s = o.indexOf(t);
                i(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + t,
                    tabindex: -1
                }),
                -1 !== s && i(this).attr({
                    "aria-describedby": "slick-slide-control" + e.instanceUid + s
                })
            }),
            e.$dots.attr("role", "tablist").find("li").each(function(s) {
                var n = o[s];
                i(this).attr({
                    role: "presentation"
                }),
                i(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(e.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA()
        }
        ,
        e.prototype.initArrowEvents = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, i.changeSlide),
            i.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, i.changeSlide),
            !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
            i.$nextArrow.on("keydown.slick", i.keyHandler)))
        }
        ,
        e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide),
            !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
            !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
        }
        ,
        e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
            e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
        }
        ,
        e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(),
            e.initDotEvents(),
            e.initSlideEvents(),
            e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler),
            e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler),
            e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler),
            e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler),
            e.$list.on("click.slick", e.clickHandler),
            i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
            !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
            i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
            i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
            i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
            i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
            i(e.setPosition)
        }
        ,
        e.prototype.initUI = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
            i.$nextArrow.show()),
            !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
        }
        ,
        e.prototype.keyHandler = function(i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }
        ,
        e.prototype.lazyLoad = function() {
            function e(e) {
                i("img[data-lazy]", e).each(function() {
                    var e = i(this)
                      , t = i(this).attr("data-lazy")
                      , o = i(this).attr("data-srcset")
                      , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                      , r = document.createElement("img");
                    r.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            o && (e.attr("srcset", o),
                            s && e.attr("sizes", s)),
                            e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }),
                            n.$slider.trigger("lazyLoaded", [n, e, t])
                        })
                    }
                    ,
                    r.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        n.$slider.trigger("lazyLoadError", [n, e, t])
                    }
                    ,
                    r.src = t
                })
            }
            var t, o, s, n = this;
            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
            s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
            s = Math.ceil(o + n.options.slidesToShow),
            !0 === n.options.fade && (o > 0 && o--,
            s <= n.slideCount && s++)),
            t = n.$slider.find(".slick-slide").slice(o, s),
            "anticipated" === n.options.lazyLoad)
                for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                    r < 0 && (r = n.slideCount - 1),
                    t = (t = t.add(d.eq(r))).add(d.eq(l)),
                    r--,
                    l++;
            e(t),
            n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }
        ,
        e.prototype.loadSlider = function() {
            var i = this;
            i.setPosition(),
            i.$slideTrack.css({
                opacity: 1
            }),
            i.$slider.removeClass("slick-loading"),
            i.initUI(),
            "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
        }
        ,
        e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }
        ,
        e.prototype.orientationChange = function() {
            var i = this;
            i.checkResponsive(),
            i.setPosition()
        }
        ,
        e.prototype.pause = e.prototype.slickPause = function() {
            var i = this;
            i.autoPlayClear(),
            i.paused = !0
        }
        ,
        e.prototype.play = e.prototype.slickPlay = function() {
            var i = this;
            i.autoPlay(),
            i.options.autoplay = !0,
            i.paused = !1,
            i.focussed = !1,
            i.interrupted = !1
        }
        ,
        e.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
            t.animating = !1,
            t.slideCount > t.options.slidesToShow && t.setPosition(),
            t.swipeLeft = null,
            t.options.autoplay && t.autoPlay(),
            !0 === t.options.accessibility && (t.initADA(),
            t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }
        ,
        e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }
        ,
        e.prototype.preventDefault = function(i) {
            i.preventDefault()
        }
        ,
        e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
            d.length ? (t = d.first(),
            o = t.attr("data-lazy"),
            s = t.attr("data-srcset"),
            n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
            (r = document.createElement("img")).onload = function() {
                s && (t.attr("srcset", s),
                n && t.attr("sizes", n)),
                t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                !0 === l.options.adaptiveHeight && l.setPosition(),
                l.$slider.trigger("lazyLoaded", [l, t, o]),
                l.progressiveLazyLoad()
            }
            ,
            r.onerror = function() {
                e < 3 ? setTimeout(function() {
                    l.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad())
            }
            ,
            r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
        }
        ,
        e.prototype.refresh = function(e) {
            var t, o, s = this;
            o = s.slideCount - s.options.slidesToShow,
            !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
            s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
            t = s.currentSlide,
            s.destroy(!0),
            i.extend(s, s.initials, {
                currentSlide: t
            }),
            s.init(),
            e || s.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }
        ,
        e.prototype.registerBreakpoints = function() {
            var e, t, o, s = this, n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (o = s.breakpoints.length - 1,
                    n.hasOwnProperty(e)) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                            o--;
                        s.breakpoints.push(t),
                        s.breakpointSettings[t] = n[e].settings
                    }
                s.breakpoints.sort(function(i, e) {
                    return s.options.mobileFirst ? i - e : e - i
                })
            }
        }
        ,
        e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
            e.slideCount = e.$slides.length,
            e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
            e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
            e.registerBreakpoints(),
            e.setProps(),
            e.setupInfinite(),
            e.buildArrows(),
            e.updateArrows(),
            e.initArrowEvents(),
            e.buildDots(),
            e.updateDots(),
            e.initDotEvents(),
            e.cleanUpSlideEvents(),
            e.initSlideEvents(),
            e.checkResponsive(!1, !0),
            !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
            e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
            e.setPosition(),
            e.focusHandler(),
            e.paused = !e.options.autoplay,
            e.autoPlay(),
            e.$slider.trigger("reInit", [e])
        }
        ,
        e.prototype.resize = function() {
            var e = this;
            i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
            e.windowDelay = window.setTimeout(function() {
                e.windowWidth = i(window).width(),
                e.checkResponsive(),
                e.unslicked || e.setPosition()
            }, 50))
        }
        ,
        e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
            var o = this;
            if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
            o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                return !1;
            o.unload(),
            !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            o.$slides = o.$slideTrack.children(this.options.slide),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slidesCache = o.$slides,
            o.reinit()
        }
        ,
        e.prototype.setCSS = function(i) {
            var e, t, o = this, s = {};
            !0 === o.options.rtl && (i = -i),
            e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
            t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
            s[o.positionProp] = i,
            !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
            !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
            o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
            o.$slideTrack.css(s)))
        }
        ,
        e.prototype.setDimensions = function() {
            var i = this;
            !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
                padding: "0px " + i.options.centerPadding
            }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
            !0 === i.options.centerMode && i.$list.css({
                padding: i.options.centerPadding + " 0px"
            })),
            i.listWidth = i.$list.width(),
            i.listHeight = i.$list.height(),
            !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
            i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
            i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
        }
        ,
        e.prototype.setFade = function() {
            var e, t = this;
            t.$slides.each(function(o, s) {
                e = t.slideWidth * o * -1,
                !0 === t.options.rtl ? i(s).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                }) : i(s).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: t.options.zIndex - 2,
                    opacity: 0
                })
            }),
            t.$slides.eq(t.currentSlide).css({
                zIndex: t.options.zIndex - 1,
                opacity: 1
            })
        }
        ,
        e.prototype.setHeight = function() {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e)
            }
        }
        ,
        e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, t, o, s, n, r = this, l = !1;
            if ("object" === i.type(arguments[0]) ? (o = arguments[0],
            l = arguments[1],
            n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
            s = arguments[1],
            l = arguments[2],
            "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
            "single" === n)
                r.options[o] = s;
            else if ("multiple" === n)
                i.each(o, function(i, e) {
                    r.options[i] = e
                });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== i.type(r.options.responsive))
                        r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0; )
                            r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                            e--;
                        r.options.responsive.push(s[t])
                    }
            l && (r.unload(),
            r.reinit())
        }
        ,
        e.prototype.setPosition = function() {
            var i = this;
            i.setDimensions(),
            i.setHeight(),
            !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
            i.$slider.trigger("setPosition", [i])
        }
        ,
        e.prototype.setProps = function() {
            var i = this
              , e = document.body.style;
            i.positionProp = !0 === i.options.vertical ? "top" : "left",
            "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
            void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
            i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
            void 0 !== e.OTransform && (i.animType = "OTransform",
            i.transformType = "-o-transform",
            i.transitionType = "OTransition",
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
            void 0 !== e.MozTransform && (i.animType = "MozTransform",
            i.transformType = "-moz-transform",
            i.transitionType = "MozTransition",
            void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
            void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
            i.transformType = "-webkit-transform",
            i.transitionType = "webkitTransition",
            void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
            void 0 !== e.msTransform && (i.animType = "msTransform",
            i.transformType = "-ms-transform",
            i.transitionType = "msTransition",
            void 0 === e.msTransform && (i.animType = !1)),
            void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
            i.transformType = "transform",
            i.transitionType = "transition"),
            i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
        }
        ,
        e.prototype.setSlideClasses = function(i) {
            var e, t, o, s, n = this;
            if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
            n.$slides.eq(i).addClass("slick-current"),
            !0 === n.options.centerMode) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                e = Math.floor(n.options.slidesToShow / 2),
                !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
                t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
                0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
                n.$slides.eq(i).addClass("slick-center")
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
                o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
                n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }
        ,
        e.prototype.setupInfinite = function() {
            var e, t, o, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1),
            !0 === s.options.infinite && !1 === s.options.fade && (t = null,
            s.slideCount > s.options.slidesToShow)) {
                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
                e = s.slideCount; e > s.slideCount - o; e -= 1)
                    t = e - 1,
                    i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    t = e,
                    i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    i(this).attr("id", "")
                })
            }
        }
        ,
        e.prototype.interrupt = function(i) {
            var e = this;
            i || e.autoPlay(),
            e.interrupted = i
        }
        ,
        e.prototype.selectHandler = function(e) {
            var t = this
              , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
              , s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
            t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
        }
        ,
        e.prototype.slideHandler = function(i, e, t) {
            var o, s, n, r, l, d = null, a = this;
            if (e = e || !1,
            !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
                if (!1 === e && a.asNavFor(i),
                o = i,
                d = a.getLeft(o),
                r = a.getLeft(a.currentSlide),
                a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
                !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                    !1 === a.options.fade && (o = a.currentSlide,
                    !0 !== t ? a.animateSlide(r, function() {
                        a.postSlide(o)
                    }) : a.postSlide(o));
                else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                    !1 === a.options.fade && (o = a.currentSlide,
                    !0 !== t ? a.animateSlide(r, function() {
                        a.postSlide(o)
                    }) : a.postSlide(o));
                else {
                    if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                    s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                    a.animating = !0,
                    a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                    n = a.currentSlide,
                    a.currentSlide = s,
                    a.setSlideClasses(a.currentSlide),
                    a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                    a.updateDots(),
                    a.updateArrows(),
                    !0 === a.options.fade)
                        return !0 !== t ? (a.fadeSlideOut(n),
                        a.fadeSlide(s, function() {
                            a.postSlide(s)
                        })) : a.postSlide(s),
                        void a.animateHeight();
                    !0 !== t ? a.animateSlide(d, function() {
                        a.postSlide(s)
                    }) : a.postSlide(s)
                }
        }
        ,
        e.prototype.startLoad = function() {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
            i.$nextArrow.hide()),
            !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
            i.$slider.addClass("slick-loading")
        }
        ,
        e.prototype.swipeDirection = function() {
            var i, e, t, o, s = this;
            return i = s.touchObject.startX - s.touchObject.curX,
            e = s.touchObject.startY - s.touchObject.curY,
            t = Math.atan2(e, i),
            (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
            o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }
        ,
        e.prototype.swipeEnd = function(i) {
            var e, t, o = this;
            if (o.dragging = !1,
            o.swiping = !1,
            o.scrolling)
                return o.scrolling = !1,
                !1;
            if (o.interrupted = !1,
            o.shouldClick = !(o.touchObject.swipeLength > 10),
            void 0 === o.touchObject.curX)
                return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
            o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                    o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                    o.currentDirection = 1
                }
                "vertical" != t && (o.slideHandler(e),
                o.touchObject = {},
                o.$slider.trigger("swipe", [o, t]))
            } else
                o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
                o.touchObject = {})
        }
        ,
        e.prototype.swipeHandler = function(i) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
                switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
                e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                i.data.action) {
                case "start":
                    e.swipeStart(i);
                    break;
                case "move":
                    e.swipeMove(i);
                    break;
                case "end":
                    e.swipeEnd(i)
                }
        }
        ,
        e.prototype.swipeMove = function(i) {
            var e, t, o, s, n, r, l = this;
            return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
            !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
            l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
            l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
            l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
            r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
            !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
            !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
            t = l.swipeDirection(),
            void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
            i.preventDefault()),
            s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
            !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
            o = l.touchObject.swipeLength,
            l.touchObject.edgeHit = !1,
            !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
            l.touchObject.edgeHit = !0),
            !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
            !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
            !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
            !1) : void l.setCSS(l.swipeLeft))))
        }
        ,
        e.prototype.swipeStart = function(i) {
            var e, t = this;
            if (t.interrupted = !0,
            1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
                return t.touchObject = {},
                !1;
            void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
            t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
            t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
            t.dragging = !0
        }
        ,
        e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var i = this;
            null !== i.$slidesCache && (i.unload(),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slidesCache.appendTo(i.$slideTrack),
            i.reinit())
        }
        ,
        e.prototype.unload = function() {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
            e.$dots && e.$dots.remove(),
            e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
            e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
            e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }
        ,
        e.prototype.unslick = function(i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]),
            e.destroy()
        }
        ,
        e.prototype.updateArrows = function() {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
            0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
            i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
            i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
            i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }
        ,
        e.prototype.updateDots = function() {
            var i = this;
            null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
            i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
        }
        ,
        e.prototype.visibility = function() {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
        }
        ,
        i.fn.slick = function() {
            var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
            for (i = 0; i < r; i++)
                if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
                void 0 !== t)
                    return t;
            return o
        }
    });


    function social() {
        let element = document.getElementById("social-id");
        element.classList.toggle("social-display");
      }
      
      function socialmob() {
        let element = document.getElementById("social-id-mob");
        element.classList.toggle("social-display-mob");
      }
      
      let pill = document.querySelectorAll('.badge-dark')
      pill.forEach(element => {
        element.addEventListener("click", function () {
          element.parentElement.remove()
        });
      });
      
      
      const goUp = document.getElementById("go-up");
      
      var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 800) {
          goUp.className = "go-upNavigation show"
        } else {
          goUp.className = "go-upNavigation hide"
        }
      };
      
      window.addEventListener("scroll", myScrollFunc);
      
      let exploreInterest = document.querySelector(".explore-interest.modal");
      let modalBackdrop = document.getElementsByClassName("modal-backdrop");
      
      let btnExplore = document.querySelector(".btn-exp");
      let commonFilter = document.querySelector(".commonFilter");
      let modalContent = document.querySelector(".commonFilter .modal-dialog .modal-content")
      let commonBody = document.querySelector('body');
      let videoFilter = document.querySelector(".vedio-filter-modify.modal");
      let modalDialog = document.querySelector(".commonFilter .modal-dialog .modal-content")
      let searchArticle = document.querySelector(".search-article");
      
      function closeExplore() {
        exploreInterest.classList.remove("show");
        exploreInterest.style.display = "none";
        searchArticle.classList.remove("show");
        searchArticle.style.display = "none";
        searchArticle.style.removeProperty("padding-right");
        searchArticle.setAttribute("aria-hidden", "true");
        searchArticle.removeAttribute("aria-modal");
        $('.modal-backdrop').remove();
        $('body').removeClass("modal-open");
        $('body').css("padding-right", "0");
      };
      
      
      // function closeFilter() {
      
      
      // }
      let searchCross = document.querySelector(".search-input .icon-popup-cross");
      let searchInput = document.querySelector(".search-input input");
      
      function displayCross() {
        if (searchInput.value == "") {
          searchCross.style.display = "none"
        } else {
          searchCross.style.display = "inline-block"
        }
      }
      
      let pillContainer = document.querySelectorAll(".pill-container input");
      let btnApply = document.querySelector(".btn-apply");
      let checkbox = [];
      pillContainer.forEach(element => {
        element.addEventListener('click', () => {
          if (element.checked == true) {
            checkbox.push(element);
            btnApply.classList.remove("disabled");
          } else {
            checkbox.pop(element);
            if (checkbox.length == 0) {
              btnApply.classList.add("disabled");
            }
          }
        });
      });
      
      let viewMorelink = document.querySelectorAll(".view-more");
      viewMorelink.forEach(element => {
        element.addEventListener('click', (e) => {
          e.target.parentElement.parentElement.querySelector('li.interest-list-wraper .interest-list').classList.toggle("view-more-list");
          if (element.innerText === "View All") {
            element.innerText = "View Less";
          } else {
            element.innerText = "View All";
          }
        })
      });
      
      window.onload = function () {
        if (window.innerWidth < 991) {
          document.querySelector('.navbar-start .dropdown .dropdown-menu').classList.add("menu-mobile");
        }
      }
      
      window.onresize = function () {
        if (window.innerWidth < 991) {
          document.querySelector('.navbar-start .dropdown .dropdown-menu').classList.add("menu-mobile");
        } else {
          document.querySelector('.navbar-start .dropdown .dropdown-menu').classList.remove("menu-mobile");
        }
      }
      
      
      let navToggler = document.querySelector(".toggle-btn .navbar-toggler");
      let navbarCollapseToggler = document.querySelector(".navbar-collapse .mobile-nav .navbar-toggler");
    //   navToggler.addEventListener('click', () => {
    //     commonBody.classList.add("sidebar-scroll");
    //   });
      
    //   navbarCollapseToggler.addEventListener('click', () => {
    //     commonBody.classList.remove("sidebar-scroll");
    //   });
      
      
      function twitterShare(url, title){
      
          var accessToken = "9527e28e6d356bde17df2745795e5ab7d24444a9";
      
          var params = {
                  "long_url": url,			
                  "group_guid": "Bd2jeFNJyhx", 
                  "custom_bitlinks": ["infy.com"]		
          };
      
          $.ajax({
              url: "https://api-ssl.bitly.com/v4/shorten",
              cache: false,
              dataType: "json",
              method: "POST",
              contentType: "application/json",
              beforeSend: function (xhr) {
                  xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
              },
              data: JSON.stringify(params)
                              }).done(function(data){
                          //alert('url');
                                url = String(data.link);
      
                          var width=500, height=500;
      
                           var left = (window.screen.width / 2) - ((width / 2) + 10);
                          var top = (window.screen.height / 2) - ((height / 2) + 50);
      
                                 var twitterUrl = 'https://twitter.com/intent/tweet?url='.concat(url)+'&text='+title;
                                var popUp = window.open(twitterUrl,'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +'');
                                  //popUp.focus();
      
      
                       }).fail(function(data) {
                                  console.log(data);
                              });
          return false;
      }
      
      /* -- Home JS --- */
      
      
      $(".slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        fade: true,
        cssEase: 'linear',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
              asNavFor: '.banner-slick',
            }
          },
          {
            breakpoint: 767,
            settings: {
              asNavFor: '.banner-slick',
            }
          },
          {
            breakpoint: 375,
            settings: {
              asNavFor: '.banner-slick',
            }
          }
      
        ]
      });
      //ticking machine
      var percentTime;
      var tick;
      var time = .1;
      var progressBarIndex = 0;
      
      $('.progressBarContainer .progressBar').each(function (index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
      });
      
      function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 6);
      }
      
      function interval() {
        if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
          progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
          startProgressbar();
        } else {
          percentTime += 1 / (time + 5);
          $('.inProgress' + progressBarIndex).css({
            width: percentTime + "%"
          });
          if (percentTime >= 100) {
            $('.single-item').slick('slickNext');
            progressBarIndex++;
            if (progressBarIndex > 3) {
              progressBarIndex = 0;
            }
            startProgressbar();
          }
        }
      }
      
      function resetProgressbar() {
        $('.inProgress').css({
          width: 0 + '%'
        });
        clearInterval(tick);
      }
      startProgressbar();
      // End ticking machine
      
      $('.item').click(function () {
        clearInterval(tick);
        //   var goToThisIndex = $(this).find("span").data("slickIndex");
        var goToThisIndex = $(this).children("span.progressBar").data("slickIndex");
        $('.single-item').slick('slickGoTo', goToThisIndex, false);
        startProgressbar();
      });
      
      
      $('.banner-slick').slick({
        dots: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        buttons: false,
        arrows: false,
        autoplay: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
              arrows: true,
      
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: true,
              infinite: true,
              asNavFor: '.slider',
              centerMode: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              dots: true,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              asNavFor: '.slider',
              centerMode: true,
            }
          },
          {
            breakpoint: 575,
            settings: {
              dots: true,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              asNavFor: '.slider',
              centerMode: true,
              centerPadding: '20px',
            }
          },
          {
            breakpoint: 375,
            settings: {
              dots: true,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              asNavFor: '.slider',
              centerMode: true,
              centerPadding: '10px',
            }
          }
      
        ]
      });
      
      function InsightRatio() {
        $('.insights-wraper').removeAttr('style');
        var InsightW = $('.insights-wraper').width();
        var InsightH = (InsightW / 480) * 269;
        $('.insights-wraper').height(InsightH);
        $('.article-wraper').height(InsightH * 0.5);
        $('.interactive-wraper').height(InsightH * 0.5);
        $('.podcast-wraper').height(InsightH);
        $('.case-study-wraper').height("100%");
        $('quality-engg').height("auto");
      
        if (window.innerWidth < 767) {
          $('.insights-wraper').height(InsightH);
          $('.article-wraper').height(InsightH);
          $('.interactive-wraper').height(InsightH);
          $('.podcast-wraper').height(InsightH);
          $('.case-study-wraper').height(InsightH);
          $('quality-engg').height(InsightH);
        }
      }
      InsightRatio();
      $(window).resize(function () {
        InsightRatio();
      });
      
      function nonscroll() {
        let element = document.getElementById("scroll")
        element.classList.toggle("sidebar-scroll");
      }
      
    //   function social() {
    //     let element = document.getElementById("social-id");
    //     element.classList.toggle("social-display");
    //   }
      
      let accordion = $('.accordion-list');
      let accordionList = $('.accordion-list li');
      let accordionTitle = $('.accordion-list li .section-title');
      
      let counter = 0;
      let activeIntervel
      
      
      function toggleAccordion() {
        accordionList.removeClass('active');
        $(this).addClass('active');
        clearInterval(activeIntervel);
        setTimeout(activeAccordion(), 3000)
      }
      accordionList.on('click', toggleAccordion);
      
      setTimeout(() => {
        activeIntervel = setInterval(() => {
          accordionList.removeClass('active');
          accordionList.eq(counter).addClass('active');
          counter++;
          if (counter == accordionList.length) counter = 0;
        }, 5000);
      }, 3000);
      
      function activeAccordion() {
        activeIntervel = setInterval(() => {
          accordionList.removeClass('active');
          accordionList.eq(counter).addClass('active');
          counter++;
          if (counter == accordionList.length) counter = 0;
        }, 5000);
      }
    //   $('.most-popular-slick').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     buttons: true,
    //     arrows: true,
    //     responsive: [{
    //         breakpoint: 1400,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 1200,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 992,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           refresh: true
      
    //         }
    //       },
    //       {
    //         breakpoint: 767,
    //         settings: "unslick",
    //       }
    //     ]
    //   });
      
      
      let searchpopup = document.querySelector(".search-popup");
      let recentSearches = document.querySelector(".resent-searches")
      let popupoverlay = document.querySelector(".popup-overlay");
      // let searchInput = document.querySelector(".search-input input");
      
      
      function searchPopup(e) {
        searchpopup.classList.add("showSearch");
        recentSearches.classList.add("searchBlur");
        popupoverlay.classList.add("overlay-index");
      }
      
      function searchHide(e) {
        searchpopup.classList.remove("showSearch");
        recentSearches.classList.remove("searchBlur");
        popupoverlay.classList.remove("overlay-index");
        searchInput.value = "";
        searchCross.style.display = "none";
      }
    //   popupoverlay.addEventListener('click', function () {
    //     searchpopup.classList.remove("showSearch");
    //     recentSearches.classList.remove("searchBlur");
    //     popupoverlay.classList.remove("overlay-index");
    //   })
      
      
      /*
          let poll = document.querySelector(".poll")
          let connect = document.querySelector(".connect");
          let modalPoll = document.querySelectorAll(".modal-poll .modal-content");
          let pollPopup = document.querySelector(".poll-popup");
          let pollConnectBg = document.querySelector(".poll-connect-bg");
          let pollBg = document.querySelector("poll-bg");
          connectPopup = document.querySelector(".connect-popup");
          let bodyScroll = document.querySelector("body");
      
      
          poll.addEventListener('click', () => {
              poll.style.display = "none";
              pollPopup.style.display = "block";
              pollConnectBg.classList.add('poll-bg');
              connectPopup.style.display = "none";
              connect.style.display = "flex";
              pollConnectBg.classList.remove("connect-bg");
              // bodyScroll.classList.add("sidebar-scroll");
          });
      
          connect.addEventListener('click', () => {
              connect.style.display = "none";
              poll.classList.add("poll-up")
              connectPopup.style.display = "block";
              pollConnectBg.classList.add('connect-bg');
              pollPopup.style.display = "none";
              pollConnectBg.classList.remove("poll-bg");
              poll.style.display = "flex";
              // bodyScroll.classList.add("sidebar-scroll");
          });
      
          pollConnectBg.addEventListener('click', function () {
              pollPopup.style.display = "none";
              pollConnectBg.classList.remove("poll-bg");
              poll.style.display = "flex";
              poll.classList.remove("poll-up")
              connectPopup.style.display = "none";
              connect.style.display = "flex";
              pollConnectBg.classList.remove("connect-bg");
              // bodyScroll.classList.remove("sidebar-scroll");
          });
      
          function closePoll() {
              poll.style.display = "flex";
              poll.classList.remove("poll-up")
              pollConnectBg.classList.remove("poll-bg");
              pollPopup.style.display = "none";
              // bodyScroll.classList.remove("sidebar-scroll");
          }
          function closeConnect() {
              connect.style.display = "flex";
              poll.classList.remove("poll-up")
              pollConnectBg.classList.remove("connect-bg");
              connectPopup.style.display = "none";
              // bodyScroll.classList.remove("sidebar-scroll");
          }
      */
      
      
      window.onresize = function () {
        if (window.innerWidth > 767) {
          $('.most-popular-slick')[0].slick.refresh();
        }
      }
      
      
      /*-- Home JS END -- */
      
      
      //Bookmark-page
      
      $(document).ready(function () {
        var bookmarkbutton = $('.article-details-wraper a[title="Bookmark"]')[0];
        //    var bookmarkbutton = document.querySelector(".bookmark_it");
        // Hold bookmarks in local storage
        if (typeof (localStorage.ikibookmark) == "undefined") {
          localStorage.ikibookmark = "";
        }
        if (typeof bookmarkbutton !== "undefined") {
      
      
          bookmarkbutton.addEventListener("click", function (e) {
            // Select the input box
            var siteName = document.querySelector("h1").innerText;
            var url = window.location.href;
            var imageBook = document.querySelector('meta[property="og:image"]').content;
      
      
            // Prevent the page from reloading when submitting the form
            e.preventDefault();
      
            let patterURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      
            let arrayItems, check = false,
              adr, itemAdr;
      
            arrayItems = localStorage.ikibookmark.split(";");
            adr = url;
            adr = adr.replace(/http:\/\/|https:\/\//i, "");
            arrayItems.length--;
      
            // Check if website is already bookmarked
            for (item of arrayItems) {
              itemAdr = item.split(',')[1].replace(/http:\/\/|https:\/\//i, "");
              if (itemAdr == adr) {
                check = true;
              }
            }
      
            if (check == true) {
              let text = "This website is already bookmarked, Do you want to be redirected to Bookmark Page?";
              if (confirm(text) == true) {
                window.location.href = "/iki/bookmark.html";
              }
            } else {
      
              // If all checks are correct,add bookmark to local storage
              localStorage.ikibookmark += `${siteName},${url},${imageBook};`;
              window.location.href = "/iki/bookmark.html";
      
            }
          });
        }
      });
      
      //End ofbookmark code
      
      
      /**
       * Owl Carousel v2.2.1
       * Copyright 2013-2017 David Deutsch
       * Licensed under  ()
       */
      !function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
      a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
      
      //Video Slider Start
      
      $(document).ready(function () {
      var hero_slider_length = $(".series-carousel").find('.item').length;
      //alert(hero_slider_length);		
      $(".series-carousel").owlCarousel({
        dots: hero_slider_length > 2 ? true : false,
        nav: hero_slider_length > 2 ? true : false,
        touchDrag: hero_slider_length > 2 ? true : false,
        mouseDrag: hero_slider_length > 2 ? true : false,
        loop: hero_slider_length > 2 ? true : false,
        autoplay: hero_slider_length > 2 ? false : false,
        autoplayTimeout: hero_slider_length > 2 ? 3000 : false,
        autoplayHoverPause: hero_slider_length > 2 ? true : false,
        margin: 30,
       
        // dotsEach:true,
        responsive: {
          0: {
            items: 1,
              dots: hero_slider_length > 1 ? true : false,
        nav: hero_slider_length > 1 ? true : false,
        touchDrag: hero_slider_length > 1 ? true : false,
        mouseDrag: hero_slider_length > 1 ? true : false,
        loop: hero_slider_length > 1 ? true : false,
        autoplay: hero_slider_length > 1 ? false : false,
        autoplayTimeout: hero_slider_length > 1 ? 3000 : false,
          },
          600: {
            items: 1,
              dots: hero_slider_length > 1 ? true : false,
        nav: hero_slider_length > 1 ? true : false,
        touchDrag: hero_slider_length > 1 ? true : false,
        mouseDrag: hero_slider_length > 1 ? true : false,
        loop: hero_slider_length > 1 ? true : false,
        autoplay: hero_slider_length > 1 ? false : false,
        autoplayTimeout: hero_slider_length > 1 ? 3000 : false,
          },
          768: {
            items: 2,
               slideBy: 2
          },
          1000: {
            items: 2,
               slideBy: 2
          }
        }
      });
          
          var first_carousel_length = $(".iki-videos-carousel").find(
              ".item"
            ).length;
            $(".iki-videos-carousel").owlCarousel({
              dots: first_carousel_length > 1 ? true : false,
              nav: first_carousel_length > 1 ? false : false,
              touchDrag: first_carousel_length > 1 ? true : false,
              mouseDrag: first_carousel_length > 1 ? true : false,
              loop: first_carousel_length > 1 ? true : false,
              autoplay: first_carousel_length > 1 ? false : false,
              autoplayTimeout: first_carousel_length > 1 ? 3000 : false,
              autoplayHoverPause: first_carousel_length > 1 ? true : false,
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                768: {
                  items: 2,
                  dots: first_carousel_length > 1 ? false : true,
                  loop: first_carousel_length > 1 ? false : true,
                },
                1000: {
                  items: 2,
                  dots: first_carousel_length > 1 ? false : true,
                  loop: first_carousel_length > 1 ? false : true,
                },
              },
            });
      
            // rightside videos carousel
            var second_carousel_length = $(".iki-right-videos-carousel").find(
              ".item"
            ).length;
            $(".iki-right-videos-carousel").owlCarousel({
              dots: second_carousel_length > 1 ? true : false,
              nav: second_carousel_length > 1 ? false : false,
              touchDrag: second_carousel_length > 1 ? true : false,
              mouseDrag: second_carousel_length > 1 ? true : false,
              loop: second_carousel_length > 1 ? true : false,
              autoplay: second_carousel_length > 1 ? false : false,
              autoplayTimeout: second_carousel_length > 1 ? 3000 : false,
              autoplayHoverPause: second_carousel_length > 1 ? true : false,
              responsive: {
                0: {
                  items: 2,
                },
                600: {
                  items: 2,
                },
                768: {
                  items: 4,
                  dots: second_carousel_length > 1 ? false : true,
                  loop: second_carousel_length > 1 ? false : true,
                },
                1000: {
                  items: 4,
                  dots: second_carousel_length > 1 ? false : true,
                  loop: second_carousel_length > 1 ? false : true,
                },
              },
            });
          
          
          });
      //Video Slider End
      
      //Video Series Start
      window.onVidyardAPI = (vidyardEmbed) => {
              vidyardEmbed.api.addReadyListener((_, player) => {
      
              })
          };
      
          function vidyardPause_all() {
              var players = VidyardV4.players;
              for (i = 0; i < players.length; i++) {
                  players[i].pause();
              }
          }
      
      
       //console.log(window.location.href.split("#")[1])
      $(document).ready(function () {
        //console.log(window.location.href.includes("#"))
        $(".tab-content").hide();
        $(".tab-content:first").show();
      
        var ulList = $(".tabs").find("li");
      
        $(".total-number").text(ulList.length);
      
        // $("html, body").animate({
        //   scrollTop: $("#first-section").offset().top - 20
        // }, 10), $(window).width() < 992 && $("html, body").animate({
        //   scrollTop: $("#first-section").offset().top - 80
        // }, 10);
        if (window.location.href.includes("#")) {
          $("#" + window.location.href.split("#")[1]).fadeIn();
          const target = "#" + window.location.href.split("#")[1] // #tab3
          //console.log(target);
         // console.log($(target));
          // var mainVideo = $("#main-video")
      
         // console.log(target.split("#tab")) // ['', '2']
          const filterTarget = target.split("#episode")[1];
          //console.log($('a').data('target'))
      
         // console.log(filterTarget);
      
          var thumbnailItem = $(`ul.tabs li:nth-child(${parseInt(filterTarget)})`)
         // console.log(thumbnailItem);
          var item = $(thumbnailItem).find(".right-thumbnail-data");
         // console.log(item);
          var p = item.data("target");
         // console.log(p)
          var e = $(item).attr('data-video-url');
         // console.log(e);
          o = e + "?rel=0&amp;showinfo=0&amp;autoplay=1";
       //   console.log(o);
          //var video = $(target).find(".vidyard-player-embed");
          var video = $(p).find(".vidyard-player-embed");
        //  console.log(video);
          $(video).attr("src", o);
        //  console.log($(video).attr("src", o));
      
      
          var videoNum = $(thumbnailItem).find(".cur-video-num").text();
          $(".cur-number").text(videoNum);
      
          $(".tab-content").hide();
          var activeTab = $(thumbnailItem).attr("rel");
          console.log(activeTab); //tab3 
          console.log($("#" + activeTab));
          $("#" + activeTab).fadeIn();
      
      
          $("ul.tabs li").removeClass("active");
          $(`ul.tabs li:nth-child(${parseInt(filterTarget)})`).addClass("active")
        }
      
        $(".read").click(function () {
          $(this).prev().toggle();
          if ($(this).text() === 'Read More +') {
            $(this).text('Read Less -');
          } else {
            $(this).text('Read More +');
          }
        });
      
      
        // video listing code
      
        // $(".tab-content").hide();
        // $(".tab-content:first").show();
        // var ulList = $(".tabs").find("li");
      
        // $(".total-number").text(ulList.length);
      
        $('.tabs li').click(function () {
          $("html, body").animate({
            scrollTop: $("#first-section").offset().top - 20
          }, 10), $(window).width() < 992 && $("html, body").animate({
            scrollTop: $("#first-section").offset().top - 80
          }, 10);
      
        })
      
      
        // / if in tab mode /
        $("ul.tabs li").click(function () {
      
          var thumbnailLi = $(this).find(".right-thumbnail-data")
         // console.log(thumbnailLi);
          var t = $(thumbnailLi).data("target");
         // console.log(t); // #tab3
          e = $(thumbnailLi).attr("data-video-url"),
            o = e + "?rel=0&amp;showinfo=0&amp;autoplay=1";
         // console.log(o)
          //$(t + " iframe").attr("src", o);
         // console.log($(t)); // we get tab-container section
          var leftVideo = $(t).find(".vidyard-player-embed");
        //  console.log(leftVideo); // we get main video 5 images 
          $(leftVideo).attr("src", o);
        //  console.log(leftVideo);
          //video js 
      
          var videoNum = $(this).find(".cur-video-num").text();
          $(".cur-number").text(videoNum);
      
          $(".tab-content").hide();
          var activeTab = $(this).attr("rel");
          //console.log(activeTab);
         // console.log($("#" + activeTab));
          $("#" + activeTab).fadeIn();
      
          $("ul.tabs li").removeClass("active");
         // console.log($(this))
          $(this).addClass("active");
      
        });
      
      
        $('.tabs li').click(function () {
          vidyardPause_all();
        });
      
      });
      
      //Video Series End
      
      //Video Listing WHat New in IKI
      $(document).ready(function(){
        $(".vylaunchLightbox").click(function(){
        //  alert($(this).attr( "data-uuid" ));
          launchLightboxvidyard($(this).attr( "data-uuid" ));
        });
      });
      
      function launchLightboxvidyard(d){let e=!0;document.getElementById("vyLightbox").innerHTML=`<img \n class="vidyard-player-embed"\n src="https://play.vidyard.com/${d}.jpg"\n data-uuid="${d}";\n data-v="4"\n data-type="lightbox"\n />`,vidyardEmbed.api.renderDOMPlayers(document.getElementById("vyLightbox")),new Promise(d=>window.vidyardEmbed?d(window.vidyardEmbed):window.onVidyardAPI=(e=>d(e))).then(a=>{VidyardV4.api.getPlayersByUUID(d)[0].showLightbox(),e=!1})}
      //Video Listing WHat New in IKI END
    // }else {
    //     console.error('jQuery or Slick.js not loaded yet');
    //     // Handle the error or wait for them to load (e.g., using event listeners)
    // }