var dataarr = []
var password = 0

function objetoCuenta(nombreUsuario, nombrePlataforma, mail, password) {
    this.nombreUsuario = nombreUsuario;
    this.nombrePlataforma = nombrePlataforma;
    this.mail = mail;
    this.contraseña = password;
    }
//functionality to the copy password button
function copyContent() {
    const outputField = document.getElementById('outputField');
    outputField.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    showAlertalert(exito, 'texto copiado!', true);
  }
//save the password and account information using promises
function save_account() {
    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var nombrePlataforma = document.getElementById('nombrePlataforma').value;
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('outputField').value;

    var newAccount = new objetoCuenta(nombreUsuario, nombrePlataforma, mail, password);
    console.log("datos guardados con exito en el objeto")

    // Retrieving the array from local storage
    var retrievedDataString = localStorage.getItem('dataarr');
    // Parse the JSON string back to an array
    var arr = JSON.parse(retrievedDataString);

    arr.push(newAccount);
    console.log( 'cuenta guardada exitosamente!');

    // Convert the array to a JSON string
    var dataString = JSON.stringify(arr);
          
    // Save the array in local storage
    localStorage.setItem('dataarr', dataString);
    showAlert(exito, 'los datos se han guardado exitosamente!', true);
    
}
//fetch promises config
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                const dataarr = { message: 'Data fetched successfully!' };
                resolve(dataarr);
            } else {
                reject('Failed to fetch dataarr!');
            }
        }, 2000);
    });
}
//async function calling an api to create a password and waits for the answer (if it arrives)
async function makeAsyncCall() {
    try {
        console.log('Start fetching data');
        var inputElement = document.getElementById("cant_caracters").value;;
        const apiUrl = `https://passwordinator.onrender.com?num=true&char=true&caps=true&len=${inputElement}`;
        fetch(apiUrl) .then((res)=> res.json()) .then((data) => password = (data.data));

        const result = await fetchData(); // Wait for the async function to complete
        
        outputField.value = password;
        save_account()
        
        console.log('End fetching data');
    } catch (error) {
        console.log('Error during data processing:', error);
    }
}
//creates a password and updates the output field 
function crear_contraseña() {
    password = 0
        var inputElement = document.getElementById("cant_caracters").value;
        for (i=0; i<inputElement; i++){
            let letter = new Array(inputElement).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("");
            password = password + letter
        }
    var outputField = document.getElementById('outputField');
    outputField.value = password;
    console.log("Password created");
}
//allert's configs
function showAlert(title, message, success) {
    const bgColor = success ? '#4CAF50' : '#FF5252';
    Swal.fire({
        title: title,
        text: message,
        icon: success ? 'success' : 'error',
        confirmButtonText: 'OK',
        customClass: {
            popup: 'colored-alert', 
        },
        background: bgColor, 
    });
}
