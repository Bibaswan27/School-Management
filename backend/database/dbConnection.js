import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect("mongodb+srv://Bibaswan27:Priyobroto@cluster0.tjo4amz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Error occured while connecting to database");
    });
};

