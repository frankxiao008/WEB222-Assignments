// set a global httpRequest object

var httpRequest=new XMLHttpRequest();
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload=function(){
   
	url="https://reqres.in/api/users?page=1";
	httpRequest.onreadystatechange = showContents;
	httpRequest.open('GET', url, true);
    httpRequest.send();
}




function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	var url="https://reqres.in/api/users?page="+pageNum;
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
  


	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var table=document.querySelector("#data");
			table.innerHTML="";
			for(var i=0;i<jsData.data.length;i++)
			{
				var row=document.createElement("tr");
				var col=document.createElement("td");
				var col2=document.createElement("td");
				var col3=document.createElement("td");
				var col4=document.createElement("td");
				var  id=document.createTextNode(jsData.data[i].id);
				var name=document.createTextNode(jsData.data[i].first_name);
				var last_name=document.createTextNode(jsData.data[i].last_name);
				var img=document.createElement("img");
				img.setAttribute("src",jsData.data[i].avatar);
				col2.appendChild(name);
				col.appendChild(id);
				col3.appendChild(last_name);
				col4.appendChild(img);
				row.appendChild(col);
				row.appendChild(col2);
				row.appendChild(col3);
				row.appendChild(col4);

				
				
				table.appendChild(row);
			}
			
			
			




			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			for(var i=1;i<5;i++)
			{
			document.querySelector("#pgbtn"+i).className="";}
			

			
			
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			if(jsData.page==1)
			{
				var button=document.querySelector("#pgbtn1");
				button.className="active";
			}
			else if(jsData.page==2)
			{
				var button=document.querySelector("#pgbtn2");
				button.className="active";
			}
			
			else if(jsData.page==3)
			{
				var button=document.querySelector("#pgbtn3");
				button.className="active";
			}
			
			else if(jsData.page==4)
			{
				var button=document.querySelector("#pgbtn4");
				button.className="active";
			}
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	