function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("لطفاً یک کار وارد کنید!");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "حذف";
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    taskList.appendChild(li);
    taskInput.value = "";
}