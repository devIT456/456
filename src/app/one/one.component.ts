import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  item={
    "string":"chaine",
    "integer":15
  }

  tab=["hi","hello"]
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gopath(path:string){
    console.log(path)
    this.route.navigate([path])
  }

}
