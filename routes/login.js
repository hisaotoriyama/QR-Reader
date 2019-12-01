let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.post('/',(req, res) => {
    db.user.findOne({
        where:{
            name: req.body.loginName
        }
    }).then((d)=> {
        // passwordがなぜだか登録されていない！→modelsの修正もれがあった。修正したら
        console.log(d.password)
        console.log(d.id)
    if(req.body.loginPassword==d.password){
        req.session.name=req.body.loginName
        req.session.password= req.body.loginPassword
        req.session.id= d.id
        console.log(req.session.name)
        console.log(req.session.password)
        console.log(req.session.id)

        // res.cookie('login',true)
        // res.cookie('name',req.body.loginName)
        // →以下加筆
        // res.cookie('id', d.id)
        res.send(200)
    } else {
        // res.cookie('login',false)
        res.send(400)    
    }
    })
})

module.exports = router;
