import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  public show:number=0;
  @Input() name:any;
  @Input() nativeName:any;
  @Input() capital:any;
  @Input() altNames:any;
  @Input() translations:any;
  public translationKeys:any;
  constructor() { }

  ngOnInit() {
    this.translationKeys= Object.keys(this.translations)
  }
}
