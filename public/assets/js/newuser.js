$(function () {
	console.log("hello world");

	$("#create-user").on("click", function (event) {
		console.log("hello");
		event.preventDefault();
		var newUser = {
			userName: $("#inputUserName").val().trim(),
			email: $("#inputEmail4").val().trim(),
			password: $("#inputPassword4").val().trim(),
			firstName: $("#inputFirstName").val().trim(),
			lastName: $("#inputLastName").val().trim(),
			address: $("#inputAddress").val().trim(),
			address2: $("#inputAddress2").val().trim(),
			city: $("#inputCity").val().trim(),
			state: $("#inputState").val().trim(),
			zip: $("#inputZip").val().trim()
		};
		if(newUser.userName !== '' && newUser.password !== ''){
			$.ajax("/register", {
				type: "POST",
				data: newUser
			}).then(
				console.log("success")
				// location.reload()
			);
		}else{
			$("#inputUserName").focus();
		}
	});
	
});