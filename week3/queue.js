function Queue(){
    var container = [];
    return {
        push: function(x){
            container.push(x);
        },
        pop: function(){
            return container.shift();
        },
        isEmpty: function(){
            return container == [];
        }
    }
}

// queue = new Queue();
// queue.push(2);
// queue.push(3);

// queue.push(4);

// queue.push(5);
// queue.push(6);
// queue.push(7);
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());
// console.log(queue.pop());

