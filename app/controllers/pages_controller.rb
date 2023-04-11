class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
  end

  def adresse
  end

  def programme
  end

  def notre_histoire
  end

  def galerie    
  end
end
