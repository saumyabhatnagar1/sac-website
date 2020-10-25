import { WriteusService } from './writeus.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-writeus',
  templateUrl: './writeus.component.html',
  styleUrls: ['./writeus.component.css']
})
export class WriteusComponent implements OnInit {

  constructor(private writeusservice:WriteusService) { }

  ngOnInit(): void {
  }
  public feedbackForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    query:new FormControl('')
  })
  newFeedback(){
    let name=this.feedbackForm.get('name').value
    let email=this.feedbackForm.get('email').value
    let query=this.feedbackForm.get('query').value
    let data={
      "name":name,
      "email":email,
      "query":query
    }
    //Uncomment to send mails to SAC

    // this.writeusservice.newFeedback(data).subscribe((res)=>{
    //   console.log(res)
    // },err=>{
    //   console.log(err)
    // })


    //console.log(data)
  }

}
