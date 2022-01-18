//Exercicio 3

const listTask = []

const addTask = (newTask) => {
   const newTaskList = [...listTask, newTask]
   console.log('Tarefa Adicionada com sucesso!')
   console.log(newTaskList)
}
const task = process.argv[2]

addTask(task)