/*=====================================================================================================================
                                    Data Source Holding Arrays
========================================================================+============================================*/

const router = require("express").Router();
const store = require("../db/store.js");

/*=====================================================================================================================
Step 1: GET route
Step 2: Elaborates from an get function
Step 3: File syncretizing with a function outside this file
Step 4: Generate notes into json
========================================================================+============================================*/

router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(function (notes) {
            return res.json(notes);
        })
        .catch(function (err) {
            return res.status(500).json(err);
        });
});


/*=====================================================================================================================
Step 1: POST route
Step 2: Elaborates from an add function 
========================================================================+============================================*/
router.post("/notes/:id", (req, res) => {
    store
        .addNotes()
        .then(function (notes) {
            return res.json(notes);
        })
        .catch(function (err) {
            return res.status(500).json(err);
        });
});
/*=====================================================================================================================
Step 1: Delete route
Step 2: utilize a function that corresponds to the removing function
Step 3: File syncretizing with a function
Step 4: Generate a command that grabs selected files  exp. notes & id
Step 5: Coordinate a successful response
Step 6: Now recalibrate a that selected file into a json
========================================================================+============================================*/
router.delete("/notes/:id", function (req, res) {
    store
        .getNotes()
        .then(function (notes) {
            return res.json(notes);
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
});



/*=====================================================================================================================
                                        Module Exports for Router
========================================================================+============================================*/
module.exports = router;

/*=====================================================================================================================
                                        Outside Function for a variable 
========================================================================+============================================*/
