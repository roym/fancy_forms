module ActionView::Helpers::FormHelper
  alias :old_label :label
  def label(object_name, method, text = nil, options = {})
    add_default_class("label", options)
    old_label(object_name, method, text, options)
  end

  alias :old_text_field :text_field
  def text_field(object_name, method, options = {})
    add_default_class("text_field", options)
    old_text_field(object_name, method, options)
  end

  alias :old_password_field :password_field
  def password_field(object_name, method, options = {})
    add_default_class("password_field", options)
    old_password_field(object_name, method, options)
  end

  alias :old_hidden_field :hidden_field
  def hidden_field(object_name, method, options = {})
    add_default_class("hidden_field", options)
    old_hidden_field(object_name, method, options)
  end

  alias :old_file_field :file_field
  def file_field(object_name, method, options = {})
    add_default_class("file_field", options)
    old_file_field(object_name, method, options)
  end

  alias :old_text_area :text_area
  def text_area(object_name, method, options = {})
    add_default_class("text_area", options)
    old_text_area(object_name, method, options)
  end

  alias :old_check_box :check_box
  def check_box(object_name, method, options = {}, checked_value = "1", unchecked_value = "0")
    add_default_class("check_box", options)
    old_check_box(object_name, method, options, checked_value, unchecked_value)
  end

  alias :old_radio_button :radio_button
  def radio_button(object_name, method, tag_value, options = {})
    add_default_class("radio_button", options)
    old_radio_button(object_name, method, tag_value, options)
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

