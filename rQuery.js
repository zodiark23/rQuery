/*
Plugin Develop by Reyan Tropia as Part of rQuery Plugin Collection

Project		: 		rQuery Plugin Collection
Author		: 		Reyan Celestial Tropia
Date		: 		May 19, 2016 11:00 AM
Dependency	: 		jquery.js
Version		: 		v1.0.0 Initial 



USAGE SYNTAX

$('input type text here').quicksearch('.search_index');

WHERE .search_index
	=> must be a class
	=> is the class of each <tr> in a table.
	=> this will be use to find if this <tr> match the search query
	=> this will be use to hide and show the results
*/

(function ($) {
	/*quick search finds the <tr> with the class_name and show every <tr> that contains the search query*/

	$.fn.quicksearch = function(class_name)
	{
		var that = this;
		var search_index = class_name; //element to find
		var item_count = 0;

		console.log('%c Quicksearch() Initialized -->' + that.attr('class'), 'font-family:courier;color:green;');

		that.on('keyup', function(){
		var search_query = that.val(); // value of the input textbox

			console.log(search_query.length == 0);
			$(class_name).each(function(){

				if(search_query.length > 0)
				{

					var haystack = $(this).html();

					if(haystack.indexOf(search_query) > -1)
					{
						$(this).fadeIn(0);
					}
					else
					{
					$(this).fadeOut(0); //hide each element to show the relevant output
					}

				}
				else if(search_query.length == 0)
				{
					$(this).fadeIn(0);
				}
			});



		});

		$.fn.counting = function()
		{
			return item_count;
		}
	}


	$.fn.metrobutton = function(bgcolor = "#2592ff" , color = "white" , padding = "6px")
	{
		this.css({"background-color": bgcolor
		, "color":color 
		, "padding":padding
		, "min-width": "60px"
		, "padding-left": "10px"
		, "padding-right": "10px"
		, "border" : "0"});
        

	}



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