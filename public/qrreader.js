var app = new Vue({
    el: "#app",
    data: {
        globalData: globalData
    },
    methods: {
        dataexport: function() {
            console.log(this.globalData.QRdata)
      }
    }})