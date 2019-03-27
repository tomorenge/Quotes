import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote=new Quote(0,"","","",0,0,new Date());


    @Output() addQuote=new EventEmitter<Quote>();

    submitQuote(){
        this.addQuote.emit(this.newQuote)

        console.log(this.newQuote)
      }

  constructor() { }

  ngOnInit() {
  }

}
