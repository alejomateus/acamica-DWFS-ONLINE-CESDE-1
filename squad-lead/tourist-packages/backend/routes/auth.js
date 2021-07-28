const { Router } = require("express");
const router = Router();
const { signIn, signUp } = require("../controllers/auth.controller");
const { validateSignUpRequest, validateSignInRequest } = require("../middlewares/sign");
router.post('/signin', validateSignInRequest, signIn);
router.post('/signup', validateSignUpRequest, signUp);
module.exports = router;