class GuestsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home new create edit update ]

  def new
    @guest = Guest.new
  end

  def create
    @guest = Guest.new(params[:guest])
    @guest.save
  end

  def edit
    @guest = Guest.find(params[:id])
  end

  private

  def guest_params
    params.require(:guest).permit(:nom, :prenom, :email)
  end
end
