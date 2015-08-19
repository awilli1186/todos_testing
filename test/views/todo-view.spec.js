import jQuery from 'jquery';
import {_} from 'underscore';
import $ from 'jquery';

 import TodoView from '../../src/js/views/todo-view';
 import TodoModel from '../../src/js/models/todo';

describe('TodoView', function(){
  beforeEach(function(){
    this.model = new TodoModel;

    this.view = new TodoView({
      model: this.model
    });

    this.view.render();
  });

  it('should switch to edit when clicked', function(){
    let input = $('.toggle');
    spyOn(input, 'toggle');
    let e = jQuery.Event('click');

    input.toggle(e);
    expect(input.toggle).toHaveBeenCalled();
    });

  it('should run onEdit() when label is dblclicked', function(){
    let label = $('label');
    spyOn(label, 'addClass');
    let e = jQuery.Event('dblclick');

    label.addClass(e);
    expect(label.addClass).toHaveBeenCalled();
  });

  it('should run onClose() on blur', function(){
    let label = $('.edit');
    spyOn(label, 'removeClass');
    let e = jQuery.Event('blur');

    label.removeClass(e);
    expect(label.removeClass).toHaveBeenCalled();
  });

  it('should escape change when esc is pressed.', function(){
    let input = this.view.$('.toggle');
    input.val('test title');
    let title = input.val('');
    let e = jQuery.Event('keypress', {keycode: 27});

    input.trigger(e);
    expect(this.model.get('title')).toEqual('');
  });

  it('should close when enter is pressed.', function(){
    let input = this.view.$('.toggle');
    input.val('test title');
    let title = input.val('');
    let e = jQuery.Event('keyup', {keycode: 13});

    input.trigger(e);
    expect(this.model.get('title')).toEqual('');
    });

  it('should update title text on enter', function() {
    let $input = this.view.$('.edit');
    let title = $input.val();
    let e = jQuery.Event('keyup', {keycode: 13} );
    $input.val(title);
    $input.trigger(e);

    expect(this.model.get('title')).toEqual(title);
  });
  });
