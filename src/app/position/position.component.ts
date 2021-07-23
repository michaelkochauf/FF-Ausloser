import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  @Input("positionName")
  public positionName:string;
  
  public isNumberShown:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNumber()
  {
    this.isNumberShown = true;
  }

}
