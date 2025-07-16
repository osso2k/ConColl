const input = document.getElementById("input")
const listC = document.querySelector("#listC")

function addTask() {
    if (input.value == "") {
        alert("PLease enter a Task")
    }
    const newTask = document.createElement("li")
    newTask.textContent = input.value
    listC.append(newTask)
    input.value = ""
    console.log("Day1")
}
