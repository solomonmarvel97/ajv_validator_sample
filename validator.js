const Ajv = require('ajv')
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
require("ajv-formats")(ajv)
const schema = require('./schema.json')

let ValidatorUtil = (schema, data) => {
    const validate = ajv.compile(schema)
    ajv.validate(schema, data)
    const valid = validate(data)
    if (!valid) return validate.errors
    else return valid
}

const data = {
    email:"ajvemail@hotmail.com",
    fullName:"MARVELOUS AKPOROWHO",
	user: "hello",
    gender:"male",
    experienceLevel:"medium",
    haveLaptop:"yes",
    careerPath:"python engineer",
    phoneNumber:"0987790987",
    country:"Nigria",state:"Lagos",
    whyDoYouWantToParticipate:"to learn how to code",
    howDidYouLearnAboutUs:"social media",
    receiveNewsletters:"yes"
}

let result = ValidatorUtil(schema, data)
console.log(result)
if(result === true) {
    // perform action
}
else {console.log("error")}