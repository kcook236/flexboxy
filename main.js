for (var i = 0; i < customers.results.length; i++) {
  let customer = customers.results[i]
  let div = document.createElement("div")
  let img = document.createElement("img")
  img.src = customer.picture.large

  let labelName = document.createElement("label")
  labelName.innerHTML = `${customer.name.first} ${customer.name.last}`
  labelName.className = "name"

  let email = document.createElement("label")
  email.innerHTML = ` ${customer.email}`
  email.className = "email"

  let address = document.createElement("label")
  address.innerHTML = `${customer.location.street}`
  address.className = "address"

  let address1 = document.createElement("label")
  address1.innerHTML = `${customer.location.city}, ${customer.location.state}, ${customer.location.postcode}`
  address1.className = "address1"

  let tele = document.createElement("label")
  tele.innerHTML = `${customer.phone}`
  tele.className = "tele"


  let ss = document.createElement("label")
  ss.innerHTML = `${customer.id.value}`
  ss.className = "ss"


  div.appendChild(img)
  div.appendChild(labelName)
  div.appendChild(email)
  div.appendChild(address)
  div.appendChild(address1)
  div.appendChild(tele)
  div.appendChild(ss)

  document.body.appendChild(div)
}
