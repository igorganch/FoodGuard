const express = require("express");
const multer = require('multer');
const app = express();
const port = 8080;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to parse JSON
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*Test calls */
/*TEST API CALL - Get all product through associated through user id  URL - /api/test/products?userId=${userId}  */
app.get("/api/test/products" , (req,res) =>{
    if (!req.query.userId){
        return res.status(400).json({ message: "Error: req.query.userId not defined "});
    }
    return res.status(200).json(food);
})
/*TEST API CALL - Get single product through associated through user id and product id URL - /api/test/product?productId=${productId}&userId=${userId} */
app.get("/api/test/product" , (req,res) =>{
    if (!req.query.userId || !req.query.productId){
        return res.status(400).json({ message: "Error: " + (!req.query.userId ?  " req.query.userId not defined " : "" ) + (!req.query.productId ?  " req.query.productId not defined " : "" ) });
    }
    let save = null;
    for (let i = 0; i < food.length; i++){
        if (req.query.productId == food[i].id){
            save = food[i];
            break;
        }
    }
    return (save != null ? res.status(200).json(save) : res.status(404).json({ message: "Error: Product not found"  }));

})

/*TEST API CALL - Edit single product through associated through user id and product id. Body parameter should include ("food_name": "Vanilla Yogurt", "expiry_date": "2025/03/17")  URL - /api/test/product/edit?productId=${productId}&userId=${userId} */
app.put("/api/test/product/edit" , upload.none(),(req,res) =>{
    if (!req.query.userId  || !req.query.productId|| !req.body.food_name || !req.body.expiry_date){
       return res.status(400).json({ message: "Error: " + (!req.query.userId ?  " req.query.userId not defined " : "" ) + (!req.query.productId ?  " req.query.productId not defined " : "" ) +  (!req.body.food_name ?  " req.body.food_name not defined " : "" ) + (!req.body.expiry_date ?  " req.body.expiry_date not defined " : "" ) });
    }
    let tf = false;
    for (let i = 0; i < food.length; i++){
        if (req.query.productId == food[i].id){
            food[i].food_name = req.body.food_name;
            food[i].expiry_date = req.body.expiry_date;
            tf = true;
            break;

        }
    }
    return (tf ? res.status(200).json(food) : res.status(404).json({ message: "Error: Product not found"  })); 
})

/*TEST API CALL - Create single product through associated through user id. Body parameter should include ("food_name": "Vanilla Yogurt", "expiry_date": "2025/03/17")  URL - /api/test/product/create?userId=${userId} */
app.post("/api/test/product/create" , upload.none(), (req,res) =>{
    if (!req.query.userId|| !req.body.food_name  || !req.body.expiry_date){
       return  res.status(400).json({ message: "Error: " + (!req.query.userId ?  " req.query.userId not defined " : "" )  +  (!req.body.food_name ?  " req.body.food_name not defined " : "" ) + (!req.body.expiry_date  ?  " req.body.expiry_date not defined " : "") });
    }
    var last_id = food[food.length - 1].id + 1;
    food.push({"id" : last_id , "food_name": req.body.food_name , "expiry_date": req.body.expiry_date})
    return res.status(200).json(food);
})

/*TEST API CALL - Upload picture to deepseek and get response back with json data. Body paramter for image should be called "picture"  URL - /api/test/deepseek/upload/picture?userId=${userId}*/ 
app.post("/api/test/deepseek/upload/picture", (req, res) => {
    upload.single('picture')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: "Multer error: " + err.message });
        }
        if (!req.query.userId) {
            return res.status(400).json({ message: "Error: " + (!req.query.userId ? " req.query.userId not defined. " : "") });
        }
        return res.status(200).json(food);
    });
});

/*TEST API CALL - Login default credentials are Email : "example@gmail.com", Password : "1234" URL - /api/test/login*/ 
app.post("/api/test/login", upload.none(),(req, res)=>{
    
    if(!req.body.email|| !req.body.password ){
        return res.status(400).json({ message: "Error: "  + (!req.body.password ?  " req.body.password not defined " : "") +  (!req.body.email ?  " req.body.email not defined " : "") });
    }
    if(req.body.email == "example@gmail.com" && req.body.password == "1234"){
        let user = { "userId" : 1, "email" : "example@gmail.com"};
        return res.status(200).json(user);
    }
    return res.status(401).json({ message: "Unauthorized: Invalid email / password" });
})
/*TEST API CALL - Reset API to original data - /api/test/reset*/ 
app.get("/api/test/reset", upload.none(),(req, res)=>{
    food = [...reset];
    return res.status(200).json(food);
})
/* DATA */
var food = [
    {
          "id" : 1,
          "food_name": "Vanilla Yogurt",
          "expiry_date": "2025/03/17"
        },
        {
          "id" : 2,
          "food_name": "Black Cherry Greek Yogurt",
          "expiry_date": "2025/03/16"
        },
        {
          "id" : 3,
          "food_name": "Avocado",
          "expiry_date": "2025/03/12"
        },
        {
          "id" : 4,
          "food_name": "Russet Potatoes",
          "expiry_date": "2025/04/01"
        },
        {
          "id" : 5,
          "food_name": "Asparagus",
          "expiry_date": "2025/03/21"
        },
        {
          "id" : 6,
          "food_name": "Broccoli",
          "expiry_date": "2025/03/23"
        },
        {
          "id" : 7,
          "food_name": "Green Onion",
          "expiry_date": "2025/03/25"
        },
        {
          "id" : 8,
          "food_name": "Roma Tomato",
          "expiry_date": "2025/03/23"
        },
        {
          "id" : 9,
          "food_name": "Spinach",
          "expiry_date": "2025/03/21"
        },
        {
          "id" : 10,
          "food_name": "English Cucumber",
          "expiry_date": "2025/03/25"
        },
]


var reset = [...food];