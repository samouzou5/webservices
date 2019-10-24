const express = require('express');
const cors = require('cors');
const jsonRpcRouter = require('express-json-rpc-router');

const app = express();

const HOUSES_ARRAY = [
    {
        Id: 1,
        Name: "House Algood",
        Region: "The Westerlands",
        CoatOfArms: "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
        Words: "",
    },
    {
        Id: 2,
        Name: "House Allyrion of Godsgrace",
        Region: "Dorne",
        CoatOfArms: "Gyronny Gules and Sable, a hand couped Or",
        Words: "No Foe May Pass",
    },
    {
        Id: 3,
        Name: "House Amber",
        Region: "The North",
        CoatOfArms: "",
        Words: "",
    }];


app.use(express.json());
app.use(express.urlencoded({extended: false}));

const controller = {
    'house.GetHouse'({params}) {
        return HOUSES_ARRAY.find(el => el.Id === params.Id)
    },
    'house.GetHouses'({params}) {
        return HOUSES_ARRAY
    }
};

app.use(cors());
app.use('/rpc', jsonRpcRouter({methods: controller}));
app.listen(1234, () => console.log('Example app listening on port 1234'));

module.exports = app;
