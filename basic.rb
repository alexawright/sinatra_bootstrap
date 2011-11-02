require 'rubygems'
require 'sinatra'


get '/style.css' do
  sass :style
end

class Object
  def blank?
    respond_to?(:empty?) ? empty? : !self
  end
  
  def present?
    !blank?
  end
end

get '/*' do |page|
  page = :index if page.blank?
  
  haml page.to_sym, :layout => !request.xhr?
end




