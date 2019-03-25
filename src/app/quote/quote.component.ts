import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = "Welcome to Quotes"

  quotes = [
  new Quote(1,"Let the people mask you such that you become one with the crowd.","Al muamin","leo",0,0,new Date(2019,2,23)),
  new Quote(2,"Do we bend the rules in service to a greater good? And if we do, what does it say of us?","Altaïr's Codex", "kevo",0,0,new Date()),
  new Quote(3,"For if nothing is true, then why believe anything? And if everything is permitted... why not chase every desire?", "Edward Kenway to the Mentor Ah Tabai, 1722", "Tom",0,0, new Date())
]
toggleDetail(index){
  this.quotes[index].showDescription=!this.quotes[index].showDescription
}

  constructor() { }

  ngOnInit() {}

}
