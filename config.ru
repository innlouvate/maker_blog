web: bundle exec rackup config.ru -p $PORT
use Rack::Static, :urls => ['/css', '/js'], :root => 'public'
