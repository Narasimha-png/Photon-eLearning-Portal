const { MongoClient } = require("mongodb");


const clint = new MongoClient("mongodb+srv://photonelearningplatform:Photon@photon.vysg8u9.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp");
async function addnewuser( email , otp ){
    
    if( await clint.db("Photon_DB").collection("Students_Data").findOne({"email" : email })){
        await clint.db("Photon_DB").collection("Students_Data").updateOne({"email" : email} , { $set:{"otp" : otp}})
    }
    else{
    const status = await clint.db("Photon_DB").collection("Students_Data").insertOne({"email" : email , "otp" : otp });
    }
 
}

async function addgroup( password ,  email , group ){
    await clint.db("Photon_DB").collection("Students_Data").updateOne({"email" : email } , { $set:{"password" : password }})
    await clint.db("Photon_DB").collection("Students_Data").updateOne({"email" : email } , { $set:{"course" : group }})
}
async function verifyotp( email , otp ){
    const status = await clint.db("Photon_DB").collection("Students_Data").findOne( {"email" : email});
    
    if(status.otp == otp)
  return true ;
else
return false ;
}

async function addtoSubscription(name) {
    const emails = await clint.db("Subscribers").collection("Users").find().toArray();
    var list = [];
    emails.forEach((temp) => {
        list.push(temp.name);
    });
    if (list.includes(name))
        return false;
    else
        await clint.db("Subscribers").collection("Users").insertOne({ "name": name });
    return true;
}
addtoSubscription("narasimhas9490@gmail.com");
async function userexist( email ){
    const res = await clint.db("Photon_DB").collection("Students_Data").findOne( {"email" : email});
   
    if( res != null && res.course != null )
    return true;
else
return false ;

}

async function validatelogin(email, pass) {
    
    const res = await clint.db("Photon_DB").collection("Students_Data").findOne({ "email": email });
  
    if (res) {
        if (res.password === pass)
            return true;
        else
            return false;
    }
    else
        return false;
}

async function pushtest(testname, email, map) {
    
    for (var [key, value] of map.entries()) {
        await clint.db("Photon_DB").collection("Students_Data").updateOne({ "email": email }, { $push: { [testname]: { [key]: value } } });

    }
}

async function hastest(email, testname) {
    const res = await clint.db("Photon_DB").collection("Students_Data").findOne({ "email": email }, { [testname]: { $exists: true } });
    if (res[testname] !== undefined)
        return true;
    else
        return false;

}
async function retrive(email, testname) {
    const result = await clint.db("Photon_DB").collection("Students_Data").findOne({ "email": email }, { "_id": 0, [testname]: 1 });
    const f = result?.[testname] || [];
    const map = new Map(f.map(obj => [Object.keys(obj)[0], Object.values(obj)[0]]));
    return map;
}

async function writtentests(email) {
    const res = await clint.db("Photon_DB").collection("Students_Data").findOne({ "email": email });
    const resarr = Object.keys(res);
    const fields = [];
    for (const field of resarr) {
        if (field.indexOf("est") != -1)
            fields.push(field);
    }
    
    return fields;
}

async function getCourse(email) {
    const res = await clint.db("Photon_DB").collection("Students_Data").findOne({ "email": email });
    return res.course;
}

async function nooftests(email) {
    const res = await clint.db("Photon_DB").collection("Students_Data").findOne({ "email": email });
    

}
async function f() {
    const res = await clint.db("Photon_DB").collection("Students_Data").find().toArray();
   
}

async function getbranch( email ){
    const res = await clint.db("Photon_DB").collection("Students_Data").findOne({"email" : email });
    
    return res.course ;
}

async function listtests(group){
    var l = [] ;
    const res = await clint.db(group).listCollections().toArray();
    for( const doc of res ){
        
        l.push( doc.name );
    }

    return l.sort() ;
    
}

async function setnewpassword( email , password){
    const res = await clint.db("Photon_DB").collection("Students_Data").updateOne({"email" : email } , {$set:{ "password" : password}});
    return ;
}

module.exports = {
    addtoSubscription: addtoSubscription,
    validatelogin: validatelogin,
    getCourse: getCourse,
    f: f,
    pushtest: pushtest,
    retrive: retrive,
    hastest: hastest , 
    writtentests : writtentests ,
    getbranch : getbranch,
    listtests : listtests ,
    userexist : userexist ,
    setnewpassword : setnewpassword ,
    addnewuser : addnewuser ,
    verifyotp : verifyotp ,
    addgroup : addgroup 
}