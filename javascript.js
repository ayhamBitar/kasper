let allList = document.querySelectorAll("ul li a");

allList.forEach(function (element) {
  element.onclick = function () {
    allList.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  };
});
