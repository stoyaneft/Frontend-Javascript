function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Panda(name, sex) {
    this.weight = 20;
    this.name = name;
    if (['male', 'female'].indexOf(sex) === -1) {
        this.sex = 'female';
    } else {
        this.sex = sex;
    }
    this.isLazy = false;
}

Panda.prototype.toString = function(){
    return this.name + ' is a ' + this.sex + ' panda which weighs ' + this.weight + ' kg';
}

Panda.prototype.isMale = function(){
    return this.sex == 'male';
}

Panda.prototype.isFemale = function(){
    return this.sex == 'female';
}

Panda.prototype.eat = function(bamboo) {
    this.weight += bamboo / 2;
    var isLazy = this.weight >= 80;
    if (this.weight >= 80 && !isLazy) {
        this.name = 'Lazy Panda ' + this.name;
    }
}

Panda.prototype.mate = function(anotherPanda){
    var fatherName = '';
    var motherName = '';
    var babyName = '';
    var babySex = '';

    if (this.isFemale() && anotherPanda.isMale()) {
        fatherName = anatherPanda.name;
        motherName = this.name;
    } else if(this.isMale() && anotherPanda.isFemale()) {
        fatherName = this.name;
        motherName = anotherPanda.name;
    }
    else {

    }
    babySex = ['female', 'male'][getRandomInt(0, 2)];
    babyName = {
        'female': motherName + " " + fatherName,
        'male': fatherName + " " + motherName
    }[babySex];

    return new Panda(babyName, babySex);
};
