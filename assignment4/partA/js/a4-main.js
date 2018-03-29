/********************************************************************************* 
*
* WEB222 – Assignment #4a
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: _Damirkhon Yodgorov___ Student ID: 108364175 Date: 24.03.2018___ 
* 
********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax =Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


window.onload= function loadTableWithFilters(){


    

   var area=document.querySelector("#main-table-body");
   area.innerHTML="";
   var content;

   for(var i=0;i<petData.length;i++)
   {
     
    if(filterType==""&&filterAgeMax==Number.MAX_VALUE&&filterAgeMin==0)
     {
        var row=document.createElement("tr");
        var column=document.createElement("td");
       
       
        
        row.innerHTML+="<td>"+"<img src='"+petData[i].image.src+"'"+"alt='"+petData[i].image.alt+"'"+"width='"+petData[i].image.width+"'"+"height='"+petData[i].image.height+"'"+"/>"+"</td>"; 
                     
        
              
        row.innerHTML+="<td><p><span class='name'>"+petData[i].name+"</span></p><p>"+petData[i].description+"</p><p>Age: "+petData[i].age+" years old.</p></td>";
       
       
       area.appendChild(row); 
   }
   else if(petData[i].type==filterType&&(petData[i].age>filterAgeMin&&petData[i].age<filterAgeMax))
     {
        var row=document.createElement("tr");
         var column=document.createElement("td");
        
        
         
         row.innerHTML+="<td>"+"<img src='"+petData[i].image.src+"'"+"alt='"+petData[i].image.alt+"'"+"width='"+petData[i].image.width+"'"+"height='"+petData[i].image.height+"'"+"/>"+"</td>"; 
                      
         
               
         row.innerHTML+="<td><p><span class='name'>"+petData[i].name+"</span></p><p>"+petData[i].description+"</p><p>Age: "+petData[i].age+" years old.</p></td>";
        
        
        area.appendChild(row); }

   }




}




function loadTableWithFilters(){


    

    var area=document.querySelector("#main-table-body");
    area.innerHTML="";
    var content;
 
    for(var i=0;i<petData.length;i++)
    {
      
     if(filterType==""&&filterAgeMax==Number.MAX_VALUE&&filterAgeMin==0)
      {
        var row=document.createElement("tr");
        var column=document.createElement("td");
       
       
        
        row.innerHTML+="<td>"+"<img src='"+petData[i].image.src+"'"+"alt='"+petData[i].image.alt+"'"+"width='"+petData[i].image.width+"'"+"height='"+petData[i].image.height+"'"+"/>"+"</td>"; 
                     
        
              
        row.innerHTML+="<td><p><span class='name'>"+petData[i].name+"</span></p><p>"+petData[i].description+"</p><p>Age: "+petData[i].age+" years old.</p></td>";
       
       
       area.appendChild(row);  
    }
    else if((petData[i].type==filterType||filterType=="")&&(petData[i].age>filterAgeMin&&petData[i].age<filterAgeMax))
      {
         var row=document.createElement("tr");
         var column=document.createElement("td");
        
        
         
         row.innerHTML+="<td>"+"<img src='"+petData[i].image.src+"'"+"alt='"+petData[i].image.alt+"'"+"width='"+petData[i].image.width+"'"+"height='"+petData[i].image.height+"'"+"/>"+"</td>"; 
                      
         
               
         row.innerHTML+="<td><p><span class='name'>"+petData[i].name+"</span></p><p>"+petData[i].description+"</p><p>Age: "+petData[i].age+" years old.</p></td>";
        
        
        area.appendChild(row); }
 
    }
 
 
 
 
 }
 





//filterDog function displays all dogs 

function filterDog()
{

    filterAgeMin=0;
    filterAgeMax=Number.MAX_VALUE;
    filterType="dog";
    loadTableWithFilters();
    
}


//filterCat function displays all cats 
function filterCat()
{
 filterAgeMin=0;
 filterAgeMax=Number.MAX_VALUE;
 filterType="cat";
 loadTableWithFilters();

}

//filterBird function displays all birds
function filterBird()
{
 filterAgeMin=0;
 filterAgeMax=Number.MAX_VALUE;
 filterType="bird";
 loadTableWithFilters();


}

//filter_zero_1  function displays animals between 0 and 1

function filter_zero_1()
{
   filterAgeMax=1;
   filterAgeMin=0;
   filterType="";
   loadTableWithFilters();

} 

//filter_1_3 function displays animals between 1 and 5

function filter_1_3()
{
    filterAgeMax=3;
    filterAgeMin=1;
    filterType="";
    loadTableWithFilters();
}

// function filter_4_plus
function filter_4_plus()
{
    filterAgeMax=Number.MAX_VALUE;
    filterAgeMin=4;
    filterType="";
    loadTableWithFilters();
}
//filterAll function displays all pets from the petData array

function filterAllPets()
{
    filterAgeMin=0;
    filterAgeMax=Number.MAX_VALUE;
    filterType="";
    loadTableWithFilters();
}