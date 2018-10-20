const apireq=require('./getapi.js');
const express=require('express');
const hbs=require('hbs');
const url="https://api.github.com/search/repositories?q=language:";
const port=process.env.PORT||3000;

var app=express();
app.use(express.static(__dirname+'/public'))
app.set('view-engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getyear',()=>{
    return new Date().getFullYear()
});
// `https://api.github.com/search/repositories?q=language:${lang}&sort=stars`



// console.log(apiresp);


app.get('/',(req,res)=>{
//res.send('This is homepage');
const lnginp=req.query.lang;

var lang=lnginp;
console.log(lang);
var resp_op;

var apiresp=apireq.qrydata(url,lang,(errorMessage,body)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else {
        // console.log(body);
        resp_op=body;
        res.render('home.hbs',resp_op);
    }
    
});

});

app.listen(port,()=>{
console.log('Server Started...');
});

