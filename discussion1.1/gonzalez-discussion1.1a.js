<DOCTYPE! html> 
<html> 
<head></head> 
<body> 

<p id="Typing Speed"></p> 

<script> 

/*suggestion -- start with lowercasee for variables and start
with uppercase for Objects which is something that holds many variables of the same
data type */

var charactersTyped = 200; 
//no semicolon at end of statement
var TimeInMinutes = 1;     
var AvgCharPerWord = 5; 
//CharactersTyped changed to charactersTyped
var GrossWPM = (charactersTyped/AvgCharPerWord)/TimeInMinutes;  
//very tricky quotation mark changed and + sign changed to equal
document.getElementById("Typing Speed").innerHTML="Your Typing Speed Is:" +GrossWPM; 

//4 errors found

</script> 

</body> 
</html> 

