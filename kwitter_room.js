var firebaseConfig = {
  apiKey: "AIzaSyDJKK10P2yAjRtOTmCUxWIBYyWQCKvbHHM",
  authDomain: "project94-aa3da.firebaseapp.com",
  databaseURL: "https://project94-aa3da-default-rtdb.firebaseio.com",
  projectId: "project94-aa3da",
  storageBucket: "project94-aa3da.appspot.com",
  messagingSenderId: "5341800540",
  appId: "1:5341800540:web:13b5be9759d7ab0f795e99"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
