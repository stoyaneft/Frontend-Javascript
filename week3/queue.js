var queue = (function(){
    var container = [];
    return {
        push: function(x){
            container.push(x);
        },
        pop: function(){
            return container.shift();
        },
        isEmpty: function(){
            return container.length === 0;
        }
    }
})();
