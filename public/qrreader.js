var app = new Vue({
    el: "#app",
    data: {
        QRData: "Deruzoderuzo"
    },
    methods: {
        dataexport: function() {
            console.log(this.QRData)
      }
    }})