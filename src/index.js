const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const handle = (str) => {
  const lines = String(str).split("\n")

  let resultLines = lines.map(line => {
    let tokens = line.split("/")

    let result = tokens[2].replace("www.", "")
    return result
  })

  return resultLines.join("\n")
}

$("#convert").onclick = () => {
  let inputStr = $('#input-links').value

  let outputStr = handle(inputStr)

  $("#output-links").value = outputStr
}