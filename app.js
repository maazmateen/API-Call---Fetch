// console.log("hello world");

let input = document.querySelector("#Input")
let btn = document.querySelector(".btn")
let div = document.querySelector(".parent")
// console.log(input);

btn.addEventListener("click",function buttonclick(){
    // console.log("hello world");
    // console.log(input.value);

    let check = fetch(`https://api.github.com/users/${input.value}`)
    check.then((res)=>{
        return res.json()
    }).then((finalData)=>{
        console.log(finalData);
        console.log(finalData.login);
        console.log(finalData.name);
        console.log(finalData.id);
        console.log(finalData.public_repos);
        console.log(finalData.followers);
        console.log(finalData.following);
        console.log(finalData.bio);
        div.innerHTML =`
        <div class="children1">
        <img id="img" src ="${finalData.avatar_url}"></img>
        </div>


        <div class="children2">
        <h1>UserName : ${finalData.login}</h1>
        <h3>Name : ${finalData.name}</h3>
        <h3>Id : ${finalData.id}</h3>
        <h3>Bio : ${finalData.bio}</h3>
        <h3>Followers : ${finalData.followers}</h3>
        <h3>Following : ${finalData.following}</h3>
        <h3>Repositries : ${finalData.public_repos}</h3>
        </div>
        `
        
    }).catch((error)=>{
        console.log(error);
        
    })
    
    input.value="";
    
    
})





