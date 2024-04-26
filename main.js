

async function getData(){
    const x = await fetch("https://api.github.com/users/elzerowebschool/repos");
    const y= await x.json();
    console.log(y.map((data)=>console.log(data.id)))
}

getData()
.then((res)=>console.log("evert thing is ok "))
.catch((err)=>console.error("no data here "));