class RadJob < Sinatra::Base

  # Home 
  get '/' do
    erb :home
  end

  # About
  get '/about' do
    erb :"about"
  end

  # Jobs
  get '/jobs' do
    @jobs = Job.all
    erb :"jobs/index" 
  end

  # New Job
  get '/jobs/new' do
    @job = Job.new
    erb :"jobs/new" 
  end

  # Show
  get '/jobs/:id' do
    @job = Job.find(params[:id])
    erb :"jobs/show" 
  end

  # Edit
  get '/jobs/:id/edit' do
    @job = Job.find(params[:id])
    erb :"jobs/edit" 
  end

  # Update
  put '/jobs/:id' do
    @job = Job.find(params[:id])
    if @job.update_attributes(params[:song])
      redirect("/jobs")
    else
      erb :"jobs/new" 
    end
  end

  # Delete
  delete '/jobs/:id' do
    @job = Job.find(params[:id])
    if @job.destroy
      redirect('/jobs')
    else
      redirect("/jobs/#{@job.id}")
    end
  end

end

