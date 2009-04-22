module ActionView::Helpers::FormTagHelper
=begin
  alias :old_submit_tag :submit_tag
  def submit_tag(value = "Save changes", options = {})
    add_default_class("submit", options)
    old_sumbit_tag(value, options)
  end
=end
  alias :old_label_tag :label_tag
  def label_tag(name, text = nil, options = {})
    add_default_class("label", options)
    old_label_tag(name, text, options)
  end

  alias :old_text_field_tag :text_field_tag
  def text_field_tag(name, value = nil, options = {})
    add_default_class("text_field", options)
    old_text_field_tag(name, value, options)
  end

  alias :old_password_field_tag :password_field_tag
  def password_field_tag(name = "password", value = nil, options = {})
    add_default_class("password_field", options)
    old_password_field_tag(name, value, options)
  end

  alias :old_hidden_field_tag :hidden_field_tag
  def hidden_field_tag(name, value, options = {})
    add_default_class("hidden_field", options)
    old_hidden_field_tag(name, value, options)
  end

  alias :old_file_field_tag :file_field_tag
  def file_field_tag(name, options = {})
    add_default_class("file_field", options)
    old_file_field_tag(name, options)
  end

  alias :old_text_area_tag :text_area_tag
  def text_area_tag(name, content = nil, options = {})
    add_default_class("text_area", options)
    old_text_area_tag(name, content, options)
  end

  alias :old_check_box_tag :check_box_tag
  def check_box_tag(name, value = "1", checked = false, options = {})
    add_default_class("check_box", options)
    old_check_box_tag(name, value, checked, options)
  end

  alias :old_radio_button_tag :radio_button_tag
  def radio_button_tag(name, value, checked = false, options = {})
    add_default_class("radio_button", options)
    old_radio_button_tag(name, value, checked, options)
  end

  alias :old_submit_tag :submit_tag
  def submit_tag(value = "Save changes", options = {})
    add_default_class("fancy_form_button", options)
    #content_tag :div, old_submit_tag(value, options), :class => "fancy_form_button"
    content_tag :a, content_tag(:span, value), options
  end

  private
    def add_default_class(class_name, options)
      if options[:class]
        options[:class] = "#{class_name} #{options[:class]}"
      else 
        options[:class] = "#{class_name}"
      end
    end
end

