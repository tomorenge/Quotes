import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quote'


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:Quote;

  upVote=0;
  downVote=0;
  constructor() { }

  ngOnInit() {
  }

}
