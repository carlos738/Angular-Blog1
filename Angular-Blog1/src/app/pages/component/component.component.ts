import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  photoCover:string = ""
  contentTitle = ""
  contentDescription =""

  private Id:string | null = "0"

  constructor(
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
      this.Id = value.get("id")
    )
    this.setValuesToComponent(this.Id)
  }
  setValuesToComponent(Id:string | null){
    const result = dataFake.filter(article => article.id.toString() ==
    Id)[0]
     this.contentTitle = result.title
      //console.log(result)
     this.contentDescription = result.description
     this.photoCover = result.photoCover


  }

}
