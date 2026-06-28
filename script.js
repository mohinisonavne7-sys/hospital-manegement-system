function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    if (name == "" || age == "" || doctor == "" || date == "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("patientTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = doctor;
    row.insertCell(4).innerHTML = date;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("doctor").value = "";
    document.getElementById("date").value = "";
    document.getElementById("gender").selectedIndex = 0;

}