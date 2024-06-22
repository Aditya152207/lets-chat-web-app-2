// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAUWH4z1uEm0f70gZNaFaDx0nQQyrxqHN0",
    authDomain: "lets-chat-8c493.firebaseapp.com",
    projectId: "lets-chat-8c493",
    storageBucket: "lets-chat-8c493.appspot.com",
    messagingSenderId: "551107621108",
    appId: "1:551107621108:web:7a3e9d8d2c1ff54381eea1",
    measurementId: "G-9DRHJ8081K"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



