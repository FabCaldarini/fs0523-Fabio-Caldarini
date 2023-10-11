const inputjs = document.getElementById("input");
const buttonjs = document.getElementById("button");
const ulJS = document.getElementById("uList");

buttonjs.addEventListener("click", function (a) {
  a.preventDefault();
  const li = document.createElement("li");
  if (!inputjs.value) {
    return;
  }

  li.innerText = inputjs.value;
  ulJS.append(li);

  inputjs.value = "";
  const bottoneInterno = document.createElement("button");
  bottoneInterno.innerText = "Rimuovi";
  li.append(bottoneInterno);

  bottoneInterno.addEventListener("click", function () {
    li.remove();
  });

  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });
});
