    require 'rubygems'
    require 'oauth'
    require 'json'

    # Now you will fetch /1.1/statuses/user_timeline.json,
    # returns a list of public Tweets from the specified
    # account.
    baseurl = "https://api.twitter.com"
    path    = "/1.1/statuses/user_timeline.json"
    query   = URI.encode_www_form(
        "screen_name" => "innlouvate",
        "count" => 10,
    )
    address = URI("#{baseurl}#{path}?#{query}")
    request = Net::HTTP::Get.new address.request_uri

    # Print data about a list of Tweets
    def print_timeline(tweets)
      # ADD CODE TO ITERATE THROUGH EACH TWEET AND PRINT ITS TEXT
        tweets.each { |tweet| puts tweet['text'] }
    end

    # Set up HTTP.
    http             = Net::HTTP.new address.host, address.port
    http.use_ssl     = true
    http.verify_mode = OpenSSL::SSL::VERIFY_PEER

    consumer_key = OAuth::Consumer.new(
        "Mja4DqaI4HqvWN3CxqGk4Vd2R",
        "q7KcQE5tBKTW3esAKbIVhWAFNEbQmnfke7wlM5wvFqlkJUmvvn")
    access_token = OAuth::Token.new(
        "295564229-RG931RXDAqda2cCbXeeEGptfUMJiHrVrGQpgFFe7",
        "GaXfcsww8moK84ugDLx0s74pNalrC1EmcKNo6p7b7VMeu")

    # Issue the request.
    request.oauth! http, consumer_key, access_token
    http.start
    response = http.request request

    # Parse and print the Tweet if the response code was 200
    tweets = nil
    if response.code == '200' then
      tweets = JSON.parse(response.body)
      print_timeline(tweets)
    end
    nil
