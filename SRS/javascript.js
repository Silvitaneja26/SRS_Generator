var fs = require('fs')
function store() {
    var constraint1=document.getElementById("con1").value;
    var constraint2=document.getElementById("con2").value;
    var constraint3=document.getElementById("con3").value;
    var constraint4=document.getElementById("con4").value;
    var constraint5=document.getElementById("con5").value;
    var constraint6=document.getElementById("con6").value;
    var organizationName=document.getElementById("organizationName").value;
    var projectName=document.getElementById("projectName").value;
    var projectScope=document.getElementById("projectScope").value;
    var notProjectScope=document.getElementById("notProjectScope").value;

    var definition1=document.getElementById("def1").value;
    var description1=document.getElementById("def2").value;
    var definition3=document.getElementById("def3").value;
    var description24=document.getElementById("def4").value;
    var definition5=document.getElementById("def5").value;
    var description3=document.getElementById("def6").value;
    var references=document.getElementById("ref").value;

    var perspective=document.getElementById("perspective").value;

    var requirement1=document.getElementById("req1").value;
    var requirement2=document.getElementById("req2").value;
    var requirement3=document.getElementById("req3").value;
    var requirement4=document.getElementById("req4").value;
    var requirement5=document.getElementById("req5").value;
    var requirement6=document.getElementById("req6").value;

    var input1=document.getElementById("in1").value;
    var process1=document.getElementById("proc1").value;
    var output1=document.getElementById("out1").value;
    var input2=document.getElementById("in2").value;
    var process2=document.getElementById("proc2").value;
    var output2=document.getElementById("out2").value;
    var input3=document.getElementById("in3").value;
    var process3=document.getElementById("proc3").value;
    var output3=document.getElementById("out3").value;
    var input4=document.getElementById("in4").value;
    var process4=document.getElementById("proc4").value;
    var output4=document.getElementById("out4").value;
    var input5=document.getElementById("in5").value;
    var process5=document.getElementById("proc5").value;
    var output5=document.getElementById("out5").value;

    var user1=document.getElementById("user1").value;
    var descriptionuser1=document.getElementById("des1").value;
    var user2=document.getElementById("user2").value;
    var descriptionuser2=document.getElementById("des2").value;
    var user3=document.getElementById("user3").value;
    var descriptionuser3=document.getElementById("des3").value;



const data = {
    "constraints": [constraint1,constraint2,constraint3,constraint4,constraint5,constraint6],
    "organizationName": organizationName,
    "projectName": projectName,
    "projectScope": projectScope,
    "notProjectScope": notProjectScope,
    "definitions": [],
    "references": [],
    "perspective": perspective,
    "requirements": [],
    "processes": [],
    "users": []
}

var dataString = JSON.stringyfy(data)

fs.writeFile("data.json", dataString, function(err, result) {
    if(err) console.log('error',err)
})

}


// var dict = {"one" : [15, 4.5],
//     "two" : [34, 3.3],
//     "three" : [67, 5.0],
//     "four" : [32, 4.1]};

// var dictstring = JSON.stringify(dict);

// var fs = require('fs');
// fs.writeFile("data.json", dictstring, function(err, result) {
//     if(err) console.log('error', err);
// });


// $(document).ready(function(){
//     $.ajax({
//         type: "POST",
//         url: "https://adg-backend-rec-2019.herokuapp.com/login",
//         data: JSON.stringify({
//             "email":"alandwayne90@gmail.com",
//             "password":"hello"
//         }),        
//         success: function(data){
//             console.log(data);
//         },
//         error: function(xhr,status,error){
//             console.log(error);
//         },
//         dataType: "json",
//         contentType: "application/json; charset=utf-8"
//     });
// });