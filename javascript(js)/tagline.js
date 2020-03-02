/**______________________________________________________________________________________________________

Khoury, A. [Adam Khoury]. (2014, Jan 18). Array Slideshow Animation Tutorial JavaScript CSS3 HTML5. [Video]. 
Retrieved from: https://www.youtube.com/watch?v=-MifpF7p1P0
________________________________________________________________________________________________________*/

var tag_i = 0;
var tag_array = ["Return to a galaxy... Far Far Away", "Fear, leads to Anger. Anger leads to hate. Hate leaders to suffering", "May the force be with you"];
var tag_elem;
function tagNext()
{
	tag_i++;
	tag_elem.style.opacity = 0;
	if(tag_i > (tag_array.length - 1))
	{
		tag_i = 0;
	}
	setTimeout('tagSlide()',1000);
}

function tagSlide()
{
	tag_elem.innerHTML = tag_array[tag_i];
	tag_elem.style.opacity = 1;
	setTimeout('tagNext()',2000);
}

