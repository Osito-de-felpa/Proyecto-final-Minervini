function updateAccountList() {
    var accountList = document.getElementById('accountList');
    accountList.innerHTML = '';
    
    // Retrieving the array from local storage
    var retrievedDataString = localStorage.getItem('data');

    // Parse the JSON string back to an array
    var dota2 = JSON.parse(retrievedDataString);

    // Loop through the array and add rows to the table
    dota2.forEach(function (account) {
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