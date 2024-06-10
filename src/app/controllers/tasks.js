app.controller('tasksCtrl',function($scope){
    $scope.tasks = [];
    $scope.addTask= function() {
      if (!$scope.task || !$scope.task.input){
        return;
      }
      if (!$scope.tasks.find(function(task) { return task.name === $scope.task.input })) {
        $scope.tasks.push({ name: $scope.task.input, done: false });
        $scope.task.input = "";
      } else {
        $scope.errorText = "This task already exists!!";
      }
  
    };
    $scope.taskItem = [];
    $scope.clearTasks = function(){
      $scope.tasks = $scope.tasks.filter(function(taskItem){
        return !taskItem.done;
      });
    };
    
  });