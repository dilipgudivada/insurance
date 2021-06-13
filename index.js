const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const { raw } = require('body-parser');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'insurance'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/api/insurances',(req, res) => {
  let sql = "SELECT * FROM generalinfo g inner join additionalinfo ad ON g.PatientID = ad.PatientId inner join oralsurgerycoverage osc ON g.PatientID = osc.patientID";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single product
app.get('/api/insurance/:id',(req, res) => {
  let sql = "SELECT * FROM generalinfo g inner join additionalinfo ad ON g.PatientID = ad.PatientId inner join oralsurgerycoverage osc ON g.PatientID = osc.patientID WHERE g.PatientID="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new product
app.post('/api/insurance',(req, res) => {
  let data = {
    PatientID: req.body.PatientID, 
    GuestName: req.body.GuestName || null, 
    GuestDOB: req.body.GuestDOB|| null, 
    InsuredName: req.body.InsuredName|| null, 
    InsuredDOB: req.body.InsuredDOB|| null, 
    InsuredSSN: req.body.InsuredSSN|| null, 
    InsuredID: req.body.InsuredID|| null, 
    GroupNumber: req.body.GroupNumber|| null, 
    InsuredEmployer: req.body.InsuredEmployer|| null, 
    InsCompany: req.body.InsCompany|| null, 
    InsCompAddress: req.body.InsCompAddress || null
   };
    
  let sql = "INSERT INTO generalinfo SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": err}));
    } else {
      let data2 = {
        PatientID: req.body.PatientID, 
        FamilyCoverage: req.body.FamilyCoverage|| null,
        EffectiveDate: req.body.EffectiveDate|| null,
        PayorId: req.body.PayorId|| null,
        CalendarFiscalDates: req.body.CalendarFiscalDates|| null,
        YearlyMax: req.body.YearlyMax|| null,
        BenefitsUsed: req.body.BenefitsUsed|| null,
        IndDed: req.body.IndDed|| null,
        FamDed: req.body.FamDed|| null,
        DeductibleMet: req.body.DeductibleMet|| null,
        MissTthClause: req.body.MissTthClause|| null,
        WaitingPeriod: req.body.WaitingPeriod|| null,
        HowLong: req.body.HowLong|| null,
        ReplacementPeriod: req.body.ReplacementPeriod|| null,
        ProstheticPay: req.body.ProstheticPay|| null,
        DowngradeComposites: req.body.DowngradeComposites|| null,
        DowngradeCrowns: req.body.DowngradeCrowns|| null,
        OrthoCoveragePercentage: req.body.OrthoCoveragePercentage|| null,
        LifeTimeMax: req.body.LifeTimeMax|| null,
        OrthoDed: req.body.OrthoDed|| null,
        HasDedBeenMet: req.body.HasDedBeenMet|| null,
        AgeLimit: req.body.AgeLimit|| null,
        OrthoPaidBy: req.body.OrthoPaidBy|| null,
        WorkInProgress: req.body.WorkInProgress|| null,
        BandingIntialPymt: req.body.BandingIntialPymt|| null,
        Notes: req.body.Notes|| null,
        VerifiedBy: req.body.VerifiedBy|| null,
        VerifiedDate: req.body.VerifiedDate || null
       };
       let sql2 = "INSERT INTO additionalinfo SET ?";
       let query2 = conn.query(sql2, data2,(err, results) => {
        if(err)  {
          res.send(JSON.stringify({"status": 400, "error": err, "response": err}));
        } else {
          let data3 = {
            PatientID: req.body.PatientID, 
        Preventative: req.body.Preventative|| null,
        SurgeryCoverage: req.body.SurgeryCoverage|| null,
        BasicFillings: req.body.BasicFillings|| null,
        D6057: req.body.D6057|| null,
        D6104: req.body.D6104|| null,
        EndoRootCanals: req.body.EndoRootCanals|| null,
        D6056: req.body.D6056|| null,
        D4263: req.body.D4263|| null,
        Periodontics: req.body.Periodontics|| null,
        D6061: req.body.D6061|| null,
        D4264: req.body.D4264|| null,
        OralSurgeryExtractions: req.body.OralSurgeryExtractions|| null,
        SurgExt: req.body.SurgExt|| null,
        SimpleExt: req.body.SimpleExt|| null,
        Major: req.body.Major|| null,
        D6065: req.body.D6065|| null,
        D4266: req.body.D4266|| null,
        CrownsD2740: req.body.CrownsD2740|| null,
        D6010: req.body.D6010|| null,
        D7951: req.body.D7951|| null,
        Bridges: req.body.Bridges|| null,
        D7311: req.body.D7311|| null,
        D7952: req.body.D7952|| null,
        Denbures: req.body.Denbures|| null,
        FileOralSurg: req.body.FileOralSurg|| null,
        ImplantsD6058: req.body.ImplantsD6058|| null,
        D1351Sealants: req.body.D1351Sealants|| null,
        D1351Freq: req.body.D1351Freq|| null,
        D1351Age: req.body.D1351Age|| null,
        D1351ToothRestrictions: req.body.D1351ToothRestrictions|| null,
        D1510SpaceMint: req.body.D1510SpaceMint|| null,
        D1510Freq: req.body.D1510Freq|| null,
        D1510Age: req.body.D1510Age|| null,
        D1208Flouride: req.body.D1208Flouride|| null,
        D1208Freq: req.body.D1208Freq|| null,
        D1208Age: req.body.D1208Age|| null,
        D0150Exam: req.body.D0150Exam|| null,
        D0150Freq: req.body.D0150Freq|| null,
        D0150LastDos: req.body.D0150LastDos|| null,
        D1110Prophy: req.body.D1110Prophy|| null,
        D1110Freq: req.body.D1110Freq|| null,
        D1110LastDos: req.body.D1110LastDos|| null,
        D0274BiteWings: req.body.D0274BiteWings|| null,
        D0274Freq: req.body.D0274Freq|| null,
        D0274LastDos: req.body.D0274LastDos|| null,
        D0330Pano: req.body.D0330Pano|| null,
        D0330Freq: req.body.D0330Freq|| null,
        D0330LastDos: req.body.D0330LastDos|| null,
        D0220PAS: req.body.D0220PAS|| null,
        D0220Freq: req.body.D0220Freq|| null,
        D0220LastDos: req.body.D0220LastDos|| null,
        Xrays: req.body.Xrays|| null,
        D0140SDTXAllowed: req.body.D0140SDTXAllowed || null
           };
           let sql3 = "INSERT INTO oralsurgerycoverage SET ?";
   query = conn.query(sql3, data3,(err, results) => {
     console.log("results",results);
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": err}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
        }
      });
    }
  });
});
 
//update product
app.put('/api/insurance/:id',(req, res) => {
  let sql = "UPDATE generalinfo SET GuestName='"
  +req.body.GuestName
  +"', GuestDOB='"
  +req.body.GuestDOB
  +"', InsuredName='"
  +req.body.InsuredName
  +"', InsuredDOB='"
  +req.body.InsuredDOB
  +"', InsuredSSN='"
  +req.body.InsuredSSN
  +"', InsuredID='"
  +req.body.InsuredID
  +"', GroupNumber='"
  +req.body.GroupNumber
  +"', InsCompAddress='"
  +req.body.InsCompAddress
  +"', InsCompany='"
  +req.body.InsCompany
  +"', InsuredEmployer='"
  +req.body.InsuredEmployer
  +"' WHERE PatientID="+req.params.PatientID;
  let query = conn.query(sql, (err, results) => {
    if(err)  {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      let sql2 = "UPDATE additionalinfo SET FamilyCoverage='"
  +req.body.FamilyCoverage
  +"', VerifiedDate='"
  +req.body.VerifiedDate
  +"', VerifiedBy='"
  +req.body.VerifiedBy
  +"', Notes='"
  +req.body.Notes
  +"', BandingIntialPymt='"
  +req.body.BandingIntialPymt
  +"', WorkInProgress='"
  +req.body.WorkInProgress
  +"', OrthoPaidBy='"
  +req.body.OrthoPaidBy
  +"', AgeLimit='"
  +req.body.AgeLimit
  +"', HasDedBeenMet='"
  +req.body.HasDedBeenMet
  +"', DowngradeComposites='"
  +req.body.DowngradeComposites
  +"', DowngradeCrowns='"
  +req.body.DowngradeCrowns
  +"', OrthoCoveragePercentage='"
  +req.body.OrthoCoveragePercentage
  +"', LifeTimeMax='"
  +req.body.LifeTimeMax
  +"', OrthoDed='"
  +req.body.OrthoDed
  +"', EffectiveDate='"
  +req.body.EffectiveDate
  +"', ProstheticPay='"
  +req.body.ProstheticPay
  +"', ReplacementPeriod='"
  +req.body.ReplacementPeriod
  +"', HowLong='"
  +req.body.HowLong
  +"', WaitingPeriod='"
  +req.body.WaitingPeriod
  +"', MissTthClause='"
  +req.body.MissTthClause
  +"', FamDed='"
  +req.body.FamDed
  +"', IndDed='"
  +req.body.IndDed
  +"', BenefitsUsed='"
  +req.body.BenefitsUsed
  +"', YearlyMax='"
  +req.body.YearlyMax
  +"', CalendarFiscalDates='"
  +req.body.CalendarFiscalDates
  +"', PayorId='"
  +req.body.PayorId
  +"' WHERE PatientID="+req.params.PatientID;

  let query2 = conn.query(sql2, (err, results) => {
    if(err)  {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));

    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
    }
  });
});
 
//Delete product
app.delete('/api/insurance/:id',(req, res) => {
  let sql = "DELETE FROM generalinfo WHERE PatientID="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      let sql2 = "DELETE FROM additionalinfo WHERE PatientID="+req.params.id+"";
      let query2 = conn.query(sql2, (err, results) => {
        if(err) {
          res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
        } else {
          let sql3 = "DELETE FROM oralsurgey WHERE PatientID="+req.params.id+"";
          let query3 = conn.query(sql3, (err, results) => {
            if(err) {
              res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
            } else {
              res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            }
          });
        }
        });
      }
  });
});


app.post('/api/authenticateuser', (req, res) => {
  console.log(req);
  let sql = "select * FROM users WHERE UserId='"
  + req.body.UserId+"' and Password='" + req.body.Password+ "'";
  console.log(sql)
  let query = conn.query(sql, (err, results) => {
    console.log(results);
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
});

app.post ('/api/createuser', (req,res) => {
  let data = {
    UserId: req.body.UserId,
    Password: req.body.Password,
    Gender: req.body.Gender,
    DOB: req.body.DOB,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    MobileNumber: req.body.MobileNumber,
    RoleId: req.body.RoleId,
    EmailAddress: req.body.EmailAddress
  }
  let sql = "INSERT INTO users SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
});


app.put ('/api/updateuser/:id', (req,res) => {
  let sql = "UPDATE users SET FirstName='"
  +req.body.FirstName
  +"', LastName='"
  +req.body.LastName
  +"', DOB='"
  +req.body.DOB
  +"', Gender='"
  +req.body.Gender
  +"', MobileNumber='"
  +req.body.MobileNumber
  +"', RoleId='"
  +req.body.RoleId
  +"', EmailAddress='"
  +req.body.EmailAddress
  +"' WHERE UserId="+req.params.UserId;
  let query = conn.query(sql, (err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
});


app.delete('/api/deleteuser/:id',(req, res) => {
  let sql = "DELETE FROM users WHERE UserId="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
});

app.get('/api/roles', (req, res) => {
  let sql = "SELECT * FROM roles";
  let query = conn.query(sql, (err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
});

app.get('/api/users', (req, res) => {
  let sql = "SELECT * FROM users";
  let query = conn.query(sql, (err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
});

app.put('/api/changepassword', (req, res) => {
  let sql = "UPDATE users set Password='" +  req.body.NewPassword 
  +"' WHERE UserId='"+req.body.UserId + "' and Password='" + req.body.OldPassword + "'";
  console.log(sql)
  let query = conn.query(sql, (err, results) => {
    if(err) {
      res.send(JSON.stringify({"status": 400, "error": err, "response": null}));
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
  });
});

//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
 