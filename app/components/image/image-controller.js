(function () {

	var image = this;
	var imageService = new ImageService();

	imageService.getImage(function (res) {
		$("#body").css({
			background: 'url('+res.url+')'
			
			
			
			
		});
		//Your ImageService is a global constructor function what can you do here if you new it up?
	})

}())
		
