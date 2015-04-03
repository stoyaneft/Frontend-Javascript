

var bus = (function(){
    var events = {};
    return {

        on: function(eventName, callback){
            if (eventName in events){
                events[eventName].push(callback);
            } else {
                    events[eventName] = [callback];
            }
        },

        remove: function(eventName){
            delete events.eventName;
        },

        trigger: function(eventName){
            for (var i = 0; i < events[eventName].length; i++){
                events[eventName][i]();
            }
        }
    }
})();


bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!")
});

bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED AGAIN!");
});

