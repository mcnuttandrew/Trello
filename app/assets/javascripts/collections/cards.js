TrelloClone.Collections.Cards = Backbone.Collection.extend({
	url: "api/cards",
	model: TrelloClone.Models.Card,
	comparator: function(card){
		return card.ord
	},
				
	getOrFetch: function(id){
		var cards = this;
		var card;
		if(card = this.get(id)){
			card.fetch();
		} else {
			card = new TrelloClone.Models.Card({id: id});
			card.fetch({
				success: function(){cards.add(card);}
			}); 
		}
		return card;
	}
	
})