import { Component, OnInit } from '@angular/core';
import{ ClubService} from './club.service'

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  constructor(private clubservice:ClubService) { }

  ngOnInit(): void {
    this.getAllclubs()
  }
  

   employees
  getAllclubs(){
    this.clubservice.clubDetails().subscribe(res=>{
      this.appendClubs(res)
      // console.log(res)
    },err=>{
      console.log(err)
    })  
  }
  clubsdata=[];
  appendClubs(res){
    let data=Object.entries(res)
    for(let i=0;i<data.length;i++){
      this.clubsdata.push(data[i][1])
    }
    console.log(this.clubsdata)
  }

}
