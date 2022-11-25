

// 一般顯示所有

const data = [
    {
       img:"https://picsum.photos/300/300",
       name:"美麗夢幻島",
       auter:"哈哈是我啦",
       info:"作品的描述作品的描述作品的描述作品的描述作品的描述作品的描述作品的描述作品的描述作品的描述作品的描述作品的描述作品的描述",
       date:[
        new Date().getFullYear() , new Date().getMonth()+1 , new Date().getDate()-4
       ],
       vote_num:214,
       share_:"",
       time:  null,
       domain:"https://ithelp.ithome.com.tw/questions/10141214",
    },
    {
        img:"https://picsum.photos/300/300",
        name:"這作品很爛",
        auter:"我是作者",
        info:"作品的描述作品的描述作品的描述",
        date:[
         new Date().getFullYear() , new Date().getMonth()+1 , new Date().getDate()-1
        ],
        vote_num:200,
        share_:"",
        time:  null,
        domain:"https://ithelp.ithome.com.tw/questions/10141214",
     },
     {
        img:"https://picsum.photos/300/300",
        name:"美麗夢幻7777",
        auter:"我是作者",
        info:"作品的描述作品的描述作品的描述",
        date:[
         new Date().getFullYear() , new Date().getMonth()+1 , new Date().getDate()-2
        ],
        vote_num:180,
        share_:"",
        time: null ,
        domain:"https://ithelp.ithome.com.tw/questions/10141214",
     },
     {
        img:"https://picsum.photos/300/300",
        name:"哈哈是我啦",
        auter:"我是作者",
        info:"作品的描述作品的描述作品的描述",
        date:[
         new Date().getFullYear() , new Date().getMonth()+1 , new Date().getDate()
        ],
        vote_num:0,
        share_:"",
        time: null,
        domain:"https://ithelp.ithome.com.tw/questions/10141214",
     },
];


// function renderCards(){
//     let str = "";
//     let card = document.querySelector(".card");
//     data.forEach((i)=>{
//         str+=`
//         <div class="card_box">
                
//                 <div class="img_box">
//                     <img src="${i.img}">
//                 </div>

//                 <div class="txt_box">
//                     <h3>${i.name} <span>${i.auter}</span></h3>
//                     <h4>作品理念:${i.info}</h4>
                    
//                 </div>

//                 <div class="btn_box">
//                 <h5>${i.date[0]}年${i.date[1]}月${i.date[2]}日</h5>
//                     <div class="like_box">
//                           <div class="like">
//                             <i class="fa-regular fa-heart heart"></i>
//                           </div>
//                           <p>投票<span>${i.vote_num}</span></p>
                          
//                     </div>

//                     <div class="share_box">
//                           <div class="share">
//                             <i class="fa-solid fa-share-from-square"></i>
//                           </div>
//                           <p>分享</p>
//                     </div>

                   
//                 </div>
//             </div>
//         `
//     })

//     card.innerHTML = str;
// }

// renderCards();


// 搜尋

let searchForm = document.querySelector("#search_form");
let searchInput = document.querySelector("#search_input");
let searchBtn = document.querySelector("#search_btn");

let cardsList = document.querySelector(".card");



const renderSearchCards = (keyword = '') =>{
    let renderUI = data;

    renderSearchUI = renderUI.filter((post) => post.name.includes(keyword) || post.auter.includes(keyword) )

    renderUI = renderSearchUI.map(
        (post) => `
        <div class="card_box" data-time="${post.time}">
                
                <div class="img_box">
                    <img src="${post.img}">
                </div>

                <div class="txt_box">
                    <h3>${post.name} <span>${post.auter}</span></h3>
                    <h4>作品理念:${post.info}</h4>
                    
                </div>

                <div class="btn_box">
                <h5 data-date>${post.date[0]}年${post.date[1]}月${post.date[2]}日</h5>
                    <div class="like_box">
                          <div class="like">
                            <i class="fa-regular fa-heart heart"></i>
                          </div>
                          <p>投票<span>${post.vote_num}</span></p>
                          
                    </div>

                    <div class="share_box" id="share_box">
                          <div class="share">
                            <i class="fa-solid fa-share-from-square"></i>
                          </div>
                          <p>分享</p>
                    </div>

                   
                </div>
            </div>
        `

      
    )


    cardsList.innerHTML = renderUI.length 
    ? renderUI.join("") 
    : `<h1>哭哭沒有東西~</h1>`;

}

renderSearchCards();

const searchPost = (event) =>{
    event.preventDefault();
    console.log(searchInput.value);
    renderSearchCards(searchInput.value);
}

searchBtn.addEventListener("click",searchPost);


// var $grid = $(".grid").isotope({
//     itemSelector : ".grid-item",
//     layoutMode: "fitRows",
//     getSortData:{
//         time: function( $elem ) {
//             return $elem.find('.date').attr('data-time');
//           }
//     }
// })

data.forEach((i)=>{
    let time = [];
    time.push(i.time)
    console.log(time);
})

let hotBtn = document.querySelector("#hot_btn");
let newBtn = document.querySelector("#new_btn");
let oldBtn = document.querySelector("#old_btn");

console.log(hotBtn,newBtn,oldBtn);


const renderSortCards = () =>{

    let renderSortData = data;

    renderSortData = renderSortData.map((i)=>{

    })
}