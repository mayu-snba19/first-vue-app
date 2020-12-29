var app = new Vue({
	el: "#app",
	data: {
		todos: [],
		newItem: "",
	},
	methods: {
		addTodo: function () {
			if (this.newItem.length) {
				this.todos.push({ title: this.newItem, isDone: false });
				this.newItem = "";
			}
		},
		deleteTodo: function (index) {
			// this.todos.splice(index, 1);
			if (this.todos[index].isDone) {
				this.todos[index].isDone = false;
			} else {
				this.todos[index].isDone = true;
			}
		},
	},
});
