'use strict'


var Resource = function(url){
    this.url = url;
};

Resource.prototype.query = function(){
    return Q($.ajax({
        method: "GET",
        url: this.url
    }));
};

Resource.prototype.create = function(data){
    return Q($.ajax({
        url: this.url,
        method: "post",
        data: data
    }));
};

Resource.prototype.view = function(id){
    return Q($.ajax({
        url: this.url + '/' + id,
        method: "GET",
    }));
};

Resource.prototype.update = function(id, data){
    return Q($.ajax({
        url: this.url + '/' + id,
        method: "update",
        data: data
    }));
};

Resource.prototype.delete = function(id){
    return Q($.ajax({
        url: this.url + '/' + id,
        method: "delete"
    }));
};

function displayStudents(students){
    students.forEach(function(student, index){
        $("#table-body").append('<tr><td>'+student['_id']+'</td><td>'+student['name']+'</td><td>'+student['email']+'</td>');
    });
};

// $(document).ready(function(){
//     var student = new Resource("http://192.168.0.66:3000/api/students");
//     student.query().then(displayStudents);
// });
var student = new Resource("http://192.168.0.66:3000/api/students");
student.query().then(function(students){
        console.log(students);
    });

// $(document).ready(function(){
//     var student = new Resource("http://192.168.0.66:3000/api/students");
//     student.query().then(function(students){
//         console.log(students);
//     });
// });

