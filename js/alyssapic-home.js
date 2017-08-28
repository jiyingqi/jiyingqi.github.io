var count = 22;
for(i=1; i<=count; i++){
    var xPos = Math.random() * (92 - 8) + 8;
    var yPos = Math.random() * (92 - 16) + 16;
    var elem = document.createElement("img");
    elem.setAttribute("src", "/alyssa/pic/picture/" + i + ".jpg");
    elem.setAttribute("x", xPos+"%");
    elem.setAttribute("y", yPos+"%");
    elem.setAttribute("height", "auto");
    elem.setAttribute("max-width", "10%");
    document.getElementById("pichome").appendChild(elem);
  }
