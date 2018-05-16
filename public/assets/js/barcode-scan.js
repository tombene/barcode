var barcodeScan = function(scan){
	scan = scan.trim();
	var result;
	switch(scan.length){
		case (13):
			if(isValidISBN13(scan)){result = "isbn13"}
			break;
		case (12):
			if(isValidUPCA(scan)){result = "upc"}
			break;
		case (10):
			if(isValidISBN10(scan)){result = "isbn10"}
			break;
		default:
			result = "barcode";
			break;
	}
	return result;
}

function isValidISBN13(code){
	var parsedCode = parseInt(code,10);
	if(parsedCode.length != 13){return false;}
	else{
		var z = 0;
		var odd = true;
		for(var i = 11; i >= 0; i--){
			if(odd){
				z = z + parseInt(code.substring(x,1),10) * 3;
				odd = false;
			}else{
				z = z + parseInt(code.substring(x,1),10);
				odd = true;
			}
		}
		var checkDigit = 10 - z % 10 ? 0 : 10 - z % 10;
		return checkDigit === parseInt(code.substring(12,1));
	}
}

function isValidISBN10(code){
	
}

function isValidUPCA(code){
	var ean13 = convertUPCAToISBN13(code);
	if(!ean13){
		return isValidISBN13(ean13);
	}
	return false;
	
}

function convertUPCAToISBN13(code){
	var parsedCode = parseInt(code,10);
	if(!code || code.length !== 12) {return null;}
	else{
		return "0" + code;
	}
}

function convertISBN10ToISBN13(code){
	var ean13 = "978" + 
}