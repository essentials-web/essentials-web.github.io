function search(){
  var bar = document.getElementsByClassName("search").value;
  var result1 = document.getElementById("result1");
  var result2 = document.getElementById("result2");
  var result3 = document.getElementById("result3");
  var result4 = document.getElementById("result4");
  var result5 = document.getElementById("result5");
  if(bar == "Unit Converter Websites"){
    result1.href = "https://www.unitconverters.net/";
    result1.innerHTML = "Unit Converter";
  }
}
