TrelloClone.Views.listShow = Backbone.View.extend({
	template: JST["lists/show"],
	
	render: function(){
		var renderedContent = this.template({ model: this.model });
		this.$el.html(renderedContent);
		return this;
	}
	
})