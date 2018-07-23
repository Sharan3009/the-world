import { Component, OnInit, Input } from '@angular/core';
import { Languages } from './languages';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit,Languages {
  public nativeLanguage:any;
  @Input() languages=[];
  constructor() { }

  ngOnInit() {
    this.nativeLanguage = this.languages[0]
  }

}
