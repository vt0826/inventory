class UsersController < ApplicationController
  @@states = ["Taipei",'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Mississippi','Missouri','Montana','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  
  def index
    @users=User.where(:store_name => current_store.organization)
    @store=session[:store]
  end

  def new
    @user=User.new
    @states=@@states
  end

  def show
    @states=@@states
    @user_id=params[:id]
    @user=User.find(@user_id)
  end

  def edit
    @states=@@states
    @user_id=params[:id]
    @user=User.find(@user_id)
  end

  def create
    puts params
    @user=User.new(user_params)
    if @user.save
      flash[:notice]="New User added"
      redirect_to users_path
    else
      flash[:alert]="*Unable to Add New User"
      redirect_to :back
    end
  end

  def update
    @user= User.find(params[:id])
    if @user.update_attributes(user_params)
      flash[:notice]="*User Updated"
    else
      flash[:notice]="*Unable to Update User"
    end
    redirect_to :back
  end

  def destroy
    @user= User.find(params[:id])
    @user.destroy
    redirect_to :users
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :store_name, :password, :password_confirmation, :employee_id, :phone, :address, :city, :state, :zip_code, :position, :organization_id )
  end


end
