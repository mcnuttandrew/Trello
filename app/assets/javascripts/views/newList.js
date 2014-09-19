TrelloClone.Views.newList = Backbone.CompositeView.extend({
	template: JST["lists/new"],
	
	events: {
		"submit form": "submit"
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
		var newList = new TrelloClone.Models.List({board_id: this.model.id});
		
		newList.set(formData);
		
		newList.save({}, {
			success: function(){
				that.model.lists().add(newList);
				that.render();
			},
			error: function(response){
				$(".error").append(response.responseJSON);
			}
		});
	},
	
	
})