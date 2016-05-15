/*Plugin colection developed by Reyan C. Tropia*/



(function ($){

	$.fn.slider = function(delay) {

		x = this.children().length - 1; /*Get the total number of slides*/
		this.children().css('display','none');
		this.children().eq(0).css('display','block');
		var element = this;
		var current = 0;


		setSlide();
		function setSlide(){
			if(current < x){
				current++;
			}
			else{
				current = 0;
			}

			setTimeout(function(){
				element.children().eq(current - 1).fadeOut(delay);
				element.children().eq(current).fadeIn(delay);

				/*this two lines above magically works haha*/

				console.log("Current :"+ current);
				console.log(current - 1);

			setSlide();
			},delay)



		
		}
		



	}



		
			

}(jQuery))
