$(function(){
  var bar = $(".search");
  var results = $("#results");
  var one = $("#result1");
  var two = $("#result2");
  var three = $("#result3");
  var four = $("#result4");
  var five = $("#result5");
  var onea = $("#res1");
  var twoa = $("#res2");
  var threea = $("#res3");
  var foura = $("#res4");
  var fivea = $("#res5");
  $(".submit").click(function(){
    if(bar.val() == "Unit Converter Websites" || bar.val() == "Unit Converter Website" || bar.val() == "Unit Converters" || bar.val() == "Unit Converter" || bar.val() == "Unit converter websites" || bar.val() == "Unit converter website" || bar.val() == "Unit converters" || bar.val() == "Unit converter" || bar.val() == "unit converter websites" || bar.val() == "unit converter website" || bar.val() == "unit converters" || bar.val() == "unit converter"){
      if(one.val() == ""){
        one.append("<a href='https://www.unitconverters.net/' id='res1'>Unit Converter</a>");
      } else if(one.val() == "<p id='res1'>Fluid Ounces in one Gallon: 128 fl oz</p>" || one.val() == currencyConvert("usd","eur",1)){
        onea.remove();
        one.append("<a href='https://www.unitconverters.net/' id='res1'>Unit Converter</a>");
      }
    } else if(bar.val() == "How Many Fluid Ounces In A Gallon" || bar.val() == "How Many Fluid Ounces In One Gallon" || bar.val() == "How Many Ounces In A Gallon" || bar.val() == "How Many Ounces In One Gallon" || bar.val() == "How many fluid ounces in a gallon" || bar.val() == "How many fl oz in a gallon" || bar.val() == "Amount of fl oz in a gallon" || bar.val() == "How many fl oz in one gal" || bar.val() == "Amount of fl oz in one gal" || bar.val() == "fl oz in one gal" || bar.val() == "How many fluid ounces in one gallon" || bar.val() == "How many ounces in a gallon" || bar.val() == "How many ounces in one gallon" || bar.val() == "how many fluid ounces in a gallon" || bar.val() == "how many fluid ounces in one gallon" || bar.val() == "how many ounces in a gallon" || bar.val() == "how many ounces in one gallon"){
      if(one.val() == ""){
        one.append("<p id='res1'>Fluid Ounces in one Gallon: 128 fl oz</p>");
      } else if(one.val() == "<a href='https://www.unitconverters.net/' id='res1'>Unit Converter</a>" || one.val() == currencyConvert("usd","eur",1)){
      	onea.remove();
        one.append("<p id='res1'>Fluid Ounces in one Gallon: 128 fl oz</p>");
      }
    } else if(bar.val() == "USD To EUR" || bar.val() == "USD To Euro" || bar.val() == "US Dollar To Euro" || bar.val() == "United States Dollar To Euro" || bar.val() == "United states dollar to euro" || bar.val() == "usd to eur" || bar.val() == "usd to euro" || bar.val() == "us dollar to euro" || bar.val() == "united states dollar to euro"){
      if(one.val() == ""){
        one.append(currencyConvert("usd","eur","1"));
      } else if(one.val() == "<a href='https://www.unitconverters.net/' id='res1'>Unit Converter</a>" || one.val() == "<p>Fluid Ounces in one Gallon: 128 fl oz</p>"){
        onea.remove();
        one.append(currencyConvert("usd","eur","1"));
      }
    }
    function currencyConvert(curr1, curr2, amount){
      if(curr1 == "usd" && curr2 == "eur" && amount == "1"){
        return one.html("<p id='res1'>1 USD = 0.85 EUR.</p>");
      } else if(curr1 == "usd" && curr2 == "gbp" && amount == "1"){
        return one.html("<p id='res1'>1 USD = 0.76 GBP.</p>");
      } else if(curr1 == "usd" && curr2 == "inr" && amount == "1"){
        return one.html("<p id='res1'>1 USD = 72.24 INR.</p>");
      } else if(curr1 == "usd" && curr2 == "cad" && amount == "1"){
        return one.html("<p id='res1'>1 USD = 1.29 CAD.</p>");
      } else if(curr1 == "usd" && curr2 == "aud" && amount == "1"){
        return one.html("<p id='res1'>1 USD = 1.37 AUD.</p>");
      } else if(curr1 == "usd" && curr2 == "sgd" && amount == "1"){;
        return one.html("<p id='res1'>1 USD = 1.36 SGD.</p>");
      } else if(curr1 == "usd" && curr2 == "eur" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 1.70 EUR.</p>");
      } else if(curr1 == "usd" && curr2 == "gbp" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 1.52 GBP.</p>");
      } else if(curr1 == "usd" && curr2 == "inr" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 144.48 INR.</p>");
      } else if(curr1 == "usd" && curr2 == "cad" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 2.59 CAD.</p>");
      } else if(curr1 == "usd" && curr2 == "aud" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 2.74 AUD.</p>");
      } else if(curr1 == "usd" && curr2 == "sgd" && amount == "2"){;
        return one.html("<p id='res1'>2 USD = 2.73 SGD.</p>");
      }
    };
  });
});
