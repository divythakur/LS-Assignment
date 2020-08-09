var cafes=[];
    var places=[];
    var xhr=new XMLHttpRequest();

xhr.open('Get',"https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json");
    
    xhr.send();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4){
            cafes=JSON.parse(xhr.responseText);
            cafes=cafes.cafes;

        }
    }
    setTimeout(()=>{
        xhr.open('Get',"https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json");
        
        xhr.send();
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4){
                places=JSON.parse(xhr.responseText);
                places=places.places;
    
            }
        }
       },1000);
    
async function hey(){

    var keyword=document.getElementById("search").value;
     setTimeout(()=>{
         var temp=cafes;
        var temp=temp.filter(ele=> ele.name.toLowerCase().includes(keyword.toLowerCase()));
       
        var ans=[];
        for(i=0;i<places.length;i++)
        {
            for(j=0;j<temp.length;j++)
            {
                if(places[i].id==temp[j].location_id)
                {
                    places[i].name=temp[j].name;
                    ans.push(places[i]);
        
                    continue;
        
                }
            }
        }
        console.log(ans);
    
        var t=`<table><tr><th>Cafename</th><th>Address</th><th>PostalCode</th><th>lat</th><th>lon</th></tr>`;
        for(i=0;i<ans.length;i++)
        {
            t+=`<tr>`+
                `<td>`+ans[i].name+`</td>`+
                `<td>`+ans[i].street_no+ans[i].locality+`</td>`+
                `<td>`+ans[i].postal_code+`</td>`+
                `<td>`+ans[i].lat+`</td>`+
                `<td>`+ans[i].long+`</td>`+
                 `</tr>`;
        }
        t+='</table>';
        document.getElementById("table-wrapper").innerHTML=t;


    },1500);
    
    
}