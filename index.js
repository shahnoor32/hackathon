const firebaseConfig = {
    apiKey: "AIzaSyCrw6ydJoeAv6mgMF6LCQ0gyBkrR-nZQJ8",
    authDomain: "contactform-efed5.firebaseapp.com",
    databaseURL: "https://contactform-efed5-default-rtdb.firebaseio.com",
    projectId: "contactform-efed5",
    storageBucket: "contactform-efed5.firebasestorage.app",
    messagingSenderId: "111064036991",
    appId: "1:111064036991:web:916dcbfddf0db2a501714a",
    measurementId: "G-F8PYLCBQM6"
  };

  firebase.initializeApp(firebaseConfig);

 var contactformDB = firebase.database().ref('contactform')

 document.getElementById("contactform") .addEventListener("submit" , sumbitform);


 function sumbitform(e){ 
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
    
    saveMessages(name, email, message);


    document.querySelector('.alert').style.display = "block";

 }
 const saveMessages = (name, email, message) => {
    var newContactForm = contactformDB.push();

    newContactForm.set({
        name : name,
        email: email, 
        message: message,
    });
 };




 const getElementVal = (id) => {
    return document.getElementsByIdName(id).value;
 }