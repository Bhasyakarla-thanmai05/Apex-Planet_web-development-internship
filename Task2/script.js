// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.textContent = "All fields are required.";
    message.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

// To-Do List functionality
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = taskInput.value;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}
