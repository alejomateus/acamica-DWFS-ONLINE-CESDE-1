const { Router } = require("express");
const router = Router();
const { signin, signUp } = require("../controllers/auth.controller");
const { validateSignUpRequest, validateSignInRequest } = require("../middlewares/sign");
router.post('/signin', validateSignInRequest, signin);
router.post('/signup', validateSignUpRequest, signUp);
module.exports = router;