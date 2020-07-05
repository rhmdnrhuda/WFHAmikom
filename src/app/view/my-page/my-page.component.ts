import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  title = "Halo semua"
  value = ""
  data = [
    {name: "Huda", age:17},
    {name: "Hell Boy", age:17},
  ]

  joke=""

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getJoke()
  }

  onInput(event){
    console.log(event.target.value)
    this.value = event.target.value
  }

  getJoke(){
    console.log("Hello")
    this.getData().subscribe(
      res => {
        console.log(res)
        // if (res.type == "success"){
        //   this.joke = res.value.joke
        //   console.log(this.joke)
        // }
      }
    )
  }

  getData(): Observable<any>{
    return this.http.get("https://api.kawalcorona.com/indonesia")
  }

}
