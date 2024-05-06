function updatemenu() {
  var menu = document.getElementById('menu');
  if (document.getElementById('responsive-menu').checked == true) {
      menu.style.borderBottomRightRadius = '0';
      menu.style.borderBottomLeftRadius = '0';
  } else {
      menu.style.borderRadius = '10px';
  }
}
//defer
var myVar;

    function myFunction() {
        myVar = setTimeout(showPage, 3000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }
//submit 





