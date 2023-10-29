let link = "https://crudcrud.com/api/fabaf3196dda4e49a62855ea7bd9858d/additem";
axios.get(link)
.then((res)=>{
    for(let i=0;i<res.data.length;i++)
    {
        ShowUseronScreen(res.data[i]);
    }
})
.catch(err=>{
    console.log(err);
})
function Runthis(event)
{
    event.preventDefault();
    let candy = Candyname.value;
    let Price = price.value;
    let Quantity = quantity.value;
    let Description = description.value;

    let obj={
        candy,
        Price,
        Quantity,
        Description
    };

    AddonCrudCrud(obj)

}
function AddonCrudCrud(obj)
{
    axios.post(link,obj)
    .then((res)=>{
        ShowUseronScreen(res.data);
    })
    .catch(err=>console.log(err));
}

function ShowUseronScreen(obj)
{
    let parent  = document.getElementById("item");
    let childele = document.createElement("li");
    childele.textContent = `Candy: ${obj.candy} Price: ${obj.Price} Quantity: ${obj.Quantity} Description: ${obj.Description} id: ${obj._id}`;
    let button1 = document.createElement("button");
    button1.appendChild(document.createTextNode("BUY-ONE"));
    let button2 = document.createElement("button");
    button2.appendChild(document.createTextNode("BUY-2"));
    let button3 = document.createElement("button");
    button3.appendChild(document.createTextNode("BUY-3"));
    parent.appendChild(childele);
    childele.appendChild(button1);
    childele.appendChild(button2);
    childele.appendChild(button3);
    button1.onclick(()=>{
        deleteone(obj);
    })
    function deleteone(obj)
        {
            if(obj.quantity>0)
            {
                obj.quantity = obj.quantity-1;
                axios.get(link+"/"+obj_id)
                .then(res=>{
                    
                })
                axios.delete(link+"/"+obj._id);
            }
        }


}

