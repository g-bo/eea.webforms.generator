'use strict';
//TODO - Inform the form user regarding remaining fields to be completed and its requirements.
app.component("eeaFormValidation", {
	template: '<div id="eeavalidation"></div>',
	bindings: {
		scp: '='
	},
	controller: [function() {
		var parent = this;
		this.$onInit = function() {
		};
		this.validate = function() {
			$("form.eeaform").each(function(){
				$(this).find('.formitem :input').each(function(index, item){
					// filter: only empty fields

					// get element's title
					// get element's type (numeric, date etc)
					// get def="" attribute content and translate it (instructions)
					// $(item).attr("def"));					

					// append row to #eeavalidation div
				});
			});
		};
		this.updateLookup = function() {
		};
	}]
});