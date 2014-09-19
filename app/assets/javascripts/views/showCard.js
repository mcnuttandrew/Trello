TrelloClone.Views.showCard = Backbone.View.extend({
	template: JST["cards/show"],
	
	events: {
		"click .delete-card": "removeCard"
	},
	
	render: function(){
		var renderedContent = this.template({ model: this.model });
		this.$el.html(renderedContent);
		return this;
	},
	
	
	removeCard: function(){
		event.preventDefault();
		this.model.destroy();
	}
})