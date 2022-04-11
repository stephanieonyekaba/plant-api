
// 1. Require Mongoose to make a database connection in the file
const mongoose = require("mongoose")
// 2. Get db config string from the file
const db = require("../../config/db")
// 3. Bring in our models
const Plants = require("./plant")


// Seed data for plant
const starterPlants = [

    { "img": "https://i.ibb.co/4j8R8Mp/Screen-Shot-2022-04-10-at-9-01-33-PM.png",
        "height": "10",
        "flowers": "true"
    },
    { "img": "https://i.ibb.co/BC6nZhY/Screen-Shot-2022-04-10-at-9-01-00-PM.png",
        "height": "5",
        "flowers": "false"
    },
    { "img": "https://i.ibb.co/WxX1nMm/Screen-Shot-2022-04-10-at-9-00-30-PM.png",
        "height": "60",
        "flowers": "true"
    }
]




//////////////////////////
// Seeding Collections
//////////////////////////
//
// Connect to the database via Mongoose (reference server.js)
mongoose.connect(db, {
	useNewUrlParser: true,
})
    // Remove all the documents currently in the database, then create a bunch of new documents in the collection from the appropriate array above.
    Plants.remove({}).then(() => {
        Plants.create(starterPlants).then(() => {
                console.log("plant data seeded.")
                // Close the db connection after the seeding
                mongoose.connection.close()
    ////////////////////////////
    // plant error catchers
    ////////////////////////////
                })
                .catch(error => {
                    console.log(error)
                    mongoose.connection.close()
                })
            })

//////////////////////////
// End seed script
//////////////////////////


