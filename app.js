document.addEventListener("DOMContentLoaded", function () {
  let boxesNum = 1;
  boxesNum.classname = "boxesNum";
  let btn = document.createElement("button");
  // could have also done this let btnText = btn.createTextNode("Add Square")
  btn.textContent = "Add Square";
  document.body.appendChild(btn);
  btn.addEventListener("click", newDiv);

  function newDiv() {
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.classList.add("boxes", "div");
    div.setAttribute("id", boxesNum);
    div.addEventListener("click", setRandomColor)
    boxesNum++;
    let span = document.createElement("span");
    span.innerText = div.id;
    span.classList.add("id-display");
    div.appendChild(span)
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor(e) {
    e.target.style.backgroundColor= getRandomColor();
  }

});
