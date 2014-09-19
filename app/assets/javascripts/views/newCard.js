TrelloClone.Views.newCard = Backbone.View.extend({
	template: JST["cards/new"],
	
	events: {
		"submit form.card-submit": "submit"
	},
	
	render: function(){
		var renderedContent = this.template({ model: this.model});
		this.$el.html(renderedContent);
		return this;
	},
	
	submit: function(event){
		event.preventDefault();
		var formData = $(event.currentTarget).serializeJSON();
		var that = this;

		var newCard = new TrelloClone.Models.Card({
			list_id: this.model.id,
			board_id: this.model.board_id
		});
		
		newCard.set(formData);
		
		newCard.save({}, {
			success: function(){
				that.model.cards().add(newCard);
				that.render();//might be pointed wrong
			},
			error: function(response){
				$(".errors").append(response.responseJSON);
			}
		});
		
	}
})