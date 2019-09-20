'use strict';
module.exports = function (app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/saludo')
    .get(todoList.saludo);

  /*
  |------------------ 
  | % CPU
  |------------------- 
  */

  app.route('/cpuPercent')
    .get(todoList.porcentajeCpu);


  app.route('/ramPercent')
    .get(todoList.porcentajeRam);

  app.route('/totalRam')
    .get(todoList.totalRam);


  app.route('/getProcess')
    .get(todoList.getProcess);
  
  
  
    app.route('/killProcess')
    .post(todoList.killProcess);
};