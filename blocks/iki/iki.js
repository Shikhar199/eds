var currenturl=window.location.href.split('?')[0];
var localstorageindustries;
var localstorgaeservices;
var localstorgecontent;
let Industryunique = [];
let serviceUnique = [];
let contentUnique = [];
let emailIDOnLOad ;

$(document).ready(function () {


let industryContainer = document.querySelectorAll(".industry .pill-container input");
let technologyContainer = document.querySelectorAll(".technology .pill-container input");
let assettypeContainer = document.querySelectorAll(".assettype .pill-container input");
let industries="";
let technologies="";
let assettypes="";

let regex = /|/g;
emailIDOnLOad= localStorage.getItem("emailID");
let queryString=window.location.search;
const urlParams = new URLSearchParams(queryString);

console.log("inside document ready");

if(emailIDOnLOad != null){
let splitIndustries = localStorage.getItem("industryPref").split("|");
let splitTechnology =  localStorage.getItem("servicePref").split("|");
let splitContent = localStorage.getItem("contentTypePref").split("|");

localstorageindustries = splitIndustries !=null ? splitIndustries :null;
localstorgaeservices = splitTechnology !=null ? splitTechnology :null;
localstorgecontent =  splitContent !=null ? splitContent :null;





console.log("inside local storage industries");
if(!urlParams.has('industry') && !urlParams.has('technology') && !urlParams.has('assettype') ){

if(localstorageindustries!="" && localstorgaeservices=="" && localstorgecontent==""){
window.location=currenturl+"?industry="+localstorageindustries;
}


else if(localstorgecontent!="" && localstorageindustries=="" && localstorgaeservices=="")
{
window.location=currenturl+"?assetType="+localstorgecontent;
}
else if(localstorageindustries!="" && localstorgaeservices!="" && localstorgecontent=="")
{
window.location=currenturl+"?industry="+localstorageindustries+"&technology="+localstorgaeservices;
}
else if(localstorageindustries!="" && localstorgecontent!="" && localstorgaeservices=="")
{
window.location=currenturl+"?industry="+localstorageindustries+"&assetType="+localstorgecontent;
}
else if(localstorgecontent!="" && localstorgaeservices!="" && localstorageindustries=="")
{
window.location=currenturl+"?assetType="+localstorgecontent+"&technology="+localstorgaeservices;
}
else if(localstorageindustries!="" && localstorgaeservices!="" && localstorgecontent!="")
{
window.location=currenturl+"?industry="+localstorageindustries+"&technology="+localstorgaeservices+"&assetType="+localstorgecontent;
}
}

}



$('.btn-modify,.filter-subheading,.btn-exp').click(function(){

	
let industryContainer = document.querySelectorAll(".industry .pill-container input");
let technologyContainer = document.querySelectorAll(".technology .pill-container input");
let assettypeContainer = document.querySelectorAll(".assettype .pill-container input");
let industryPref;
let servicePref;
let contentTypePref;
let localStorageIndustry;
let localStorageService ;
let localStorageContent;
if (window.location.href.indexOf("industry") > -1) { 

industryPref = getUrlParameter('industry').split(',');
}
if (window.location.href.indexOf("technology") > -1) {
servicePref  = getUrlParameter('technology').split(',');
}
if (window.location.href.indexOf("assetType") > -1) {
contentTypePref = getUrlParameter('assetType').split(',');

}

var mailID = localStorage.getItem("emailID");


if(mailID  != "" ){
if (window.location.href.indexOf("industry") > -1) { 
industryPref.forEach(elementPref => {
industryContainer.forEach(element=>{

if(elementPref === element.value ){
	 element.checked = true;
	}

});
});

}
if (window.location.href.indexOf("technology") > -1) {

servicePref.forEach(elementPref => {
technologyContainer.forEach(element=>{

if(elementPref === element.value ){

	 element.checked = true;
	}
});
});

}

if (window.location.href.indexOf("assetType") > -1) {


contentTypePref.forEach(elementPref => {
assettypeContainer.forEach(element=>{

if(elementPref === element.value ){
	 element.checked = true;

	}
});
});


}
}

});

$('.btn-apply').click(function() {
	

	


/*
var ATIndustryIKIProfileArr = [];
var ATServicesIKIProfileArr = [];
var ATAssetIKIProfileArr = [];
*/
industryContainer.forEach(element => {

if (element.checked == true) {
 if (Industryunique.indexOf(element.value) == -1) {
Industryunique.push(element.value);
industries = Industryunique;
 }

}
if (element.checked == false) {
	var valueRemoveIndustry = Industryunique.indexOf(element.value) 
		  if (valueRemoveIndustry > -1) {
        Industryunique.splice(valueRemoveIndustry, 1);
	
industries = Industryunique;
    }
}

});


technologyContainer.forEach(element => {

	if (element.checked == true) {
		if (serviceUnique.indexOf(element.value) == -1) {
serviceUnique.push(element.value);
technologies= serviceUnique;
}
	}
	if (element.checked == false) {
	var valueRemoveTechnology = serviceUnique.indexOf(element.value) 
		  if (valueRemoveTechnology > -1) {
        serviceUnique.splice(valueRemoveTechnology, 1);
	
technologies= serviceUnique;
    }

}	

	

});
		
assettypeContainer.forEach(element => {

	if (element.checked == true) {
		if (contentUnique.indexOf(element.value) == -1) {
contentUnique.push(element.value);
assettypes = contentUnique;

	}
	}
	if (element.checked == false) {
	var valueRemoveAsset = contentUnique.indexOf(element.value) 
		  if (valueRemoveAsset > -1) {
        contentUnique.splice(valueRemoveAsset, 1);
	
assettypes = contentUnique;
    }

}	
			

});
		

	
	
var ATIndustryIKIProfileArr = [];
var ATServicesIKIProfileArr = [];
var ATAssetIKIProfileArr = [];
//alert(industries);
if(industries != ""){
	var ATIndustryIKIProfile = String(industries);
	var ATIndustryIKIProfileArr = ATIndustryIKIProfile.split(',');
}
if(technologies != ""){
	var ATServicesIKIProfile = String(technologies);
	var ATServicesIKIProfileArr = ATServicesIKIProfile.split(',');
}	
if(assettypes != ""){
	var ATAssetIKIProfile = String(assettypes);
	var ATAssetIKIProfileArr = ATAssetIKIProfile.split(',');
}
//alert(ATAssetIKIProfileArr[0]);
/* window.adobeDataLayer.push({
	"event":"filter selection",
	"filter_selection_industry":ATIndustryIKIProfileArr, // selected values from the industries dropdown
	"filter_selection_services":ATServicesIKIProfileArr, // selected values from the services dropdown
	"filter_selection_assettypes":ATAssetIKIProfileArr // selected values from the asset dropdown
});		
	 */
	
	
	

var currenturl;
if(window.location.href.split('?')[0].includes("#")){
	 currenturl = "/iki/explore.html"
}
else{
currenturl=window.location.href.split('?')[0];
 if (window.location.href.indexOf("iki.html") > -1) {
	 currenturl = "/iki/explore.html"
}
}
if(industries!="" && technologies=="" && assettypes==""){
window.location=currenturl+"?industry="+industries;
}
else if(technologies!="" && industries=="" && assettypes=="")
{
window.location=currenturl+"?technology="+technologies;
}
else if(assettypes!="" && industries=="" && technologies=="")
{
window.location=currenturl+"?assetType="+assettypes;
}
else if(industries!="" && technologies!="" && assettypes=="")
{
window.location=currenturl+"?industry="+industries+"&technology="+technologies;
}
else if(industries!="" && assettypes!="" && technologies=="")
{
window.location=currenturl+"?industry="+industries+"&assetType="+assettypes;
}
else if(assettypes!="" && technologies!="" && industries=="")
{
window.location=currenturl+"?assetType="+assettypes+"&technology="+technologies;
}
else if(industries!="" && technologies!="" && assettypes!="")
{
window.location=currenturl+"?industry="+industries+"&technology="+technologies+"&assetType="+assettypes;
}
else if(technologies=="" && industries=="" && assettypes=="")
{
window.location=currenturl;
}
});

$('.icon-cross,.badge-dark').click(function(event) { 
let industries="";
let technologies="";
let assettypes="";

 Industryunique = [];
 serviceUnique = [];
 contentUnique = [];

  var parentElement = $(this).parent().clone();
      parentElement.children('span').remove()
      var valueElement = parentElement.text().trim(); 
let pillInfo = document.querySelectorAll(".badge.badge-dark.indus");
let pillInfoTech = document.querySelectorAll(".badge.badge-dark.tech");
let pillInfoAsset = document.querySelectorAll(".badge.badge-dark.asset");
for (let i = 0; i < pillInfo.length; i++) {

Industryunique.push(pillInfo[i].innerText);
industries = Industryunique;



if(pillInfo[i].innerText == valueElement){
	var IndexIndustry = Industryunique.indexOf(valueElement);
 Industryunique.splice(IndexIndustry,1);
 industries = Industryunique;


}

}
for (let i = 0; i < pillInfoTech.length; i++) {

serviceUnique.push(pillInfoTech[i].innerText);
technologies = serviceUnique;



if(pillInfoTech[i].innerText == valueElement){
	var IndexService = serviceUnique.indexOf(valueElement);
 serviceUnique.splice(IndexService,1);
 technologies = serviceUnique;


}

}
for (let i = 0; i < pillInfoAsset.length; i++) {

contentUnique.push(pillInfoAsset[i].innerText);
assettypes = contentUnique;



if(pillInfoAsset[i].innerText == valueElement){
	var IndexAsset = contentUnique.indexOf(valueElement);
 contentUnique.splice(IndexAsset,1);
 assettypes = contentUnique;


}

}
var currenturl;
if(window.location.href.split('?')[0].includes("#")){
currenturl=window.location.href.split('?')[0].slice(0, -1);
}
else{
currenturl=window.location.href.split('?')[0];

}

if(industries!="" && technologies=="" && assettypes==""){
window.location=currenturl+"?industry="+industries;
}
else if(technologies!="" && industries=="" && assettypes=="")
{
window.location=currenturl+"?technology="+technologies;
}
else if(assettypes!="" && industries=="" && technologies=="")
{
window.location=currenturl+"?assetType="+assettypes;
}
else if(industries!="" && technologies!="" && assettypes=="")
{
window.location=currenturl+"?industry="+industries+"&technology="+technologies;
}
else if(industries!="" && assettypes!="" && technologies=="")
{
window.location=currenturl+"?industry="+industries+"&assetType="+assettypes;
}
else if(assettypes!="" && technologies!="" && industries=="")
{
window.location=currenturl+"?assetType="+assettypes+"&technology="+technologies;
}
else if(industries!="" && technologies!="" && assettypes!="")
{
window.location=currenturl+"?industry="+industries+"&technology="+technologies+"&assetType="+assettypes;
}

else if(industries =="" && technologies =="" && assettypes =="")
{
window.location=currenturl.split("?");
}

});


});



$('.btn-outline-white').click(function() {    



let emailIDUser = localStorage.getItem("emailID");

if(emailIDUser != "" && emailIDUser != null){


let industryPrefLocal;
let servicePrefLocal;
let contentTypePrefLocal;

if (window.location.href.indexOf("industry") > -1) { 
let regex = /,/g;
industryPrefLocal = getUrlParameter('industry').replace(regex, "|");
}
else{
	industryPrefLocal = "";
}
if(window.location.href.indexOf("technology") > -1) {
	let regex = /,/g;
 servicePrefLocal = getUrlParameter('technology').replace(regex, "|");
}
else{
	servicePrefLocal = "";
}
if (window.location.href.indexOf("assetType") > -1) {
	let regex = /,/g;

 contentTypePrefLocal = getUrlParameter('assetType').replace(regex, "|");
}
else{
	contentTypePrefLocal = ""
}


let regex = /,/g;

		   var jsonString = {
                     "email":emailIDUser,
			  "industryPref" : industryPrefLocal,
				"servicePref" : servicePrefLocal,
				"contentTypePref" : contentTypePrefLocal
                }

		$.ajax({
			 url :'/content/infosys-web/en/resource-type-servlets/userpreferences-table-servlet.save.preferences',
			 type :"POST",
			 contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			  data :{ 
			  "email":emailIDUser,
			  "industryPref" : industryPrefLocal,
				"servicePref" : servicePrefLocal,
				"contentTypePref" : contentTypePrefLocal
			  },
		success : function(result) {
	  
		if(emailIDUser != "" &&  result != ""){

				localStorage.setItem("industryPref",industryPrefLocal);
				localStorage.setItem("servicePref",servicePrefLocal);
				localStorage.setItem("contentTypePref",contentTypePrefLocal);
				const box = document.getElementById('perference');
				 box.style.display = 'block';
				 setTimeout(() => {
//const preferenceSuccess = document.getElementById('perference');
	    $("#perference").fadeOut(8000);
$('#preferenceBtn').prop('disabled', true);
//preferenceSuccess.style.visibility = 'hidden';

},);
 
}



		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log(thrownError);
		}
	});
	
}
else{
 setTimeout(() => {
const preference = document.getElementById('perferencelogin');
	
preference.style.visibility = 'hidden';
}, 1000);
location.href = "/loginiki.html";
}


});
function GetLoadMoreArticles() {

var currentItemsCount=0;
let industry = getUrlParameter('industry');
let technology = getUrlParameter('technology');
let assettype = getUrlParameter('assettype');
let topic =  getUrlParameter('topic');
// let currentItemsCount = document.getElementById("list-items1").firstElementChild.children.length+document.getElementById("list-items2").firstElementChild.children.length+document.getElementById("list-items3").firstElementChild.children.length;
let rooturl =   $('#hiddenrooturl').val();
let showmorecount =   $('#hiddenshowmorecount').val();
let excludepaths =  $('#hiddenexcludePaths').val();
if(document.getElementById("list-items1").hasChildNodes()){
	currentItemsCount+=document.getElementById("list-items1").firstElementChild.children.length
}
if(document.getElementById("list-items2").hasChildNodes()){
	currentItemsCount+=document.getElementById("list-items2").firstElementChild.children.length
}
if(document.getElementById("list-items3").hasChildNodes()){
	currentItemsCount+=document.getElementById("list-items3").firstElementChild.children.length
}

var queryURL="/bin/infosys/ikilisting?RootSearchUrl="+rooturl+"&currentItemsCount="+currentItemsCount;
if(excludepaths!=""){
		queryURL+="&excludePaths="+excludepaths;
}
if(industry!=null){
	queryURL+="&industry="+industry;
}
if(technology!=null){
	queryURL+="&technology="+technology;
}
if(topic!=null){
	queryURL+="&topic="+topic;
}
if(assettype!=null){
	queryURL+="&assetType="+assettype;
}
if(showmorecount!=null){
	queryURL+="&showmorecount="+showmorecount;
}

// queryURL="/bin/infosys/ikilisting?RootSearchUrl="+rooturl+"&currentItemsCount="+currentItemsCount+"&industry="+industry+"&technology="+technology+"&assetType="+assettype+"&topic="+topic+";
$.ajax({
	contentType: "application/json; charset=utf-8",
	url: queryURL,
	dataType: "json",
	processData: true,                  
	success: function (responseData) {
		resData = responseData;
	   insertArticleHTML(resData); //insert the child elements on load more    
	},
	error: function (xhr, ajaxOptions, thrownError) {
	}
});
return false;
}
var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = window.location.search.substring(1),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

for (i = 0; i < sURLVariables.length; i++) {
	sParameterName = sURLVariables[i].split('=');
	if (sParameterName[0] === sParam) {
		return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	}
}
};
function insertArticleHTML(resData) {

var pageObjs = JSON.parse(resData);
if(pageObjs.length>0 && pageObjs[1].hasOwnProperty('showmore')){
if(!pageObjs[1].showmore){
document.getElementById("showmorebutton").hidden=true;
}}
if(pageObjs.length==0){
	document.getElementById("showmorebutton").hidden=true;
}
var listitems=$(".listingitems .recommended-main");
for(i=0;i<pageObjs.length;i++)
{
	var path = pageObjs[i].path.replace("/content/infosys-web/en", "");
	var title=pageObjs[i].title != null ? pageObjs[i].title : "" ;
	var description = pageObjs[i].description!=null ? pageObjs[i].description : "";
	var ikispantime =  pageObjs[i].ikispantime !=null ? pageObjs[i].ikispantime +' min read' : "";
	var assettype =  pageObjs[i].assettype !=null ? pageObjs[i].assettype :"";   
	var articleImage =  pageObjs[i].articleImage!=null ? pageObjs[i].articleImage: ""; 
	var ikiauthors=pageObjs[i].ikiauthors!=null ? 'By '+ pageObjs[i].ikiauthors : "";
	var articleDate  = pageObjs[i].articleDate!=null ? pageObjs[i].articleDate : "" ;
	var HTML ='<li>'+
				 '   <div class="recommended-article">'+
						'<div class="recommended-image">'+
						   ' <a href="'+ path+ '" class="home-overlay" title="'+ title+ '">'+
							  '  <img src="'+articleImage+ '" alt="" class="img-fluid">'+
							  '  <span class="timer">'+ikispantime+'</span>'+
						   ' </a>'+
						'</div>'+
					   ' <div class="sub-article">'+
						   ' <h5 class="article-heading">'+
							   ' <a href="'+ path+ '" title="'+ title+ '">'+assettype+'</a>'+
							'</h5>'+
						   ' <p class="article-highlights">'+
							   ' <a href="'+ path+ '" class="title-link" title="'+ title+ '">'+title+'</a>'+
							'</p>'+
							'<p class="article-text">'+description+'</p>'+
							'<div class="date-wraper">'+
							   ' <div class="date">'+articleDate+
								'</div>';
								if(ikiauthors !=""){
							HTML+= '<div class="author">'+ ikiauthors+'</div>';}
							HTML+='</div> </div></div></li>';
	listitems.append(HTML);
}
}
function hideOptions(){
var collapse=$('.hideoption').removeClass('show');
}