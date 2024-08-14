import AssetActionPlugin from "../AssetActionPlugin";
import URI from 'urijs';
import i18n from "../../i18n";

const POTREE_SUPPORTED_TYPES = [
  'application/vnd.laszip+copc',
  'text/javascript',
  'application/json',
];
  
export default class Potree extends AssetActionPlugin {

  get show() {
    return this.component.isBrowserProtocol && POTREE_SUPPORTED_TYPES.includes(this.asset.type);
  }

  get uri() {
    // Docs: PR made to original potree repo to avoid relying on iconem own infrastructure
    // https://github.com/potree/potree/pull/1456
    let uri = new URI("https://3d.iconem.com/tools/load_potree_project_from_urlparam.html");
    uri.addQuery('fit', true);

    const datasetUrl = this.component.href;
    const potreeProject = {
        "type": "Potree",
        "version": 1.7,
        "pointclouds": [
            {
                "url": datasetUrl,
                "name": "Potree or COPC dataset",
                "position": [0, 0, 0],
                "rotation": [0, 0, 0, "XYZ" ],
                "scale": [1, 1, 1],
                "activeAttributeName": "rgba"
            }
        ],
        "settings": {
            "pointBudget": 1000000,
            "fov": 60,
            "edlEnabled": true,
            "edlStrength": 0.4,
            "background": "gradient",
        },
        "measurements": [],
        "volumes": [],
        "cameraAnimations": [],
        "profiles": [],
        "annotations": [],
        "objects": [],
        // view can be anything since it is overwritten via url-param fit=true
        "view": {
            "position": [ 10, 10, 10 ],
            "target": [ 0, 0, 0 ]
        },
    };
    uri.addQuery('potreeProjectJson', JSON.stringify(potreeProject));
    return uri;
  }

  get uri2() {
    // Could also use directly Darren Wiens app, which works eg with IGN COPC: 
    let uri = new URI("https://mpc-copc-viewer.netlify.app");
    uri.addQuery('c', 'rgba');
    uri.addQuery('r', this.component.href);
    // color type can be among rgba, elevation, color, elevation, etc
    // potree_cloud_js_url = https://potree.org/potree/pointclouds/vol_total/cloud.js
    // potree_darren_wiens_url = `https://mpc-copc-viewer.netlify.app/?r=${potree_cloud_js_url}&c=rgba`
    return uri;
  }

  get text() {
    return i18n.t('actions.openIn', {service: 'potree.org'});
  }

}