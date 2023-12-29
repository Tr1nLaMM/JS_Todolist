var todoList = new Array();
function addTodo() {
  let domTask = document.getElementById("task");
  let taskName = domTask.value;
  todoList.push(taskName);


  render()
  console.log(todoList);
}
function editTask(index) {
  editingIndex = index;
  render();
}
function deleteTask(index) {
    todoList.splice(index, 1);
    render();
    console.log(todoList);
  }
  var editingIndex = -1;

  function updateTask() {
    let domTask = document.getElementById("task");
    let taskName = domTask.value;
    todoList[editingIndex] = taskName;
    editingIndex = -1;
    render();
    console.log(todoList);
  }
  
  function render() {
    let domTodoList = document.getElementById("todoList");
    let htmlTodoList = '';
    for (let i = 0; i < todoList.length; i++) {
      if (i === editingIndex) {
        htmlTodoList += `<tr>` +
          `<th scope="row">` + (i + 1) + `</th>` +
          `<td><input type="text" id="task" class="form-control" value="` + todoList[i] + `"></td>` +
          `<td><input type="checkbox" checked></td>` +
          `<td class="primary"><button onclick="updateTask()">Lưu</button></i></td>` +
          `<td class="danger"><button onclick="deleteTask(${i})">Xóa</button></td>` +
          `</tr>`;
      } else {
        htmlTodoList += `<tr>` +
          `<th scope="row">` + (i + 1) + `</th>` +
          `<td>` + todoList[i] + `</td>` +
          `<td><input type="checkbox" checked></td>` +
          `<td class="primary"><button onclick="editTask(${i})">Sửa</button></i></td>` +
          `<td class="danger"><button onclick="deleteTask(${i})">Xóa</button></td>` +
          `</tr>`;
      }
    }
  
    domTodoList.innerHTML = '';
    domTodoList.innerHTML = htmlTodoList;
  }  

