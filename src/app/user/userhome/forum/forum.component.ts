import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forumlist:any;



  query:any;

  

  id:any;



  data:any;

  

  constructor(private fs:ForumService){

  

  this.fs.getForum().subscribe(

  

  {

  

  next: (data:any)=> this.forumlist =data,

  

  error: ()=> this.forumlist=[]

  

  }

  

  )}

  

  AddQuestion(){

  

  var f:any={

  

  id:this.forumlist.length+1,

  

  question:this.query,

  

   responses:[]

  

  }

  

  this.fs.postquery(f).subscribe(

  

  {

  

  next:(f:any)=>{

  

  alert("question posted");

  

  location.reload();

  

  },

  

  error:(error)=>alert("not posted")

  

  }

  

  );

  

  }
//   forums:any;
//   com:any;
//   constructor(private fs:ForumService){
//       fs.getForum().subscribe({
//         next:(data:any)=>this.forums = data,
//         error:()=>this.forums=[]
//       })
//   }
//   onPost(){
//     let obj ={
//       "usernmae":sessionStorage.getItem("username"),
//       "comment":this.com
//     }
//     this.fs.postForum(obj).subscribe({
//       next:()=>alert("successfully Posted"),
//       error:()=>alert("Error on posting")
//     })
//     window.location.reload()
//   }
// }
}