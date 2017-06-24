require_relative 'osc'

require 'sinatra'

#URL for receiving messages

urls = [{:url => '/', :mithrilComponent => 'homePage'},
		{:url => '/uploadYourCSV', :mithrilComponent => 'uploadYourCSVInfo'}]

urls.each do |u|
	get u[:url] do
		@urlsToPass = urls
		erb :index
	end
end
