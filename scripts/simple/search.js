$(function(){
  var bar = $(".search");
  var results = $("#results");
  var one = $("#result1");
  var two = $("#result2");
  var three = $("#result3");
  var four = $("#result4");
  var five = $("#result5");
  $(".submit").click(function(){
    if(bar.val() == "Unit Converter Websites" || bar.val() == "Unit Converter Website" || bar.val() == "Unit Converters" || bar.val() == "Unit Converter" || bar.val() == "Unit converter websites" || bar.val() == "Unit converter website" || bar.val() == "Unit converters" || bar.val() == "Unit converter" || bar.val() == "unit converter websites" || bar.val() == "unit converter website" || bar.val() == "unit converters" || bar.val() == "unit converter"){
      if(one.length == 0){
        if(one.val() == "Fluid Ounces in one Gallon: 128"){
          one.replaceWith("<a href='https://www.unitconverters.net/' id='result1'>Unit Converter</a><br>");
        } else {
          results.append("<a href='https://www.unitconverters.net/' id='result1'>Unit Converter</a><br>");
        }
      } else if(one.length > 0){
      	console.log("Element already exists.");
      }
    } else if(bar.val() == "How Many Fluid Ounces In A Gallon" || bar.val() == "How Many Fluid Ounces In One Gallon" || bar.val() == "How Many Ounces In A Gallon" || bar.val() == "How Many Ounces In One Gallon" || bar.val() == "How many fluid ounces in a gallon" || bar.val() == "How many fl oz in a gallon" || bar.val() == "Amount of fl oz in a gallon" || bar.val() == "How many fl oz in one gal" || bar.val() == "Amount of fl oz in one gal" || bar.val() == "fl oz in one gal" || bar.val() == "How many fluid ounces in one gallon" || bar.val() == "How many ounces in a gallon" || bar.val() == "How many ounces in one gallon" || bar.val() == "how many fluid ounces in a gallon" || bar.val() == "how many fluid ounces in one gallon" || bar.val() == "how many ounces in a gallon" || bar.val() == "how many ounces in one gallon"){
      if(one.length == 0){
        if(one.val() == "Unit Converter" && one.attr("href") == "https://www.unitconverters.net/"){
          one.replaceWith("<p id='result1'>Fluid Ounces in one Gallon: 128</p>");
        } else {
          results.append("<p id='result1'>Fluid Ounces in one Gallon: 128</p>");
        }
      } else if(one.length > 0){
      	console.log("Element already exists.");
      }
    }
    function currencyConvert(curr1, curr2, amount){
      if(curr1 == "usd" && curr2 == "eur"){
        return amount * 0.852493;
      } else if(curr1 == "usd" && curr2 == "gbp"){
        return amount * 0.765771;
      } else if(curr1 == "usd" && curr2 == "inr"){
        return amount * 72.3271;
      } else if(curr1 == "usd" && curr2 == "cad"){
        return amount * 1.29302;
      } else if(curr1 == "usd" && curr2 == "aud"){
        return amount * 1.37258;
      } else if(curr1 == "usd" && curr2 == "sgd"){
        return amount * 1.36628;
      }
    }
  });
});
