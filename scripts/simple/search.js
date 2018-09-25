$(function(){
  var $clear = $(".clear");
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
  $clear.click(function(){
    one.html("");
  });
  $(".submit").click(function(){
    if(bar.val() == "USD To EUR" || bar.val() == "USD To Euro" || bar.val() == "US Dollar To Euro" || bar.val() == "United States Dollar To Euro" || bar.val() == "United states dollar to euro" || bar.val() == "usd to eur" || bar.val() == "usd to euro" || bar.val() == "us dollar to euro" || bar.val() == "united states dollar to euro"){
      if(one.val() === ""){
        one.append(currencyConvert("usd","eur","1"));
      } else if(one.val() == currencyConvert("usd","eur","2") || one.val() == unitConvert("bytes","kilobytes","1") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(currencyConvert("usd","eur","1"));
      }
    } else if(bar.val() == "USD To GBP" || bar.val() == "USD To Great British Pound" || bar.val() == "US Dollar To Great British Pound" || bar.val() == "United States Dollar To Great British Pound" || bar.val() == "United states dollar to great british pound" || bar.val() == "usd to gbp" || bar.val() == "usd to great british pound" || bar.val() == "us dollar to great british pound" || bar.val() == "united states dollar to great british pound"){
      if(one.val() === ""){
        one.append(currencyConvert("usd","gbp","1"));
      } else if(one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","eur","2") || one.val() == currencyConvert("usd","inr","1") || one.val() == currencyConvert("usd","aud","1") || one.val() == currencyConvert("usd","cad","1") || one.val() == currencyConvert("usd","sgd","1") || one.val() == unitConvert("bytes","kilobytes","1") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(currencyConvert("usd","gbp","1"));
      }
    } else if(bar.val() == "USD To INR" || bar.val() == "USD To Indian Rupee" || bar.val() == "US Dollar To Indian Rupee" || bar.val() == "United States Dollar To Indian Rupee" || bar.val() == "United states dollar to indian rupee" || bar.val() == "usd to inr" || bar.val() == "usd to indian rupee" || bar.val() == "us dollar to indian rupee" || bar.val() == "united states dollar to indian rupee"){
      if(one.val() === ""){
        one.append(currencyConvert("usd","inr","1"));
      } else if(one.val() == currencyConvert("usd","eur","2") || one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","gbp","1") || one.val() == currencyConvert("usd","aud","1") || one.val() == currencyConvert("usd","cad","1") || one.val() == currencyConvert("usd","sgd","1") || one.val() == unitConvert("bytes","kilobytes","1") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(currencyConvert("usd","inr","1"));
      }
    } else if(bar.val() == "USD To CAD" || bar.val() == "USD To Canadian Dollar" || bar.val() == "US Dollar To Canadian Dollar" || bar.val() == "United States Dollar To Canadian Dollar" || bar.val() == "United states dollar to canadian dollar" || bar.val() == "usd to cad" || bar.val() == "usd to canadian dollar" || bar.val() == "us dollar to canadian dollar" || bar.val() == "united states dollar to canadian dollar"){
      if(one.val() === ""){
        one.append(currencyConvert("usd","cad","1"));
      } else if(one.val() == currencyConvert("usd","eur","2") || one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","gbp","1") || one.val() == currencyConvert("usd","inr","1") || one.val() == currencyConvert("usd","aud","1") || one.val() == currencyConvert("usd","sgd","1") || one.val() == unitConvert("bytes","kilobytes","1") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(currencyConvert("usd","cad","1"));
      }
    } else if(bar.val() == "USD To AUD" || bar.val() == "USD To Australian Dollar" || bar.val() == "US Dollar To Australian Dollar" || bar.val() == "United States Dollar To Australian Dollar" || bar.val() == "United states dollar to australian dollar" || bar.val() == "usd to aud" || bar.val() == "usd to australian dollar" || bar.val() == "us dollar to australian dollar" || bar.val() == "united states dollar to australian dollar"){
      if(one.val() === ""){
        one.append(currencyConvert("usd","aud","1"));
      } else if(one.val() == currencyConvert("usd","eur","2") || one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","gbp","1") || one.val() == currencyConvert("usd","inr","1") || one.val() == currencyConvert("usd","cad","1") || one.val() == currencyConvert("usd","sgd","1") || one.val() == unitConvert("bytes","kilobytes","1") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(currencyConvert("usd","aud","1"));
      }
    } else if(bar.val() == "USD To SGD" || bar.val() == "USD To Singaporean Dollar" || bar.val() == "US Dollar To Singaporean Dollar" || bar.val() == "United States Dollar To Singaporean Dollar" || bar.val() == "United states dollar to singaporean dollar" || bar.val() == "usd to sgd" || bar.val() == "usd to singaporean dollar" || bar.val() == "us dollar to singaporean dollar" || bar.val() == "united states dollar to singaporean dollar"){
      if(one.val() === ""){
        one.append(currencyConvert("usd","sgd","1"));
      } else if(one.val() == currencyConvert("usd","eur","2") || one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","gbp","1") || one.val() == currencyConvert("usd","inr","1") || one.val() == currencyConvert("usd","aud","1") || one.val() == currencyConvert("usd","cad","1") || one.val() == unitConvert("bytes","kilobytes","1") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(currencyConvert("usd","sgd","1"));
      }
    } else if(bar.val() == "2 USD To EUR" || bar.val() == "2 USD To Euro" || bar.val() == "2 US Dollars To Euros" || bar.val() == "2 United States Dollars To Euros" || bar.val() == "2 United states dollars to euros" || bar.val() == "2 usd to eur" || bar.val() == "2 usd to euros" || bar.val() == "2 us dollars to euros" || bar.val() == "2 united states dollars to euros"){
      if(one.val() === ""){
        one.append(currencyConvert("usd","eur","2"));
      } else if(one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","gbp","1") || one.val() == currencyConvert("usd","inr","1") || one.val() == currencyConvert("usd","aud","1") || one.val() == currencyConvert("usd","cad","1") || one.val() == currencyConvert("usd","sgd","1") || one.val() == unitConvert("bytes","kilobytes","1") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(currencyConvert("usd","eur","2"));
      }
    } else if(bar.val() == "1 Byte To Kilobytes" || bar.val() == "1 Byte to kilobytes" || bar.val() == "1 byte to kilobytes" || bar.val() == "1 byte to kb"){
      if(one.val() === ""){
        one.append(unitConvert("bytes","kilobytes","1"));
      } else if(one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","gbp","1") || one.val() == currencyConvert("usd","inr","1") || one.val() == currencyConvert("usd","aud","1") || one.val() == currencyConvert("usd","cad","1") || one.val() == currencyConvert("usd","sgd","1") || one.val() == currencyConvert("usd","eur","2") || one.val() == unitConvert("gallon","flounce","1")){
        onea.remove();
        one.append(unitConvert("bytes","kilobytes","1"));
      }
    } else if(bar.val() == "1 Gallon To Fluid Ounces" || bar.val() == "1 Gallon to fluid ounces" || bar.val() == "1 gallon to fluid ounces" || bar.val() == "1 gal to fl oz"){
      if(one.val() === ""){
        one.append(unitConvert("gallon","flounce","1"));
      } else if(one.val() == currencyConvert("usd","eur","1") || one.val() == currencyConvert("usd","gbp","1") || one.val() == currencyConvert("usd","inr","1") || one.val() == currencyConvert("usd","aud","1") || one.val() == currencyConvert("usd","cad","1") || one.val() == currencyConvert("usd","sgd","1") || one.val() == currencyConvert("usd","eur","2") || one.val() == unitConvert("bytes","kilobytes","1")){
        onea.remove();
        one.append(unitConvert("gallon","flounce","1"));
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
      } else if(curr1 == "usd" && curr2 == "sgd" && amount == "1"){
        return one.html("<p id='res1'>1 USD = 1.36 SGD.</p>");
      } else if(curr1 == "usd" && curr2 == "eur" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 1.70 EUR.</p>");
      } else if(curr1 == "usd" && curr2 == "gbp" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 1.52 GBP.</p>");
      } else if(curr1 == "usd" && curr2 == "inr" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 144.48 INR.</p>");
      } else if(curr1 == "usd" && curr2 == "cad" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 2.58 CAD.</p>");
      } else if(curr1 == "usd" && curr2 == "aud" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 2.74 AUD.</p>");
      } else if(curr1 == "usd" && curr2 == "sgd" && amount == "2"){
        return one.html("<p id='res1'>2 USD = 2.72 SGD.</p>");
      } else if(curr1 == "usd" && curr2 == "eur" && amount == "3"){
        return one.html("<p id='res1'>3 USD = 2.55 EUR.</p>");
      } else if(curr1 == "usd" && curr2 == "gbp" && amount == "3"){
        return one.html("<p id='res1'>3 USD = 2.28 GBP.</p>");
      } else if(curr1 == "usd" && curr2 == "inr" && amount == "3"){
        return one.html("<p id='res1'>3 USD = 216.72 INR.</p>");
      } else if(curr1 == "usd" && curr2 == "cad" && amount == "3"){
        return one.html("<p id='res1'>3 USD = 3.87 CAD.</p>");
      } else if(curr1 == "usd" && curr2 == "aud" && amount == "3"){
        return one.html("<p id='res1'>3 USD = 4.11 AUD.</p>");
      } else if(curr1 == "usd" && curr2 == "sgd" && amount == "3"){
        return one.html("<p id='res1'>3 USD = 4.08 SGD.</p>");
      }
    }
    function unitConvert(unit1, unit2, amount){
      if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "1"){
        return one.html("<p id='res1'>1 Byte = 0.001 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "2"){
        return one.html("<p id='res1'>2 Bytes = 0.002 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "3"){
        return one.html("<p id='res1'>3 Bytes = 0.003 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "4"){
        return one.html("<p id='res1'>4 Bytes = 0.004 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "5"){
        return one.html("<p id='res1'>5 Bytes = 0.005 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "6"){
        return one.html("<p id='res1'>6 Bytes = 0.006 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "7"){
        return one.html("<p id='res1'>7 Bytes = 0.007 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "8"){
        return one.html("<p id='res1'>8 Bytes = 0.008 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "9"){
        return one.html("<p id='res1'>9 Bytes = 0.009 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "10"){
        return one.html("<p id='res1'>10 Bytes = 0.01 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "11"){
        return one.html("<p id='res1'>11 Bytes = 0.011 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "12"){
        return one.html("<p id='res1'>12 Bytes = 0.012 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "13"){
        return one.html("<p id='res1'>13 Bytes = 0.013 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "14"){
        return one.html("<p id='res1'>14 Bytes = 0.014 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "15"){
        return one.html("<p id='res1'>15 Bytes = 0.015 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "16"){
        return one.html("<p id='res1'>16 Bytes = 0.016 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "17"){
        return one.html("<p id='res1'>17 Bytes = 0.017 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "18"){
        return one.html("<p id='res1'>18 Bytes = 0.018 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "19"){
        return one.html("<p id='res1'>19 Bytes = 0.019 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "20"){
        return one.html("<p id='res1'>20 Bytes = 0.02 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "21"){
        return one.html("<p id='res1'>21 Bytes = 0.021 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "22"){
        return one.html("<p id='res1'>22 Bytes = 0.022 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "23"){
        return one.html("<p id='res1'>23 Bytes = 0.023 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "24"){
        return one.html("<p id='res1'>24 Bytes = 0.024 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "25"){
        return one.html("<p id='res1'>25 Bytes = 0.025 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "26"){
        return one.html("<p id='res1'>26 Bytes = 0.026 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "27"){
        return one.html("<p id='res1'>27 Bytes = 0.027 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "28"){
        return one.html("<p id='res1'>28 Bytes = 0.028 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "29"){
        return one.html("<p id='res1'>29 Bytes = 0.029 Kilobytes.</p>");
      } else if(unit1 == "bytes" && unit2 == "kilobytes" && amount == "30"){
        return one.html("<p id='res1'>30 Bytes = 0.03 Kilobytes.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "1"){
        return one.html("<p id='res1'>1 Gallon = 128 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "2"){
        return one.html("<p id='res1'>2 Gallons = 256 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "3"){
        return one.html("<p id='res1'>3 Gallons = 384 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "4"){
        return one.html("<p id='res1'>4 Gallons = 512 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "5"){
        return one.html("<p id='res1'>5 Gallons = 640 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "6"){
        return one.html("<p id='res1'>6 Gallons = 768 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "7"){
        return one.html("<p id='res1'>7 Gallons = 896 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "8"){
        return one.html("<p id='res1'>8 Gallons = 1,024 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "9"){
        return one.html("<p id='res1'>9 Gallons = 1,152 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "10"){
        return one.html("<p id='res1'>10 Gallons = 1,280 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "11"){
        return one.html("<p id='res1'>11 Gallons = 1,408 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "12"){
        return one.html("<p id='res1'>12 Gallons = 1,536 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "13"){
        return one.html("<p id='res1'>13 Gallons = 1,664 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "14"){
        return one.html("<p id='res1'>14 Gallons = 1,792 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "15"){
        return one.html("<p id='res1'>15 Gallons = 1,920 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "16"){
        return one.html("<p id='res1'>16 Gallons = 2,048 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "17"){
        return one.html("<p id='res1'>17 Gallons = 2,176 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "18"){
        return one.html("<p id='res1'>18 Gallons = 2,304 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "19"){
        return one.html("<p id='res1'>19 Gallons = 2,432 Fluid Ounces.</p>");
      } else if(unit1 == "gallon" && unit2 == "flounce" && amount == "20"){
        return one.html("<p id='res1'>20 Gallons = 2,560 Fluid Ounces.</p>");
      } else if(unit1 == "pound" && unit2 == "ounce" && amount == "1"){
        return one.html("<p id='res1'>1 Pound = 16 Ounces.</p>");
      } else if(unit1 == "pound" && unit2 == "ounce" && amount == "2"){
        return one.html("<p id='res1'>2 Pounds = 32 Ounces.</p>");
      } else if(unit1 == "pound" && unit2 == "ounce" && amount == "3"){
        return one.html("<p id='res1'>3 Pounds = 48 Ounces.</p>");
      } else if(unit1 == "pound" && unit2 == "ounce" && amount == "4"){
        return one.html("<p id='res1'>4 Pounds = 64 Ounces.</p>");
      } else if(unit1 == "ton" && unit2 == "ounce" && amount == "1"){
        return one.html("<p id='res1'>1 Ton = 32,000 Ounces.</p>");
      } else if(unit1 == "foot" && unit2 == "inch" && amount == "1"){
        return one.html("<p id='res1'>1 Foot = 12 Inches.</p>");
      } else if(unit1 == "yard" && unit2 == "foot" && amount == "1"){
        return one.html("<p id='res1'>1 Yard = 3 Feet.</p>");
      } else if(unit1 == "yard" && unit2 == "inch" && amount == "1"){
        return one.html("<p id='res1'>1 Yard = 36 Inches.</p>");
      } else if(unit1 == "mile" && unit2 == "inch" && amount == "1"){
        return one.html("<p id='res1'>1 Mile = 63,360 Inches.</p>");
      } else if(unit1 == "minute" && unit2 == "second" && amount == "1"){
        return one.html("<p id='res1'>1 Minute = 60 Seconds.</p>");
      } else if(unit1 == "year" && unit2 == "second" && amount == "1"){
        return one.html("<p id='res1'>1 Year = 31,556,952 Seconds.</p>");
      } else if(unit1 == "century" && unit2 == "second" && amount == "1"){
        return one.html("<p id='res1'>1 Century = 3,155,695,200 Seconds.</p>");
      } else if(unit1 == "decade" && unit2 == "second" && amount == "1"){
        return one.html("<p id='res1'>1 Decade = 315,569,520 Seconds.</p>");
      } else if(unit1 == "day" && unit2 == "second" && amount == "1"){
        return one.html("<p id='res1'>1 Day = 86,400 Seconds.</p>");
      } else if(unit1 == "week" && unit2 == "second" && amount == "1"){
        return one.html("<p id='res1'>1 Week = 604,800 Seconds.</p>");
      } else if(unit1 == "millenium" && unit2 == "second" && amount == "1"){
        return one.html("<p id='res1'>1 Millenium = 31,556,952,000 Seconds.</p>");
      } else if(unit1 == "byte" && unit2 == "terabyte" && amount == "1"){
        return one.html("<p id='res1'>1 Byte = 1,000,000,000,000 Terabytes.</p>");
      } else if(unit1 == "yard" && unit2 == "centimeter" && amount == "1"){
        return one.html("<p id='res1'>1 Yard = 91.440000000001 Centimeters.</p>");
      } else if(unit1 == "chain" && unit2 == "angstrom" && amount == "1"){
        return one.html("<p id='res1'>1 Chain = 201,168,000,000 Angstroms.</p>");
      } else if(unit1 == "gigameter" && unit2 == "angstrom" && amount == "1"){
        return one.html("<p id='res1'>1 Gigameter = 10,000,000,000,000,000,000 Angstroms.</p>");
      } else if(unit1 == "furlong" && unit2 == "angstrom" && amount == "1"){
        return one.html("<p id='res1'>1 Furlong = 2,011,680,000,000 Angstroms.</p>");
      } else if(unit1 == "hand" && unit2 == "angstrom" && amount == "1"){
        return one.html("<p id='res1'>1 Hand = 1,016,000,000 Angstroms.</p>");
      } else if(unit1 == "hectometer" && unit2 == "angstrom" && amount == "1"){
        return one.html("<p id='res1'>1 Hectometer = 1,000,000,000,000 Angstroms.</p>");
      }
    }
  });
});
