# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

Rails.application.config.middleware.insert_before ActionDispatch::Static, Rack::Cors do
    allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
    end
end
