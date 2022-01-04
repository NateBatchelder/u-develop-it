// 
const express = require("express");
// 
const router = express.Router();

// route to get candidates
router.use(require("./candidateRoutes"));

// route to get parties
router.use(require("./partyRoutes"));

// route to get voters
router.use(require("./voterRoutes"));

// route to caculate votes from voters
router.use(require("./voteRoutes"));




// 
module.exports = router;
