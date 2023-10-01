const express = require("express");
const app = express();
const subscribe = require('./subscribtionemail');
const mongo = require('./mongodb');
const forgotmail = require('./forgotmail');
var note = "";
var description = "";
var email;
var testname;
var map;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 4001;
const path = require('path');
const { json } = require("express/lib/response");
const { name } = require("ejs");
app.set('view engine', 'ejs');
var guest;

app.use(express.static(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
    


    res.render('main', { note: note, description: description, guest: guest });
});



app.post('/resetpassoword', async (req, res) => {
    const mailsub = "Change Password";
    const mailtext = "Change your password click on the link ";
    const resetmail = req.body.newmail;
    const validate = await mongo.userexist(resetmail);
    if (validate) {
        const reseturl = req.protocol + "://" + req.get("host") + "/createnewpassword?email=" + resetmail;
        await forgotmail.forgot(resetmail, reseturl, mailsub, mailtext);
        res.send("Note:Link has been sent to your mail successfully , Please check Inbox/Spam")
    }
    else {
        res.send("Note : Provided mail is not valid ")

    }
});

app.post('/signupform', async (req, res) => {
    const mailsub = "OTP Verification";
    const mailtext = " Here is Your 4-digit OTP "
    const resetmail = req.body.mail;
    const validate = await mongo.userexist(resetmail);
    if (!validate) {
        var otp = "";
        for (var i = 0; i < 4; i++) {
            var s = Math.floor(Math.random() * 10);
            otp += s.toString();
        }
        const reseturl = otp;
        const otpstatus = await forgotmail.forgot(resetmail, reseturl, mailsub, mailtext);
        if (otpstatus) {
            await mongo.addnewuser(resetmail, otp);
            res.send("Note: OTP sent to your mail successfully ,Check Out Inbox/Spam");
        }
        else
            res.send("Invalid Mail");
    }
    else {
        res.send("Note : User Already Exists ")

    }
});

app.post('/signup/verifyotp', async (req, res) => {
    const newmail = req.body.mail;
    const otp = req.body.otp;
    const otpcorr = await mongo.verifyotp(newmail, otp);
    if (otpcorr)
        res.send("OTP verification is successfull");
    else
        res.send("NOTE : Invalid OTP");
});

app.post('/addgroup', async (req, res) => {
    const newmail = req.body.mail;
    const group = req.body.group;
    const temppassword = req.body.password ;
    await mongo.addgroup( temppassword , newmail, group);
console.log( "validation over");
res.send("ok");
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/createnewpassword', (req, res) => {
    email = req.query.email;
    res.render('newpassword');
})

app.post('/storename', (req, res) => {
    email = req.body.email;
});

app.get('/forgotpassword', (req, res) => {
    res.render('passwordforget')
})

app.post('/setnewpassword', async (req, res) => {
    const password = req.body.password;
    const r = await mongo.setnewpassword(email, password);
})

app.post('/', async (req, res) => {
    guest = req.body.email;
    const validation = await mongo.addtoSubscription(guest)
    if (validation) {
        const mainurl =  req.protocol + "://" + req.get("host")  ; 
        subscribe.sendSubscriptionmail(guest);
        note = "Success !!"
        description = `mail sent to ${guest} Check Inbox / SPAM Box Please!!!`;
    }
    else {
        note = "Mail is Already in Use ";
        description = `We will update you any further events ${guest}`;
    }
    res.redirect('/');

});

app.get('/login', (req, res) => {

    res.render('login');
});

app.get('/studentoftheyearmpc' , ( req ,res ) =>{
    res.render('stumpc');
});

app.get('/studentoftheyearbipc' , ( req ,res ) =>{
    res.render('stumpc');
})

app.get('/contactus' , ( req , res ) =>{
    res.render( 'contactus') ;
});



app.get('/mocktests', async (req, res) => {
    console.log(email);
    if (email != null) {
        const group = await mongo.getbranch(email);
        const testarray = await mongo.listtests(group);
        res.render('mocktest', { email: email, testarray: testarray });
    }
    else
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');
})
app.post('/logindetails', async (req, res) => {
    if (req.body.email == null)
        res.send("not Valid");
    email = req.body.email.trim();
    const password = req.body.password.trim();
    console.log(email + password)
    const validation = await mongo.validatelogin(email, password);
    console.log(validation);
    if (validation)
        res.send("valid");
    else
        res.send("not Authorized Person");
});

app.get('/logout', (req, res) => {
    res.render('logout');
})

app.get('/home', (req, res) => {
    console.log(email)
    if (email != null)
        res.render('welcome', { email: email });
    else
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');

})

app.get('/viewresults', async (req, res) => {
    if (email == null) {
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');
    }
    else {
        map = await mongo.retrive(email, testname);
        res.render('resultsdash', { map: map });
    }
});


app.get("/pushtestres", async (req, res) => {
    if (email == null)
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');

    else {
        var i = 1;
        var str = "";
        while (await mongo.hastest(email, testname + str)) {
            str = `( ${i} )`;
            i += 1;

        }
        testname += str;
        const score = req.query.score;
        const attempted = req.query.attempted;
        const unattempted = req.query.unattempted;
        const time = req.query.time;
        const decodedmap = decodeURIComponent(req.query.map);
        const keyvalue = JSON.parse(decodedmap);
        var test1 = new Map(keyvalue);
        test1.set("attempted", attempted);
        test1.set("score", score);
        test1.set("unattempted", unattempted);
        test1.set("time", time);
        await mongo.pushtest(testname, email, test1);
        res.redirect('/viewresults');

    }

})

app.get('/dashboard', async (req, res) => {
    console.log(email);
    if (email != null) {
        const writtentests = await mongo.writtentests(email);
        res.render('dashboard', { tests: writtentests });
    }
    else
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');
});

app.get('/gototest', (req, res) => {
    if (email != null) {
        testname = req.query.testname;
        res.redirect('/viewresults');
    }
    else
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');
})

app.get('/key', (req, res) => {
    console.log(email);
    if (email == null)
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');
    else {
        console.log(map);
        const temp = testname.split("(")[0].trim();
        const keys =  temp + "key";
        const mapJson = JSON.stringify(Array.from(map.entries()));
        res.render( `${keys}`, { mapJson });
    }
})
app.get('/taketest', (req, res) => {
    if (email != null) {
        testname = req.query.testname; 
        
        res.render(`${testname}`);
    }
    else
        res.send('Please Login to Continue login here <a href="/login">Click me</a>');
});
const YT = [[`<iframe width="560" height="315" src="https://www.youtube.com/embed/9SJ17nQczpQ?si=eQENTu0cp2NDaR4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/ApkSfJQFR5A?si=CTFaSMTbMDUDPHUH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/Grt26cNNJFs?si=3vTpI1MWUd4dmU-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/9QCX0cQR5Ps?si=PfpJel2AYLe_st-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`nan`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/-4b6LSAgVyU?si=gqZOmEAFqHJB14S7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/Soi8xPqe3jQ?si=nxN7CsSvH2xlFPaZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`nan`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/VBKWuwpTQsM?si=rnuO9LigUR4iHwWH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/sxeRubneoUc?si=h2o5GX1nCaYa-SXy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/fS1MYsCeCh4?si=Bu57laEYhG11wrjN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/EWuKYsfK1x0?si=xelpVnXSe7ZuuJpt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/-3qziwXA1-o?si=usgxMUWWgDfhVz_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],


[`<iframe width="560" height="315" src="https://www.youtube.com/embed/pYAEQXwP5Kc?si=BRC8lPvvf1Ee5lgW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/IGpKgwIKSPQ?si=ntKuaAsAb2l7XtPb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/B1Ak5gv50OQ?si=eljRlnKomSBJwI6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/T1xbR-MlBvQ?si=Dh30Dn3B46jsw7Rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/NG84xAIkUEg?si=MngWsouF7AvzdHkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`nan`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/fS1MYsCeCh4?si=fDvSOP8eHPIoBUB_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/B_nNDo07idc?si=OjT-e1Zpl25YM2yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/W3fWT01_BFo?si=-DEJYIFFYd5QyYAz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/AUVfliEcrIg?si=Spxz9GtlAwa10DZe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`<iframe width="560" height="315" src="https://www.youtube.com/embed/y_o1I4c_7Pg?si=oH68dyAqoryI-X58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`],
[`nan`],
[`nan`],
[`nan`]
];

const lesson = [`Atomic structure`, `Classification of elements and periodicity`, `Chemical bonding and molecular structure`, `States of matter`, `Stoichiometry`, `Thermodynamics`,
    `Chemical equilibrium`, `Hydrogen and its compounds`, `The s-Block elements`, `The p-Block elements`, `Environmental chemistry`, `Organic chemistry`,
    `Atomic structure`,
    `Classification of elements and periodicity`, `Chemical bonding and molecular structure`, `States of matter`,
    `Stoichiometry`, `Thermodynamics`, `Chemical equilibrium`, `Hydrogen and its compounds`, `The s-Block elements`, `The p-Block elements`, `Environmental chemistry`, `Organic chemistry`];

app.get('/resources', (req, res) => {
    res.render('resources', { YT: YT, lesson: lesson });
})

app.get('/gradesheet', (req, res) => {
    res.render('gradesheet');
})

app.listen(port, (err, res) => {
    if (err)
        throw err;
    else
        console.log("running : " + `http://localhost:${port}`);
});