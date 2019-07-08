// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD17OyGwi-MKdZYs8nz5tEuuZVhYABf3TA",
    authDomain: "test1-9d6c0.firebaseapp.com",
    databaseURL: "https://test1-9d6c0.firebaseio.com",
    projectId: "test1-9d6c0",
    storageBucket: "",
    messagingSenderId: "227691718453",
    appId: "1:227691718453:web:cad42c39c08bc759"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database();
let ref = database.ref("users");


function submitusername() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let uni = document.getElementById("uni").value;
    let course = document.getElementById("course").value;
    let test = [name, number, email, uni, course];
    let data = {
        name: name,
        email: email,
        phone: number,
        uni_school: uni,
        course: course,
    }

    for (var i = 0; i < test.length; i++) {
        if (test[i] === "") {
            document.getElementById("shake").className = "myclass";
            return;
        }
    }
    ref.push(data);
}