document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
      alert("Please enter a task");
  } else {
      document.querySelector('#tasks').innerHTML += `
      <div class="task">
          <span id="taskname">
              ${document.querySelector("#newtask input").value}
          </span>
          <button class="delete">
              <i class="fa-solid fa-trash"></i>
          </button>
      </div>
      `;

      // Adding event listeners to delete buttons
      var current_tasks = document.querySelectorAll(".delete");
      for (var i = 0; i < current_tasks.length; i++) {
          current_tasks[i].onclick = function () {
              this.parentNode.remove(); // Corrected from parentsNode to parentNode
          };
      }
       // Adding event listeners to toggle task completion
      var tasks = document.querySelectorAll(".task"); // Corrected from .tasks to .task
      for (var i = 0; i < tasks.length; i++) {
          tasks[i].onclick = function () {
              this.classList.toggle("completed");
          };
      }
      // Clear input field after adding task
      document.querySelector("#newtask input").value = "";
  }
};