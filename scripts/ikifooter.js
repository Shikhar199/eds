$(document).ready(function () {

    /* ------------- Country Selection Part ---------------*/
        $(document).on("click", ".select-country, .option-country > ul > li", function () {
            $(".option-country").toggleClass("open-country");
            if ($(".option-country").hasClass("open-country")) {
                $(".icon-down-arrow").removeClass("icon-down-arrow").addClass("icon-down-arrow up-arrow");
            } else {
                $(".icon-down-arrow.up-arrow").removeClass("icon-down-arrow up-arrow").addClass("icon-down-arrow");
            }
        });
        $(document).on('click', 'body', function (e) {
            if (!$(e.target).is('.select-country > a')) {
                $('.option-country.open-country').removeClass('open-country');
                $(".icon-down-arrow.up-arrow").removeClass("icon-down-arrow up-arrow").addClass("icon-down-arrow");
            }
        });
        
        var currurl=window.location.href;
        if(currurl.includes("/perspectives.html") || currurl.includes("/perspectives/"))
        {
            $(".article-details-wraper.subscribe-wraper").css({
              display: "block"
            });
        }
        if(currurl.includes("/podcasts.html") || currurl.includes("/podcasts/"))
        {
            $(".podcast-initial-content.subscribe-wraper").css({
              display: "block"
            });
        }
    });
    
    
    
    // IKI Footer Subscription Code
    function validateikisub() {
        const i = $("#emailsub").val();
        var e = i.split("@"),
          t = ["gmail.", "yahoo.", "outlook.", "rediffmail.", "hotmail.", "me."];
        if (validateEmailiki(i)) {
          var s;
          for (s = 0; s < t.length; s++)
            if (arrvalue = t[s].toString(), 0 == e[1].toLowerCase().indexOf(arrvalue)) return $("#errormsgiki").html("Please enter Business Email"), $("#emailsub").focus(), !1;
          var a = Dmdbase_CDC.CompanyProfile.country_name,
            o = Dmdbase_CDC.CompanyProfile.demandbase_sid,
            n = Dmdbase_CDC.CompanyProfile.industry,
            l = Dmdbase_CDC.CompanyProfile.sub_industry,
            d = Dmdbase_CDC.CompanyProfile.company_name,
            c = Dmdbase_CDC.CompanyProfile.revenue_range,
            r = Dmdbase_CDC.CompanyProfile.city,
            m = Dmdbase_CDC.CompanyProfile.state,
            p = Dmdbase_CDC.CompanyProfile.registry_zip_code,
            b = Dmdbase_CDC.CompanyProfile.fortune_1000,
            u = Dmdbase_CDC.CompanyProfile.forbes_2000,
            f = "",
            y = "",
            g = "",
            v = "";//,
            //k = document.getElementById("sptextiki").value,
            //x = "https://s672742760.t.eloqua.com/e/f2?elqFormName=connect-iki&elqSiteID=672742760&email=" + $("#email").val() + "&Source=IKI Footer Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&sptext=" + k + "&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;
            
            
            let paramss = "email64zxc=" + $("#email64zxca").val() + "&camFormName=connect-iki&camId=null&camCustId=null&email=" + $("#emailsub").val() + "&Source=IKI Footer Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;
            
            //let paramss = $('#subscribeEmail').serialize();
    
    
            fetch('https://marcom.infosys.com/services/forms/v1/response', {
            method: 'POST',
            credentials: 'include',
            body: paramss,
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            redirect: 'manual' // Set to 'auto' to follow redirection set in form processing step
            }).then(response => {
            // Handle the redirection response
                $("#subscribeEmail, .h4-head").fadeOut();
                $("#thankyousub").fadeIn(); // Set display property according to use case.
    
            })
            .catch(error => {
            console.error(error);
            })
            
            
            
         // return document.getElementById("blindiki").innerHTML = '<img src="' + x + '" id="submit" style="width:1px; height:1px;" />', $("#subscribeEmail, .h4-head").fadeOut(), $("#thankyou").fadeIn(), !1
            
            return $("#subscribeEmail, .h4-head").fadeOut(), $("#thankyousub").fadeIn(), !1
            
        }
        return $("#errormsgiki").html("Please enter the valid email id"), $("#emailsub").focus(), !1
      }
    
      function validateEmailiki(i) {
        const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return e.test(i)
      }
      $(document).ready(function () {
        function i() {
          var i = $(".tooltip-content ul li"),
            e = $.Deferred().resolve();
          i.get().forEach(function (i) {
            e = e.then(function () {
              return $(i).animate({
                opacity: "1"
              }, 300).promise()
            })
          })
        }
        
        $("body").on("click", ".podcast-box-link", function () {
        $(this).children().css({
          opacity: "1",
          transform: "scale3d(1,1,1)",
          "-webkit-transform": "scale3d(1,1,1)"
        }), i()
      });
    });
    
    
    
    
     $(".icon-chain").click(function (e) {
    
       e.preventDefault();
       var copyText = window.location.href;
    
       document.addEventListener('copy', function(e) {
          e.clipboardData.setData('text/plain', copyText);
          e.preventDefault();
       }, true);
    
       document.execCommand('copy');  
       console.log('copied text : ', copyText);
       alert('copied text: ' + copyText); 
     });
     
     function validateikisubsidebar() {
        const i = $("#emailSidebar").val();
        var e = i.split("@"),
          t = ["gmail.", "yahoo.", "outlook.", "rediffmail.", "hotmail.", "me."];
        if (validateEmailiki(i)) {
          var s;
          for (s = 0; s < t.length; s++)
            if (arrvalue = t[s].toString(), 0 == e[1].toLowerCase().indexOf(arrvalue)) return $("#errormsgikisidebar").html("Please enter Business Email"), $("#emailSidebar").focus(), !1;
          /*var a = Dmdbase_CDC.CompanyProfile.country_name,
            o = Dmdbase_CDC.CompanyProfile.demandbase_sid,
            n = Dmdbase_CDC.CompanyProfile.industry,
            l = Dmdbase_CDC.CompanyProfile.sub_industry,
            d = Dmdbase_CDC.CompanyProfile.company_name,
            c = Dmdbase_CDC.CompanyProfile.revenue_range,
            r = Dmdbase_CDC.CompanyProfile.city,
            m = Dmdbase_CDC.CompanyProfile.state,
            p = Dmdbase_CDC.CompanyProfile.registry_zip_code,
            b = Dmdbase_CDC.CompanyProfile.fortune_1000,
            u = Dmdbase_CDC.CompanyProfile.forbes_2000,*/
            var a = "",
            o = "",
            n = "",
            l = "",
            d = "",
            c = "",
            r = "",
            m = "",
            p = "",
            b = "",
            u = "",
            f = "",
            y = "",
            g = "",
            v = "",
            k = document.getElementById("sptextikisidebar").value,
            x = "https://s672742760.t.eloqua.com/e/f2?elqFormName=connect-iki&elqSiteID=672742760&email=" + $("#emailSidebar").val() + "&Source=IKI Sidebar Subscribe&referral_source=" + window.location.search.substring(1) + "&opt-in-comm=Yes&sptext=" + k + "&country=" + a + "&demandbase_sid=" + o + "&industry=" + n + "&sub_industry=" + l + "&company_name=" + d + "&revenue_range=" + c + "&city=" + r + "&state=" + m + "&zip=" + p + "&fortune_1000=" + b + "&forbes_2000=" + u + "&watch_list_account_type=" + f + "&watch_list_account_status=" + y + "&db_country_name_ip=" + g + "&office_phone=" + v;
          return document.getElementById("blindikisidebar").innerHTML = '<img src="' + x + '" id="submit" style="width:1px; height:1px;" />', $("#subscribeEmailSidebar, .h4-head-sidebar").fadeOut(), $("#thankyousidebar").fadeIn(), !1
        }
        return $("#errormsgikisidebar").html("Please enter the valid email id"), $("#emailSidebar").focus(), !1
      }
    
      function validateEmailiki(i) {
        const e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return e.test(i)
      }
    
      $(document).ready(function () {
          function i() {
              var i = $(".podcast-initial-content-sidebar ul li"),
                e = $.Deferred().resolve();
              i.get().forEach(function (i) {
                e = e.then(function () {
                  return $(i).animate({
                    opacity: "1"
                  }, 300).promise()
                })
              })
            }
      
        $("body").on("click", "#subscribe-insights", function () {
            $('html, body').animate({
            scrollTop: $("#subscribeinsights").offset().top - 100
        }, 200);
            
            /* $(this).css({
                opacity:"0"
            }),
            $("#subscribe-insights-popup").css({
              opacity: "1",
              transform: "scale3d(1,1,1)",
              "-webkit-transform": "scale3d(1,1,1)"
            }),j(); */
            
        });
        $("body").on("click", "#subscribe-podcasts", function () {
            $(this).css({
                opacity:"0"
            }),
            $("#subscribe-podcasts-popup").css({
              opacity: "1",
              transform: "scale3d(1,1,1)",
              "-webkit-transform": "scale3d(1,1,1)"
            }),i();
        });
    });