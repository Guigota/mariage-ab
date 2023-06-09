import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {

  static targets = ["infos", "presence", "plusUn", "adults", "kids", "brunch", "accomodation"]

  connect() {

    console.log("Starting")
    // console.log(this.element)
    // console.log(this.infosTarget)
    // console.log(this.plusUnTarget)
    // console.log(this.adultsTarget)
    // console.log(this.kidsTarget)
    // console.log(this.brunchTarget.value)
    // console.log(this.accomodationTarget)
  }

  reveal(event) {
    console.log('revealing')
    // console.log(this.presenceTarget.value) // Renvoie tout le temps Yes... Pourquoi ça ne renvoie pas No quand je clique sur No? 🤨
    // console.log(event.currentTarget) // Donne Yes or No en value
    // console.log(event.currentTarget.value)

    // Je vérifie qu'avec cette condition j'arrive bien à sélectionner les blocs Oui et Non de manière distincte
    // if (event.currentTarget.value === "Yes") {
    //   console.log("Yes is a match")
    // } else if (event.currentTarget.value === "No") {
    //   console.log("No is a match")
    // }

    // Si on clique sur oui, on déploie la suite du formulaire et on réinitialise les champs
    if (event.currentTarget.value === "Yes") {
      this.infosTarget.classList.remove("d-none") // CHANGE

      // Réinitialiser les différents inputs qui auraient pu être cochés par défaut si on passe du non au oui
      this.adultsTargets.forEach((target) => {
        target.checked = false
      })
      this.kidsTargets.forEach((target) => {
        target.checked = false
      })
      this.brunchTargets.forEach((target) => {
        target.checked = false
      })
      this.accomodationTargets.forEach((target) => {
        target.checked = false
      })


      // Si on clique sur non, on replie le formulaire + on sélectionne des valeurs par défaut
    } else if (event.currentTarget.value === "No") {
      this.infosTarget.classList.add("d-none") // CHANGE

      // Ajouter des valeurs pour les élements du dessous
      // ADULTES: Je parcours les choix du nombre d'adultes et je dis de cliquer celui qui vaut 0
      this.adultsTargets.forEach((target) => {
        if (target.value == 0)
        target.click()
      })

      // ENFANTS: Je parcours les choix du nombre d'enfants et je dis de cliquer celui qui vaut 0
      this.kidsTargets.forEach((target) => {
        if (target.value == 0)
        target.click()
      })

      // Brunch:
      this.brunchTargets.forEach((target) => {
        if (target.value === "No")
        target.click()
      })

      // Hebergement:
      this.accomodationTargets.forEach((target) => {
        if (target.value.includes("Pas besoin"))
        target.click()
      })
    }
  }
}
