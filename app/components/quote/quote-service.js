

    
 



function QuoteService(){
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	//Do Not Edit above we have to go through the bcw-getter to access this api
	
	this.getQuote =  function(callWhenDone){
		var y = localStorage.getItem('quote');
if(y){
	y = JSON.parse(y);
	console.log('Quote Data', y)
	return callWhenDone(y)
}

		$.get(apiUrl, function(res){
			localStorage.setItem('quote', JSON.stringify(res))
			console.log('Quote Data:', res)
			callWhenDone(res);
			//Now What?
		})
	}
}

