const Ajv = require("ajv")
const ajv = exports.ajv = new Ajv()
require("ajv-formats")(ajv) //ajv formats

// schema files
const schema_user = require("./schema_user.json")

// add schema files to ajv scope
ajv.addSchema(schema_user, "user_signup_schema")
