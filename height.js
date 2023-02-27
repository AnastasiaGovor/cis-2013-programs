var $ = function (id) 
{
    return document.getElementById(id);
}


/*
 *start
   declare floatHeightInFt, intHeightInCm
   get floatHeightInFt
   calculate intHeightInCm = floatHeightInFt * 30.48
   output intHeightInCm
  end
*/
 var calculate = function()
 {
    var  floatHeightInFt, intHeightInCm;
    floatHeightInFt = $("height_in_ft").value;
    
    intHeightInCm =  floatHeightInFt * 30.48
    
    $("height_in_cm").value = intHeightInCm;


    
 }
 
 window.onload = function () 
{
    $("height_in_ft").value = "";
    $("height_in_cm").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}