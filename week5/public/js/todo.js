"use strict"

$( document ).ready(function() {

    // function todoApp() {
    //     var events = [];

    //     return {
    //         addTask: function(event){
    //             events.push(taskName);
    //             taskList.append('<li> <input type="checkbox" i>' + taskName + '</li>');
    //         }
    //     }
    // }

    var container = $( "div#container" );
    var taskList = $( "ul#task-list" );
    var button = $( "button#add-task-button" );
    var input = $( "input#task-input" );

    button.click(function(event){
        var eventItem = $( '<li class="event"></li>' );
        var checkbox = $( '<input type="checkbox">' );
        eventItem.append(checkbox);
        eventItem.append(input.val());
        checkbox.click(function(event) {
            eventItem.toggleClass('finished');
            //eventItem.style.textDecoration = 'overline';
        });
        taskList.append(eventItem);
    });
});
