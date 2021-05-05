import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
export declare class CircleSettings {
    circleColor: string;
    circleThickness: number;
}
export declare class VisualSettings extends dataViewObjectsParser.DataViewObjectsParser {
    circle: CircleSettings;
}
export declare class dataPointSettings {
    defaultColor: string;
    showAllDataPoints: boolean;
    fill: string;
    fillRule: string;
    fontSize: number;
}
