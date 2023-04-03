class CreateGuests < ActiveRecord::Migration[7.0]
  def change
    create_table :guests do |t|
      t.string :prenom
      t.string :nom
      t.string :email
      t.boolean :participation
      t.boolean :plus_un
      t.integer :nb_adultes
      t.integer :nb_enfants
      t.boolean :brunch
      t.string :hebergement
      t.string :contraintes_alimentaires
      t.string :musique

      t.timestamps
    end
  end
end
