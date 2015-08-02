toDoList.controller('ToDoListController', [function(){
  var self = this;
  
  self.taskList = [];
  
  self.addTask = function(){
    var task = {description: self.newTask,
                completed: false};
    self.taskList.push(task);
    self.newTask = '';
  };
  
  self.removeTask = function(index) {
    self.taskList.splice(index, 1);
  };
  
  self.deleteAllTasks = function() {
    self.taskList = [];
  };
  

  self.deleteCompletedTasks = function () {
    self.taskList = self.taskList.filter(function(item) {
      return item.completed === false;
    });
  };
}]);