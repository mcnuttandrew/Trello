window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new TrelloClone.Routers.router($("#content"));
		Backbone.history.start();
	}
};

