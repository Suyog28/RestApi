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

    res.json({ msg: "Express from restAPIS" });
  },
};

export default registerController;
