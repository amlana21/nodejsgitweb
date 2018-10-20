const req=require('request');

var qrydata=(url,lng,callback)=>{
// console.log(url);
// console.log(lng);
final_url=`${url}${lng}&sort=stars`;

var resp=req({url:final_url,json:true,headers:{'User-Agent':'My_node_app_12'}},(err,resp,body)=>{

    if(err){
        callback('An error occured');
    }else if(body.message==='Validation Failed'){
callback('No repositories found');
    }else if(resp.statusCode==200) {
        var otpt={
            count:body.total_count,
            itm1:body.items[0].full_name,
            itm2:body.items[1].full_name,
            itm3:body.items[2].full_name,
            itm4:body.items[3].full_name,
            itm5:body.items[4].full_name
        };
        callback(undefined,otpt);
    }



});


};

module.exports={
    qrydata
};