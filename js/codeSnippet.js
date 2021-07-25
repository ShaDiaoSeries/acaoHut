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

addMsgToChatbox("摸够阿草银屯之后，记得输入“支持阿草”支持一下阿草哦~", false, true);