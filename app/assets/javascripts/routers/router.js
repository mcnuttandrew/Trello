TrelloClone.Routers.router = Backbone.Router.extend({
	routes: {
			"": "indexBoard",
			"new": "newBoard",
			"boards/:id": "showBoard"
		},
	
	initialize: function(el){
		this.$rootEl = el;
	},
	
	indexBoard: function(){
		TrelloClone.Collections.boards.fetch();
		var _collect = TrelloClone.Collections.boards;
		var renderedView = new TrelloClone.Views.boardsIndex({ collection: _collect});
		this.$rootEl.html(renderedView.render().$el)
	},
	
	newBoard: function(){
		var _collect = TrelloClone.Collections.boards;
		var _model = new TrelloClone.Models.Board();
		var renderedView = new TrelloClone.Views.newBoard({
			collection: _collect,
			model: _model
		});
		(this.$rootEl).html(renderedView.render().$el)
	},
	
	showBoard: function(id){
		var _model = TrelloClone.Collections.boards.getOrFetch(id);
		var renderedView = new TrelloClone.Views.showBoard({ model: _model});
		(this.$rootEl).html(renderedView.render().$el);
	}
	
})