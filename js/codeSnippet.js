// 每秒钟刷新一次buff区，不让用户改
var targetNode = document.getElementById('buffarea');
setInterval(function() {
    targetNode.innerHTML = buffAt === "" ? "Buff状态：目前无Buff" : `Buff状态：抽中${buffAt}的几率提升至100%`;
}, 1000);

// 阿草图绑定娇喘
document.getElementById("acao-butt").onclick = function() {
    // chatbox.js
    var acaoMoanCount = acaoMoaning.length;
    let mornIdx = ~~(Math.random() * acaoMoanCount)
    addMsgToChatbox(acaoMoaning[mornIdx], false, false);
};

addMsgToChatbox("你好，欢迎来到阿草……之屋！", false, true)
    .then(() => addMsgToChatbox("在这里，你可以随意抚摸阿草的银屯，满足你对福瑞的欲望！", false, true))
    .then(() => addMsgToChatbox("摸够阿草银屯之后，可以输入“抽奖”开启新玩法哦~", false, true));