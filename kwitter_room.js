

  
  const firebaseConfig = {
    apiKey: "AIzaSyDCqVNisuB8TdlBBWo9tX8HfPi5FJvrd_w",
    authDomain: "project-93-49904.firebaseapp.com",
    databaseURL: "https://project-93-49904-default-rtdb.firebaseio.com",
    projectId: "project-93-49904",
    storageBucket: "project-93-49904.appspot.com",
    messagingSenderId: "512864770992",
    appId: "1:512864770992:web:c6a8299e3816d44801d475"
  };
  
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

     user_name = localStorage.getItem("username")
  document.getElementById("user_name").innerHTML = "Welcome" + user_name +"!";

  function add_room() {
      Room_names = document.getElementById("room_name").value;

      localStorage.setItem("roomname", Room_names)

      window.location = "kwitter_room.html"
  }
    //Start code
 
    //End code
    });});}
getData();



  

