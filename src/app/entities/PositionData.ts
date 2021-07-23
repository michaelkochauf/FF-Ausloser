export class PositionData {
    Name: string;
    MarginLeft: string;
    MarginTop: string;

    constructor(name: string, marginLeft: number,marginTop: number)
    {
        this.Name = name;
        this.MarginLeft = marginLeft+"px";
        this.MarginTop = marginTop+"px";
    }
}