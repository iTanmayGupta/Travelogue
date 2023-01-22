const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const path = require("path")

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.use(bodyParser.json());

app.post("http://127.0.0.1:5000/api/v1/generateItinerary", (req, res) => {
    async (req, res) => {
        try{
            const bod = {
                "name": "italy",
                "location": "Italy",
                "days": 5,
                "activities": ["Visit cultural landmarks and historic sites", 
                "Try a new adventure sport or activity, like paragliding or bungee jumping"]
            }
            res.send(bod);
        }catch(error) {
            log(error)
        }
    }
    
})