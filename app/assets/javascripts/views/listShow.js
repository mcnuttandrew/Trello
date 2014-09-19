TrelloClone.Views.listShow = Backbone.CompositeView.extend({
	template: JST["lists/show"],
	

	
	initialize: function(){
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.cards(), "add", this.addCard);
		this.listenTo(this.model.cards(), "remove", this.removeCard);
		
		var cardNewView = new TrelloClone.Views.newCard({model: this.model});
		this.addSubview(".new-card", cardNewView);
		this.model.cards().each(this.addCard.bind(this));	
	},
	
	
	render: function(){
		var renderedContent = this.template({ model: this.model});
		this.$el.html(renderedContent);
		this.attachSubviews();
		return this;
	},
	
	addCard: function(card){
		var CardsShow = new TrelloClone.Views.showCard({model: card});
		this.addSubview(".cards", CardsShow);
	},
	
	removeCard: function(card){
		var subview = _.find(
			this.subviews(".cards"), function(subview){
				return subview.model === card;
			}
		);
		this.removeSubview(".cards", subview);
	},

	
})