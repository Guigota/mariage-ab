class GuestsController < ApplicationController
  def new
    @guest = Guest.new
  end

  def create
    @guest = Guest.new(guest_params)
    @guest.save
  end

  def edit
    @guest = Guest.find(params[:id])
  end

  def update
    @guest = Guest.find(params[:id])
    @guest.update(guest_params)
  end

  private

  def guest_params
    params.require(:guest).permit(:nom, :prenom, :email, :participation, :plus_un, :nb_adultes, :nb_enfants, :brunch, :hebergement, :contraintes_alimentaires, :musique)
  end
end
