


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


  function adduser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
      });
  }