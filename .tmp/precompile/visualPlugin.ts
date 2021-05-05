import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCardFCB109608B094EAAA36F8A7089B30A55: IVisualPlugin = {
    name: 'circleCardFCB109608B094EAAA36F8A7089B30A55',
    displayName: 'CircleCard',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCardFCB109608B094EAAA36F8A7089B30A55"] = circleCardFCB109608B094EAAA36F8A7089B30A55;
}

export default circleCardFCB109608B094EAAA36F8A7089B30A55;