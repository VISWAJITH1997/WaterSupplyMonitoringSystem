(function () {
    var config = {
        apiKey: "AIzaSyB7lt1D4cCXMMUwgrgFzA2jOwCD_Ex6y4M",
        authDomain: "watermonitoringsystem-208fe.firebaseapp.com",
        databaseURL: "https://watermonitoringsystem-208fe.firebaseio.com",
        projectId: "watermonitoringsystem-208fe",
        storageBucket: "watermonitoringsystem-208fe.appspot.com",
        messagingSenderId: "423859894947"
    };
    firebase.initializeApp(config);

    const preObject = document.getElementById('object');
    const ulList = document.getElementById('list');
    
    const dbRefObject = firebase.database().ref().child('Unit/1');
    const dbRefList = dbRefObject.child('alert');
    
    dbRefList.on('child_added', snap => {
      const li = document.createElement('li');
        li.innerText = snap.val();
        li.id =snap.key;
        ulList.appendChild(li);
    });
}());