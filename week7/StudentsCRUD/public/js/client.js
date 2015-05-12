'use strict'

function displayStudents(students){
    students.forEach(function(student, index){
        $("#table-body").append('<tr><td>'+student['id']+'</td><td>'+student['name']+'</td><td>'+student['email']+'</td>');
    });
};


function loadStudents() {
    var result;
    $.ajax({
        method: "GET",
        url: "http://localhost:1337/students"
    }).done(function(res){
        displayStudents(res['data']);
    });
}


$(document).ready(function(){
    loadStudents();
    // init stuff
    var button = $( "#submit-button" );
    button.click(function(event){
        console.log("hda");
        var studentId = $("#student-id").val();
        var studentName = $("#student-name").val();
        var studentEmail = $("#student-email").val();
        $.ajax({
            method: "POST",
            url: "http://localhost:1337/students",
            data: { id: studentId, name: studentName, email: studentEmail }
        }).done(function(res){
            var student = res['data'];
            console.log(student);
            $("#table-body").append('<tr><td>'+student['id']+'</td><td>'+student['name']+'</td><td>'+student['email']+'</td>');
        });
    });
});
