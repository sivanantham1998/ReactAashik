let express=require('express')
let app=express();
let mongoose=require('mongoose');

app.use(express.json());
mongoose.set("strictQuery",true)
mongoose.connect("mongodb+srv://root:root@cluster0.qp3p0d8.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true});

let collection=mongoose.model("emp_info",mongoose.Schema({
    name:String,
    age:Number
}))

app.get("/",async function(req,res)
{
    let view=await collection.find();
    res.json(view)

})
app.post("/",async function(req,res)
{
    let store=await collection({
        name : req.body.name,
        age:req.body.age
    })
    store.save();
    res.json(store)
})
app.get("/:id",async function(req,res)
{
    let {id}=req.params;
    let display=await collection.findById(id);
    res.json(display)
})


app.put("/:id",async function(req,res)
{
    let {id}=req.params;
    let display=await collection.findById(id);
    display.name=req.body.name;
    display.age=req.body.age;
    display.save();
    res.json(display)
})
app.delete("/:id",async function(req,res)
{
    let {id}=req.params;
    let del=await collection.findByIdAndDelete(id);

    res.json("data deleted")
})
app.listen(2501,console.log("server created"))