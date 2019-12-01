var app = new Vue({
    el: "#app",
    data: {
      // difficult to read. to be summarized.
        storeditems:"",
        neworiginaluser:"",
        newdocument:"",
        newstorageplace:"",
        newlatestuser:"",
        selectedid:"",
        selecteddocs:"",
        modifiedid:"",
        modifiedstorageplace:"",
        modifiedlatestuser:"",
        selectedoriginaluser:"",
        selecteddocument:"",
        selectedstorageplace:"",
        selectedlatestuser:"",
        // qrdata:""
    },
    
    methods: {
        registerandqr:function(){
            // if (this.newName == "") return;
            const data = {
              "originaluser": this.neworiginaluser,
              "document": this.newdocument,
              "storageplace": this.newstorageplace,
              "latestuser":this.newlatestuser
            };
            const headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            };
            const d = {
            headers: headers,
            method: "POST",
            body: JSON.stringify(data) 
            };
            var self = this;
            fetch('/addstoreditems', d)
            .then((e) => {
                e.json().then((j) => {
                  console.log(j);
                self.qrcreation(j)
                })
              }).then((k)=>{this.readall();
              })
              ;
              ;
            this.neworiginaluser="";
            this.newdocument="";
            this.newstorageplace="";
            this.newlatestuser=""

        },

        qrcreation:function(i){
            let idqr = i.id;
            console.log(idqr);
            $('#qrprint').html("");
            $('#qrprint').qrcode({ width: 90, height: 90, text: '{"dorl":"d","id":idqr}'})
          },

        selectedmodify:function() {
          const data ={
            "storageplace": this.modifiedstorageplace,
            "latestuser":this.modifiedlatestuser
          };
          const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
          const d = {
          headers: headers,
          method: "PUT",
          body: JSON.stringify(data) 
          };
          return fetch('/addstoreditems/'+this.modifiedid, d)
          .then((e) => {
            e.json().then((j) => {
              this.readall();
              this.modifiedlatestuser="";
              this.modifiedstorageplace="";
              this.modifiedid=""
            })
          })
          ;;
        },
        
        readall: function() {
                const headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                };
                const d = {
                headers: headers,
                method: "GET"
                };
                var self = this;
                fetch('/addstoreditems', d).then((e)=>{
                e.json().then((j) => {
                    self.storeditems = j;
                })
                })
            },

        selectdocs: function() {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const d = {
              headers: headers,
              method: "GET"
            };
            var self = this
            // console.log(this.selectedid);
            fetch('/addstoreditems/' + this.selectedid, d)
            .then((r) => {
              r.json().then((j) => {
                console.log(j);
                self.selectedoriginaluser=j.originaluser;
                self.selecteddocument=j.document;
                self.selectedstorageplace=j.storageplace;
                self.selectedlatestuser=j.latestuser
              })
              })
          },


    }
  })