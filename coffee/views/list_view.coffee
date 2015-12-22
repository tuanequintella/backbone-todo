class ListView extends Backbone.View
  el: $ 'body'

  initialize: ->
    _.bindAll @
    @collection = new List
    @collection.bind 'add', @appendItem

    @counter = 0
    @render()

  events: 'click button': 'addItem'

  render: ->
    $(@el).append '<button>Add List Item</button>'
    $(@el).append '<ul></ul>'

  addItem: ->
    @counter++
    item = new Item
    item.set(part2: item.get('part2') + " " + @counter) #modify defaults
    @collection.add item

  appendItem: (item) ->
    item_view = new ItemView model: item
    $('ul').append item_view.render().el
