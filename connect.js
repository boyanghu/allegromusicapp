// JavaScript Document for Front and Back transactions

function pageInit(){
  // displays all items to the main page
  displayAllItem();	
  
  // create basket view for the right side bar
}


function displayAllItem()
{ 
if (window.XMLHttpRequest)
  {// initialize a request for modern browsers
  xmlhttp=new XMLHttpRequest();
  }
else
  {// initialize a request for internet explorer, cuz ie is soooo awesome!
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("main_center").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","getAllItem.php",true);
xmlhttp.send();
}