function text(content) {
    return document.createTextNode(content);
}





document.addEventListener("DOMContentLoaded", function(event) {

    function renderEvents(){
        var eventsUL = document.createElement('ul');
        events.forEach(function(event){
            var li = document.createElement('li');
            li.appendChild(text(event));
            eventsUL.appendChild(li);
            });
        eventsDiv.appendChild(eventsUL);
        container.appendChild(eventsDiv);
    }


    var container = document.getElementById("container");
    var events = [];

    var button = document.getElementById("add-task-button");
    button.onclick = function(event) {
        var input = document.getElementById("task-input");
        events.push(input.value);
        renderEvents();
        console.log(events);
    };

    console.log(events);

    var eventsDiv = document.createElement('div');
    eventsDiv.style.border = 'solid 4px';
    var eventsUL = renderEvents(events);
    eventsDiv.appendChild(eventsUL);
    container.appendChild(eventsDiv);
});
