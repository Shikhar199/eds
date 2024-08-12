//$(document).ready(function () {
    $(window).on("load", function () {
        // Menu Script
        /* ------------- onclick Menu body scroll hidden  ---------------*/
        $(document).on("click", "body", function (e) {
          if (!$(e.target).is("#trigger-overlay > .burger")) {
            $(".overlay").removeClass("open");
            $("body").removeAttr("style");
          }
        });
      
        $("#trigger-overlay").click(function () {
          $("body").css("overflow-y", "hidden");
        });
        $(".overlay-close, .close-overlay").click(function () {
          $("body").removeAttr("style");
        });
      
        //hero banner Slider
        var home_banner_slider_length = $(".home-banner-slider").find(".item").length;
        //alert(home_banner_slider_length);
        $(".home-banner-slider").owlCarousel({
          dots: home_banner_slider_length > 1 ? true : false,
          nav: home_banner_slider_length > 1 ? true : false,
          touchDrag: home_banner_slider_length > 1 ? true : false,
          mouseDrag: home_banner_slider_length > 1 ? true : false,
          loop: home_banner_slider_length > 1 ? true : false,
          autoplay: home_banner_slider_length > 1 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: home_banner_slider_length > 1 ? true : false,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            768: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
        });
      
        //Sponsors Slider
        // var r = $(".sponsor_slider"),
        //   sponsor_slider_length = r.find(".item").length;
        // s = r.owlCarousel({
        var sponsor_slider_length = $(".sponsor_slider").find(".item").length;
        //alert(sponsor_slider_length);
        var $owlCarousel = $(".sponsor_slider").owlCarousel({
          //dotsData: sponsor_slider_length > 1 ? true : false,
          //dots: sponsor_slider_length > 1 ? true : false,
          dotsData: true,
          dots: true,
          nav: sponsor_slider_length > 1 ? false : false,
          touchDrag: sponsor_slider_length > 1 ? true : false,
          mouseDrag: sponsor_slider_length > 1 ? true : false,
          loop: sponsor_slider_length > 1 ? false : false,
          autoplay: sponsor_slider_length > 1 ? false : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: sponsor_slider_length > 1 ? true : false,
          //autoHeightClass: 'owl-height',
          autoHeight: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            768: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
        });
      
        //$(".sponsor-logo .close").click(function () {
        //      $(".sponsor-logo .close").hasClass("slider-play"),
        //        s.trigger("play.owl.autoplay"),
        //        $(".sponsor-logo .close").removeClass("slider-play");
        //    }),
        //    $(".slider-stop").click(function () {
        //      $(".sponsor-logo .close").addClass("slider-play"),
        //        s.trigger("stop.owl.autoplay");
        //    });
      
        $owlCarousel.trigger('refresh.owl.carousel');
        //hero banner Slider
        var hero_slider_length = $("#hero_slider_carousel").find(".item").length;
        //alert(hero_slider_length);
        $("#hero_slider_carousel").owlCarousel({
          dots: hero_slider_length > 1 ? true : false,
          nav: hero_slider_length > 1 ? true : false,
          touchDrag: hero_slider_length > 1 ? true : false,
          mouseDrag: hero_slider_length > 1 ? true : false,
          loop: hero_slider_length > 1 ? true : false,
          autoplay: hero_slider_length > 1 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: hero_slider_length > 1 ? true : false,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            768: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
        });
      
        /* ------------- Minds Unite SLIDER ---------------*/
        var minds_unite_slider_length = $(".minds-unite-carousel").find(".item").length;
        $(".minds-unite-carousel").owlCarousel({
          dots: minds_unite_slider_length > 3 ? false : false,
          nav: minds_unite_slider_length > 3 ? true : false,
          touchDrag: minds_unite_slider_length > 3 ? true : false,
          mouseDrag: minds_unite_slider_length > 3 ? true : false,
          loop: minds_unite_slider_length > 3 ? true : false,
          autoplay: minds_unite_slider_length > 3 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: minds_unite_slider_length > 3 ? true : false,
          margin: 15,
          responsive: {
            0: {
              items: 1,
              nav: minds_unite_slider_length > 1 ? true : false,
              loop: minds_unite_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            600: {
              items: 2,
              nav: minds_unite_slider_length > 1 ? true : false,
              loop: minds_unite_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            768: {
              items: 3,
              slideBy: 3,
            },
            1030: {
              margin: 75,
              items: 3,
              slideBy: 3,
            },
          },
        });
      
        /* ------------- Item SLIDER ---------------*/
        var item_slider_length = $(".item-slider-carousel").find(".item").length;
        $(".item-slider-carousel").owlCarousel({
          dots: item_slider_length > 4 ? false : false,
          nav: item_slider_length > 4 ? true : false,
          touchDrag: item_slider_length > 4 ? true : false,
          mouseDrag: item_slider_length > 4 ? true : false,
          loop: item_slider_length > 4 ? true : false,
          autoplay: item_slider_length > 4 ? false : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: item_slider_length > 4 ? true : false,
          margin: 20,
          responsive: {
            0: {
              items: 1,
              nav: item_slider_length > 1 ? true : false,
              loop: item_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            600: {
              items: 2,
              nav: item_slider_length > 1 ? true : false,
              loop: item_slider_length > 1 ? true : false,
              stagePadding: 60,
            },
            768: {
              items: 3,
              slideBy: 3,
            },
            1200: {
              items: 4,
              slideBy: 4,
            },
          },
        });
      
        /* ------------- Item SLIDER ---------------*/
        var gallery_item_carousel_length = $(".gallery-item-carousel").find(".item").length;
        $(".gallery-item-carousel").owlCarousel({
          dots: gallery_item_carousel_length > 3 ? false : false,
          nav: gallery_item_carousel_length > 3 ? true : false,
          touchDrag: gallery_item_carousel_length > 3 ? true : false,
          mouseDrag: gallery_item_carousel_length > 3 ? true : false,
          loop: gallery_item_carousel_length > 3 ? true : false,
          autoplay: gallery_item_carousel_length > 3 ? true : false,
          autoplayTimeout: 3000,
          autoplayHoverPause: gallery_item_carousel_length > 3 ? true : false,
          margin: 20,
          responsive: {
            0: {
              items: 1,
              stagePadding: 60,
            },
            600: {
              items: 1,
              stagePadding: 150,
            },
            768: {
              items: 3,
              slideBy: 3,
            },
            1030: {
              items: 3,
              slideBy: 3,
            },
          },
        });
      
        // Agenda Script
        function timezone() {
          var timereload = $(".time-reload").length;
          /*console.log(timereload);*/
      
          function disp(divs) {
            for (var i = 0; i < divs.length; i++) {
              var $this = divs[i];
              var startTime = divs[i].dataset.starttime;
              var endTime = divs[i].dataset.endtime;
              divs[i].innerHTML = localtime(startTime) + " - Your local time."; //+localtime(endTime) +
            }
          }
          disp($(".time-reload").toArray());
      
          function localtime(time) {
            var d = new Date(time);
            var theminutes = d.getMinutes();
            var thehours = d.getHours();
            if (theminutes < 10) {
              theminutes = "0";
              theminutes += d.getMinutes();
            } else {
              theminutes = d.getMinutes();
              thehours = d.getHours();
            }
            return thehours + ":" + theminutes;
          }
      
          function giventime(time) {
            var d = new Date(time);
            var theminutes = d.getUTCMinutes();
            var thehours = d.getUTCHours();
            if (theminutes < 10) {
              theminutes = "0";
              theminutes += d.getUTCMinutes();
            } else {
              theminutes = d.getUTCMinutes();
              thehours = d.getUTCHours();
            }
            return thehours + ":" + theminutes;
          }
        }
        timezone();
      
        // Speaker FILTER
        $(".panel-selection-speaker ul li").click(function () {
          $(".panel-selection-speaker ul li").removeClass("active");
          $(this).addClass("active");
          var $panel_name = $(this).data("panel-name");
          if ($panel_name == "showAll") {
            $(".no-item").removeClass("d-none");
            $(".no-item").addClass("d-block");
            $(".no-blocks-available").addClass("d-none");
            $(".no-blocks-available").removeClass("d-block");
            $(".item-profile-bio").addClass("d-none");
            $(".item-profile-bio").removeClass("d-block");
          } else {
            // console.log($panel_name);
            $(".item-profile-bio").addClass("d-none");
            $(".item-profile-bio").removeClass("d-block");
            $(".no-item").addClass("d-none");
            $(".no-item").removeClass("d-block");
            $(".no-item." + $panel_name).removeClass("d-none");
            $(".no-item." + $panel_name).addClass("d-block");
      
            if ($(".no-item." + $panel_name).hasClass("d-block")) {
              $(".no-blocks-available").addClass("d-none");
              $(".no-blocks-available").removeClass("d-block");
            } else {
              $(".no-blocks-available").removeClass("d-none");
              $(".no-blocks-available").addClass("d-block");
            }
          }
          $("html, body").animate({
            scrollTop: $(".speakes-sec").offset().top - 75,
          }, 1000);
        });
      
        var screen_size = $(window).width();
        if (screen_size >= 767) {
          var cols = $(".no-item");
          cols.click(function () {
            var $class_name = $(this).find(".item-slider-head").html().toLowerCase().split(/\s+/).join("-");
            var $profile_name = $(this).find(".item-slider-head").html();
            var $profile_designation = $(this).find(".item-slider-para").html();
            var $data_para = $(this).find(".expand-para").html();
      
            console.log($data_para);
      
            $(".item-profile-bio").remove();
      
            var group = ($(this).index() + 1) / 4;
            if (Number.isInteger(group)) {
              group = Math.trunc(group);
              j = group * 4 - 1;
            } else {
              group = Math.trunc(group);
              j = (group + 1) * 4 - 1;
            }
      
            if (cols.get(j) === undefined) j = $(".no-item").length - 1;
      
            $(cols.get(j)).after('<div class="item-profile-bio col-lg-12 col-md-12 col-sm-12 col-xs-12 ' + $class_name + '"><div class="item-bio  bg-light-white mb-30"><div class="speaker-bio-details"><a href="javascript:void(0);" title="Close" class="speaker-close">&times</a><h4 class="profile-name">' + $profile_name + '</h4><p class="profile-designation">' + $profile_designation + "</p>" + $data_para + "</div></div>");
      
            j = 0;
      
            $(".speaker-close").click(function () {
              console.log($class_name);
              $($class_name).attr("id", "asdsadsa");
              // $('.item-profile-bio').addClass('d-none');
              // $('.item-profile-bio').removeClass('d-block');
              $(".item-profile-bio").remove();
              $("html, body").animate({
                scrollTop: $(".speakes-sec").offset().top - 100,
              }, 1000);
            });
      
            $("html, body").animate({
              scrollTop: $(".item-profile-bio").offset().top - 50,
            }, 1000);
          });
        } else {
          var cols = $(".no-item");
          cols.click(function () {
            var $class_name = $(this).find(".item-slider-head").html().toLowerCase().split(/\s+/).join("-");
            var $profile_name = $(this).find(".item-slider-head").html();
            var $profile_designation = $(this).find(".item-slider-para").html();
            var $data_para = $(this).find(".expand-para").html();
      
            $(".item-profile-bio").remove();
      
            $(this).after('<div class="item-profile-bio col-lg-12 col-md-12 col-sm-12 col-xs-12' + $class_name + '"><div class="item-bio bg-light-white mb-30"><div class="speaker-bio-details"><a href="javascript:void(0);" title="Close" class="speaker-close">&times</a><h2 class="profile-name">' + $profile_name + '</h2><p class="profile-designation">' + $profile_designation + "</p>" + $data_para + "</div></div>");
      
            $(".speaker-close").click(function () {
              $(".item-profile-bio").addClass("d-none");
              $(".item-profile-bio").removeClass("d-block");
            });
      
            $("html, body").animate({
                scrollTop: $(".item-profile-bio").offset().top - 50,
              },
              1000
            );
          });
        }
      
        // Speaker Filter END
      
        // APAC Insights Filter Start
      
        var year = $(".year");
        year.click(function () {
          $(".year").removeClass("active-year");
          $(this).addClass("active-year");
          var year_num = $(this).data("year");
          if (year_num == "viewall") {
            $(".sort-year").removeClass("d-none");
            $(".sort-year").addClass("d-block");
          } else {
            $(".sort-year").addClass("d-none");
            $(".sort-year").removeClass("d-block");
            $(".sort-year." + year_num).removeClass("d-none");
            $(".sort-year." + year_num).addClass("d-block");
          }
      
          $("html, body").animate({
              scrollTop: $(".scrollto").offset().top - 100,
            },
            700
          );
        });
      
        // APAC Insights Filter END
      
        // Confluence Insights By Drop Dwn Script START
      
        var $gridFilter = $(".grid-filter"),
          $gridItem = $gridFilter.find(".grid-item"),
          $region_location = $('select[name="region"]'),
          $region_year = $('select[name="year"]'),
          $select = $("select.trainee-filter"),
          $viewAll = $("#rf-view-all");
      
        var $region = [],
          $year = [];
      
        function showAll() {
          $region_location.prop("selectedIndex", 0);
          $region_year.prop("selectedIndex", 0);
          $gridItem.show().removeClass("selected third");
          $gridFilter.removeClass("filtered");
        }
      
        function filterItems() {
          var $activeClass = "";
      
          if ($region_year.val() !== "*") {
            $activeClass += $region_year.val();
          }
          if ($region_location.val() !== "*") {
            $activeClass += $region_location.val();
          }
      
          if ($activeClass !== "") {
            $gridItem.hide().removeClass("selected").removeClass("third");
            $gridFilter
              .addClass("filtered")
              .find($activeClass)
              .show()
              .addClass("selected")
              .filter(function (index, element) {
                return index % 3 == 2;
              })
              .addClass("third");
          } else {
            showAll();
          }
        }
      
        // Build array of items to generate options for Select Menus
        $.each($gridItem, function () {
          var $d = $(this).attr("data-region"),
            $l = $(this).attr("data-year");
      
          if ($.inArray($d, $region) === -1 && $d !== "") {
            $region.push($d);
          }
          if ($.inArray($l, $year) === -1 && $l !== "") {
            $year.push($l);
          }
        });
      
        // Order Items Alphabetically within array
        $region.sort();
        $year.sort();
      
        // Build REGION options
        for (var z = 0; z < $region.length; z++) {
          var $class = $region[z].toLowerCase();
          $class = $class.replace(/\s/g, "-").replace("-&-", "-");
      
          $region_location.append(
            '<option value=".region-' + $class + '">' + $region[z] + "</option>"
          );
        }
      
        // Build YEAR Options
        for (var l = 0; l < $year.length; l++) {
          var $loc = $year[l].toLowerCase().replace(",", "").replace(/(\s)/g, "-");
      
          $region_year.append(
            '<option value=".year-' + $loc + '">' + $year[l] + "</option>"
          );
        }
      
        // Trigger Changes
        $select.on("change", function () {
          filterItems();
          $("html, body").animate({
              scrollTop: $(".scrollto").offset().top - 100,
            },
            700
          );
        });
      
        $viewAll.on("click", function (e) {
          e.preventDefault();
          showAll();
          $("html, body").animate({
              scrollTop: $(".scrollto").offset().top - 100,
            },
            700
          );
        });
      
        // Confluence Insights By Drop Dwn Script END
        var dataId = [];
        $('.panel-selection ul li').each(function () {
          dataId.push($(this).data('panel'));
        });
        // console.log(dataId[0]);
      
        // sectionSpecial
        if ($(".days.active ." + dataId[0]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-block').addClass('d-none');
        }
      
        // sectionKeynote
        if ($(".days.active ." + dataId[1]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-block').addClass('d-none');
        }
      
        // sectionChat
        if ($(".days.active ." + dataId[2]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-block').addClass('d-none');
        }
      
        // sectionSpotlight
        if ($(".days.active ." + dataId[3]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-block').addClass('d-none');
        }
      
        // sectionDiscussion
        if ($(".days.active ." + dataId[4]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-block').addClass('d-none');
        }
      
        // sectionBreakout
        if ($(".days.active ." + dataId[5]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-block').addClass('d-none');
        }
      
        // sectionShowcase
        if ($(".days.active ." + dataId[6]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-block').addClass('d-none');
        }
      
        // sectionAll
        if ($(".days.active ." + dataId[7]).hasClass("d-block")) {
          $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-none').addClass('d-block');
        } else {
          $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-block').addClass('d-none');
        }
      
      
        $(".day-selection ul li").click(function () {
          $(".panel-selection ul li").removeClass("active");
          $('.panel-selection ul li[data-panel="sectionAll"]').addClass("active");
          $(".day-selection ul li").removeClass("active");
          $(this).addClass("active");
          $(".panel").removeClass("d-none");
          $(".panel").addClass("d-block");
          $(".accordian-main").find("p.no-blocks-available").remove();
          var $day = $(this).data("day");
          if ($day == "bothdays") {
            $(".days").addClass("active");
          } else {
            $(".days").removeClass("active");
            $("#" + $day).addClass("active");
          }
          // sectionSpecial
          if ($(".days.active ." + dataId[0]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[0] + ']').removeClass('d-block').addClass('d-none');
          }
      
          // sectionKeynote
          if ($(".days.active ." + dataId[1]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[1] + ']').removeClass('d-block').addClass('d-none');
          }
      
          // sectionChat
          if ($(".days.active ." + dataId[2]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[2] + ']').removeClass('d-block').addClass('d-none');
          }
      
          // sectionSpotlight
          if ($(".days.active ." + dataId[3]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[3] + ']').removeClass('d-block').addClass('d-none');
          }
      
          // sectionDiscussion
          if ($(".days.active ." + dataId[4]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[4] + ']').removeClass('d-block').addClass('d-none');
          }
      
          // sectionBreakout
          if ($(".days.active ." + dataId[5]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[5] + ']').removeClass('d-block').addClass('d-none');
          }
      
          // sectionShowcase
          if ($(".days.active ." + dataId[6]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[6] + ']').removeClass('d-block').addClass('d-none');
          }
      
          // sectionAll
          if ($(".days.active ." + dataId[7]).hasClass("d-block")) {
            $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-none').addClass('d-block');
          } else {
            $('.panel-selection ul li[data-panel=' + dataId[7] + ']').removeClass('d-block').addClass('d-none');
          }
      
          $("html, body").animate({
              scrollTop: $(".accordian-main").offset().top - 100,
            },
            700
          );
        });
      
        $(".panel-selection ul li").click(function () {
          $(".panel-selection ul li").removeClass("active");
          $(this).addClass("active");
          var $panel = $(this).data("panel");
          if ($panel == "sectionAll") {
            $(".no-result").removeClass("d-none");
            $(".no-result").addClass("d-block");
            // if ($('.days.active .' + $panel).hasClass('d-block')) {
            //   $('.accordian-main').find('p.no-blocks-available').remove();
            // } else {
            $(".accordian-main").find("p.no-blocks-available").remove();
            //   $('.accordian-main').append("<p class='no-blocks-available'>No Result Found!</p>");
            // }
          } else {
            $(".no-result").addClass("d-none");
            $(".no-result").removeClass("d-block");
            $(".days.active ." + $panel).removeClass("d-none");
            $(".days.active ." + $panel).addClass("d-block");
            if ($(".days.active ." + $panel).hasClass("d-block")) {
              //console.log($panel);
              $(".accordian-main").find("p.no-blocks-available").remove();
            } else {
              $(".accordian-main").find("p.no-blocks-available").remove();
              $(".accordian-main").append(
                "<p class='no-blocks-available'>No Result Found!</p>"
              );
            }
          }
          $("html, body").animate({
              scrollTop: $(".accordian-main").offset().top - 100,
            },
            700
          );
        });
        // $('.panel-selection ul li').click(function () {
        //     $('.panel-selection ul li').removeClass('active');
        //     $(this).addClass('active');
        //     var $panel = $(this).data('panel');
        //     if ($panel == 'sectionAll') {
        //         $('.panel').removeClass('d-none');
        //         $('.panel').addClass('d-block');
        //     }
        //     else {
        //         $('.panel').addClass('d-none');
        //         $('.panel').removeClass('d-block');
        //         $('.days.active .' + $panel).removeClass('d-none');
        //         $('.days.active .' + $panel).addClass('d-block');
        //     }
        //     $('html, body').animate({
        //         scrollTop: $(".accordian-main").offset().top - 100,
        //     }, 700);
      
        // });
        /*$(".cta-toggle").click(function () {
          $(this).find(".popup-cnt").toggleClass("popup-cnt-open");
        });*/
      
        $("#menu-border-line a").click(function () {
          $("html,body").animate({
            scrollTop: $(".tab-accordion-bg").offset().top - 100,
          }, 700);
        });
      
        /* ------------- SCROLL UP FUNCTION HOME Pages ---------------*/
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
      
        /* ------------- Country Selection Part ---------------*/
        $(document).on("click", ".select-country, .option-country > ul > li", function () {
          $(".option-country").toggleClass("open-country");
          if ($(".option-country").hasClass("open-country")) {
            $(".down-arrow").addClass("up-arrow").removeClass("down-arrow");
          } else {
            $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
          }
        });
        $(document).on("click", "body", function (e) {
          if (!$(e.target).is(".select-country > a")) {
            $(".option-country.open-country").removeClass("open-country");
            $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
          }
        });
      
        $(".direction").click(function () {
          $(".direction-map").fadeIn(700), $(".venue-video").get(0).pause();
        });
      
        $(".direction-close").click(function () {
          $(".direction-map").fadeOut(700), $(".venue-video").get(0).play();
        });
      
        // End
      });
      