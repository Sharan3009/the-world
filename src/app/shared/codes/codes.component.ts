import { Component, OnInit, Input} from '@angular/core';
import{ Codes } from './codes';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit,Codes {
  @Input() alpha2Code
  @Input() alpha3Code
  @Input() numericCode
  @Input() callingCodes
  @Input() currencies
  @Input() topLevelDomain

  constructor() { }

  ngOnInit() {
  }
}
