
$(document).ready(function(){
	
	$(document).on("click",".btnAdd",function(){
		var inpt = $('input[name=checkListItem]').val();
		$("ol").append('<li class ="task">' + inpt + '<button type ="submit" class ="btnDone">Done </button><button type"submit" class="btnEdit">Edit </button>' +'</li>');
	});
	   
	$(document).on("click", ".btnDone", function (e) {
		e.preventDefault();
		var x = $(this).parent().text();
		var y = x.substring(0, (x.length) - 10);
		$("ul").append('<li class="task">' + y + '</li>');
		$(this).parent().remove();
	});	    
	
    $(document).on('click', '.btnEdit', function(){
       $(this).parent().attr('contenteditable','true');
	   $(this).parent().append('<button class = "btnSave"> Save </button>');
    });
	
	$(document).on('click', '.btnSave', function(){
       $(this).parent().attr('contenteditable','false');
		   $(this).remove();
    });
	
});

