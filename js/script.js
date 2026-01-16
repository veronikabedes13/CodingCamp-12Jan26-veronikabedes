
let nameUser = prompt("Masukkan nama kamu:");
if (nameUser) {
document.getElementById("welcomeText").innerText =
  'Hi ${name}, welcome to PT NgodingSantuy';

}

document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let birth = document.getElementById("birth").value;
  let message = document.getElementById("message").value;

  let gender = document.querySelector('input[name="gender"]:checked').value;

  let now = new Date().toString();
 document.getElementById("welcomeText").innerText =
    `Hi ${name}, welcome to PT NgodingSantuy`;

  let result = `
    <b>Current time:</b> ${now}<br><br>
    <b>Nama:</b> ${name}<br>
    <b>Tanggal Lahir:</b> ${birth}<br>
    <b>Jenis Kelamin:</b> ${gender}<br>
    <b>Pesan:</b> ${message}
  `;

  document.getElementById("result").innerHTML = result;
});
