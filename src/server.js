const express = require('express');
const {default: AdminBro} = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const badyparser = require('body-parser');
const mongose = require('mongoose'); 
const bodyParser = require('body-parser');
const logger = require('morgan');
// here in server file setup admin bro adn make conect with router -> file and options;

const app = express();
// make express public functins with app;



const run = async()=>{
// make varibals  name run and make conect with mongoose and with files rout and options;

await mongose.connect('mongodb://localhost:27017/add',{

   useNewUrlParser:true,
   useUnifiedTopology:true,
   useFindAndModify:true, 

})
.then(() => console.log('Database conect'))
.catch((error) => console.error(`database errors --> ${error.message}`));
// conect mongoose with then and catch;

const admin = new AdminBro(options);
const router = buildAdminRouter(admin);

app.use(admin.options.rootPath, router);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use(logger('dev'));
const PORT = 9000;
app.PORT = process.env.PORT || 3000;
app.listen(PORT, (error)=>{  
    
    console.log(`conect is -->  http://localhost:${PORT}/admin`);
    console.error(`errors is --> ${error}`);
    
});

}
module.exports = run;