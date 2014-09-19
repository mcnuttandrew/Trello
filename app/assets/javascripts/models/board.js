TrelloClone.Models.Board = Backbone.Model.extend({
	urlRoot: "/api/boards",
	
	lists: function(){
		//refactor once functioning
		// if(this._lists){
// 			return this._lists;
// 		} else {
// 			this._lists = new TrelloClone.Collections.Lists([], {board: this});
// 			return this._lists;
// 		}

		this._lists = this._lists || new TrelloClone.Collections.Lists([], { list: this });
    if(this._lists.length > 0){
			 this._lists = this._lists.sort();
		}
		return this._lists;
	},
	
	parse: function(payload){
	    if (payload.lists) {
	      this.lists().set( payload.lists, {parse: true});
	      delete payload.lists;
	    }
	    return payload;
	  },
});