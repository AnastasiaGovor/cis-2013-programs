var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = parseFloat(floatAge * 365.25);
     intWeeks = parseInt(floatDays/7);
     floatMonths = parseFloat(floatAge * 12);
     intFortnights = parseInt(floatDays /14);
     alert("Age in days = " + floatDays + "\n" + "Age in weeks = " + intWeeks + "\n" +  "Age in months = " + floatMonths + "\n" + "Age in Fortnights = " + intFortnights);
