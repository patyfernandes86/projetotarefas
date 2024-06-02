document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-btn">Remover</button>
      `;
      taskList.appendChild(li);
  
      const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function() {
        li.remove();
      });
  
      const checkbox = li.querySelector('input[type="checkbox"]');
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      });
    }
  });