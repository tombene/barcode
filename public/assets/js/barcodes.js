$(document).ready( function () {
	
	
	// New item form lose focus functions to search our data as the user inputs item data.
	$( "#upc" )
  .focusout(function() {
		var searchString = $('#upc').val();
		console.log('UPC lost focus', searchString);
		amazon.getItems(searchString, displayItems);
	});
	
	$( "#model" )
  .focusout(function() {
    console.log('model lost focus')
  });
	
	$( "#title" )
  .focusout(function() {
    console.log('title lost focus')
  });


	// Amazon and Walmart API functionality
	// var searchString = $('#search-input').val();

	// This function will be called to pull an item from Amazon and Walmart so the user can compare prices.
	function pricingAPIs() {
		walmart.getItems(searchString, displayItems);
		amazon.getItems(searchString, displayItems);
	};

	// The function above will then call this displayItems function to show the user 
	function displayItems(data, containerName) {
		console.log('amazon data',data);
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
		storeSearch(containerName + ': ' + data.name + ' Price: $' + data.price);
	};

});