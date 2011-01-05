/***
!Usage
{{{
<<uploadToTiddlySpace spaceName>>
}}}
!Code
***/
//{{{
(function($) {

var defaults = {
	changecount: "1",
	"server.host": "http://tiddlyspace.com",
	"server.type": "tiddlyweb",
	"server.workspace": "recipes/%0_public"
};

if(!config.adaptors.tiddlyweb) {
	throw "Missing dependency: TiddlyWebAdaptor";
}

config.macros.uploadToTiddlySpace = {
	handler: function(place, macroName, params, wikifier, paramString, tiddler) {
		var space = params[0];
		var btn = createTiddlyButton(place, "upload", "upload to TiddlySpace",
			this.onClick);
		$(btn).data("space", space);
	},
	onClick: function(ev) {
		var space = $(this).data("space");
		store.forEachTiddler(function(title, tiddler) {
			$.extend(tiddler.fields, defaults);
			tiddler.fields["server.workspace"] = defaults["server.workspace"].
				format([space]);
		});
		displayMessage("go forth and sync");
	}
};

})(jQuery);
//}}}
