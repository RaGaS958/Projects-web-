const BASE_URL =
  "https://latest.currency-api.pages.dev/v1/currencies";
 const btn=document.querySelector("form button");
  const dropdowns=document.querySelectorAll("#dropdown select");
  const fromcurr=document.querySelector("#from select");
  const tocurr=document.querySelector("#to select");
  const msg = document.querySelector("#msg");

 for(let select of dropdowns)
 {
  for(code in countryList)
  {
    let newoption=document.createElement("option");
    newoption.innerText=code;
    newoption.value=code;
    if(select.name==="from" && code==="USD")
    {
        newoption.selected="selected";
    }
    else if(select.name==="to" && code==="INR")
    {
        newoption.selected = "selected";
    }
    select.append(newoption);
  }
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
   });
}

const updateFlag=(element)=>{
let code=element.value;
let countryCode=countryList[code];
let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let img=element.parentElement.querySelector("img");
img.src=newsrc;
};
btn.addEventListener("click", async (evt)=>
{
  evt.preventDefault();
  let amount=document.querySelector("#amount input");
  let amt=amount.value;
  if(amt==="" || amt<1)
  {
    amt=1;
    amount.value=1;
  }
  const url=`${BASE_URL}/${fromcurr.value.toLowerCase()}.json`;
  let response= await fetch(url);
  let data= await response.json();
  console.log(data);
  let valu=data[fromcurr.value.toLowerCase()];
  let value=valu[tocurr.value.toLowerCase()];
  console.log(value);
  let famt=amt*value; 
  msg.innerText = `${amt} ${fromcurr.value} = ${famt} ${tocurr.value}`;
}
);
