function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let about = document.getElementById("about_as");

setInterval(() => {
    about.style.color = getRandomColor();
}, 500)

window.onscroll = function(ev) {
    let endForm = document.getElementById("end_form");
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        endForm.style.display = "block";
    } else {
        endForm.style.display = "none";
    }
};