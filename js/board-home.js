var count = $("#graph a").length;
for(i=0; i<count; i++){
    var xPos = Math.random() * (92 - 8) + 8;
    var yPos = Math.random() * (92 - 16) + 16;
    document.getElementsByTagName("text")[i].setAttribute("x", xPos+"%");
    document.getElementsByTagName("text")[i].setAttribute("y", yPos+"%");
    document.getElementsByTagName("circle")[i].setAttribute("cx", xPos+"%");
    document.getElementsByTagName("circle")[i].setAttribute("cy", yPos+"%");
  }
