// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        db.storeditem.findAll({ include: [db.user]})            
        .then((d) => {
            let data = d.map((p) => {
                console.log('----')
                console.log(p)
                  return {
                    id: p.id,
                    originaluser: p.originaluser,
                    document: p.document,
                    storageplace: p.storageplace,
                    latestuser: p.latestuser
                }
            })
            res.json(data)
        })
    },

    show: (req, res) => {
        // console.log(req.params.id)
        db.storeditem.findAll({
            where:{
                id: req.params.id
            }
        })            
        .then((d) => {
            let p = d[0]
            res.json({
                id: p.id,
                originaluser: p.originaluser,
                document: p.document,
                storageplace: p.storageplace,
                latestuser: p.latestuser
            })
            /*
            let data = d.map((p) => {
                  return {
                    id: p.id,
                    originaluser: p.originaluser,
                    content: p.content,
                    storageloc: p.storageloc,
                    latestuser: p.latestuser
                }
            })
            */
            res.json(data)
        })
    },

    create: (req, res) => {
        let data = {
          originaluser:Number(req.body.originaluser),
          document:Number(req.body.document),
          storageplace:Number(req.body.storageplace),
          latestuser:Number(req.body.latestuser),
        }
        console.log(data)
        db.storeditem.create(data).then((p)=>{
            console.log(p)
          res.json({
              id: p.id,
              originaluser: p.originaluser,
              document: p.document,
              storageplace: p.storageplace,
              latestuser: p.latestuser,
            })
        })
    },

    update: (req, res) => {
        db.storeditem.update({
            storageplace:req.body.storageplace,
            latestuser:req.body.latestuser
        },{
          where:{
            id:req.params.id
          }
        }).then((p)=>{
          let data = p
          res.json(data)
        })},

    // //（重要論点）Sequlize上ではdestroy。でもhttp上ではdeleteとする。
    // destroy: (req, res) => {
    //     db.vuetodotable.destroy({
    //         where: {
    //          id:req.params.id
    //         }
    //     }).then(() => {
    //         res.send({})
    //     })
 
}