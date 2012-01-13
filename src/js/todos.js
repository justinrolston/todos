var Todo = Backbone.Model.Extend({});
var Todos = Backbone.Collections.Extend({model:Todo});

var TodosView = Backbone.View.Extend({el:"#todos"});
var TodoEntry = Backbone.View.Extend({
  el:"#new-todo",
  events:{
    "keypress": "create"
  },
  create:function(e){
    e.preventDefault();
    if(e.which == 13){
      todos.add({text:el.val()});
    }
  };
});

var TodoView = Backbone.View.Extend({
  tagName:"li",
  template:_.template({{text}}),
  render:function(){
    this.el.append(template(model.toJson()));
    return this.el;
  }
});

$(function(){
  
});
