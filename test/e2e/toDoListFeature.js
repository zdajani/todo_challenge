describe('To Do Task List', function() {
  
  var addTaskBox = element(by.model('toDoCtrl.newTask'));
  var addTaskBtn = element(by.id('addTask'));
  var editTaskBtn = element(by.id('editTask'));
  var editTaskBox = element(by.className('editable-input'));
  var saveEditedTask = element(by.id('saveEdit'));
  var delTaskBtn= element(by.id('removeTask-btn'));
  
  beforeEach(function() {
    browser.get('http://localhost:3000');
    addTaskBox.sendKeys('Buy Water');
    addTaskBtn.submit();
  });
  
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });
  
  it('adds tasks', function() {
    expect(element(by.binding('task')).getText()).
        toEqual('Buy Water');
  });
  
  it('adds mutliple tasks', function() {
    addTaskBox.sendKeys('Buy Food');
    addTaskBtn.submit();
    
    var tasks = element.all(by.repeater('task in toDoCtrl.taskList'));
    expect(tasks.get(0).getText()).toContain("Buy Water");
    expect(tasks.get(1).getText()).toContain("Buy Food");
    
  });
  
  it('can edit tasks', function() {
    editTaskBtn.click();
    editTaskBox.sendKeys('Buy Food');
    saveEditedTask.click();
    
    expect(element(by.binding('task')).getText()).
        toContain('Buy Water');
  });
  
  it('can delete individual tasks', function() {
    delTaskBtn.click();
    
    expect(element.all(by.repeater('task in toDoCtrl.taskList')).count()).toEqual(0);
  });
  
  it('shows number of tasks', function() {
    expect(element(by.id('taskCount')).getText()).toContain('1');
  });
  
  
  it('can delete all completed tasks', function (){
    element(by.model('task.completed')).click();
    addTaskBox.sendKeys('Buy Cat Food');
    addTaskBtn.submit();
    
    element(by.id('delCompletedTasks-btn')).click();
    expect(element.all(by.repeater('task in toDoCtrl.taskList')).count()).toEqual(1);
  });
  
  describe('can filter tasks', function(){
    beforeEach(function() {
      element(by.model('task.completed')).click();
    });
    
    it('can filter completed tasks', function(){
      element(by.id('completedFilter-btn')).click();
      
      expect(element.all(by.repeater('task in toDoCtrl.taskList')).count()).toEqual(1);
    });
    
    it('can filter active tasks', function(){
      element(by.id('activeFilter-btn')).click();
      
      expect(element.all(by.repeater('task in toDoCtrl.taskList')).count()).toEqual(0);
    });
    
    it('can filter all tasks', function() {
      element(by.id('noFilter-btn')).click();
      
      expect(element.all(by.repeater('task in toDoCtrl.taskList')).count()).toEqual(1);
    });

  });
});
