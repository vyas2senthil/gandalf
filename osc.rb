require 'osc_ruby'

# Gets the contact ID
def get_contact_id(email_to_register)

	@rn_client = OSCRuby::Client.new do |c|
		c.interface = ENV['OSC_TEST1_SITE']
		c.username = ENV['OSC_ADMIN']
		c.password = ENV['OSC_PASSWORD']
	end

	q = OSCRuby::QueryResults.new
	begin
		result = q.query(@rn_client,"SELECT id FROM contacts WHERE contacts.emails.emailList.address = '#{email_to_register}'",true)
	rescue Exception => e
		
	end

	result[0]['id']

end


# Creates the registration Incident
def register_incidents(email_to_register,product_to_register,image_in_base64,image_content_type,from)

	@rn_client = OSCRuby::Client.new do |c|
		c.interface = ENV['OSC_TEST1_SITE']
		c.username = ENV['OSC_ADMIN']
		c.password = ENV['OSC_PASSWORD']
	end

	# create an empty hash
	json_content = {}

	# modified email
	modded_email = "#{email_to_register}.invalid"

	# assign a hash to the 'primaryContact' key
	json_content['primaryContact'] = {}

	# set the value of the primary contact ID for the incident
	json_content['primaryContact']['id'] = get_contact_id(modded_email)

	# set the value for the subject line of the incident
	json_content['subject'] = 'Product Registration Submitted'

	json_content['product'] = {}

	json_content['product']['lookupName'] = product_to_register

	json_content['statusWithType'] = {}

	json_content['statusWithType']['status'] = {}

	json_content['statusWithType']['status']['id'] = 2

	json_content['customFields'] = {}

	json_content['customFields']['c'] = {}

	json_content['customFields']['c']['reg_usa'] = {}

	json_content['customFields']['c']['reg_usa'] = true

	# create an empty array for the file attachment data
	json_content['fileAttachments'] = []

	pop = "proof_of_purchase.#{image_content_type.split('/')[1]}"

	# input the file attachment data as a hash into the empty array
	json_content['fileAttachments'][0] = {'fileName' => pop, 'data' => image_in_base64}

	osc_response = OSCRuby::Connect.post_or_patch(@rn_client,'/incidents',json_content)

	puts osc_response.body

	if osc_response.code.to_i == 201
		message = "We have received your product registration. You can review all support materials for your #{product_to_register} at the following link"
		send_message(message,from)
		product_link = "https://qsee.custhelp.com/#/product?product=#{product_to_register}"
		send_message(product_link,from)
	else
		message = "Something went wrong, please try again."
		send_message(message,from)
	end
end