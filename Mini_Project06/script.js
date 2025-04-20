const getuser = document.querySelector("#getuser");

function getNewUser(){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        const {name, email, gender, picture} = result.results[0];
        document.querySelector("#parent").innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
                <div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
                    <img src="${picture.large}" class="w-full h-full fit-cover" alt="">
                </div>
                <h3 class="font-semibold text-2xl">${name.first}</h3>
                <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
                <h6 class="text-sm opacity-40">${email}</h6>
                <p class="mt-5 text-xs font-semibold opacity-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora unde cumque sunt aliquid, maiores error in quaerat necessitatibus deleniti veniam, illum impedit consequatur!</p>
            </div>`
    })

}

getuser.addEventListener("click", function(){
    getNewUser()
})  