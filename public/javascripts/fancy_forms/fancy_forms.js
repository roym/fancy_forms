var FancyForms = Class.create({
  initialize: function(){
    this.buttons = $$('a.fancy_form_button');
    this.bind_buttons();
    
    this.text_fields = $$('input.text_field');
    this.set_text_field_behaviour(this.text_fields);
  },

  set_text_field_behaviour: function(text_fields){
    text_fields.each(function(text_field){
        if(text_field.hasClassName("only_numbers")) text_field.observe('keypress', this.only_allow_numbers.bind(this));;
    }, this);
  },

  only_allow_numbers: function(event){
    //event.stop();

    keycode = window.event ? window.event.keyCode : event.which;
    if (keycode > 31 && (keycode < 48 || keycode > 57)) {
      event.stop();
    }
  },

  bind_buttons: function(){
    this.buttons.each(function(button){
      button.observe('mousedown', this.button_mouse_down_event.bind(this));
      button.observe('mouseup', this.button_mouse_up_event.bind(this));
      button.observe('mouseout', this.button_mouse_up_event.bind(this));
      button.observe('click', this.button_click_event.bind(this));
      this.disableSelection(button);
    }, this);

    $$('a.fancy_form_link_button').each(function(button){
      button.observe('mousedown', this.button_mouse_down_event.bind(this));
      button.observe('mouseup', this.button_mouse_up_event.bind(this));
      button.observe('mouseout', this.button_mouse_up_event.bind(this));
      this.disableSelection(button);
    },this);

  },

  button_mouse_down_event: function(event){
    element = event.element();
    element = element.tagName == "A" ? element : element.up();
    element.addClassName("click");
  },

  button_mouse_up_event: function(event){
    element = event.element();
    element = element.tagName == "A" ? element : element.up();
    element.removeClassName("click");
  },

  valid_form: function(form){
    return form.select("input.text_field.required").all(function(text_field){
      return text_field.value != "";
    });
  },

  button_click_event: function(event){
    if( this.valid_form(event.element().up('form')) ){  
      event.element().up('form').submit();
    } else {
      Dialog.showNotification('Velden error', 'Niet alle velden zijn gevuld');
    }
  },

  disableSelection: function(target){
    if (typeof target.onselectstart!="undefined") //IE route
    	target.onselectstart=function(){return false}
    else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
    	target.style.MozUserSelect="none"
    else //All other route (ie: Opera)
    	target.onmousedown=function(){return false}
    target.style.cursor = "default"
  }
  
});

document.observe("dom:loaded", function(event){
  fancy_forms = new FancyForms();
});
