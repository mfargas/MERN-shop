import mongoose from 'mongoose';
const connection = {};

async function connectDB(){
    if(connection.isConnected){
        console.log('using existing connection')
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_SRV, { 
        useCreateIndex: true,
        useFindAndModify: false,
        useNewURLParse: true,
        useUnifiedTopology: true
    });

    console.log('DB Connected');
    connection.isConnected = db.connections[0].readyState;
}

export default connectDB;