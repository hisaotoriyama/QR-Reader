var app = new Vue({
    el: "#app",
    data: {
        QRData: ""
    },
    methods: {
        dataexport: function() {
            console.log(this.QRData)
      }
    }})