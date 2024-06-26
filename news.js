let btn = document.querySelector("#search");
let inp = document.querySelector("#input");
btn.addEventListener("click", () => {
    console.log("button cloick")
    getnews();
});

async function getnews() {
    let url = "https://newsapi.org/v2/everything?q=";
    let apikey = "&sortBy=publishedAt&apiKey=842fd5e7fca04e82b563ec2db366b3f5";
    try {
        let news = inp.value;

        let res = await axios.get(url + news + apikey);
        let newsdata = res.data.articles;

        let str = ``;
        newsdata.map((items) => {
            let card = `
    <div class=" col ">
        <div class="card h-100 ">
            <img src=${items.urlToImage} class="card-img-top" alt=""   height="210px">
            <div class="card-body text-primary ">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">${(items.description)}</p>
    <h5 class="card-title">${items.author}</h5>
  
    <a href=${items.url} class="btn btn-primary">get more information</a>
    <h6 class="card-title"> <h5>Published At</h5> ${items.publishedAt}</h6>
  </div>
        </div>  
        </div> `;
            str = str + card;
            document.querySelector("#d1").innerHTML = str;
        });
    } catch (error) {
        alert("api fetch error");
    }
}
async function getapihome() {
    let url =
        "https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=842fd5e7fca04e82b563ec2db366b3f5";

    try {
        let res = await axios.get(url);
        let newsdata = res.data.articles;

        let str = ``;
        newsdata.map((items) => {
            let card = `
    <div class='col'>
        <div class="card h-100">
            <img src=${items.urlToImage} class="card-img-top" alt="" width = "200px"  height="210px">
            <div class="card-body">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">${(items.description)}</p>
    <h5 class="card-title">${items.author}</h5>
  
    <a href=${items.url} class="btn btn-primary">get more information</a>
    <h6 class="card-title"> <h5>Published At</h5> ${items.publishedAt}</h6>
  </div>
        </div>  
        </div>`;
            str = str + card;

            document.querySelector("#d1").innerHTML = str;
        });
    } catch (error) {
        alert("api fetch error");
    }
}
getapihome();
