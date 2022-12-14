import Joi from "joi";

const registerController = {
  register(req, res, next) {
    //checklist
    //[*] validate the request
    //[*] authorise the request
    //[*] check if user already in database
    //[*] prepare model
    //[*] store in database
    //[*] generate jwt token
    //[*] send response

    // validation

    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeat_password: Joi.ref("password"),
    });
    res.json({ msg: "Express from restAPIS" });
  },
};

export default registerController;
