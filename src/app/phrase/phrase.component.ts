import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent implements OnInit {
  integer=0
  string=""
  qa=""
  qb=""
  constructor(private route:ActivatedRoute){
		this.route.params.subscribe(data=>{
      console.log(data["integer"])
			this.integer=(data["integer"])
			this.string=data["string"]
		})

    this.route.queryParams.subscribe(data=>{
			this.qa=data["qa"]
			this.qb=data["qb"]
		})
	}

  ngOnInit(): void {
  }

}
