

function valid(str)
{
	
	if(str.uname.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please enter Some Value in User Name";
	str.uname.focus();
	return false;
	}
	
	if(!str.uname.value.match(/^[a-zA-Z]{1,}$/))
	{
	document.getElementById("msg1").innerHTML="! Please enter Only Character Value";
	str.uname.focus();
	return false;
	}
	
	if(str.pass.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please enter Some Value in Password";
	str.pass.focus();
	return false;
	}
	
	
	if(str.pass.value.length<6)
	{
	document.getElementById("msg1").innerHTML="! Please enter minimum 6 digit length";
	str.pass.focus();
	return false;
	}
	
	if(str.email.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please enter Some Value in Email";
	str.email.focus();
	return false;
	}
	
	if(!str.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/))
	{
	document.getElementById("msg1").innerHTML="! Please enter Correct Email Address";
	str.email.focus();
	return false;
	}
	


	var gen_arr = document.getElementsByName("gen");
    if (gen_arr[0].checked == true) 
	{
                   
    } 
	else if (gen_arr[1].checked == true) 
	{
                  
    } 
	else 
	{
      document.getElementById("msg1").innerHTML="! Please Select Gender";	
       return false;
    }
	

    var chk_arr = document.getElementsByName("check");
    if (chk_arr[0].checked == true) 
	{
                   
    } 
	else if (chk_arr[1].checked == true) 
	{
                  
    } 
	else if (chk_arr[2].checked == true) 
	{
                  
    } 
	else if (chk_arr[3].checked == true) 
	{
                  
    }
	else 
	{
      document.getElementById("msg1").innerHTML="! Please Select any one Hobby ";
       return false;
    }


		if(str.country.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please Select Some Value in Country";
	str.country.focus();
	return false;
	}
	
	
	
}