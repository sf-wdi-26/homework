class User < ActiveRecord::Base
      has_many :library_users
      has_many :libraries, through: :library_users
      validates_presence_of :first_name, :last_name, :email, :password
      validates_confirmation_of :password
      has_secure_password

      def self.confirm(params)
          @user = User.find_by({email: params[:email]})
          @user.try(:authenticate, params[:password])
      end
end
