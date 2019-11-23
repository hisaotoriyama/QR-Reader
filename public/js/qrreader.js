var app = new Vue({
    el: "#app",
    data: {
        dqrnumber:"",
        globalData: globalData,
        selectedqrcontent:""
    },
    methods: {
        //QRコードを読み取って、そのidを抽出する。
        // QRは(d or l)と番号のオブジェクト。d or lを読んだ上で、dの場合は書類に添付された（貼り付けされた）QRとして理解、lの場合は格納場所に添付されたQRとして理解する。

        dataexport: function() {
            console.log(this.globalData.QRdata)
            let j = JSON.parse(this.globalData.QRdata)
            console.log(j)
                switch(j.dorl) {
                    case 'd':
                        const data1 = {
                            "id":j.id,
                        };
                        console.log(data1)
                        const headers ={
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        };
                        const d = {
                            headers: headers,
                            method: "GET"
                            };
            
                        var self = this;
                        return fetch('https://localhost:3000/addstoreditems/'+j.id, d)
                        .then((res) =>                        
                            res.json()
                        .then((r)=>  {self.selectedqrcontent = r;
                        // →selectedqrcontentでセレクトし、上記dataで格納しておきたい。どのように？
                        console.log(self.selectedqrcontent);
                        }))    
                        this.globalData="";
                        break;
                 
                    case 'l':
                        // 読み取ってlの場合、すなわち格納場所のQRの場合、そこに格納される。
                        const data2 = {
                            "storageloc": j.id,
                            // ここどうするか？そのスマホ固有のlateseUserをidentifyするには？
                            // "latestuser":*****

                        };
                        const headers2 ={
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        };
                        const d2 = {
                            headers: headers2,
                            method: "PUT",
                            body: JSON.stringify(data2) 
                            };
            
                        var self = this;
                        fetch('https://localhost:3050/addstoreditems/'+this.selectedqrcontent.id, d2).then((res) =>  {
                            this.selectedocs = res.data
                            alert("Success")}
                            )          ;
                        break;
                 
                    default:
                        console.log('Errorです');
                        break;
                }
            }
        }
              
    })