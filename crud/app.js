
let {tasks} = require("../config") 
const { validationResult} = require("express-validator");
// console.log(tasks);


const getAllTasks = (req,res) =>{res.json(tasks)};
const getOneTasks = (req,res) =>{
    const id = +req.params.taskId;
    console.log(+req.params.taskId)
    const task = tasks.find((task) => +task.id === id); 
    console.log("Found Task:", task);
   if (!task){
     return res.status(404).json({msg : "task not found"})
    }
   res.json(task);
  };
const creatTask = (req ,res) =>{
const err = validationResult(req);

if(!err.isEmpty()){
return res.status(400).json(err.array())
}
tasks.push({id : tasks.length+1,...req.body});

res.json(tasks);

  };
const updateTask = (req,res) =>{
    const err = validationResult(req);
    if(!err.isEmpty())
      {return res.status(400).json(err.array())};
    
    const id = +req.params.taskId;
    
    let task = tasks.find((task)=> +task.id ===id); 
    console.log(task)
    if (!task){
      return res.status(404).json({msg : "task not found"})}
    
  
    task = {...task ,...req.body};
    res.json(task);
  };
const deleteTask = (req ,res)=> {
    const id = +req.params.taskId;
    
    let task = tasks.find((task)=> +task.id ===id); 
    if (!task){
      return res.status(404).json({msg : "task not found"})}
  
    task = tasks.filter((task)=> task.id !== id);
  
    res.json({msg : "task deleted successfuly"});
  };
  
module.exports = {
    getAllTasks,
    getOneTasks,
    creatTask,
    updateTask,
    deleteTask

}