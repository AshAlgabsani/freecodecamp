const email = "emailtomask@lap.com"
const maskEmail = (email) => {
  let result = email.slice(1, email.indexOf('@') -1)
  let maskingEmail = "*".repeat(result.length)
  let firstChar = email[0]
  let lastChar = email[email.indexOf('@') - 1]
  let emailDomain = email.slice(email.indexOf ('@'))
  return firstChar + maskingEmail + lastChar + emailDomain
}
console.log(maskEmail(email))