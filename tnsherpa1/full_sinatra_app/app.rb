class MyScotchApp < Sinatra::Base
get '/' do
	erb :index
end
end