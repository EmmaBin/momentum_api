fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(res => res.json())
.then(data =>{
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').textContent = `By: ${data.user.name}`
})
.catch(err =>{
    document.body.style.backgroundImage = `url(
        (https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?
        crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)
    )`
    document.getElementById('author').textContent = `By: ${data.user.name}`
})


fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
    `
    })
    .catch(err => console.error(err))