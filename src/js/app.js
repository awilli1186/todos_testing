import $ from 'jQuery';
import {_} from 'underscore';
import Backbone from 'backbone';

import AppView from './views/app-view';

var app = new AppView();
  app.render();
  Backbone.history.start();
