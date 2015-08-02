describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));
  
  it('initialises with an empty task list', function() {
     expect(ctrl.taskList).toEqual([]);
  });
  
  describe('adding and deleting tasks', function(){

    beforeEach(function(){
      ctrl.newTask = "Buy food";
      ctrl.addTask();
    });

    it('can add a task to the list', function(){
      expect(ctrl.taskList).toEqual([{'description': 'Buy food', 'completed': false}]);
    });
    
    it('initalises a task as incomplete', function() {
      expect(ctrl.taskList).toEqual([{'description': 'Buy food', 'completed': false}]);
    });
    
    it('can delete a task from the list', function(){
      ctrl.removeTask();
      expect(ctrl.taskList).toEqual([]);
    });
  });
  
  it('can delete all tasks', function(){
    ctrl.taskList = [{'description': 'Buy food', 'completed': false}, {'description': 'Buy water', 'completed': false}];
    ctrl.deleteAllTasks();
    expect(ctrl.taskList).toEqual([]);
  });
  
  it('can delete completed tasks', function(){
    ctrl.taskList = [{'description': 'Buy food', 'completed': false}, {'description': 'Buy water', 'completed': true}];
    ctrl.deleteCompletedTasks();
    expect(ctrl.taskList).toEqual([{'description': 'Buy food', 'completed': false}]);
  });
});
  


