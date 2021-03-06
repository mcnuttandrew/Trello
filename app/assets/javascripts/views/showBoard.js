TrelloClone.Views.showBoard = Backbone.CompositeView.extend({
	template: JST["boards/show"],
	
	events: {
		"click .remove-button": "removeBoard"
	},
	
	initialize: function(){
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add", this.addList);
		this.listenTo(this.model.lists(), "remove", this.removeList);
		
		var listNewView = new TrelloClone.Views.newList({model: this.model});
		this.addSubview("#submenu", listNewView);
		this.model.lists().each(this.addList.bind(this));
	},

	render: function(){
		var renderedContent = this.template({ model: this.model});
		this.$el.html(renderedContent);
		this.attachSubviews();
		this.$(".lists").sortable();
		this.onRender();
		return this;
	},

	// onRender: function(){
// 		this.$(".lists").sortable({
// 			connectWith: ".lists"
// 		})
// 	},
	
	removeBoard: function(event){
		event.preventDefault();
		this.model.destroy();
		Backbone.history.navigate("/", {trigger: true});
	},
	
	addList: function(list){
		var ListsShow = new TrelloClone.Views.listShow({model: list});
		this.addSubview(".lists", ListsShow);
	},
	
	removeList: function(list){
		var subview = _.find(
			this.subviews(".lists"), function(list){
				return subview.model === list;
			}
		);
		this.removeSubview(".lists", subview);
	},
	
})