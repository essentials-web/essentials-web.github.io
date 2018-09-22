/*
Copy & Paste:

currencyConvert("","",1)
*/
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
      if(one.val() == ""){
        one.append("<a href='https://www.unitconverters.net/'>Unit Converter</a>");
      } else if(one.val() == "<p>Fluid Ounces in one Gallon: 128 fl oz</p>" || one.val() == currencyConvert("usd","eur",1)){
        one.replaceWith("<a href='https://www.unitconverters.net/'>Unit Converter</a>");
      }
    } else if(bar.val() == "How Many Fluid Ounces In A Gallon" || bar.val() == "How Many Fluid Ounces In One Gallon" || bar.val() == "How Many Ounces In A Gallon" || bar.val() == "How Many Ounces In One Gallon" || bar.val() == "How many fluid ounces in a gallon" || bar.val() == "How many fl oz in a gallon" || bar.val() == "Amount of fl oz in a gallon" || bar.val() == "How many fl oz in one gal" || bar.val() == "Amount of fl oz in one gal" || bar.val() == "fl oz in one gal" || bar.val() == "How many fluid ounces in one gallon" || bar.val() == "How many ounces in a gallon" || bar.val() == "How many ounces in one gallon" || bar.val() == "how many fluid ounces in a gallon" || bar.val() == "how many fluid ounces in one gallon" || bar.val() == "how many ounces in a gallon" || bar.val() == "how many ounces in one gallon"){
      if(one.val() == ""){
        one.append("<p>Fluid Ounces in one Gallon: 128 fl oz</p>");
      } else if(one.val() == "<a href='https://www.unitconverters.net/'>Unit Converter</a>" || one.val() == currencyConvert("usd","eur",1)){
      	one.replaceWith("<p>Fluid Ounces in one Gallon: 128 fl oz</p>");
      }
    } else if(bar.val() == "USD To EUR" || bar.val() == "USD To Euro" || bar.val() == "US Dollar To Euro" || bar.val() == "United States Dollar To Euro" || bar.val() == "United states dollar to euro" || bar.val() == "usd to eur" || bar.val() == "usd to euro" || bar.val() == "us dollar to euro" || bar.val() == "united states dollar to euro"){
      if(one.val() == ""){
        one.append(currencyConvert("usd","eur",1));
      } else if(one.val() == "<a href='https://www.unitconverters.net/'>Unit Converter</a>" || one.val() == "<p>Fluid Ounces in one Gallon: 128 fl oz</p>"){
        one.replaceWith(currencyConvert("usd","eur",1));
      }
    } else if(bar.val() == "USD To SGD" || bar.val() == "USD To Singapore Dollar" || bar.val() == "US Dollar To Singapore Dollar" || bar.val() == "United States Dollar To Singapore Dollar" || bar.val() == "United states dollar to singapore dollar" || bar.val() == "usd to sgd" || bar.val() == "usd to singapore dollar" || bar.val() == "us dollar to singapore dollar" || bar.val() == "united states dollar to singapore dollar"){
      if(one.val() == ""){
        one.append(currencyConvert("usd","sgd",1));
      } else if(one.val() == "<a href='https://www.unitconverters.net/'>Unit Converter</a>" || one.val() == "<p>Fluid Ounces in one Gallon: 128 fl oz</p>"){
        one.replaceWith(currencyConvert("usd","sgd",1));
      }
    }
    function currencyConvert(curr1, curr2, amount){
      if(curr1 == "usd" && curr2 == "eur"){
        var final = amount * 0.85;
        var fstring = final.toString();
        return results.html("<p>1 USD = " + fstring + " EUR.</p>");
      } else if(curr1 == "usd" && curr2 == "gbp"){
        var final = amount * 0.77;
        var fstring = final.toString();
        return results.html("<p>1 USD = " + fstring + " GBP.</p>");
      } else if(curr1 == "usd" && curr2 == "inr"){
        var final = amount * 72.33;
        var fstring = final.toString();
        return results.html("<p>1 USD = " + fstring + " INR.</p>");
      } else if(curr1 == "usd" && curr2 == "cad"){
        var final = amount * 1.29;
        var fstring = final.toString();
        return results.html("<p>1 USD = " + fstring + " CAD.</p>");
      } else if(curr1 == "usd" && curr2 == "aud"){
        var final = amount * 1.37;
        var fstring = final.toString();
        return results.html("<p>1 USD = " + fstring + " AUD.</p>");
      } else if(curr1 == "usd" && curr2 == "sgd"){
        var final = amount * 1.37;
        var fstring = final.toString();
        return results.html("<p>1 USD = " + fstring + " SGD.</p>");
      }
    };
  });
});
