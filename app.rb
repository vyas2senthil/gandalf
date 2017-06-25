require_relative 'osc'

require 'sinatra'

# Method to generate hash based on title
def url_hash(title,class_name = nil)
	hash = {}
	hash[:title] = title
	hash[:url] = if title.match(/Home Page/) then '/' else '/' + title.downcase.gsub(' ','_') end
	hash[:mithrilComponent] = mithril_component(title)
	hash[:className] = class_name
	hash
end

def mithril_component(title)
	lpt = title.downcase.split(' ')
	component_name = lpt.each_with_index.map { |t,i| if i == 0 then t else t.capitalize end}.join + 'Info'
	if title.match(/Home Page/) then 'homePage' else component_name end
end

urls = [
		url_hash('Home Page','fa fa-home fa-5x'),
		url_hash('Get Started','fa fa-cloud-upload fa-5x'),
		url_hash('Upload Your CSV','fa fa-upload fa-5x'),
		url_hash('Verify Your Results','fa fa-check-circle-o fa-5x'),
		url_hash('Import to Interface','fa fa-cloud-upload fa-5x'),
	]

urls.each do |u|
	get u[:url] do
		@urlsToPass = urls
		@howItWorks = @urlsToPass.dup.pop(3)
		erb :index
	end
end
