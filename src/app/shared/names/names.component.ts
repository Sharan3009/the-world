import { Component, OnInit, Input } from '@angular/core';
import { Names } from './names';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit, Names {
  // taking input from the parent component
  public show: number = 0; // to display translations on the click of show more
  @Input() name: any;
  @Input() nativeName: any;
  @Input() capital: any;
  @Input() altNames: any;
  @Input() translations: any;
  public translationKeys: any; // extracting keys from the object for iterating thorugh it
  constructor() { }

  ngOnInit() {
    this.translationKeys = Object.keys(this.translations)
  }
}
