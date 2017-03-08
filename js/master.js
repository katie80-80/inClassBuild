(function() {
	console.log("SEAF fired");
	$('.thumbInfo img').on('click', function(){
		$.ajax({
			url: "includes/ajaxQuery.php",
			data: {model: this.id},
			type: "GET"
		}) // no semicolon

		.done(function(data){
			console.log(data);
			if (data){
				data = JSON.parse(data);
				renderCarInfo(data);
			}else{
				alert("boo ajax")
			}

		}) // no semicolon

		.fail(function(ajaxCall, status, error){
			console.log(status, ":", error);
			console.log(ajaxCall);
		}); //end of chain semicolon

		function renderCarInfo(car) {
			$('.thumbInfo img').addClass('nonActive');
			$('#' + car.model).removeClass('nonActive');

			$('.subhead span').text(" mini Cooper " + car.model);
			$('modelName').text (car.modelName);
			$('.priceInfo').text (car.pricing);
			$('.modelDetails').text(car.modelDetails);
		}
	});

})();