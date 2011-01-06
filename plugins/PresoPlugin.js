/***
|''Description:''|Cecily Tweaks for the Confused of Calcutta presentation|
|''Author:''|PaulDowney (psd (at) osmosoft (dot) com) |
!!Code
***/
//{{{
/*jslint onevar: false nomen: false plusplus: false */
/*global config Cecily */
(function ($) {

	Cecily.backgrounds.white = {
		title: "White",
		description: "White",
		drawBackground: function (canvas, view) {
			var w = canvas.width;
			var h = canvas.height;
			var ctx = canvas.getContext('2d');
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, w, h);
		}
	};

	setStylesheet(store.getRecursiveTiddlerText("StyleSheet"),"cecily");

	if (!config.options.txtCecilyBackground || config.options.txtCecilyBackground == "plain") {
		config.options.txtCecilyBackground = "white";
	}

	//config.options.txtCecilyMap = "EmptyMap";
	config.options.txtCecilyMap = "ConfusedMap";

	merge(config.views.wikified.tag, {
		labelNoTags: "",
		labelTags: ""
	});
	config.macros.tagging.label = "";
	config.macros.tagging.labelNotTag = "";

	Cecily.prototype.startHightlight = function(elem) { 
		return;
	};

	Cecily.prototype._scrollToTiddler = Cecily.prototype.scrollToTiddler;
	Cecily.prototype.scrollToTiddler = function(tiddler) {
		story.currentTiddler = tiddler;
		var tiddlerElem = story.findContainingTiddler(tiddler);
		if (tiddlerElem && tiddlerElem.getAttribute) {
			story.currentTiddler = tiddlerElem.getAttribute("tiddler");
		}
		return this._scrollToTiddler(tiddler);
	};

	Cecily.prototype.zoomOut = function() {
		var currRect = this.viewer.viewBounds;
		this.startScroller([currRect.scale(1.1)]);
	};

	Cecily.prototype.zoomIn = function() {
		var currRect = this.viewer.viewBounds;
		this.startScroller([currRect.scale(0.9)]);
	};


})(jQuery);
//}}}
