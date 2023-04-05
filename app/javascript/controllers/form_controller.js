import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {

  static targets = ["infos", "presence"]

  connect() {

    console.log("Starting")
    // console.log(this.element)
    // console.log(this.infosTarget)
  }

  reveal(event) {
    console.log('revealing')
    // console.log(this.presenceTarget.value) // Renvoie tout le temps Yes... Pourquoi ça ne renvoie pas No quand je clique sur No?
    // console.log(event.currentTarget) // Donne Yes or No en value
    // console.log(event.currentTarget.value)

    // Je vérifie qu'avec cette condition j'arrive bien à sélectionner les blocs Oui et Non de manière distincte
    // if (event.currentTarget.value === "Yes") {
    //   console.log("Yes is a match")
    // } else if (event.currentTarget.value === "No") {
    //   console.log("No is a match")
    // }


    if (event.currentTarget.value === "Yes") {
      this.infosTarget.classList.remove("d-none")
    } else if (event.currentTarget.value === "No") {
      this.infosTarget.classList.add("d-none")
    }

  }
}
