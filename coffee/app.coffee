jQuery ->
  Backbone.sync = (method, model, success, error) ->
    success()

  list_view = new ListView
