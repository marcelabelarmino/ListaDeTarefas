function addTask(time) {
    var input;
    var ul;
  
    if (time === 'day') {
      input = document.getElementById('new-day-task');
      ul = document.getElementById('day-tasks');
    } else if (time === 'evening') {
      input = document.getElementById('new-evening-task');
      ul = document.getElementById('evening-tasks');
    }
  
    var taskName = input.value;
  
    if (taskName !== '') {
      var li = document.createElement('li');
      li.textContent = taskName;
  
      var removeIcon = document.createElement('i');
      removeIcon.className = 'fas fa-trash-alt';
      removeIcon.addEventListener('click', removeTask);
      li.appendChild(removeIcon);
  
      ul.appendChild(li);
      input.value = '';
    }
  }
  
  function removeTask(event) {
    var li = event.target.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }