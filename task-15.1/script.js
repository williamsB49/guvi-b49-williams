// getting all required data
let container = document.querySelector(".container");
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let food = document.querySelectorAll(".food");
let table = document.getElementById("table");
let tableContainer = document.getElementById("tableContainer");
let tbody = document.getElementById("tbody");
let genders = document.querySelectorAll("gender");

/*-----------adding event listener to submit the form----------*/
form.addEventListener("submit", (e) => {
  /*---------preventing default form action-----------*/
  e.preventDefault();

  /*-----fetching table list key & value from form elements---*/
  let arrayOfObject = [];
  let flag = true;
  for (i = 0; i < form.length - 1; i++) {
    if (form[i].name != "food") {
      arrayOfObject[form[i].name] = form[i].value;
    } else {
      let foodList = [];
      food.forEach((e) => {
        if (e.checked) {
          foodList.push(e.value);
        }
      });
      if (foodList.length < 2) {
        flag = false;
      }
      foodList = foodList.join(" ");
      arrayOfObject["Food"] = foodList;
    }
  }

  /*---alerting user if any data missing---*/
  if (arrayOfObject.Gender == "") {
    alert("please select Gender");
  } else if (!flag) {
    alert("please select two or more foods");
  } else {
    /*--------displaying table------- */
    tableContainer.classList.add("active");
    container.classList.add("active");

    /*---------------table data----------------*/
    let tr = document.createElement("tr");
    for (key in arrayOfObject) {
      let td = document.createElement("td");
      td.textContent = arrayOfObject[key];
      tr.append(td);
      tbody.appendChild(tr);
    }

    /*-----after table creation reseting all form data------*/
    form.reset();
  }
});