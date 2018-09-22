$(function(){
  var bar = $(".search");
  var results = $("#results");
  var aaaa = $("#result1").length;
  $(".submit").click(function(){
    if(bar.val() == "Unit Converter Websites" || bar.val() == "Unit Converter Website" || bar.val() == "Unit Converters" || bar.val() == "Unit Converter" || bar.val() == "Unit converter websites" || bar.val() == "Unit converter website" || bar.val() == "Unit converters" || bar.val() == "Unit converter" || bar.val() == "unit converter websites" || bar.val() == "unit converter website" || bar.val() == "unit converters" || bar.val() == "unit converter"){
      if(aaaa == 0){
        results.append("<a href='https://www.unitconverters.net/' id='result1'>Unit Converter</a><br>");
      } else if(aaaa > 0){
      	console.log("Element already exists.");
      }
    }
  });
});
