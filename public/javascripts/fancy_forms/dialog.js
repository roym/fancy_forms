var Dialog = {
  show: function(title, content, options){
    options = options || {};
    var overlay = this.getOverlay();
    var dialog = this.getDialog();

    $$('.close_button').first().observe('click', function(button){
      $('overlay').remove();
      $('dialog').remove();
    });

    $('dialog_title').update(title);
    $('dialog_content').update(content);

    if( options.size != undefined ) $('dialog').addClassName(options.size);

    overlay.show();

    if( options.style != undefined ){
      if( options.style == "shake") {
        dialog.shake({duration: .5, distance: 10});
        dialog.appear({duration: .4});
      }
    } else {
      dialog.show();
    }
  },

  showPDF: function(title, content){
    Dialog.show(title, '<embed width="964" height="550" src="'+content+'#toolbar=1&navpanes=0&scrollbar=1"/>');
  },

  showNotification: function(title, content){
    var template = "<div class=\"icon exclamation\"></div><div class=\"notification_content\">" + content + "</div><div class=\"clear_left\"></div>";
    Dialog.show(title, template, {size: 'notification', style: 'shake'});
  },

  getOverlay: function(){
    if($('overlay')){ return $('overlay'); }

    var template = "<div class=\"overlay\" id=\"overlay\" style=\"display:none;\"></div>";

    Element.insert(document.body, {bottom: template});  
    //document.body.insert({ bottom: template });
    return $('overlay');
  },

  getDialog: function(){
    if($('dialog')){ return $('dialog'); }


    var template =  "<div class=\"dialog\" id=\"dialog\" style=\"display:none;\">" +
    "  <div class=\"top-left-edge\"></div>" +
    "  <div class=\"top-edge\"></div>" +
    "  <div class=\"top-right-edge\"></div>" +
    "  <div class=\"left-edge\"></div>" +
    "  <div class=\"right-edge\"></div>" +
    "  <div class=\"bottom-left-edge\"></div>" +
    "  <div class=\"bottom-edge\"></div>" +
    "  <div class=\"bottom-right-edge\"></div>" +
    "  <div class=\"dialog_header\">" +
    "    <div class=\"close_button\"></div>" +
    "    <div id=\"dialog_title\"></div>" +
    "  </div>" +
    "  <div class=\"dialog_content\" id=\"dialog_content\"></div>" +
    "</div>";

    Element.insert(document.body, {bottom: template});  
    /* document.body.insert({ bottom: template }); */
    return $('dialog');

  }
};

document.observe("dom:loaded", function(){
  $$("a.dialog").each(function(link){
    link.observe('click', function(event){
      event.stop();
      
      if( link.hasClassName("pdf") ){
        Dialog.showPDF(link.title, link.href);
      }
    });
  });
});

