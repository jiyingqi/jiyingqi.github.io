var count = 22;
for(i=1; i<=count; i++){
    var elem = document.createElement("img");
    elem.setAttribute("src", "/alyssa/pic/picture/" + i + ".jpg");
    elem.style.width = "20%";
    elem.style.height = "auto";
    //elem.setAttribute("max-width", "10%");
    //elem.setAttribute("height", "auto");
    document.getElementById("pichome").appendChild(elem);
  }
