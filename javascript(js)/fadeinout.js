/**______________________________________________________________________________________________________

Gamache, D. (2010). How to Use jQuery to Make Slick Page Transitions [JQuery]. 
Retrieved from: http://www.onextrapixel.com/2010/02/23/how-to-use-jquery-to-make-slick-page-transitions/
________________________________________________________________________________________________________*/

$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(2000);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(2000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
});
