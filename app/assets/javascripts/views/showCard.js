TrelloClone.Views.showCard = Backbone.View.extend({
	template: JST["cards/show"],
	tagName: "li",
	className: "cardcard",
	
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
		this.remove();
	}
})