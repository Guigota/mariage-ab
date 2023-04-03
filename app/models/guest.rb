class Guest < ApplicationRecord
  HEBERGEMENT_SOLO = ["Je dormirai sur place", "Je trouverai un hébergement par mes propres moyens"]
  HEBERGEMENT_MULTI = ["Nous dormirons sur place", "Nous trouverons un hébergement par mes propres moyens"]

  # collection: (plus_un == true) ? GUEST::HEBERGEMENT_MULTI : GUEST::HEBERGEMENT_SOLO

  # Presence
  validates :prenom, :nom, :email, :participation, :plus_un, :nb_adultes, :nb_enfants, :brunch, :hebergement, presence: true

  # Spécificités
  validates :email, uniqueness: true
  validates :nb_adultes, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 7}
  validates :nb_enfants, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 7}
end
