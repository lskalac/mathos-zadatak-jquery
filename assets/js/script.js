
$(document).ready(function(){
	
	$(".btnAdd").click(function(){
		var inpt = $('input[name=checkListItem]').val();
		$("ol").append('<li class ="task">' + inpt + '<button type ="submit" class ="btnDone">Done </button>' +'</li>');
	});
	   
	$(document).on('click', '.btnDone', function (e) {
		e.preventDefault();
		var x = $(this).parent().text();
		var y = x.substring(1, (x.length) - 5);
		$("ul").append('<li class="task">' + y + '</li>');
		$(this).parent().remove();
	});	    
	  
});

