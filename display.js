function updateAccountList() {
    var accountList = document.getElementById('accountList');
    
    // Retrieving the array from local storage
    var retrievedDataString = localStorage.getItem('data');

    // Parse the JSON string back to an array
    var arr = JSON.parse(retrievedDataString);

    // Loop through the array and add rows to the table
    arr.forEach(function (account) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${account.nombreUsuario}</td>
            <td>${account.nombrePlataforma}</td>
            <td>${account.mail}</td>
            <td>${account.contraseña}</td>
        `;
        accountList.appendChild(row);

    // Convert the array to a JSON string
    var dataString = JSON.stringify(arr);
          
    // Save the array in local storage
    localStorage.setItem('data', dataString);
    });
    
}

function deleteElementByIndex() {
    var indexToDelete = parseInt(indiceEliminar.value)
    if (indexToDelete < 0 || indexToDelete >= myArray.length) {
        Alert('indice inexistente, por favor ingrese un indice existente.');
        return
    }
    data.splice(indexToDelete = parseInt(indiceEliminar.value), 1);
    return data;
}


updateAccountList();
