//Exercicio 3

const listTask = []

const addTask = (newTask) => {
   const newTaskList = [...listTask, newTask]
   console.log('\033[34m Tarefa Adicionada com sucesso!')
   console.log('\033[34m' + newTaskList)
}
const task = process.argv[2]

addTask(task)