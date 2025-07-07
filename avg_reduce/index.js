console.log("Average")

function avg(){
    const number=document.getElementById("input").value.split(",").map(Number)
    const sum=number.reduce((total,num)=>(total+num))
    document.getElementById("output").innerText=`Average = ${sum/number.length}`
}