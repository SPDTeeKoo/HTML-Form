const form = document.getElementById('form');
form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  AddRow();
  form.reset();
});

let fnameList = [];
let lnameList = [];
let addressList = [];
let pinList = [];
let stateList = [];
let countryList = [];
let sexList = [];
let foodList = [];
let n = 1;
let x = 0;

function AddRow() {
  let AddRown = document.getElementById('show');
  let NewRow = AddRown.insertRow(n);

  fnameList[x] = document.getElementById('first-name').value;
  lnameList[x] = document.getElementById('last-name').value;
  addressList[x] = document.getElementById('address').value;
  pinList[x] = document.getElementById('pincode').value;
  stateList[x] = document.getElementById('state').value;
  countryList[x] = document.getElementById('count').value;
  let sex = document.getElementsByName('sex');
  for (i = 0; i < sex.length; i++) {
    if (sex[i].checked) sexList[x] = sex[i].value;
  }
  let food = document.getElementsByName('food');
  for (i = 0; i < food.length; i++) {
    if (food[i].checked) foodList[x] = food[i].value;
  }

  let cell1 = NewRow.insertCell(0);
  let cell2 = NewRow.insertCell(1);
  let cell3 = NewRow.insertCell(2);
  let cell4 = NewRow.insertCell(3);
  let cell5 = NewRow.insertCell(4);
  let cell6 = NewRow.insertCell(5);
  let cell7 = NewRow.insertCell(6);
  let cell8 = NewRow.insertCell(7);

  cell1.innerHTML = fnameList[x];
  cell2.innerHTML = lnameList[x];
  cell3.innerHTML = addressList[x];
  cell4.innerHTML = pinList[x];
  cell5.innerHTML = stateList[x];
  cell6.innerHTML = countryList[x];
  cell7.innerHTML = sexList[x];
  cell8.innerHTML = foodList[x];

  n++;
  x++;
}
