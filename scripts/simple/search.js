$(function(){
  var bar = $(".search");
  $(".submit").click(function(){
    if(bar.val() == "Unit Converter Websites" || bar.val() == "Unit Converter Website" || bar.val() == "Unit Converters" || bar.val() == "Unit Converter" || bar.val() == "Unit converter websites" || bar.val() == "Unit converter website" || bar.val() == "Unit converters" || bar.val() == "Unit converter" || bar.val() == "unit converter websites" || bar.val() == "unit converter website" || bar.val() == "unit converters" || bar.val() == "unit converter"){
      $("#results").append("<a href='https://www.unitconverters.net/'>Unit Converter</a><br>");
    }
  });
});
