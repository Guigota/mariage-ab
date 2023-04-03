class Guest < ApplicationRecord
  HEBERGEMENT = ["Je dors sur place", "Je trouve un hébergement par mes propres moyens"]


  validates :prenom, presence: true
  validates :nom, presence: true
  validates :email, presence: true, uniqueness: true
  validates :participation, default: false
  validates :brunch
end
