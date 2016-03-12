
//jQuery图片旋转
$(document).ready(function () {
		var value = 0
		$('#photo').rotate({ 
		   bind: 
		     { 
		        mouseover: function(){
		            value +=90;
		            $(this).rotate({ animateTo:value})
		        }
		     } 
		});
	});	


/*扩展和收缩菜单
*/
function resize(obj){
	var temp = document.getElementById(obj.id).style.width;
	//alert(temp);
	if(temp!='100%'){
		
		document.getElementById(obj.id).style.width="100%";
	}
	else
		document.getElementById(obj.id).style.width="85%";
}
