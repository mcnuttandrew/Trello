TrelloClone.Views.newBoard = Backbone.View.extend({
	template: JST["boards/form"],
	
	events: {
		"submit form.board-submit": "submit"
	},
	
	render: function() {
		var renderedContent = this.template({ model: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	
	submit: function(event){
		// debugger;
		// event.preventDefault();
		var formData = $(event.currentTarget).serializeJSON();
		var that = this;
		this.model.set(formData);
		this.collection.create(formData, {
			success: function(){
				Backbone.history.navigate("/", {trigger: true});
			},
			error: function(){
				//maybe wrong div 
				that.$el.find(".errors").append(response.responseJSON);
			}
		});
	},
	
})