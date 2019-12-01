var app = new Vue({
    el: "#app",
    data: {
        dqrnumber:"",
        globalData: globalData,
        selectedqrcontent:"",
    },
    methods: {
        //QRコードを読み取って、そのidを抽出する。
        // QRは(d or l)と番号のオブジェクト。d or lを読んだ上で、dの場合は書類に添付された（貼り付けされた）QRとして理解、lの場合は格納場所に添付されたQRとして理解する。

        dataexport: function() {
            // console.log(this.globalData.QRdata)
            let j = JSON.parse(this.globalData.QRdata)
                switch(j.dorl) {
                    case 'd':
                        const data1 = {
                            "id":j.id,
                        };
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
                        }))    
                        this.globalData="";
                        break;
                 
                    case 'l':
                        // 読み取ってlの場合、すなわち格納場所のQRの場合、そこに格納される。

                        const data2 = {
                            "storageplace": j.storageplace,
                            // ここどうするか？そのスマホ固有のlateseUserをidentifyするには？→Loginした人。
                            // "latestuser":req.session.id これができない！
                            "latestuser":2

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
            
                        fetch('https://localhost:3000/addstoreditems/'+j.id, d2)
                        .then((res) =>  {
                            res.json().then((f)=>{
                                // ここから開始20191202 12PM PUTして戻ってくるところ。修正されるはず。
                                console.log(f)
                                alert("Success")


                                })
                            })
                        break;
                 
                    default:
                        console.log('Errorです');
                        break;
                }
            }
        }
              
    })