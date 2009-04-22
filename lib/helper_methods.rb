module ApplicationHelper

  def button_link_to( name, options = {}, html_options = {})
    add_default_class("fancy_form_link_button", html_options)
    link_to content_tag(:span, name), options, html_options
  end

  private
    def add_default_class(class_name, options)
      options[:class]  = if options[:class]
                           "#{class_name} #{options[:class]}"
                         else
                           "#{class_name}"
                         end
    end
  
end
