const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const Persona = require('./models/Persona');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extenden:true}));

const MONGO_URI = "mongodb+srv://kesitoemprendedor777:MongoDBfirstclass@cluster0.vgrkahy.mongodb.net/certus?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Se conectó correctamente..");
}).catch((err)=>{
    console.log("Error encontrado"+err);
})

app.post('/submit', async (req, res) => {
    try{
        const persona = new Persona(req.body);
        await persona.save();
        res.status(200).json({message:'Se guardo correctamente'});
    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Hubo un error'});
    }
});

app.listen(4000, ()=> {
    console.log("Se conectó al puerto 4000...");
})