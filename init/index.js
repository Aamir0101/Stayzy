const mongoose= require("mongoose");
const initData= require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL ="mongodb://127.0.0.1:27017/stayzy"

main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
};

const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj, owner: "695aa6a069279129b76f8c02"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();