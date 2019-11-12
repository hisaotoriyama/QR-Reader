var app = new Vue({
    el: "#app",
    data: {
        globalData: globalData
    },
    methods: {
        locsdataexport: function() {
            console.log(JSON.stringify(this.globalData.QRdata))
                const data = {
                  "storageloc": this.globalData.QRdata.storageloc
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
          
                var self = this;
                fetch('/adduser', d).then((res) =>  
                    // res.redirect('../private/todo.html',this.newName)
                    location.href = res.url
                    )  
                
                this.newName = "";
                this.newPassword="";
              },

        docsdataexport: function() {
      }}
    })