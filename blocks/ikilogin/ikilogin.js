var preferencesIndustry = '';
var preferencesServices = '';

var msg1 = "<div id='divMessage' class='error-msg'><p>This account is locked. Click <a href='" + $("#ResendActivationUrl").attr("href") + "'>here</a> to enable it.</p></div>";
	var msg2 = "<div id='divMessage' class='error-msg'><p>Invalid email id or password.</p></div>";
	var verify = "<div id='divMessage' class='sucess-msg'><p>We have sent you an email for verifying your request. Please follow the steps in the mail sent to:<b>" + $.trim($("#TxtForgotEmail").val()) + "</b> to change your password.</p></div>";
	var incorrectEmail = "<div id='divMessage' class='error-msg'><p>Incorrect mail id. The mail id submitted is not registered with us.</p></div>";



$("#DrpPrefix").css("font-size","smaller");

$(document).ready(function(){
	enableSubmit();
});



var user=localStorage.getItem("userName");
var currentPage = window.location.href.split("?")[0];

	if(user!=null)
	{
		var anchor=$("#sign-in-button");
		//$("#sign-in-button").text("Hi, "+user);
		$("#sign-in-ul").replaceWith("<li class='nav-item dropdown' >\
											<a class='nav-link dropdown-toggle' id='signin-dropdown' role='button'\
                                data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' title="+user+">\
                                Hi, "+user+" \
                            </a>\
											<div id='menu' class='dropdown-menu' aria-labelledby='signin-dropdown'> \
											<a class='dropdown-item' id='logout-button' href='"+ currentPage +"' title='Log out'>Logout</a></div>\
										</li>");
	}
	
$("#signin-dropdown").css("padding-right","");
$("#signin-dropdown").css("padding-right","2.5rem !important");
$("#signin-dropdown").css("width","");
$("#signin-dropdown").css("width","max-content !important");
$("#signin-dropdown").css("padding-left","");
$("#signin-dropdown").css("padding-left","1.5rem !important");
$("#signin-dropdown").css("font-size","");
$("#signin-dropdown").css("font-size","medium !important");
$(".navbar-end .dropdown #menu").css("margin-left","");
$(".navbar-end .dropdown #menu").css("margin-left","5rem !important");
$("#DrpPrefix").css("font-size","");
$("#DrpPrefix").css("font-size","smaller");
if(window.location.href.indexOf("loginiki.html") > -1 ||window.location.href.indexOf("regisiki.html")>-1)
{
$("#signin-dropdown").css("display","none");
$("#sign-in-button").css("display","none");
}	
$('#logout-button').click(function() {
	localStorage.removeItem("userName");
	localStorage.removeItem("emailID");
	localStorage.removeItem("industryPref");
	localStorage.removeItem("servicePref");
	localStorage.removeItem("contentTypePref");
	
}
);

$('#sign-in-button').click(function(){
	
	var currentPage = window.location.href	;
	localStorage.setItem("currentPage" , currentPage);
	
});
function alignModal(){
	var modalDialog = $(this).find(".modal-dialog");
	/* Applying the top margin on modal dialog to align it vertically center */
	modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
}
	
// Align modal when user resize the window
$(window).on("resize", function(){
	$(".modal:visible").each(alignModal);
});

var userSuccessfulRegistrationPart01 = "<p>Registered Successfully. Please follow the steps in the mail sent to: <b>"
var userSuccessfulRegistrationPart02 = "</b> to activate your account</p>";

/*
* $(document).ready(function() { // MultiSelect JS starts
* $('#txtError').css('display', 'none'); // First time opening the first ul li
* ul $('#chnls li').first().children('ul').css('display', 'block'); var
* response = ""; $.ajax({ type : 'GET', url :
* '/bin/usermanager/registeruser?userEmailID=' + emailID, contentType :
* "application/json; charset=utf-8", async : false, success : function(data) {
* response = data; }, error : function(msg) { location.reload(true); } });
* BindEditProfileValues(response); });
*/

// Bind the values from service
function BindEditProfileValues(response) {
    var results = response;
    
    $("#DrpPrefix").val(results.userPrefix);
    $("#TxtFirstName").val(results.userFirstName);
    $("#TxtLastName").val(results.userLastName);
    $("#TxtDisplayName").val(results.userDisplayName);
    $("#TxtDesignation").val(results.userDesignation);
    $("#TxtCompanyName").val(results.userCompany);
    $("#DrpCountry").val(results.userCountry);
    $("#SpnEmailId").text(results.userEmailID).toLowerCase();
    
    BindCheckBoxValues(results.userMultiSelectPreferences);
}
// Bind The Check-Box Values From JSON
function BindCheckBoxValues(values) {
    var arrValues = values.split(',');
    var chkPosition = 0;
    // For looping through the checkboxes
    $('#chnls li ul').find("input:checkbox").each(
        function() {
            // For checking the checkbox looping through all the values
            for (icheckbox = 0; icheckbox < arrValues.length; icheckbox++) {
                if ($(this).attr('value') == arrValues[icheckbox]) {
                    $(this).attr('checked', true);
                    var selectedText = $(this).next('span').text();
                    var chkValue = $(this).attr('value');
                    var ctrlText = '<div class=dynamicSelectxt><span class=selectedtxt>' + selectedText
                    + '</span><span id=' + chkValue + ' class=closeSign>X</span></div>';
                    $('.selectedOptions').append(ctrlText);
                }
            }
        });
    // For selecting parent when all checkboxes are checked
    var liCount = $('#chnls').children().length;
    for (i = 1; i <= liCount; i++) {
        var chkboxCount = $('#chnls').children().eq(i - 1).children().children().find('input:checkbox').length;
        var chkboxCheckedCount = $('#chnls').children().eq(i - 1).children().children().find('input:checkbox:checked').length;
        if ((chkboxCount != 0 && chkboxCheckedCount != 0) && chkboxCount == chkboxCheckedCount) {
            $('#chnls').children().eq(i - 1).find('input:checkbox').attr('checked', true);
        }
    }
}

$('#chkChangePassword').change(function() {
    if ($(this).is(":checked")) {
        $('#TxtOldPassword,#TxtNewPassword,#TxtConfirmPassword').prop("disabled", false);
    } else {
        $('#TxtOldPassword,#TxtNewPassword,#TxtConfirmPassword').val('').prop("disabled", "disabled");
    }
    
});
// For checking all child when parent is checked and unchecking all child when
// parent is unchecked
$('.chkparent').change(
    function() {
        var arrParent = $(this).parent().attr('id').split('_');
        var fullParentID = "main_" + arrParent[1];
        if (!$(this).is(':checked')) {
            $('#' + fullParentID + " ul li input:checkbox").prop('checked', false);
            $('#' + fullParentID + ' ul li input[type=checkbox]').each(function() { // Removing
                // the
                // div
                // values
                // when
                // unchecking
                // the
                // checkbox
                var chkValue = $(this).attr('value');
                $('.selectedOptions span[id="' + chkValue + '"').parent().remove();
            });
        } else {
            // $('#' + fullParentID + " ul li
            // input:checkbox").attr('checked', true);
            $('#' + fullParentID + " ul li input:checkbox").prop('checked', true);
            $('#' + fullParentID + ' ul li input[type=checkbox]').each(
                function() {
                    var selectedText = $(this).next('span').text();
                    var chkValue = $(this).attr('value');
                    if ($('.selectedOptions span[id="' + chkValue + '"').length == 0) { // generating
                        // the
                        // div
                        // when
                        // parent
                        // is
                        // selected
                        // and
                        // checking
                        // div
                        // existance
                        var ctrlText = '<div class=dynamicSelectxt><span class=selectedtxt>' + selectedText
                        + '</span><span id=' + chkValue + ' class=closeSign>X</span></div>';
                        $('.selectedOptions').append(ctrlText);
                    }
                });
        }
    });

// Click On TextBox
$(".txt-select").click(function() {
    $(".drop").slideToggle("slow");
    var imageClass = $(this).children('span');
    if (imageClass.hasClass('arrowimagedown')) {
        imageClass.addClass('arrowimageup').removeClass('arrowimagedown');
    } else {
        imageClass.addClass('arrowimagedown').removeClass('arrowimageup');
    }
});

// Changing + and - Symbol On click
$('.list-extra').click(function(e) {
    var currentText = $(this).text();
    if (currentText.trim() == '+') {
        $(this).text('-');
    } else {
        $(this).text('+');
    }
    var extr = $(this).attr('id').split('_');
    var subid = "sub_" + extr[1];
    $("#" + subid).slideToggle("slow");
});

// For Selecting The Parent When Child All Selected
$('.chksub').change(function() {
    var mainchkid = $(this).parent().parent().parent().find("input:checkbox").attr('id');
    var subParentID = $(this).parent().parent().attr('id');
    var totcount = $('#' + subParentID).find("input:checkbox").length;
    var chkcount = $('#' + subParentID).find("input:checkbox:checked").length;
    if (chkcount == totcount) {
        $('#' + mainchkid).prop('checked', true);
    } else {
        $('#' + mainchkid).prop('checked', false);
    }
});

// For generating the div on checkbox checked change and removing the div on
// unchecking
$('#chnls li ul input[type=checkbox]').change(
    function() {
        var selectedText = $(this).next('span').text();
        var chkValue = $(this).attr('value');
        var chkID = $(this).attr('id');
        if ($('#' + chkID).is(':checked')) { // genereting the value when
            // click of checkbox
            var ctrlText = '<div class=dynamicSelectxt><span class=selectedtxt>' + selectedText
            + '</span><span id=' + chkValue + ' class=closeSign>X</span></div>';
            $('.selectedOptions').append(ctrlText);
        } else {
            $('#' + chkValue).parent().remove();
        }
    });

// For removing the div and unchecking the checkbox on click of closeSign
$(document).on('click', '.closeSign', function() {
    var closeId = $(this).attr('id');
    $(this).parent().remove();
    $('input:checkbox[value="' + closeId + '"]').attr('checked', false); // for
    // uncheking
    // the
    // checkbox
    // when
    // click
    // of
    // close
    // sign
    $('input:checkbox[value="' + closeId + '"]').parent().parent().siblings('input:checkbox').attr('checked', false); // for
    // unchecking
    // parent
    // when
    // click
    // of
    // close
    // sign
});

// Sign-In Forgot Password Click Event
/*
* $('.forgot-pwd').click(function(e) { e.preventDefault(); if
* ($(window).width() > 1900) { $('.no-mobile
* footer').toggleClass('fixed-footer'); } $('.forgot-pwd-tooltip').toggle() });
*/

/* Form Validation Start */

/* Common Validation For Registration and Update_Profile Start */
function ValidateForm() {
    // Validate Prefix
    if ($("#DrpPrefix").val() == 0) {
        $("#SpnPrefix.error-block").css("display", "inline-block");
    } else {
        $("#SpnPrefix.error-block").css("display", "none");
    }
    // Validate First Name
    var firstNameRegEx = new RegExp($("#SpnRegFirstName").data('val-validationexpression'));
    
    if ($.trim($("#TxtFirstName").val()) == "") {
        $("#SpnFirstName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtFirstName").val()) != "") {
        $("#SpnFirstName.error-block").css("display", "none");
        var firstName = $.trim($("#TxtFirstName").val());
        if (!firstNameRegEx.test(firstName)) {
            $("#SpnRegFirstName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegFirstName.error-block").css("display", "none");
        }
    } else {
        $("#SpnFirstName.error-block").css("display", "none");
    }
    // Validate Last Name
    var lastNameRegEx = new RegExp($("#SpnRegLastName").data('val-validationexpression'));
    
    if ($.trim($("#TxtLastName").val()) == "") {
        $("#SpnLastName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtLastName").val()) != "") {
        $("#SpnLastName.error-block").css("display", "none");
        var lastName = $.trim($("#TxtLastName").val());
        if (!lastNameRegEx.test(lastName)) {
            $("#SpnRegLastName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegLastName.error-block").css("display", "none");
        }
    } else {
        $("#SpnLastName.error-block").css("display", "none");
    }
    // Validate Display Name
    var displayNameRegEx = new RegExp($("#SpnRegDisplayName").data('val-validationexpression'));
    
    if ($.trim($("#TxtDisplayName").val()) == "") {
        $("#SpnDisplayName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtDisplayName").val()) != "") {
        $("#SpnDisplayName.error-block").css("display", "none");
        var displayName = $.trim($("#TxtDisplayName").val());
        if (!displayNameRegEx.test(displayName)) {
            $("#SpnRegDisplayName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegDisplayName.error-block").css("display", "none");
        }
    } else {
        $("#SpnDisplayName.error-block").css("display", "none");
    }
    // Validate Designation Name
    var designationRegEx = new RegExp($("#SpnRegDesignation").data('val-validationexpression'));
    
    if ($.trim($("#TxtDesignation").val()) == "") {
        $("#SpnDesignation.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtDesignation").val()) != "") {
        $("#SpnDesignation.error-block").css("display", "none");
        var designation = $.trim($("#TxtDesignation").val());
        if (!designationRegEx.test(designation)) {
            $("#SpnRegDesignation.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegDesignation.error-block").css("display", "none");
        }
    } else {
        $("#SpnDesignation.error-block").css("display", "none");
    }
    // Validate Company Name
    var companyNameRegEx = new RegExp($("#SpnRegCompanyName").data('val-validationexpression'));
    
    if ($.trim($("#TxtCompanyName").val()) == "") {
        $("#SpnCompanyName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtCompanyName").val()) != "") {
        $("#SpnCompanyName.error-block").css("display", "none");
        var companyName = $.trim($("#TxtCompanyName").val());
        if (!companyNameRegEx.test(companyName)) {
            $("#SpnRegCompanyName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegCompanyName.error-block").css("display", "none");
        }
    } else {
        $("#SpnCompanyName.error-block").css("display", "none");
    }
    // Validate Country
    if ($("#DrpCountry").val() == 0) {
        $("#SpnCountry.error-block").css("display", "inline-block");
    } else {
        $("#SpnCountry.error-block").css("display", "none");
    }
    // Validate Preference

    var chkcount = $('#chnls li ul').find("input:checkbox:checked").length;
    if (chkcount == 0) {
        $("#SpnPreference").css('display', 'inline-block');
    } else {
        $("#SpnPreference").css('display', 'none');
        var preferences = '';

        $('#TxtHdnPreferences').val('');
        $('#chnls #main_0 ul').find("input:checkbox:checked").each(function() {
            var checkboxSelected = $(this).attr('value');
            preferencesIndustry = preferencesIndustry + checkboxSelected + ',';
        });

        preferencesIndustry = preferencesIndustry.slice(0,-1);

        //picking up services preferred while user registration
         $('#chnls #main_1 ul').find("input:checkbox:checked").each(function() {
            var checkboxSelected = $(this).attr('value');
            preferencesServices = preferencesServices + checkboxSelected + ',';
        });

        preferencesServices = preferencesServices.slice(0,-1);

		preferences = preferencesIndustry + ',' + preferencesServices;

        console.log("preferences is "+preferences);
        $('#TxtHdnPreferences').val(preferences);

    }
    
    // Validate Email Id
    if ($("#divLoginForm").length > 0) {
        var emailRegEx = new RegExp($("#SpnRegEMailId").data('val-validationexpression'));
        
        if ($.trim($("#TxtEmailId").val()) == "") {
            $("#SpnEMailId.error-block").css("display", "inline-block");
        } else if ($.trim($("#TxtEmailId").val()) != "") {
            $("#SpnEMailId.error-block").css("display", "none");
            var emailId = $.trim($("#TxtEmailId").val()).toLowerCase();
            if (!emailRegEx.test(emailId)) {
                $("#SpnRegEMailId.error-block").css("display", "inline-block");
            } else {
                $("#SpnRegEMailId.error-block").css("display", "none");
            }
        } else {
            $("#SpnEMailId.error-block").css("display", "none");
        }
    }
}
/* Common Validation For Registration and Update_Profile End */

/* Registration Form Validation Start */
function ValidateRegistrationForm() {
    var errorFlag = false;

    ValidateForm();
    
    // Validate Password
    var passwordRegEx = new RegExp($("#SpnRegPassword").data('val-validationexpression'));
    
    if ($.trim($("#TxtPassword").val()) == "") {
        $("#SpnPassword.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtPassword").val()) != "") {
        $("#SpnPassword.error-block").css("display", "none");
        var password = $.trim($("#TxtPassword").val());
        if (!passwordRegEx.test(password)) {
            $("#SpnRegPassword.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegPassword.error-block").css("display", "none");
        }
    } else {
        $("#SpnPassword.error-block").css("display", "none");
    }
    // Validate Conform Password
    if ($.trim($("#TxtConfirmPassword").val()) == "") {
        $("#SpnConfirmPassword.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtConfirmPassword").val()) != "") {
        $("#SpnConfirmPassword.error-block").css("display", "none");
        var password = $.trim($("#TxtPassword").val());
        if ($.trim($("#TxtConfirmPassword").val()) != password) {
            $("#SpnPasswordMisMatch.error-block").css("display", "inline-block");
        } else {
            $("#SpnPasswordMisMatch.error-block").css("display", "none");
        }
    } else {
        $("#SpnConfirmPassword.error-block").css("display", "none");
    }
    // Validate Terms And Condtion
    if ($("#ChkTermCondition").prop("checked") == false) {
        $("#SpnTermCondition.error-block").css("display", "inline-block");
    } else {
        $("#SpnTermCondition.error-block").css("display", "none");
    }
    
    $("#MainContent_RegControl_divRegForm .form-group").each(
        function() {
            if ($(this).find("span.error-block").length > 0) {
                if ($(this).find("span.error-block").length >= 2) {
                    var multiSpan = false;
                    for (var i = 0; i < $(this).find("span.error-block").length; i++) {
                        var spanEle = $(this).find("span.error-block")[i];
                        var spanDis = $(spanEle).css("display");
                        if ($(spanEle).css("display") != "inline-block" && $(spanEle).css("display") != "block"
                        && $(spanEle).css("display") != "inline") {
                            multiSpan = true;
                        } else {
                            multiSpan = false;
                        }
                        if (multiSpan) {
                            errorFlag = true;
                        } else {
                            errorFlag = false;
                            return false;
                        }
                    }
                } else {
                    if ($(this).find("span.error-block").css("display") != "inline-block"
                        && $(this).find("span.error-block").css("display") != "block"
                    && $(this).find("span.error-block").css("display") != "inline") {
                        errorFlag = true;
                    } else {
                        errorFlag = false;
                        return false;
                    }
                }
            }
        });
		
		
    
    if (errorFlag) {
        var userPrefix = $("#DrpPrefix").val();
        console.log("userPrefix "+userPrefix);
        var userFirstName = $("#TxtFirstName").val();
        var userLastName = $("#TxtLastName").val();
        var userDisplayName = $("#TxtDisplayName").val();
        var userDesignation = $("#TxtDesignation").val();
        var userCompany = $("#TxtCompanyName").val();
        var userCountry = $("#DrpCountry").val();
        var userEmailID = $("#TxtEmailId").val().toLowerCase();
        var userPassword = $("#TxtPassword").val();
        var jsonString = {}
            jsonString.userPrefix = userPrefix;
            jsonString.userFirstName = userFirstName;
            jsonString.userLastName= userLastName;
            jsonString.userDisplayName= userDisplayName;
            jsonString.userDesignation= userDesignation;
            jsonString.userCompany= userCompany;
            jsonString.userCountry= userCountry;
            jsonString.userEmailID= userEmailID;
            jsonString.userPassword= userPassword;

        jQuery.ajax({
            type : 'GET',
            url : '/content/infosys-web/en/resource-type-servlets/user-manager-servlet.register.usermanager',
            contentType : "application/json; charset=utf-8",
            data : jsonString,
            success : function(msg) {
                $("#lblSuccessMsg").append(
                    userSuccessfulRegistrationPart01 + userEmailID + userSuccessfulRegistrationPart02);
                $("#divLoginForm").hide();
                $("#divPostLoginForm").show();
                $("#divSuccessMessage").show();
            },
            error : function(msg) {
                if (msg.responseJSON == "USER FOUND") {
                    $("#divLoginForm").hide();
                    $("#divPostLoginForm").show();
                    $("#divErrorMessageUserExists").show();
                } else{
                    $("#divLoginForm").hide();
                    $("#divPostLoginForm").show();
                    /* $("#divErrorMessageGeneric").show(); */
					$("#divErrorMessageUserExists").show();
                }
            }
        });
    }
}
/* Registration Form Validation End */

/*Login start*/

	var msg1 = "<div id='divMessage' class='error-msg'><p>This account is locked. Click <a href='" + $("#ResendActivationUrl").attr("href") + "'>here</a> to enable it.</p></div>";
	var msg2 = "<div id='divMessage' class='error-msg'><p>Invalid email id or password.</p></div>";
	var msg3 = "<div id='divMessage' class='sucess-msg'><p>We have sent you an email for verifying your request. Please follow the steps in the mail sent to:<b>" + $.trim($("#TxtForgotEmail").val()) + "</b> to change your password.</p></div>";
	var msg4 = "<div id='divMessage' class='error-msg'><p>Incorrect mail id. The mail id submitted is not registered with us.</p></div>";

	function isValidLogin() {
		var valid = false;
		var email = $.trim($("#TxtUserEmail").val()).toLowerCase();
		var pword = $.trim($("#TxtPassword").val());
		var emailRegex = new RegExp($("#SpnRegEMailId").data("val-validationexpression"));
		var pwordRegex = new RegExp($("#SpnRegPassword").data("val-validationexpression"));
		if (email === "") {
			valid = false;
			$("#SpnEMailId.error-block").css("display", "inline-block");
			$("#SpnRegEMailId.error-block").css("display", "none");
		} else if (!emailRegex.test(email)) {
			valid = false;
			$("#SpnEMailId.error-block").css("display", "none");
			$("#SpnRegEMailId.error-block").css("display", "inline-block");
		} else {
			$("#SpnEMailId.error-block").css("display", "none");
			$("#SpnRegEMailId.error-block").css("display", "none");
			valid = true;
		}
		if (pword === "") {
			valid = false;
			$("#SpnPassword.error-block").css("display", "inline-block");
			$("#SpnRegPassword.error-block").css("display", "none");
		} else if (!pwordRegex.test(pword)) {
			valid = false;
			$("#SpnPassword.error-block").css("display", "none");
			$("#SpnRegPassword.error-block").css("display", "inline-block");
		} else {
			$("#SpnPassword.error-block").css("display", "none");
			$("#SpnRegPassword.error-block").css("display", "none");
			valid = true;
		}
		return valid;
	}

	
	$("#btnLogin").click(function(event) {
		event.preventDefault();
		$("#divMessage").remove();
		if (isValidLogin()) {
			jQuery.ajax({
				url : "/content/infosys-web/en/resource-type-servlets/usermanager-login-servlet.login.user",
				type : "POST",
				contentType : "application/x-www-form-urlencoded; charset=UTF-8",
				data : {
					userEmailID : $.trim($("#TxtUserEmail").val()).toLowerCase(),
					userPassword : $.trim($("#TxtPassword").val())
				},
				success : function(result) {
					localStorage.setItem("emailID",result.emailID);
					localStorage.setItem("userName",result.userName);
					localStorage.setItem("industryPref",result.industries);
					localStorage.setItem("servicePref",result.services);
					localStorage.setItem("contentTypePref",result.contentTypes);
	            
					//window.location.href = $("#RedirectUrl").attr("href");
					//localStorage.setItem("currentPage" , currentPage);
					if(localStorage.getItem("currentPage") != null &&  localStorage.getItem("currentPage") != "") {
						window.location.href = localStorage.getItem("currentPage");
					}
					else{
						window.location.href = "/iki.html";
					}
				},
				error : function(reason) {
					if (reason.getResponseHeader("X-Reason-Code") === "account_locked") {
						$(".login-form").prepend(msg1);
					} else {
						$(".login-form").prepend(msg2);
					}
				}
			});
		}
	});
/* Login end */

	function isValidForgot() {
		var valid = false;
		var email = $.trim($("#TxtForgotEmail").val()).toLowerCase();
		var emailRegex = new RegExp($("#SpnFgtRegEMailId").data("val-validationexpression"));
		if (email === "") {
			valid = false;
			$("#SpnFgtEMailId.error-block").css("display", "inline-block");
			$("#SpnFgtRegEMailId.error-block").css("display", "none");
		} else if (!emailRegex.test(email)) {
			valid = false;
			$("#SpnFgtEMailId.error-block").css("display", "none");
			$("#SpnFgtRegEMailId.error-block").css("display", "inline-block");
		} else {
			$("#SpnFgtEMailId.error-block").css("display", "none");
			$("#SpnFgtRegEMailId.error-block").css("display", "none");
			valid = true;
		}
		return valid;
	}


	$("#BtnForgotPwd").click(function(event) {
		event.preventDefault();
		var email=$.trim($("#TxtForgotEmail").val()).toLowerCase();
		$("#divMessage").remove();
		if (isValidForgot()) {
			jQuery.ajax({
				url : '/content/infosys-web/en/resource-type-servlets/usermanager-login-servlet.forgetpwd.user',
				type : "POST",
				contentType : "application/x-www-form-urlencoded; charset=UTF-8",
				data : {
					userEmailID : email
				},
				success : function(result) {
					$(".login-form").prepend(verify);
				},
				error : function(reason) {
					$(".login-form").prepend(incorrectEmail);
				}
			});
		}
	});

	$("#LnkRegister").click(function(event) {
		event.preventDefault();
		window.location.href = $("#RegistrationUrl").attr("href");
	});
	


/* Update_Profile Form Validation End */
function ValidateUpdateProfileForm() {
    var errorFlag = false;
    
    ValidateForm();
    
    $("#MainContent_pnlUpdateProfile .update-profile-form .col-md-5 .form-group").each(
        function(index) {
            if (index < 8) {
                if ($(this).find("span.error-block").length > 0) {
                    if ($(this).find("span.error-block").length >= 2) {
                        var multiSpan = false;
                        for (var i = 0; i < $(this).find("span.error-block").length; i++) {
                            var spanEle = $(this).find("span.error-block")[i];
                            var spanDis = $(spanEle).css("display");
                            if ($(spanEle).css("display") != "inline-block" && $(spanEle).css("display") != "block"
                            && $(spanEle).css("display") != "inline") {
                                multiSpan = true;
                            } else {
                                multiSpan = false;
                            }
                            if (multiSpan) {
                                errorFlag = true;
                            } else {
                                errorFlag = false;
                                return false;
                            }
                        }
                    } else {
                        if ($(this).find("span.error-block").css("display") != "inline-block"
                            && $(this).find("span.error-block").css("display") != "block"
                        && $(this).find("span.error-block").css("display") != "inline") {
                            errorFlag = true;
                        } else {
                            errorFlag = false;
                            return false;
                        }
                    }
                }
            }
        });

    if (errorFlag) {
		enableSubmit();
        var userPrefix = $("#DrpPrefix").val();
        var userFirstName = $("#TxtFirstName").val();
        var userLastName = $("#TxtLastName").val();
        var userDisplayName = $("#TxtDisplayName").val();
        var userDesignation = $("#TxtDesignation").val();
        var userCompany = $("#TxtCompanyName").val();
        var userCountry = $("#DrpCountry").val();
        var userMultiSelectPreferences = $('#TxtHdnPreferences').val();
        var userEmailID = $("#SpnEmailId").text().toLowerCase();
        /* Edit Profile with User Password Update */
        if ($('#chkChangePassword').is(":checked")) {
            var changePasswordFlag = false;
            
            var userOldPassword = $("#TxtOldPassword").val();
            var userNewPassword = $("#TxtNewPassword").val();
            var userConfirmPassword = $("#TxtConfirmPassword").val();
            
            // Validate Old Password
            if ($.trim(userOldPassword) == "") {
                changePasswordFlag = false;
                $("#SpnOldPassword.error-block").css("display", "inline-block");
            } else if ($.trim(userOldPassword) != "") {
                changePasswordFlag = true;
                $("#SpnOldPassword.error-block").css("display", "none");
            }
            
            // Validate New Password
            var passwordRegEx = new RegExp($("#SpnRegNewPassword").data('val-validationexpression'));
            
            if ($.trim(userNewPassword) == "") {
                changePasswordFlag = false;
                $("#SpnNewPassword.error-block").css("display", "inline-block");
            } else if ($.trim(userNewPassword) != "") {
                $("#SpnNewPassword.error-block").css("display", "none");
                if (!passwordRegEx.test(userNewPassword)) {
                    changePasswordFlag = false;
                    $("#SpnRegNewPassword.error-block").css("display", "inline-block");
                } else {
                    changePasswordFlag = true;
                    $("#SpnRegNewPassword.error-block").css("display", "none");
                }
            } else {
                changePasswordFlag = true;
                $("#SpnNewPassword.error-block").css("display", "none");
            }
            
            // Validate Conform Password
            if ($.trim(userConfirmPassword) == "") {
                changePasswordFlag = false;
                $("#SpnConfirmPassword.error-block").css("display", "inline-block");
            } else if ($.trim(userConfirmPassword) != "") {
                $("#SpnConfirmPassword.error-block").css("display", "none");
                if ($.trim(userConfirmPassword) != $.trim(userNewPassword)) {
                    changePasswordFlag = false;
                    $("#SpnPasswordMisMatch.error-block").css("display", "inline-block");
                } else {
                    changePasswordFlag = true;
                    $("#SpnPasswordMisMatch.error-block").css("display", "none");
                }
            } else {
                changePasswordFlag = true;
                $("#SpnConfirmPassword.error-block").css("display", "none");
            }

            if (changePasswordFlag) {
				$('.status-msg').css("display", "none");
                var jsonString = {
                    "userPrefix" : userPrefix,
                    "userFirstName" : userFirstName,
                    "userLastName" : userLastName,
                    "userDisplayName" : userDisplayName,
                    "userDesignation" : userDesignation,
                    "userCompany" : userCompany,
                    "userCountry" : userCountry,
                    "userMultiSelectPreferences" : userMultiSelectPreferences,
                    "userEmailID" : userEmailID,
                    "userOldPassword" : userOldPassword,
                    "userNewPassword" : userNewPassword
                }
                $.ajax({
                    type : 'POST',
                    url : '/bin/infosys/edituser',
                    contentType : "application/json; charset=utf-8",
                    data : JSON.stringify(jsonString),
                    success : function(msg) {
                    	$(".passwrd-reset-status .sucess-msg").show();
                    },
                    error : function(msg) {

                    	$(".passwrd-reset-status .error-msg").show();
                    }
                });
            }
        }
        /* Edit Profile without User Password Update */
        else {
            $('.status-msg').css("display", "none");
            var jsonString = {
                "userPrefix" : userPrefix,
                "userFirstName" : userFirstName,
                "userLastName" : userLastName,
                "userDisplayName" : userDisplayName,
                "userDesignation" : userDesignation,
                "userCompany" : userCompany,
                "userCountry" : userCountry,
                "userMultiSelectPreferences" : userMultiSelectPreferences,
                "userEmailID" : userEmailID
            }
            $.ajax({
                type : 'POST',
                url : '/bin/usermanager/edituser',
                contentType : "application/json; charset=utf-8",
                data : JSON.stringify(jsonString),
                success : function(msg) {
                    $(".reset-status .sucess-msg").show();

                },
                error : function(msg) {
                    $(".reset-status .error-msg").show();
                }
            });
        }
        // alert("Profile Updated Successfully");
    }
}
/* Update_Profile Form Validation End */

// Prefix OnChange Function
$("#DrpPrefix").change(function() {
    if (this.value != 0) {
        $("#SpnPrefix.error-block").css("display", "none");
    } else {
        $("#SpnPrefix.error-block").css("display", "inline-block");
    }
});

// FirstName OnBlur Function
function ValidateFirstName() {
    var firstNameRegEx = new RegExp($("#SpnRegFirstName").data('val-validationexpression'));
    
    if ($.trim($("#TxtFirstName").val()) == "") {
        $("#SpnFirstName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtFirstName").val()) != "") {
        $("#SpnFirstName.error-block").css("display", "none");
        var firstName = $.trim($("#TxtFirstName").val());
        if (!firstNameRegEx.test(firstName)) {
            $("#SpnRegFirstName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegFirstName.error-block").css("display", "none");
        }
    } else {
        $("#SpnFirstName.error-block").css("display", "none");
    }
}

// LastName OnBlur Function
function ValidateLastName() {
    var lastNameRegEx = new RegExp($("#SpnRegLastName").data('val-validationexpression'));
    
    if ($.trim($("#TxtLastName").val()) == "") {
        $("#SpnLastName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtLastName").val()) != "") {
        $("#SpnLastName.error-block").css("display", "none");
        var lastName = $.trim($("#TxtLastName").val());
        if (!lastNameRegEx.test(lastName)) {
            $("#SpnRegLastName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegLastName.error-block").css("display", "none");
        }
    } else {
        $("#SpnLastName.error-block").css("display", "none");
    }
}

// DisplayName OnBlur Function
function ValidateDisplayName() {
    var displayNameRegEx = new RegExp($("#SpnRegDisplayName").data('val-validationexpression'));
    
    if ($.trim($("#TxtDisplayName").val()) == "") {
        $("#SpnDisplayName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtDisplayName").val()) != "") {
        $("#SpnDisplayName.error-block").css("display", "none");
        var displayName = $.trim($("#TxtDisplayName").val());
        if (!displayNameRegEx.test(displayName)) {
            $("#SpnRegDisplayName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegDisplayName.error-block").css("display", "none");
        }
    } else {
        $("#SpnDisplayName.error-block").css("display", "none");
    }
}

// Designation OnBlur Function
function ValidateDesignation() {
    var designationRegEx = new RegExp($("#SpnRegDesignation").data('val-validationexpression'));
    
    if ($.trim($("#TxtDesignation").val()) == "") {
        $("#SpnDesignation.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtDesignation").val()) != "") {
        $("#SpnDesignation.error-block").css("display", "none");
        var designation = $.trim($("#TxtDesignation").val());
        if (!designationRegEx.test(designation)) {
            $("#SpnRegDesignation.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegDesignation.error-block").css("display", "none");
        }
    } else {
        $("#SpnDesignation.error-block").css("display", "none");
    }
}

// CompanyName OnBlur Function
function ValidateCompanyName() {
    var companyNameRegEx = new RegExp($("#SpnRegCompanyName").data('val-validationexpression'));
    
    if ($.trim($("#TxtCompanyName").val()) == "") {
        $("#SpnCompanyName.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtCompanyName").val()) != "") {
        $("#SpnCompanyName.error-block").css("display", "none");
        var companyName = $.trim($("#TxtCompanyName").val());
        if (!companyNameRegEx.test(companyName)) {
            $("#SpnRegCompanyName.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegCompanyName.error-block").css("display", "none");
        }
    } else {
        $("#SpnCompanyName.error-block").css("display", "none");
    }
}

// Country OnChange Function
$("#DrpCountry").change(function() {
    if (this.value != 0) {
        $("#SpnCountry.error-block").css("display", "none");
    } else {
        $("#SpnCountry.error-block").css("display", "inline-block");
    }
});

// EmailId OnBlur Function
function ValidateEmailId() {
    var emailRegEx = new RegExp($("#SpnRegEMailId").data('val-validationexpression'));
    
    if ($.trim($("#TxtEmailId").val()) == "") {
        $("#SpnEMailId.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtEmailId").val()) != "") {
        $("#SpnEMailId.error-block").css("display", "none");
        var emailId = $.trim($("#TxtEmailId").val()).toLowerCase();
        if (!emailRegEx.test(emailId)) {
            $("#SpnRegEMailId.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegEMailId.error-block").css("display", "none");
        }
    } else {
        $("#SpnEMailId.error-block").css("display", "none");
    }
}

// Password OnBlur Function
function ValidatePassword() {
    var passwordRegEx = new RegExp($("#SpnRegPassword").data('val-validationexpression'));
    
    if ($.trim($("#TxtPassword").val()) == "") {
        $("#SpnPassword.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtPassword").val()) != "") {
        $("#SpnPassword.error-block").css("display", "none");
        var password = $.trim($("#TxtPassword").val());
        if (!passwordRegEx.test(password)) {
            $("#SpnRegPassword.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegPassword.error-block").css("display", "none");
        }
    } else {
        $("#SpnPassword.error-block").css("display", "none");
    }
}

// Confirm Password OnBlur Function
function ValidateConfirmPassword() {
    if ($.trim($("#TxtConfirmPassword").val()) == "") {
        $("#SpnConfirmPassword.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtConfirmPassword").val()) != "") {
        $("#SpnConfirmPassword.error-block").css("display", "none");
        var password = $.trim($("#TxtPassword").val());
        if ($.trim($("#TxtConfirmPassword").val()) != password) {
            $("#SpnPasswordMisMatch.error-block").css("display", "inline-block");
        } else {
            $("#SpnPasswordMisMatch.error-block").css("display", "none");
        }
    } else {
        $("#SpnConfirmPassword.error-block").css("display", "none");
    }
}

//New Password OnBlur Function
function ValidateNewPassword() {
    var passwordRegEx = new RegExp($("#SpnRegPassword").data('val-validationexpression'));
    
    if ($.trim($("#TxtNewPassword").val()) == "") {
        $("#SpnPassword.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtNewPassword").val()) != "") {
        $("#SpnPassword.error-block").css("display", "none");
        var password = $.trim($("#TxtNewPassword").val());
        if (!passwordRegEx.test(password)) {
            $("#SpnRegPassword.error-block").css("display", "inline-block");
        } else {
            $("#SpnRegPassword.error-block").css("display", "none");
        }
    } else {
        $("#SpnPassword.error-block").css("display", "none");
    }
}

// Confirm New Password OnBlur Function
function ValidateConfirmNewPassword() {
    if ($.trim($("#TxtConfirmPassword").val()) == "") {
        $("#SpnConfirmPassword.error-block").css("display", "inline-block");
    } else if ($.trim($("#TxtConfirmPassword").val()) != "") {
        $("#SpnConfirmPassword.error-block").css("display", "none");
        var password = $.trim($("#TxtNewPassword").val());
        if ($.trim($("#TxtConfirmPassword").val()) != password) {
            $("#SpnPasswordMisMatch.error-block").css("display", "inline-block");
        } else {
            $("#SpnPasswordMisMatch.error-block").css("display", "none");
        }
    } else {
        $("#SpnConfirmPassword.error-block").css("display", "none");
    }
}

// Term&Condition OnBlur Function
$('#ChkTermCondition').change(function() {
    if ($("#ChkTermCondition").prop("checked") == false) {
        $("#SpnTermCondition.error-block").css("display", "inline-block");
    } else {
        $("#SpnTermCondition.error-block").css("display", "none");
    }
});

/* Enable Submit Button if Re-captcha is successful */
function enableSubmit() {
	if(window.location.href.indexOf("regisiki.html") > -1)
{
    document.getElementById("BtnRegister").disabled = false;
}
}

/* Disable Submit Button if Re-captcha expires */
function disableSubmit() {
    document.getElementById("BtnRegister").disabled = true;
}

/* Form Validation End */