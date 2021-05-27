let friends = ["John", "Paul", "George", "Ringo", "Bernard"];
let sing = document.getElementById("button");

sing.addEventListener("click", function () {
  for (let i = 0; i < friends.length; i++) {
    let div = document.createElement("div");
    div.className = "friend";

    let h3 = document.createElement("h3");
    h3.textContent = friends[i];

    div.appendChild(h3);
    document.body.appendChild(div);

    for (let j = 99; j >= 1; j--) {
      let p = document.createElement("p");

      if (j === 2) {
        p.textContent = "2 lines of code in the file, 2 lines of code, " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file";
      } else if (j === 1) {
        p.textContent =
          "1 line of code in the file, 1 line of code, " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";
      } else {
        p.textContent =
          j +
          " lines of code in the file, " +
          j +
          " lines of code, " +
          friends[i] +
          " strikes one out, clears it all out, " +
          (j - 1) +
          " lines of code in the file";
      }

      div.appendChild(p);
    }
  }
});
