function MainCtrl($scope){
    $scope.id = 0;
    $scope.tasks = [];
    $scope.taskName="";
    $scope.saveTask = function(task){
        if (task.id){
            $scope.tasks.filter(function(){

            });
        }
        else{
        $scope.id+=1;
        task = {id: $scope.id, name: taskName, finished: false};
        $scope.tasks.push(task);
        $scope.taskName = "";
        }
    }
    $scope.removeTask = function(index){
        $scope.tasks.splice(index, 1);
    }
    $scope.finishTask = function(index){
        task.finished = !task.finished;

    }
    $scope.editTask = function(index){
        $scope.taskName = $scope.tasks[index].taskName;
        task = $scope.tasks[index];
        $scope.saveTask(task);
    }
}
