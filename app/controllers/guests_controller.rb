class GuestsController < ApplicationController
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
