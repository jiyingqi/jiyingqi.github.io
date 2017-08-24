

(function() {
  var circleA = document.createElement('a');
  circleCont.href = "https://example.com";
  //circleCont.class = "svg";
  document.getElementsByTagName('svg')[0].appendChild(circleCont);

  var circlePattern = document.createElement('circle');
  circlePattern.cx = "25%";
  circlePattern.cy="340px";
  circlePattern.r="8%";
  circlePattern.fill="transparent";
  circlePattern.stroke="lightblue";
  circlePattern.stroke.width="0.5%";
  var circleText = document.createElement('text');
  circleText.x ="25%";
  circleText.y="340px";
  circleText.style.text.anchor="middle";
  circleText.style.fill="lightskyblue";
  circleText.innerHTML="hello!";

  circleA.appendChild(circlePattern);
  circleA.appendChild(circleText);

});
