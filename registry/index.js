const {ajv} = require("./_registry")


function validator(schema, data) {
    const validate = ajv.getSchema(schema)
    let valid = validate(data)
    if (!valid) { return validate.errors[0] } else {
        return true
    }
}


// payload
const data = {
    email:"com",
    fullName:"MARVELOUS AKPOROWHO",
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

console.log(validator("user_signup_schema", data))
