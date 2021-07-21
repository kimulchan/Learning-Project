
let num = 0;
const wrapper = document.getElementsByClassName('wrapper_box')[0];

function dateFormat(params) {
    let date = new Date(params);
    let diff = (new Date().getTime() - date.getTime()) / 1000,
        day_diff = Math.floor(diff / 86400);
    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
        return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
    return (
        (day_diff == 0 &&
            ((diff < 60 && "방금") ||
                (diff < 120 && "1분 전") ||
                (diff < 3600 && Math.floor(diff / 60) + "분 전") ||
                (diff < 7200 && "1시간 전") ||
                (diff < 86400 && Math.floor(diff / 3600) + "시간 전"))) ||
        (day_diff == 1 && "어제") ||
        (day_diff < 7 && day_diff + "일 전") ||
        (day_diff < 31 && Math.ceil(day_diff / 7) + "주 전")
    );
}

async function boxf() {

    let json = await (await fetch(`https://api.eungyeol.live/feed/list?page=${num}`)).json()
    for (let i = 0; i < 3; i++) {
        let day = dateFormat(json[i].uploadAt)
        wrapper.innerHTML += `<div class="box">
                                <div class="boxTop">
                                    <img class="boxImg"src="https://api.eungyeol.live/file/${json[i].profileImage} ">
                                    <div class ="boxTopT">
                                        <div>${json[i].clubName}</div>
                                        <div class="day">${day}</div>
                                        </div>
                                </div>
                                <div>${json[i].content}<div>
                            </div>`;
    }
    console.log(dateFormat(json[0].uploadAt));

}
boxf();

// (() => {
//     document.addEventListener('scroll', () => {
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

//         num++;  
//         boxf();
//         }
//     })
// })

// window.onscroll = function () {

//       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         for (let i = 0; i < 3; i++) {
//             wrapper.innerHTML += `<div class="box"><div>${json[i].clubName}</div><div>${json[i].content}<div></div>`;
//         }
//         num++;  
//         boxf();
//     }
// }


// //스크롤 하기

// let observer = new IntersectionObserver(

// )

// 예제 풀기

// (() => {
//     const $ul = document.querySelector('ul');
//     let $li = document.querySelector('li:last-child');
//     let count = $ul.children.length;

//     // 1. 인터섹션 옵저버 생성
//     const io = new IntersectionObserver((entry, observer) => {

//       const ioTarget = entry[0].target;

//       // 4. viewport에 target이 보이면 하는 일
//       if (entry[0].isIntersecting) {
//         console.log('현재 보이는 타켓', ioTarget)
//         // 5. 현재 보이는 target 감시 취소해줘
//         io.unobserve($li);

//         // 6. 새로운 li 추가해
//         $li = $ul.appendChild(document.createElement('li'));
//         $li.textContent = ++count;
//         // 7. 새로 추가된 li 감시해!
//         io.observe($li);
//       }
//     }, {
//       // 8. 타겟이 50% 이상 보이면 해줘!
//       threshold: 0.5
//     });

//     // 2. li감시해!
//     io.observe($li);

//   })();
function scroll() {
    window.addEventListener('scroll', () => {

        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 스크린 창
        let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

        if (scrollLocation + windowHeight >= fullHeight - 100) {
            num++;
            boxf();
        }

    })
}
scroll();


