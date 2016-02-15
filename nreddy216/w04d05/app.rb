class TaskApp < Sinatra::Base

  get '/' do
    @tasks = Task.all
    # p "Tasks from controller:"
    p @tasks
    erb :index
  end

  get '/tasks' do
    @tasks = Task.all
    erb :index
  end


  get '/tasks/new' do
    erb :new
  end

  post '/tasks' do
    #p params #see what prints
    @task = Task.create(params[:task])
    redirect '/'
  end


  get '/tasks/:id' do
    @tasks = Task.all
    @tasks = Task.find(params[:id])
    @task.title
  end

  delete '/tasks/:id' do
    @task = Task.find(params[:id])
    @task.destroy
    redirect '/tasks'
  end


end
