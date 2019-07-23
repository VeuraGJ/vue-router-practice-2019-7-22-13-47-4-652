export default {
    switchItems: (state) => (status) => {
      switch (status) {
        case "Active":
          return state.todoList.filter(n => !n.complete);
        case "Complete":
          return state.todoList.filter(n => n.complete);
        case "All":
          return state.todoList;
      }
    }
  }