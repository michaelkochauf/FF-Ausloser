import { Component, OnInit } from '@angular/core';
import { PositionData } from '../entities/positionData';
import { PositionSettings } from '../entities/PositionSettings';

@Component({
  selector: 'main-ausloser',
  templateUrl: './main-ausloser.component.html',
  styleUrls: ['./main-ausloser.component.scss']
})
export class MainAusloserComponent implements OnInit {

  private staticPossiblePositions: Array<string> = new Array("GRKD","MS","MLD","1","2","3","4","5","6");
  private reserveLeute:number = 0;

  public positions:Array<PositionData> = new Array<PositionData>();
  private possiblePositions: Array<string> = new Array("GRKD","MS","MLD","1","2","3","4","5","6");
  public possibleForSelection: Array<PositionSettings>;
  public displaySettings = false;

  public selectionMarginLeft: string;
  public selectionMarginTop: string;
  public settingsHeight:string;
  public settingsWidth:string;
  public positionsContainerWidth:string;

  ngOnInit(): void {
   this.setupSettings(); 
  }

  private setupSettings()
  {
    let columns: number;
    
    if(window.innerHeight > window.innerWidth)
    {
      this.settingsHeight = "550px";
      this.settingsWidth = "325px";
      columns = 3;
    }
    else
    {
      this.settingsHeight = "324px";
      this.settingsWidth = "520px";
      columns = 5;
    }
    this.possibleForSelection = new Array<PositionSettings>();

    let marginLeftCounter:number = 0;
    let marginTopCounter:number = 0;
    for(let i:number =0; i<this.staticPossiblePositions.length;i++)
    {
      if((i%columns)==0 && i != 0)
      {
        marginTopCounter += 100;
        marginLeftCounter = 0;
      }
      let positionData:PositionSettings = new PositionSettings(this.staticPossiblePositions[i],marginLeftCounter,marginTopCounter,true);
      this.possibleForSelection.push(positionData);
      marginLeftCounter += 100;
    }

    if(columns != 3)
    {
      this.selectionMarginLeft = (marginLeftCounter)+"px";
      this.selectionMarginTop = (marginTopCounter)+"px";
    }    
    else
    {
      this.selectionMarginTop = (marginTopCounter+100)+"px";
    }
  }

  public selectPositionSetting(positionSetting: PositionSettings)
  {
    this.possibleForSelection.find(x=> x.Name == positionSetting.Name).IsSelected = !positionSetting.IsSelected;
  }

  public saveSettings(reserveLeute: number)
  {
    this.reserveLeute = reserveLeute;
    this.displaySettings = false;
    this.clear();
  }

  private fillPossiblePositions()
  {
    this.possiblePositions = new Array<string>();
    this.possibleForSelection.forEach(element => {
      if(element.IsSelected)
      {
        this.possiblePositions.push(element.Name);
      }
    });
  }

  private getColumns():number
  {
    let columns: number;
    if(window.innerHeight > window.innerWidth)
    {
      this.positionsContainerWidth = "340px";
      columns = 3;
    }
    else
    {
      this.positionsContainerWidth = "700px";
      columns = 6;
    }
    return columns;
  }

  public generate() {
    this.clear();
    
    let columns: number = this.getColumns();
    
    if(this.reserveLeute>0)
    {
      for(let i:number = 0;i<this.reserveLeute;i++)
      {
        this.possiblePositions.push("RES");
      }
    }

    let count:number = this.possiblePositions.length;

    let marginLeftCounter:number = 0;
    let marginTopCounter:number = 0;
    for(let i:number = 0; i<count;i++)
    {
      if((i%columns)==0 && i != 0)
      {
        marginTopCounter += 120;
        marginLeftCounter = 0;
      }
      let random:number = Math.trunc(Math.random()*this.possiblePositions.length);
      let positionData:PositionData = new PositionData(this.possiblePositions[random],marginLeftCounter,marginTopCounter);
      this.positions.push(positionData);
      this.possiblePositions.splice(random,1);
      marginLeftCounter += 120;
    }
    
  }

  public clear() {
    this.positions = new Array<PositionData>();
    this.fillPossiblePositions();
  }

  public openSettings()
  {
    this.setupSettings();
    this.displaySettings = true;
  }

}
