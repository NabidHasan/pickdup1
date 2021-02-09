/// /*<reference path="../../models/customer[.js" />*/



(function () {
    customerModels = [];
document.getElementById("CreateCustomerFormCardTittle").innerText = ("Customer Create Form");
})();




document.getElementById("AdressTypeId").addEventListener("change", showAdress);
document.getElementById("Name").addEventListener("keyup", validateName);
document.getElementById("Email").addEventListener("keyup", validateEmail);
document.getElementById("ContactNo").addEventListener("keyup", validateContactNo);
document.getElementById("AdressTypeId").addEventListener("change", validateAdressType);
document.getElementById("Adress").addEventListener("keyup", validateAdress);

document.getElementById("SubmitButton").addEventListener("click", formSubmit);

var customerModels = [];

function showAdress() {
    var adressTypeId = document.getElementById("AdressTypeId").value;
    var el = document.getElementById("AdressDiv");


    if (adressTypeId > 0) {
        var el = document.getElementById("AdressDiv");
        el.style.visibility = "visible";
    }

    else {
        el.style.visibility = "hidden";
    }

    if (adressTypeId== 1) {
        document.getElementById("AdressLabel").innerText = "Present Adress*";
        document.getElementById("AdressSpan").innerText = "Present Adress is required*";
    }

    else if (adressTypeId == 2) {
        document.getElementById("AdressLabel").innerText = "Permanent Adress*";
        document.getElementById("AdressSpan").innerText = "Permanent Adress is required*";
    }
} 

function formSubmit() {
    const isNameValid= validateName();
    const isEmailValid = validateEmail();
    const isContactNoValid = validateContactNo();
    const isAdressTypeValid = validateAdressType();
    const isAdressValid = validateAdress();

    if (isNameValid && isEmailValid && isContactNoValid && isAdressTypeValid && isAdressValid) {
        const customer = new Customer();

        customer.id = customerModels.length;
        customer.name = document.getElementById("Name").value;
        customer.email = document.getElementById("Email").value;
        customer.contactNo = document.getElementById("ContactNo").value;
        customer.adressTypeId = document.getElementById("AdressTypeId").value;
        customer.adress = document.getElementById("Adress").value;

        customerModels.push(customer);

        updateCustomerTable();
        
    }
    else {
        
    }
    
    
    

}

function updateCustomerTable() {
    if (Array.isArray(customerModels) && customerModels.length > 0) {
        let rows = "";
        for (let i = 0; i < customerModels.length; i++) {
            const customer = customerModels[i];
            
            const slCol = `<td>${++i}</td>`;
            const nameCol = `<td>${customer.name}</td>`;
            const emailCol = `<td>${customer.email}</td>`;
            const contactNoCol = `<td>${customer.contactNo}</td>`;
            const adressTypeCol = `<td>${customer.adressTypeId}</td>`;
            const adressCol = `<td>${customer.adress}</td>`;
            const action = `<td>
              <button id='EditBtn' type='button' class='btn btn-warning btn-sm'>Edit</button>
              <button id='RemoveItemBtn' type='button' class='btn btn-danger btn-sm'>Remove</button>
                 </td>`;

            const row = `<tr>${slCol + nameCol + emailCol + contactNoCol + adressTypeCol + adressCol + action}</tr>`
            rows += row;

        }
        document.getElementById("CustomerTBody").innerHTML = rows;




    }
}

function validateName() {
    const name = document.getElementById("Name").value;

    if (name == "" || name == undefined || name == null) {
        document.getElementById("NameSpan").style.display = "block";
    } else {
        document.getElementById("NameSpan").style.display = "none";
        return true;
    }
    return false;
}

function validateEmail() {   
    const email = document.getElementById("Email").value;

    if (email == "" || email == undefined || email == null) {
        document.getElementById("EmailSpan").style.display = "block";
    } else {
        document.getElementById("EmailSpan").style.display = "none";
        return true;
    }
    return false;
}

function validateContactNo() {
    const contact = document.getElementById("ContactNo").value;

    if (contact == "" || contact == undefined || contact == null) {
        document.getElementById("ContactNoSpan").innerText = "Contact is Required";
        document.getElementById("ContactNoSpan").style.display = "block";
    } else {
        if (!isNaN(contact)) {
            document.getElementById("ContactNoSpan").style.display = "none"
            return true;
        } else {
            document.getElementById("ContactNoSpan").innerText = "Contact is not in valid Formet";
            document.getElementById("ContactNoSpan").style.display = "block";

        }
       
    }
    return false;

}

function validateAdressType() {
    const adressTypeId = document.getElementById("AdressTypeId").value;

    if (!(adressTypeId>0)) {
        document.getElementById("AdressTypeIdSpan").style.display = "block";
    } else {
        document.getElementById("AdressTypeIdSpan").style.display = "none";
        return true;
    }
    return false;
}

function validateAdress() {
    const adressTypeId = document.getElementById("AdressTypeId").value;
    const adress = document.getElementById("Adress").value;

    if (adressTypeId > 0 && (adress == "" || adress == undefined || adress == null)) {
        document.getElementById("AdressSpan").style.display = "block";
    } else {
        document.getElementById("AdressSpan").style.display = "none";
        return true;
    }
    return false;
}











