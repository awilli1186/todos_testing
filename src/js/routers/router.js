import $ from 'jQuery';
import {_} from 'underscore';
import Backbone from 'backbone';



  let TodoRouter = Backbone.Router.extend({
    routes: {
      '*filter': 'setFilter'
    },

    setFilter: function(param) {
      Todo.app.listView.collection.trigger('filter', param);
    }
  });

  export default new TodoRouter();
