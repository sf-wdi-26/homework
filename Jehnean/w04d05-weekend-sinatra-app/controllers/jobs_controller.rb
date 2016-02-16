class Tunr < Sinatra::Base

  # RESTful Artist Controller Actions
  # index
  get '/jobs' do
    @jobs = Job.all
    erb(:"jobs/index")
  end

  # new
  get '/jobs/new' do
    @job = Job.new
    erb(:"jobs/new")
  end

  # create
  post '/jobs' do
    @job = Job.new(params[:artist])
    if @job.save
      redirect("/jobs/#{@job.id}")
    else
      erb(:"jobs/new")
    end
  end

  # show
  get '/jobs/:id' do
    @job = Job.find(params[:id])
    erb(:"jobs/show")
  end

  # edit
  get '/jobs/:id/edit' do
    @job = Job.find(params[:id])
    erb(:"jobs/edit")
  end

  # update
  put '/jobs/:id' do
    @job = Job.find(params[:id])
    if @job.update_attributes(params[:job])
      redirect("/jobs/#{job.id}")
    else
      erb(:"jobs/edit")
    end
  end

  # delete
  delete '/jobs/:id/delete' do
    @job = Job.find(params[:id])
    if @job.destroy
      redirect('/jobs')
    else
      redirect("/jobs/#{@job.id}")
    end
  end

end
