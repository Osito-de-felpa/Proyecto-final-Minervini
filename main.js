var data = []

//copy content using a promise
function copyContent() {
    return new Promise((resolve, reject) => {
        try {
            var inputField = document.getElementById('inputField');
            var outputField = document.getElementById('outputField');
            outputField.value = inputField.value;
            resolve("la contraseña se copio exitosamente!");
        } catch (error) {
            reject(error);
        }
    });
}

//generate passwors using promise
function generatePassword() {
    return new Promise((resolve, reject) => {
        try {
            var inputElement = document.getElementById("cant_caracters").value;
            let password = ""
            for (i=0; i<inputElement; i++){
                password += new Array(inputElement).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("");
            }
            console.log(password)
            resolve(password);
        } catch (error) {
            reject(error);
        }
    });
}

// calls a function to create a password and updates the output field using promises
function crear_contraseña() {
    generatePassword()
        .then(password => {
            var outputField = document.getElementById('outputField');
            outputField.value = password;
            console.log("Password created:", outputField);
        })
        .catch(error => {
            console.error("Error creating the password:", error);
        });
}

//  save the password and account information using promises
function save_account() {
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var nombrePlataforma = document.getElementById('nombrePlataforma').value;
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('outputField').value;
            // Create an account object
            var objetoCuenta = {
                nombreUsuario: nombreUsuario,
                nombrePlataforma: nombrePlataforma,
                mail: mail,
                contraseña: password
            };

            // Retrieving the array from local storage
            var retrievedDataString = localStorage.getItem('data');

            // Parse the JSON string back to an array
            var retrievedData = JSON.parse(retrievedDataString);

            // push object to the array
            data.push(objetoCuenta);
            console.log("Account saved sucesfully:", objetoCuenta);
            
            // Convert the array to a JSON string
            var dataString = JSON.stringify(data);
            
            // Save the array in local storage
            localStorage.setItem('data', dataString);

            // push object to the array
            data.push(objetoCuenta);
            console.log("Account saved sucesfully:", objetoCuenta);
            updateAccountList();

            alert("los datos se han guardado exitosamente .");
        })
        .catch(error => {
            console.error("Error saving the information::", error);
        });
}


// Function to update the account list on Page 1
function updateAccountList() {
    var accountList = document.getElementById('accountList');
    accountList.innerHTML = '';

    // Loop through the array and add rows to the table
    data.forEach(function (account) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${account.nombreUsuario}</td>
            <td>${account.nombrePlataforma}</td>
            <td>${account.mail}</td>
            <td>${account.contraseña}</td>
        `;
        accountList.appendChild(row);
    });
}


updateAccountList();
