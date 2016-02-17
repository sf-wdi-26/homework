class TaskApp < Sinatra::Base

  # get '/' do
  #   File.read(File.join('public', 'index.html'))
  # end


  #root route
  get '/' do
    # @tasks = Task.all
    # # p "Tasks from controller:"
    # p @tasks
    # erb :"tasks/index"
    redirect('/tasks')
  end

  #all tasks page
  get '/tasks' do
    @tasks = Task.all
    erb :"tasks/index"
  end

  #new
  get '/tasks/new' do
    erb :"tasks/new"
  end

  #create
  post '/tasks' do
    #p params #see what prints
    @task = Task.create(params[:task])
    redirect '/'
  end

  #show
  get '/tasks/:id' do
    @tasks = Task.all
    @task = Task.find(params[:id])
    # @task.title
    erb(:"tasks/show")
  end

  #edit
  get '/tasks/:id/edit' do
    @task = Task.find(params[:id])
    erb(:"tasks/edit")
  end

  #update
  put '/tasks/:id' do
    @task = Task.find(params[:id])

    if @task.update_attributes(params[:task])
      redirect("/tasks")
    else
      erb(:"tasks/new")
    end
    redirect('/tasks')
  end


  #destroy
  delete '/tasks/:id' do
    @task = Task.find(params[:id])
    @task.destroy
    redirect '/tasks'
  end


end
