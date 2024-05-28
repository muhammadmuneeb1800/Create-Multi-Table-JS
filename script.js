let btn = document.getElementById("button-addon2");
let output = document.getElementById("output");
let input = document.getElementById("input");

btn.onclick = function () {
  let num = input.value;
  if (!num) {
    Toastify({
      text: "Please Enter A Table Number ",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
      },
    }).showToast();
    return;
  }

  let range = +prompt("Please Enter Your Table Range.");

  for (let i = 1; i <= range; i++) {
    let a = num * i;
    output.value += ` ${num} * ${i} = ${a}  `;
  }
};
