// JavaScript
const input = document.querySelector("input[type='file']");
const tableBody = document.querySelector("tbody");
const info = document.getElementById('info')

input.addEventListener("change", (event) => {
  tableBody.innerHTML = "";
  const files = input.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const row = document.createElement("tr");
    const filenameCell = document.createElement("td");
    filenameCell.textContent = file.name;
    const typeCell = document.createElement("td");
    typeCell.textContent = file.type;
    const sizeCell = document.createElement("td");
    sizeCell.textContent = file.size;
    row.appendChild(filenameCell);
    row.appendChild(typeCell);
    row.appendChild(sizeCell);
    tableBody.appendChild(row);
  }
});


// info.addEventListener("click", (event) => {
//     document.getElementById("info"). = tr;


// });
