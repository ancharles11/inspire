(function(){
	
	var qc = this;
	var quoteService = new QuoteService();
	
	quoteService.getQuote(function(quote){
		console.log(quote);
		quote = JSON.parse(quote)
		$("#quote").append('<p>"'+quote.quote+'"</p>').hover(
function () {
    $(this).append($("<span>&#151"+quote.author+"</span>"));
},function() {
    $( this ).find( "span:last" ).remove();
  }
);

	})	
}())
