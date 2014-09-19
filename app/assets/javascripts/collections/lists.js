TrelloClone.Collections.Lists = Backbone.Collection.extend({
	model: TrelloClone.Models.List,
	comparator: function(list){ 
		return list.ord;//possibly wrong
	},
	url: "api/lists",
	
			
	getOrFetch: function(id){
		var lists = this;
		var list;
		if(list = this.get(id)){
			list.fetch();
		} else {
			list = new TrelloClone.Models.List({id: id});
			list.fetch({
				success: function(){lists.add(list);}
			}); 
		}
		return list;
	}
})
//in our example this is commented out, should it be here?
 TrelloClone.Collections.lists = new TrelloClone.Collections.Lists();