import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {
  @Input() alpha2Code:any;
  @Input() alpha3Code:any;
  @Input() numericCode:any;
  @Input() callingCodes:any;
  @Input() currencies:any;
  @Input() topLevelDomain:any;

  constructor() { }

  ngOnInit() {
  }
}
