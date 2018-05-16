$(document).ready(function () {

	var searchString;
	var searchResults;
	var resultArray = [];
	// New item form lose focus functions to search our data as the user inputs item data.
	$("#upc")
		.focusout(function () {
			resultArray = [];
			var searchString = $('#upc').val();
			console.log('UPC lost focus', searchString);
			pricingAPIs(searchString);

			$.get("/api/upc/" + searchString, function (data) {
				if(data) {
					resultArray.push(data)
				}
				console.log('data', data);
				console.log('array', resultArray);

				var table = $('#item-data').DataTable();

				table.destroy();

				$('#item-data').DataTable({
					data: resultArray,
					columns: [
						{ data: 'id' },
						{ data: 'upc' },
						{ data: 'model' },
						{ data: 'title' },
						{ data: 'msrp' }
					]
				});

			});
		});

	$("#model")
		.focusout(function () {
			resultArray = [];
			var searchString = $('#model').val();
			console.log('model lost focus', searchString);
			pricingAPIs(searchString);

			$.get("/api/model/" + searchString, function (data) {
				if(data) {
					resultArray.push(data)
				}
				console.log('data', data);
				console.log('array', resultArray);

				var table = $('#item-data').DataTable();

				table.destroy();

				$('#item-data').DataTable({
					data: resultArray,
					columns: [
						{ data: 'id' },
						{ data: 'upc' },
						{ data: 'model' },
						{ data: 'title' },
						{ data: 'msrp' }
					]
				});

			});
		});

	$("#title")
		.focusout(function () {
			resultArray = [];
			var searchString = $('#title').val();
			console.log('title lost focus', searchString);
			pricingAPIs(searchString);

			$.get("/api/title/" + searchString, function (data) {
				if(data) {
					resultArray.push(data)
				}
				console.log('data', data);
				console.log('array', resultArray);

				var table = $('#item-data').DataTable();

				table.destroy();

				$('#item-data').DataTable({
					data: resultArray,
					columns: [
						{ data: 'id' },
						{ data: 'upc' },
						{ data: 'model' },
						{ data: 'title' },
						{ data: 'msrp' }
					]
				});

			});
		});





	// Amazon and Walmart API functionality

	// This function will be called to pull an item from Amazon and Walmart so the user can compare prices.
	function pricingAPIs() {
		walmart.getItems(searchString, displayItems);
		amazon.getItems(searchString, displayItems);
	};

	// The function above will then call this displayItems function to show the user 
	function displayItems(data, containerName) {
		resultArray.push(data);
		console.log('amazon data', data);
		// TODO: Talk about how this needs to come in and be displayed.
		var div = $('<div>').addClass('row ' + containerName + '-div');
		div.append('<h1>' + '$' + data.price + '</h1>');
		div.append('<p>' + data.name + '</p>');
		div.append('<p>' + data.model + '</p>');
		div.append('<p>' + data.upc + '</p>');
		div.append('<p class="hide-me" id="item-desc">' + data.description + '</p>');

		for (var i = 0; i < data.image.length; i++) {
			var imgTag = $('<img>').attr('src', data.image[i]).addClass(containerName + '-img-' + i);
			div.append(imgTag);
		}
		div.append('<p><a href="' + data.url + '">BUY HERE!</a></p>');
		$('#' + containerName + '-container').append(div);
	};

});