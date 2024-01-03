import 'sweetalert2/dist/sweetalert2.min.css';

var data = []
// Convert the array to a JSON string
var dataString = JSON.stringify(data);
// Save the array in local storage
localStorage.setItem('data', dataString);

let password = 0

function objetoCuenta(nombreUsuario, nombrePlataforma, mail, password) {
    this.nombreUsuario = nombreUsuario;
    this.nombrePlataforma = nombrePlataforma;
    this.mail = mail;
    this.contraseña = password;
    }

//copy content using a promise
function copyContent() {
    // Select the text field
    const outputField = document.getElementById('outputField');
    outputField.select();
    
    // Execute the "copy" command
    document.execCommand('copy');
    
    // Deselect the text field
    window.getSelection().removeAllRanges();
    
    // Alert or update UI to indicate successful copy (optional)
    showAlertalert('texto copiado!', true);
  }

//  save the password and account information using promises
function save_account() {
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var nombrePlataforma = document.getElementById('nombrePlataforma').value;
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('outputField').value;

    var newAccount = new objetoCuenta(nombreUsuario, nombrePlataforma, mail, password);
    console.log("datos guardados con exito en el objeto")

    // Retrieving the array from local storage
    var retrievedDataString = localStorage.getItem('data');
    // Parse the JSON string back to an array
    var arr = JSON.parse(retrievedDataString);

    arr.push(newAccount);
    showAlert('cuenta guardada exitosamente!', true);

    // Convert the array to a JSON string
    var dataString = JSON.stringify(arr);
          
    // Save the array in local storage
    localStorage.setItem('data', dataString);
    showAlert('los datos se han guardado exitosamente!', true);
    
}

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                const data = { message: 'Data fetched successfully!' };
                resolve(data);
            } else {
                reject('Failed to fetch data!');
            }
        }, 2000);
    });
}

async function crear_contraseña() {
    try {
        console.log('Start fetching data');

        password = 0
        var inputElement = document.getElementById("cant_caracters").value;
        for (i=0; i<inputElement; i++){
            let letter = new Array(inputElement).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("");
            password = password + letter
        }
        const result = await fetchData(); // Wait for the async function to complete
    
        var outputField = document.getElementById('outputField');
        outputField.value = password;
        console.log('Data:', result.message);
    
        console.log('End fetching data');
    } catch (error) {
        console.error('Error during data processing:', error);
    }
}




function showAlert(message, success) {
    const bgColor = success ? '#4CAF50' : '#FF5252';
    Swal.fire({
        title: 'Alert',
        text: message,
        icon: success ? 'success' : 'error',
        confirmButtonText: 'OK',
        customClass: {
            popup: 'colored-alert', 
        },
        background: bgColor, 
    });
}
