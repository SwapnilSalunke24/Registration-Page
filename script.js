var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["branch"] = document.getElementById("branch").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.branch;
}

//Reset the data
function resetForm() {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("branch").value = '';
    selectedRow = null;
}
