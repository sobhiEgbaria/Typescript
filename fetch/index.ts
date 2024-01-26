import axios from "axios";

// interface use to define the structure of an object, this structure is the type
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  const URL = "https://jsonplaceholder.typicode.com/todos/1";

  const res = await axios.get(URL);

  const todo = res.data as Todo; // the type of todo is TODO(the interface)

  print(todo.id, todo.title, todo.completed);
};

fetchData();

const print = (id: number, title: string, completed: boolean) => {
  console.log(`
  The id is: ${id}
  The title is: ${title}
  is completed: ${completed} 
  
  `);
};
