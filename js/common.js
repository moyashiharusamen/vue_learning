var vue = new Vue({
  el: "body",
  data: {
    houseRent: 70000,
		controlCost: 5000,
		deposit: 70000
  },
  computed: {
		splitRent: function(){
			return parseInt(((parseInt(this.houseRent) + parseInt(this.controlCost)) * 24 + parseInt(this.deposit)) / 24);
		}
  }
});
