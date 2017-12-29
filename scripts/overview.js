var percentage1 = 40;
var percentage2 = 70;
var x = document.querySelectorAll("p.colored-line");
x[0].style.width = percentage1 + "%";
x[1].style.width = percentage2 + "%";
var y = document.querySelectorAll("p.colored-line");
y[0].innerHTML = "Sit - " + percentage1 + "%";
y[1].innerHTML = "Down -  " + percentage2 + "%";
