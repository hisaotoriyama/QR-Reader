var app = new Vue({
    el: "#app",
    data: {
      newItem: "",
      name_selected: "",
      todos:"",
      isDonetodos:"",
      deleteId:"",
      deleteItem:"",
      revisedTodo:"",
      revisedTodos:"",
      loginName:"",
      loginPassword:"",
      newName:"",
      newPassword:"",
      userLists:""
    },

    methods: {
    //     var self = this;
    //     fetch('/adduser', d).then((res) =>  
    //         // res.redirect('../private/todo.html',this.newName)
    //         location.href = res.url
    //         )  
        
    //     this.newName = "";
    //     this.newPassword="";
    //   },
  
      login: function(){
        if (this.loginName == "") return;
        const data = {
          "loginName": this.loginName,
          "loginPassword": this.loginPassword
        };
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };
        const d = {
        headers: headers,
        method: "POST", //POSTする。POSTは記帳という意味よりも、データを送るという意味にある。上記のdataを送るのでPOSTとする。
        body: JSON.stringify(data) 
        };
        //vue.jsであるlogin/main.jsに基づき/loginを参照しdの処理をする。
        // Node.js/rest.jsに記載のapp.post(/login)の指示に委ねる。
        fetch('/login', d)
        .then((e) => {
            console.log(e)
          //その上で、location.href処理しsecureに移る。
          //ブラウザベースのJSの場合、location.href使う。一方サーバーベースのNode、Rails使う場合、redirectを使う。
          location.href = "../qrreader.html" 
        })

      }
    }
  });