function like() {
    var element = document.getElementById("like");
    element.classList.toggle("clicked");
  } 

function inc(id) {
  var qty = parseInt(document.getElementById(id).innerText);
  qty = qty + 1;
  document.getElementById(id).innerText = qty;
}

function dec(id) {
  var qty = parseInt(document.getElementById(id).innerText);
  qty = qty - 1;
  if (qty<0)
  {
    document.getElementById(id).innerText = 0;
  }
  else
  {
    document.getElementById(id).innerText = qty;
  }
}