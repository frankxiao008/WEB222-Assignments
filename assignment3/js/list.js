// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];


window.onload=function()
{
   var section=document.querySelector("#area1");
   var section2=document.querySelector("#area2");
   var list="<ol>";
   var unlist="<ul>";
   for(var i=0;i<fruits.length;i++)
   {
     list+="<li>"+fruits[i]+"</li>";

   }
 list+="</ol>";
 section.innerHTML=list;

   for(var i=0;i<directory.length;i++)
   {  
      
      
      if(directory[i].type=="directory"&&directory[i].name=="HTML Files")
      { 
        unlist+="<li>"+directory[i].name;
         for(var a=0;a<2;a++)
         {
             unlist+="<ul><li>"+directory[i].files[a].name+"</ul></li></li>";
         }
      }

      else if(directory[i].type=="directory"&&directory[i].name=="JavaScript Files")
      { 
        unlist+="<li>"+directory[i].name;
         for(var a=0;a<3;a++)
         {
             unlist+="<ul><li>"+directory[i].files[a].name+"</ul></li></li>";
         }
      }
      else
      unlist+="<li>"+directory[i].name+"</li>";
   }

  section2.innerHTML=unlist;


}


