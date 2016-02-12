class PizzaShop < Sinatra::Base

    get '/' do
        erb :home
     end

#get all pizzas
    get '/Pizzas' do
      @pizzas = Pizza.all
      erb :'Pizzas/index'
    end
    #


    # show
    get '/Pizzas/:id' do
      @pizza = Pizza.find(params[:id])
      erb(:"Pizzas/show")
    end
    #new
    get '/Pizzas/new' do
      @pizza = Pizza.new
      erb :"Pizzas/new"
    end    # edit

    post '/Pizzas' do
      @pizza = Pizza.new(params[:pizza])
      if @pizza.save
        redirect("/Pizzas/#{@pizza.id}")
      else
        erb :"Pizzas/new"
      end
    end

    get '/Pizzas/:id/edit' do
      @pizza = Pizza.find(params[:id])
      erb :"Pizzas/edit"
    end

    # # update
    # put '/artists/:id' do
    #   @artist = Artist.find(params[:id])
    #   if @artist.update_attributes(params[:artist])
    #     redirect("/artists/#{artist.id}")
    #   else
    #     erb(:"artists/edit")
    #   end
    # end

    # delete
    delete '/pizzas/delete' do
      @pizza = Pizza.find(params[:id])
      if @pizza.destroy
        redirect('/Pizzas')
      else
        redirect("/Pizzas/#{@pizza.id}")
      end
    end

  end
