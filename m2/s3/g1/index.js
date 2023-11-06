class User {
  constructor(n, c, e, l) {
    this.firstName = n;
    this.lastName = c;
    this.age = e;
    this.location = l;
  }
  static namereturn(x, y) {
    if (x.age < y.age) {
      return y.age;
    } else if (x.age > y.age) {
      return x.age;
    } else if (x.age == y.age) {
      return "SAME AGE!";
    }
  }
}

let User1 = new User("Fabio", "Caldarini", 23, "Monza");
let User2 = new User("Polina", "Andreeva", 23, "Mosca");

class Pet {
  constructor(n, on, s, b) {
    this.nome = n;
    this.nomePadrone = on;
    this.speci = s;
    this.razza = b;
  }
  sameowner(p1, p2) {
    if (p1.ownerName == p2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let nome = document.getElementById("name").value;
  let nomePadrone = document.getElementById("oName").value;
  let speci = document.getElementById("species").value;
  let razza = document.getElementById("breed").value;
  let animali = new Pet(nome, nomePadrone, speci, razza);
  boh(animali);
});
function boh(animale) {
  let ul = document.getElementById("unordered");
  let li = document.createElement("li");
  li.innerHTML = `nome animale : br ${animale.nome}<br> nome padrone :  ${animale.nomePadrone} <br> nome specie :   ${animale.speci} <br> nome razza ${animale.razza} `;
  ul.appendChild(li);
}
