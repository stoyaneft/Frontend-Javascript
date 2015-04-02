String.prototype.capitalize = function(){
    var capitalized = this.charAt(0).toUpperCase() + this.slice(1);
    return capitalized;
};

String.prototype.isBlank = function(){
    return this.trim() == "";
};

String.prototype.words = function(){
    var words = this.split(' ').filter(function(x) {return x != '';});
    return words;
};

String.prototype.format = function(dict) {
  var result = this;

  if(typeof(dict) === "object") {
    Object.keys(dict).forEach(function(key) {
      result = result.replace("{" + key + "}", dict[key]);
    });
    return result;
  }

  var args = [];
  var n = arguments.length;
  var i = 0;

  for(i; i < n; i+=1) {
    args.push(arguments[i]);
  }

  var result = this;

  args.forEach(function(arg) {
    result = result.replace("{}", arg);
  });

  return result;
};

Array.prototype.head = function(){
    return this[0];
};

Array.prototype.tail = function(){
    return this.slice(1);
};

Array.prototype.last = function(){
    return [this[this.length - 1]];
};

Array.prototype.range = function(start, end){
    var result = [];
    for (var i = start; i <= end; i++){
        result.push(i);
    }
    return result;
};

Array.prototype.sum = function(){
    return this.reduce(function(a, b) {
        return a + b;
    }
)};

Array.prototype.product = function(){
    return this.reduce(function(a, b) {
        return a * b;
    }
)};

Array.prototype.compact = function(){
    return this.filter(function(x) {
        return x;
    })
}

Array.prototype.take = function(n){
    return this.slice(0, n);
}

Array.prototype.drop = function(n){
    return this.slice(n);
}

Array.prototype.dedup = function(){

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Array.prototype.sample = function(){
    var randIndex = getRandomInt(0, this.length);
    return this[randIndex];
}
