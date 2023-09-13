const core = require("@actions/core")

try {
  // On récupère le paramètre d'entrée qui doit s'écrire en
  const name = core.getInput("name")
  console.log(`Hello ${name}!`)

  // On récupère l'heure actuelle et on la passe en paramètre de sortie
  const time = new Date().toTimeString()
  core.setOutput("time", time)
} catch (error) {
  // En cas d'erreur il faut passer l'erreur à Github
  core.setFailed(error.message)
}
