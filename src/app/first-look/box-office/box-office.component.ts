import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-office',
  templateUrl: './box-office.component.html',
  styleUrls: ['./box-office.component.scss']
})
export class BoxOfficeComponent implements OnInit {

  config = {

    apiKey: "AIzaSyBt6i1W4QgyChii1it3DnNIjFYmVqauT4s",
    authDomain: "website-a04d0.firebaseapp.com",
    databaseURL: "https://website-a04d0.firebaseio.com",
    projectId: "website-a04d0",
    storageBucket: "website-a04d0.appspot.com",
    messagingSenderId: "500427658001"
  };
  constructor() { }

  ngOnInit() {

    var app = firebase.initializeApp(this.config)
   var messing = firebase.messaging()
    
    messing.requestPermission().then(
      function(){
       console.log('had permission'); 
       return messing.getToken();
      }
    )
    .then(function(token){
      console.log(token)
    })
    .catch(
      function(err){
          console.log("error occured")
      }
    );
  }

}
