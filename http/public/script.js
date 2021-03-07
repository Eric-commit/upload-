 async function load() {
     const res = await fetch("http://localhost:3000/")
         .then((data) => data.json())
     console.log(res)
 }

 load()