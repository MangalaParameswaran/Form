let Container=document.createElement("div");
Container.classList.add("container");
let row=document.createElement("div");
row.classList.add("row");
let col=document.createElement("div");
col.classList.add("col-12");
let form=document.createElement("form");
form.classList.add("form")
col.append(form);
row.append(col);
Container.append(row);
document.body.append(Container);

//first name inputs
let row1=document.createElement("div");
row1.classList.add("row");
let col1=document.createElement("div");
col1.classList.add("col-12");
row1.append(col1);

let lableFirstName=document.createElement("label");
lableFirstName.setAttribute("for","first");
lableFirstName.textContent="First Name";
col1.append(lableFirstName);

let firstName=document.createElement("input");
firstName.setAttribute("type","text");
firstName.id="firstName";
firstName.setAttribute("name","last")
firstName.setAttribute("required", true);
firstName.setAttribute("placeholder","Enter ur First name");
firstName.classList.add("ms-4","p-2");
col1.append(firstName)
form.append(row1);

// last name inputs
let row2=document.createElement("div");
row2.classList.add("row");
let col2=document.createElement("div");
col2.classList.add("col-12");
row2.append(col2);

let lableLastName=document.createElement("label");
lableLastName.setAttribute("for","last");
lableLastName.textContent="Last Name";
lableLastName.classList.add("mt-4")
col2.append(lableLastName);

let lastName=document.createElement("input");
lastName.setAttribute("type","text");
lastName.id="lastName";
lastName.setAttribute("name","last");
lastName.setAttribute("required", true);
lastName.classList.add("ms-4","p-2");
lastName.setAttribute("placeholder","Enter ur Last name");
col2.append(lastName);
form.append(row2);

// input type textarea
let row3=document.createElement("div");
row3.classList.add("row");
let col3=document.createElement("div");
col3.classList.add("col-12");
row3.append(col3);

let labelAddress=document.createElement("label");
labelAddress.setAttribute("for","address");
labelAddress.textContent="Address";
// labelAddress.classList.add("mt-1")
col3.append(labelAddress);

let textArea=document.createElement("textarea");
textArea.setAttribute("name","address");
textArea.id=("address");
textArea.setAttribute("cols","27");
textArea.setAttribute("row","2");
textArea.classList.add("ms-4", "mt-4","pt-2","ps-2");
textArea.setAttribute("placeholder","Enter your Address");
textArea.setAttribute("required", true);
col3.append(textArea);
form.append(row3)


// input pincode
let row4=document.createElement("div");
row4.classList.add("row");
let col4=document.createElement("div");
col4.classList.add("col-12");
row4.append(col4);

let lablePinCode=document.createElement("label");
lablePinCode.setAttribute("for","last");
lablePinCode.textContent="Pin Code";
lablePinCode.classList.add("mt-4")
col4.append(lablePinCode);

let pinCode=document.createElement("input");
pinCode.setAttribute("type","text");
pinCode.setAttribute("id","pinCode");
pinCode.setAttribute("name","last");
pinCode.setAttribute("required", true);
pinCode.classList.add("ms-4","p-2");
pinCode.setAttribute("placeholder","Enter your pincode");
col4.append(pinCode);
form.append(row4);

//input radio
let row5=document.createElement("div");
row5.classList.add("row");
let col5=document.createElement("div");
col5.classList.add("col-12");
row5.append(col5);

let lableGender=document.createElement("label");
lableGender.setAttribute("for","last");
lableGender.textContent="Gender";
lableGender.classList.add("mt-4")
col5.append(lableGender);

let genderSelect=document.createElement("select");
genderSelect.setAttribute("id", "gender");
genderSelect.setAttribute("required", true);
genderSelect.classList.add("ms-4","p-2","mt-4","w-50");
col5.append(genderSelect);

let optionList=[
    {value:"select ur gender",text:"Select ur Gender"},
    {value:"male",text:"Male"},
    {value:"female",text:"Female"},
    {value:"Transgender",text:"Transgender"},
];
for(let i=0; i<optionList.length; i++){
    let genderOption=document.createElement("option");
    genderOption.setAttribute("value","optionList[i].value");
    genderOption.textContent=optionList[i].text;
    genderOption.classList.add("ps-4")
    genderSelect.append(genderOption);
}
form.append(row5);

//select option food
let row6=document.createElement("div");
row6.classList.add("row");
let col6=document.createElement("div");
col6.classList.add("col-12");
row6.append(col6);

let lableFood=document.createElement("label");
lableFood.setAttribute("for","food");
lableFood.textContent="choice of food(Must select at least 2 out of 5 Option)";
lableFood.classList.add("mt-4","w-100")
col6.append(lableFood);

let listFoodOption=[
    {value:"pizza",text:"Pizza"},
    {value:"burger",text:"Burger"},
    {value:"sussi",text:"Sussi"},
    {value:"nv-meals",text:"NV-Meals"},
    {value:"veg-meals",text:"Veg-Meals"}
];
for(let i=0; i<listFoodOption.length; i++){
    let foodSelect=document.createElement("input");
    foodSelect.setAttribute("id", listFoodOption[i].value);
    foodSelect.setAttribute("required", true);
    foodSelect.setAttribute("type","checkbox");
    foodSelect.setAttribute("name","food")
    foodSelect.setAttribute("value",listFoodOption[i].value);
    foodSelect.classList.add("mt-4","ms-4","foodCheckbox");
    col6.append(foodSelect);

    let foodOption=document.createElement("label");
    foodOption.setAttribute("for",listFoodOption[i].text)
    foodOption.textContent=listFoodOption[i].text;
    foodOption.classList.add("ps-1","pe-3")
    col6.append(foodOption);
}
form.append(row6);

//input type form state
let row7=document.createElement("div");
row7.classList.add("row");
let col7=document.createElement("div");
col7.classList.add("col-12");
row7.append(col7);

let lableState=document.createElement("label");
lableState.setAttribute("for","last");
lableState.textContent="State";
lableState.classList.add("mt-5")
col7.append(lableState);

let inputState=document.createElement("input");
inputState.setAttribute("type","text");
inputState.setAttribute("id","last");
inputState.setAttribute("name","last");
inputState.setAttribute("required", true);
inputState.classList.add("ms-4","p-2","ps-3","w-50");
inputState.setAttribute("placeholder","Enter your state");
col7.append(inputState);
form.append(row7);


//input type form country
let row8=document.createElement("div");
row8.classList.add("row");
let col8=document.createElement("div");
col8.classList.add("col-12");
row8.append(col8);

let lableCountry=document.createElement("label");
lableCountry.setAttribute("for","last");
lableCountry.textContent="Country";
lableCountry.classList.add("mt-5")
col8.append(lableCountry);

let inputCountry=document.createElement("input");
inputCountry.setAttribute("type","text");
inputCountry.setAttribute("id","last");
inputCountry.setAttribute("name","last");
inputCountry.setAttribute("required", true);
inputCountry.classList.add("ms-4","p-2","ps-3","w-50");
inputCountry.setAttribute("placeholder","Enter your Country");
col8.append(inputCountry);
form.append(row8);

//submit
let row10 = document.createElement("div");
row10.classList.add("row");
let col10 = document.createElement("div");
col10.classList.add("col-12");
row10.append(col10);
form.append(row10);

let submit=document.createElement("button");
submit.setAttribute("type","submit");
submit.textContent=("Submit");
submit.classList.add("btn","btn-success","mt-5","ms-5");
col10.append(submit);

//clear
let row11 = document.createElement("div");
row11.classList.add("row");
let col11 = document.createElement("div");
col11.classList.add("col-12");
row11.append(col11);
form.append(row11);

let clear=document.createElement("button");
clear.setAttribute("type","submit");
clear.textContent=("Clear");
clear.classList.add("btn","btn-primary","mt-4","ms-5");
clear.addEventListener("click",fun)
col11.append(clear);
function fun(){
    firstName.value ="";
    lastName.value="";
    textArea.value="";
    pinCode.value="";
    genderSelect.value="";
    foodSelect.value="";
    inputState.value="";
    inputCountry.value="";
}


//table

let row9 = document.createElement("div");
row9.classList.add("row");
let col9 = document.createElement("div");
col9.classList.add("col-12");
row9.append(col9);
form.append(row9);

let tableContainer = document.createElement("div");
tableContainer.classList.add("table-responsive","mt-5");

let table = document.createElement("table");
table.classList.add("table"); 
table.setAttribute("border", "1");

tableContainer.append(table);
col9.append(tableContainer);

let tableRow = document.createElement("tr");
tableRow.classList.add("table-secondary")
table.append(tableRow);

let headerFields = [
    "First Name",
    "Last Name",
    "Address",
    "Pincode",
    "Gender",
    "Food",
    "State",
    "Country"
];

for (let i = 0; i < headerFields.length; i++) {
    let tableHead = document.createElement("th");
    tableHead.textContent = headerFields[i];
    tableRow.append(tableHead);
}

//add click function to submit button
// submit.addEventListener("click",foo);
// function foo(){

// }

// ... (your existing code)

//add click function to submit button
submit.addEventListener("click", foo);
function foo(event) {
    event.preventDefault(); // Prevent form submission (to avoid page reload)

    // Create a new row
    let newRow = document.createElement("tr");

    // Iterate over form elements and add data to the row
    for (let i = 0; i < form.elements.length; i++) {
        let formElement = form.elements[i];

        // Skip the submit button and other non-input elements
        if (formElement.type !== "submit" && formElement.type !== "button") {
            let cell = document.createElement("td");

            // If it's a checkbox, display selected values
            if (formElement.type === "checkbox" && formElement.checked) {
                cell.textContent = "Yes";
            } else {
                cell.textContent = formElement.value;
            }

            newRow.appendChild(cell);
        }
    }

    // Append the new row to the table body
    table.appendChild(newRow);

    // Clear the form fields
    clearForm();
}

function clearForm() {
    // Iterate over form elements and clear values
    for (let i = 0; i < form.elements.length; i++) {
        let formElement = form.elements[i];

        // Skip the submit button and other non-input elements
        if (formElement.type !== "submit" && formElement.type !== "button") {
            if (formElement.type === "checkbox") {
                formElement.checked = false;
            } else {
                formElement.value = "";
            }
        }
    }
}

// ... (your existing code)

















