$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");

function getsummary(){
	console.log("get summary")
  fetch(`https://corona.lmao.ninja/countries/india`)
  .then(response => {
   // console.log(response)
    return response.json()})
  .then(data => {
    console.log(data)
    document.getElementById("confirmed_cases").innerHTML = data.cases
    document.getElementById("recovered_cases").innerHTML = data.recovered
    document.getElementById("deaths").innerHTML = data.deaths
    // document.getElementById("sales_amount").innerHTML = "₹ " + data.salesamount
    
 
 })
  .catch(err => console.log(err))

}

getsummary()
  
  
// document ready  
});


// window.onload = function() {
// console.log("window is loaded");
  
   
// };