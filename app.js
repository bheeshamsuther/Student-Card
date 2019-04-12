

// UI for Card //

var div = document.getElementById("box");
var h3 = document.createElement('h3');
h3.setAttribute("id","h3");
var div1 = document.createElement("div");
div.setAttribute("id","box1")
var input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute("name","userName");
input.setAttribute("id",'name')
input.setAttribute("size","30px;")
var text = document.createTextNode("User Name:");
div1.appendChild(h3);
div1.appendChild(text);
div1.appendChild(input);
div.appendChild(div1);
// Input 1
var div2 = document.createElement("div");
div2.setAttribute("id","box2")
var input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute("name","userName");
input1.setAttribute("id",'name1')
input1.setAttribute("size","30px;")
var text1 = document.createTextNode("Father Name:");
div2.appendChild(text1);
div2.appendChild(input1);
div.appendChild(div2);

// Input 2
var div3 = document.createElement("div");
div3.setAttribute("id","box3")
var input2 = document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute("name","Roll No");
input2.setAttribute("id",'name2')
input2.setAttribute("size","30px;")
var text2 = document.createTextNode("Roll No:");
div3.appendChild(text2);
div3.appendChild(input2);
div.appendChild(div3);

// Input 3
var div4 = document.createElement("div");
div4.setAttribute("id","box3")
var input3 = document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute("name","Class");
input3.setAttribute("id",'name3')
input3.setAttribute("size","30px;")
var text3 = document.createTextNode("Class:");
div4.appendChild(text3);
div4.appendChild(input3);
div.appendChild(div4);

// Input 4
var div5 = document.createElement("div");
div5.setAttribute("id","box3")
var input4 = document.createElement('input');
input4.setAttribute('type','text');
input4.setAttribute("name","School");
input4.setAttribute("id",'name4')
input4.setAttribute("size","30px;")
var text4 = document.createTextNode("School:");
div5.appendChild(text4);
div5.appendChild(input4);
div.appendChild(div5);



// prompt
var uName =prompt("Enter the user Name");
var fName = prompt("Enter your Father Name");
var rNo = prompt("Enter your Roll No");
var cName = prompt("Enter your Class Name");
var sName = prompt("Enter you School Name");


// Object

var data ={
    mydata:"My Personal Data",
    userName : uName,
    fatherName : fName,
    rollNo : rNo,
    className : cName,
    schoolName :sName,

}

// Value
document.getElementById("h3").innerHTML = data.mydata;
document.getElementById("name").value = data.userName;
document.getElementById("name1").value = data.fatherName;
document.getElementById("name2").value = data.rollNo;
document.getElementById("name3").value = data.className;
document.getElementById("name4").value = data.schoolName;


// last 
var newDiv = document.getElementById("box_1");
var paragraph = document.createElement("p");
newDiv.appendChild(paragraph);
document.getElementById("para").innerHTML = data.userName;
document.getElementById("para").innerHTML=data.fatherName;
document.getElementById("para").innerHTML=data.rollNo;
document.getElementById("para").innerHTML=data.className;
document.getElementById("para").innerHTML=data.schoolName;






