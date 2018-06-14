const express = require("express");
const router = express.Router();
const passport = require('passport');
const passportConf = require('../../passport');
const PatientController = require('../controllers/patients');
const passportSignIn = passport.authenticate('jwt', { session: false });
const { validateBody, schemas } = require('../helpers/routePatientHelpers');


router.post("/addNewPatient", validateBody, PatientController.add_new_patient);

router.get("/:patientId", PatientController.get_patient);

router.get("/", PatientController.get_all_patient);

router.patch("/:patientId", PatientController.update_patient);

router.delete("/:patientId", PatientController.delete_patient);

module.exports = router;