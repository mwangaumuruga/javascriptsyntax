//used to interact with browser creating objects with methods for the browser
//WINDOW OBJECT
window.alert("this prints an ok button with a message as an elert" );
window.confirm("ok and cancel button");
window.prompt("ask user for input");
window.open("opens new window");
window.close("closes current window");
window.setTimeout("sets a  standbycounter and carries out action after specified period of time");

//HISTORY OBJECT
//used to move to the urls visited back go and forward represent as an array
window.history.back(-2);//moves two pages backwards


//NAVIGATOR OBJECT 
//used to show browser information 
navigator.cookieEnabled //has many more info


//SCREEN OBJECT
//used to return information about device screen
screen.width;
screen.availHeight;
screen.colorDepth;
screen.pixelDepth;


//DOCUMENT OBJECT
//dynamicall access and update document structure and style of document
//<input  type="button" onclick="printvalue()"id ="23"
getElementById("23").value;
document.form1.name.value;//we can use name id tagname classname
