function CheckEmail(email){
    return email.includes("@") ? "Valid Email" : "Unvalid Email";
}

let email = "MyNameIsonpop.com"

console.log(`Email: ${email} is ${CheckEmail(email)} `);