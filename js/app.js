var app = angular.module('app', []);

app.value('equityValue', {
		sharesIssued: 1000000,
		sharesOwnable: 20000,
		pricePerShare: .50,
		strikePricePerShare: .50
});

app.controller('EquityValueController', ['equityValue', function(equityValue) {
	this.equityValue = equityValue;

	var oldThis = this;
	this.getCompanyValue = function() {
		return equityValue.sharesIssued * equityValue.pricePerShare;
	};

	this.getYourValue = function() {
		return equityValue.sharesOwnable * equityValue.pricePerShare;
	};

	this.getYourPrice = function() {
		return equityValue.sharesOwnable * equityValue.strikePricePerShare;
	};

	this.getYourNet = function() {
		return oldThis.getYourValue() - oldThis.getYourPrice();
	};

}]);