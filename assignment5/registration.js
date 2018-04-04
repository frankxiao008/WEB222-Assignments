function checkAllData()
{
    clearAllErrors();
    var result=password()
    var result0=username();
    var result1=province();
    var result2=street_name();
    var result3=city();
    return result&&result0&&result1&&result2&&result3;
    

}
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function password()
{
    
   var error=true;
    var pass=document.signup.password.value.trim();
    var repass=document.signup.repass.value.trim();
    var pass_length=pass.length;
    var alphString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var digit="1234567890";
    var characters="@#$*()!=+-/";
   

     /*variables containing all error messages*/


    var length_error="Password must be 8 characters long";
    var match_error="Passwords do not match";
    var start_error="Password must start with a character";
    var upper_error="Password must have at least one UpperCase";
    var digit_error="Password must have at least one Digit";
    
    /*checks for the password length*/
    if(pass_length!=8)
      {
        showerror("<p>"+length_error+"</p>");
        error=false;
      }

      /*checking if the passwords are matching*/
      if(pass!=repass)
      {
        showerror("<p>"+match_error+"</p>");
        error=false;
      }

      

        


      /*checking if password starts with a character*/
      var  character_exist=0;
      if(characters.indexOf(pass.substr(0,1))>=0)
       {
         character_exist=1;
       }

       if(character_exist!=1)
       {
           showerror("<p>"+start_error+"</p>");
           error=false;
       }


    
    /*checking if the password has one uppercase */ 

    var val=0;

     for(var i=0;i<pass_length;i++)
     {
        if(alphString.indexOf(pass.substr(i,1))>=0)
        {

            val=1;      
            break;
        }
       

       
     }
     if(val!=1)
     {
         showerror("<p>"+upper_error+"</p>");
         return false;
     }
    



     /*checking if the password has a digit*/
     var yes=0;
     for(var i=0;i<pass_length;i++)
     {
        if(digit.indexOf(pass.substr(i,1))>=0)
        {
            yes=1;
            break;
        }

     }

     if(yes!=1)
     {
         showerror("<p>"+digit_error+"</p>");
         error=false;
     }

    //returns result according to the checked and validated values
   if(!error)
   {
       return false;
   }
   else
   {
    return true;
   }
}




//Function used to check the username
////////////////////////////////////////////////////////////////
function username()
{

    var error=true;
   var username=document.signup.username.value.trim();
   var username_length=username.length;
   var allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*()!=+-/";
   var lettersonly="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

   //variables containing error messages for the showerror function
   var len_error="Username must have at least 6 characters";
   var char_error="Username must start with a letter";

   var counter=0;
   for(var i=0;i<username_length;i++)
    {
        if(allCharacters.indexOf(username.substr(i,1))>=0)
        counter++;
    }

    if(counter<6)
    {
      showerror("<p>"+len_error+"</p>");
      error=false;
    }

     var check=0;//variable to check, whether username starts with letter or not
    if(lettersonly.indexOf(username.substr(0,1))>=0)
    { 
        check=1;
        
    }

    if(check!=1)
    {
        showerror("<p>"+char_error+"</p>");
        error=false;
    }







   //return the last value for the function
 if(!error)
 {
      return false;
 }

 else
 return true;
 
}

////////////////////////////////////////////////////////////////
/*function to check whether user selected a province or not*/

function province()
{
   var province=document.signup.province.selectedIndex;
   var error=true;
   var expression=0;
   var error_mess="Please select one of the provinces";
   
   

   if(province==-1)
   {
       
    showerror("<p>"+error_mess+"</p>"); 
    error=false;
   }
  else
  error=true;


   if(!error)
 {
      return false;
 }

 else
 return true;


}


////////////////////////////////////////////////////////////////
/*Function used to check the street name*/

function street_name()
{
  var street=document.signup.street_name.value.trim();
  var alldigits="1234567890";
  var street_error="Street name should not contain any digit";
  var check=0;
  var error=true;

  for(var i=0;i<street.length;i++)
  {
    if(alldigits.indexOf(street.substr(i,1))>=0)
    {
        check=1;
        error=false;
        break;
    }

  }
  
  if(check==1)
  {
    showerror("<p>"+street_error+"</p>");
    error=false;
  }



    if(!error)
     {
       return false;
     }
 
    else
     return true;


}

////////////////////////////////////////////////////////////////
/*Function used to check city field*/

function city()
{
   var error=true;
   var city=document.signup.city.value.trim();
   var alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var city_error="City field must contain letters only";
   var error_check=0;
   for(var i=0;i<city.length;i++)
   {
       if(alphabet.indexOf(city.substr(i,1))>=0)
       {error_check=1;
       }
       else
       {
         error_check=0;
         break;
       }
   }

   if(error_check==0)
   {
       error=false;
       showerror("<p>"+city_error+"</p>");
   }



   if(!error)
   {
     return false;
   }

  else
   return true;


}


////////////////////////////////////////////////////////////////

/*Function used to display an error message for the user*/

function showerror(text)
{  
    document.querySelector("#errors").innerHTML+=text;
}
/*Function used to clear all the error messages*/
////////////////////////////////////////////////////////////////
function clearAllErrors()
{
    document.querySelector("#errors").innerHTML="";
}