export class PositionSettings {
    Name: string;
    MarginLeft: string;
    MarginTop: string;
    IsSelected: boolean;

    constructor(name: string, marginLeft: number,marginTop: number, isSelected: boolean)
    {
        this.Name = name;
        this.MarginLeft = marginLeft+"px";
        this.MarginTop = marginTop+"px";
        this.IsSelected = isSelected;
    }
}