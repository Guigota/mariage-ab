class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def home
  end

  def adresse
  end

  def programme
  end
end
