function addTask(event) {
    event.preventDefault();

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = taskText + " ";
        
        const button = document.createElement("button");
        button.innerText = "Done";
        button.onclick = function () {
            listItem.remove();
        };

        listItem.appendChild(button);

        document.getElementById("taskList").appendChild(listItem);
        input.value = "";
    }
}
