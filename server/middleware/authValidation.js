const joi = require("joi");

const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().min(5).required(),
  });
  return schema.validate(data);
};
const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  });
  return schema.validate(data);
};


module.exports = {loginValidation,registerValidation}
