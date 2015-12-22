class Item extends Backbone.Model
  defaults:
    part1: 'Hello'
    part2: 'Backbone'

class List extends Backbone.Collection
  model: Item
