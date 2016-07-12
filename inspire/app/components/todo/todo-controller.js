
// new up the TodoService that has already been configured for your use
// There are two methods getTodos returns and array
// saveTodos accepts an array and stores it to your local storage

(function () {

	var td = this;
	var todoService = new TodoService();
	t = todoService.getTodos()
	
	console.log("t equals", t)

	$("#todoform").on("submit", function (e) {
		e.preventDefault()
		var newinput = $("#todoentry").val()

		t.push(newinput)
		todoService.saveTodos(t)
		update()
	})

	var todosElem = $("#todo");

	function update() {
		todosElem.empty()
		for (var i = 0; i < t.length; i++) {
			var currentTodo = t[i]
			todosElem.append('<p>' + currentTodo + '</p>')
		}

	}

	update()

} ())




