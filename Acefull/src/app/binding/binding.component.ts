import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent  {

  employees: any[]=[
    {
      "fname":"Mona",
      "lname":"Darling",
      "Age":45
    },
    {
      "fname":"Cyril",
      "lname":"D'cruz",
      "Age":22
    },
    {
      "fname":"Travis",
      "lname":"Scott",
      "Age":29
    },
    {
      "fname":"Man",
      "lname":"Shaft",
      "Age":48
    }
  ]
}
