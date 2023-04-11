import { Controller } from "@hotwired/stimulus"

// Dans Index.js selon le tuto
import { Application } from '@hotwired/stimulus'
import TextareaAutogrow from 'stimulus-textarea-autogrow'

const application = Application.start()
application.register('textarea-autogrow', TextareaAutogrow)




// Connects to data-controller="textarea-autogrow"
export default class extends Controller {
  connect() {
  }
}


// super.connect()
//     console.log('Do what you want here.')
