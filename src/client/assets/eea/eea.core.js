'use strict';

/**
/ EEA Core
*/
var eea = {
	settings: {
		component_path : "./assets/components/"
	},
	Components : {
		getAll : function(scripts) {
			eea.Loader.getAllJS(scripts, this.component_path);
		},
	},
	Loader  : {
		getAllJS : function(scripts, path) {
			var path  = path || "";
			scripts.forEach(function(script) {
				eea.Loader.getJS(path + script);
			})
		},
		getJS : function(script) {
			var oXmlHttp = new XMLHttpRequest();
			oXmlHttp.onreadystatechange = function() {
				if (oXmlHttp.readyState == 4) {
					if (oXmlHttp.status == 200 || oXmlHttp.status == 304)
						eea.Loader.includeJS(script, oXmlHttp.responseText);
				}
			}
			oXmlHttp.open('GET', script, false);
			oXmlHttp.send(null);
		},
		includeJS : function (fileUrl, source) {
			var script = document.createElement("script");
			script.language = "javascript";
			script.type = "text/javascript";
			script.defer = true;
			script.text = source;
			document.getElementsByTagName('HEAD').item(0).appendChild(script);
		}
	}
}