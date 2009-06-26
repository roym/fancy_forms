document.observe("dom:loaded", function(){
	var config = {
		button_class: "fancy_form_button",
		link_class: "fancy_form_link_button",
		text_field_required_class: "input.text_field.required",
		click_class: "click"
	}
	
	any_match = function(arr1, arr2){
		found = false
		
		for(var i = 0, ilen = arr1.length; i < ilen; i++){
			if( found == true ) break;
			
			for( var j = 0, jlen = arr2.length; j < jlen; j++){
				if( found == true ) break;
				
				found = (arr1[i] == arr2[j]);
			}
		}
		
		return found;	
	}
	
	getElement = function(element) {
    return element.tagName == "A" ? element : element.up();		
	}
	
	document_click = function(event) {
		element = getElement(event.element());

		if( element.hasClassName(config.button_class) ){
			button_click_event(event);
		}
	}
	
	document_mousedown = function(event) {
		element = getElement(event.element());
		
		if( any_match( $w(element.className), [config.button_class, config.link_class]) ){
			element.addClassName(config.click_class);
		}
	}
	
	document_mouseup = function(event) {
		element = getElement(event.element());

		if( any_match( $w(element.className), [config.button_class, config.link_class]) ){
			element.removeClassName(config.click_class);
		}
	}

	valid_form = function(form){
    return form.select(config.text_field_required_class).all(function(text_field){
      return text_field.value != "";
    });
  }

	button_click_event = function(event){
		if( valid_form(event.element().up('form')) ){  
      event.element().up('form').submit();
    } else {
      Dialog.showNotification('Velden error', 'Niet alle velden zijn gevuld');
    }
	}
	
	disableSelection = function(target){
    if (typeof target.onselectstart!="undefined") //IE route
    	target.onselectstart=function(){return false}
    else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
    	target.style.MozUserSelect="none"
    else //All other route (ie: Opera)
    	target.onmousedown=function(){return false}
    target.style.cursor = "default"
  }
	
	document.observe("click", document_click);
  document.observe('mousedown', document_mousedown);
  document.observe('mouseup', document_mouseup);
  document.observe('mouseout', document_mouseup);

	$$("." + config.button_class + ", ." + config.link_class).each( function(button){
		disableSelection(button);
	});
});