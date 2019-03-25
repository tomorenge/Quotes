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
  new Quote(1,"lorem ipsum","Sir Newton","leo",0,0,new Date()),
  new Quote(2,"lorem ipsumtwo","Sir Newton", "kevo",0,0,new Date()),
  new Quote(3,"lorem ipsumthree", "Sir Newton", "Tom",0,0, new Date())
]

  constructor() { }

  ngOnInit() {}

}
