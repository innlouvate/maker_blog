require 'sinatra'
# require 'data_mapper'
# require 'rack-flash'
# require 'rest_client'
# require_relative "models/"
require_relative "controllers/index"
# require_relative "views/index"
# require_relative 'data_mapper_setup'
set :root, File.dirname(__FILE__)
set :static, true
set :public_folder, 'public'
# set :public_folder, File.dirname(__FILE__) + '/public'
set :views, File.dirname(__FILE__) + "/views"
