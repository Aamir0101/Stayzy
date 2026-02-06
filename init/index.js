const mongoose= require("mongoose");
const initData= require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl= process.env.ATLAS_DB_URL;

main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect(dbUrl);
}

const store= new MongoStore({
  mongoUrl: dbUrl,
  crypto:{
    secret: process.env.SECRET
  },
  touchAfter: 24 * 3600,
});

const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj, owner: "695aa6a069279129b76f8c02"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();