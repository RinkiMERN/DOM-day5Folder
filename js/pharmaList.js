let inputBox1=document.querySelector("form")[0];
let inputBox2=document.querySelector("form")[1];
let form1=document.querySelector("form");
let fee1=document.getElementById("fee1");
let fee2=document.getElementById("fee2");
let fee3=document.getElementById("fee3");
let fee4=document.getElementById("fee4");
let fee5=document.getElementById("fee5");
let fee6=document.getElementById("fee6");
let fee7=document.getElementById("fee7");
let fee8=document.getElementById("fee8");
let fee9=document.getElementById("fee9");
let fee10=document.getElementById("fee10");
let tbody1=document.getElementById("tests");
let head=document.getElementById("name");
let sum1=document.getElementById('sum');
let divRight=document.getElementById("rightBlock");
divRight.style.visibility="hidden";
// var ar=['General Check Up','Ecg','Anti TPO Test','Blood Test','HIV Test','X-ray','Sonography','Dailisis','City Scanning','Thyroid Test'];
// for(let i=0;i<ar.length;i++){
//     console.log(ar[ar.valueOf(i)]);
// }
// var val1=ar.values();
// let feeAr=[500,150,1020,500,700,400,750,1000,15000,500];
// console.log(val1.next().value);
var sum=0;
var d=0;
form1.addEventListener("submit",e=>{
    e.preventDefault();
    if(inputBox1.value=="" && inputBox2.value=="")
    {
        head.innerText += "";   
    }
    else { 
        divRight.style.visibility="visible";       
        head.innerHTML=`<span>${inputBox1.value}</span>`;
        let data1=document.createElement("td");
        let data2=document.createElement("td");
        let data3=document.createElement("td");
        let row=document.createElement("tr");
        let btn=document.createElement("input");
        btn.setAttribute("type","submit");
        btn.setAttribute("value","delete");
        data3.appendChild(btn);
        data1.textContent=inputBox2.value;
        row.appendChild(data1);
        btn.addEventListener('click',e=>{
            btn.parentElement.parentElement.remove();
        if(btn.parentElement.previousSibling.previousSibling.textContent=="General Check Up")
        {
            let x=Number(fee1.innerText);
            let y=Number(sum1.textContent); d=y-x;
            sum1.textContent=d;
        }
       else if(btn.parentElement.previousSibling.previousSibling.textContent=="Ecg")
        {
            let x=Number(fee2.innerText);
            let y=Number(sum1.textContent); d=y-x;
            sum1.textContent=d;
        }
        else if(btn.parentElement.previousSibling.previousSibling.textContent=="Anti TPO Test")
        {
            let x=Number(fee3.innerText);
            let y=Number(sum1.textContent); d=y-x;
            sum1.textContent=d;
        }
        else if(btn.parentElement.previousSibling.previousSibling.textContent=="Blood Test")
        {
            let x=Number(fee4.innerText);
            let y=Number(sum1.textContent);     d=y-x;
            sum1.textContent=d;
        }
       else if(btn.parentElement.previousSibling.previousSibling.textContent=="HIV Test")
        {
            let x=Number(fee5.innerText);
            let y=Number(sum1.textContent);     d=y-x;
            sum1.textContent=d;
        }
       else if(btn.parentElement.previousSibling.previousSibling.textContent=="X-ray")
        {
            let x=Number(fee6.innerText);
            let y=Number(sum1.textContent);     d=y-x;
            sum1.textContent=d;
        }
       else if(btn.parentElement.previousSibling.previousSibling.textContent=="Sonography")
        {
            let x=Number(fee7.innerText);
            let y=Number(sum1.textContent);     d=y-x;
            sum1.textContent=d;
        }
       else if(btn.parentElement.previousSibling.previousSibling.textContent=="Dailisis")
        {
            let x=Number(fee8.innerText);
            let y=Number(sum1.textContent);     d=y-x;
            sum1.textContent=d;
        }
       else if(btn.parentElement.previousSibling.previousSibling.textContent=="City Scanning")
        {
            let x=Number(fee9.innerText);
            let y=Number(sum1.textContent);     d=y-x;
            sum1.textContent=d;
        }
       else if(btn.parentElement.previousSibling.previousSibling.textContent=="Thyroid Test")
        {
            let x=Number(fee10.innerText);
            let y=Number(sum1.textContent);     d=y-x;
            sum1.textContent=d;
        }
        })
        if(inputBox2.value=="General Check Up")
        {
            data2.textContent=fee1.innerText;
            let x=Number(data2.textContent);
            sum=0+x;
            sum1.textContent=sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
       else if(inputBox2.value=="Ecg")
        {
            data2.textContent=fee2.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
        else if(inputBox2.value=="Anti TPO Test")
        {
            data2.textContent=fee3.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
        else if(inputBox2.value=="Blood Test")
        {
            data2.textContent=fee4.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
        }
       else if(inputBox2.value=="HIV Test")
        {
            data2.textContent=fee5.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
       else if(inputBox2.value=="X-ray")
        {
            data2.textContent=fee6.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
       else if(inputBox2.value=="Sonography")
        {
            data2.textContent=fee7.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
       else if(inputBox2.value=="Dailisis")
        {
            data2.textContent=fee8.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
       else if(inputBox2.value=="City Scanning")
        {
            data2.textContent=fee9.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
       else if(inputBox2.value=="Thyroid Test")
        {
            data2.textContent=fee10.innerText;
            sum=Number(sum)+Number(data2.textContent);
            sum1.textContent =sum;
            row.appendChild(data2);
            row.appendChild(data3);
        }
        tbody1.appendChild(row);
    }
})