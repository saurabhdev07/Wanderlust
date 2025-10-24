const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const {isLoggedIn, validateListing, isOwner} =require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")
 .get( wrapAsync(listingController.index)) // Index Route
 .post(isLoggedIn,upload.single("listing[image]") , validateListing,wrapAsync(listingController.createListing)); // Create Route


//New Route
router.get("/new", isLoggedIn, listingController.rendernewForm);

router.route("/:id")
.get(wrapAsync (listingController.showListing)) //Show Route
.put( isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync (listingController.updateListing)) //Update Route
.delete( isLoggedIn, isOwner, wrapAsync (listingController.destroyListing)); //Delete Route



//Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync (listingController.renderEditForm));

module.exports = router;