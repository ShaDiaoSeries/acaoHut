//给聊天窗口绑定回车发送消息事件
document.getElementById("ui_inp_msg").onkeydown = function(e) {
	if(e.key === 'Enter'){
		sendmsgOnChatbox();//发送消息
	}
};

function sendmsgOnChatbox() {
	if(msg === ""){
		alert("输入内容不能为空");
		return;
	}
	var msg = document.getElementById("ui_inp_msg").value;
	document.getElementById("ui_inp_msg").value = "";
	return addMsgWrapper(msg);
}

function addMsgWrapper(msg) {
	addMsgToChatbox(msg, true, false);
	// 对输入的消息做处理（使用纯前端）
	var keys = Object.keys(nameToSubLinkMap);
	if (rouletteHidden) {
		if (msg.indexOf("抽奖") >= 0) {
			addMsgToChatbox(`欢迎使用UP主抽奖系统，当你在B站上不知道要关注哪个UP主时，可以转动左边的转盘抽一个关注~`, false, true)
				.then(function() {
					document.getElementById("acao-playground").setAttribute("hidden", true);
					document.getElementById("roulette-area").removeAttribute("hidden");
					rouletteHidden = false;
				});
			return;
		}
	} else {
		for (var keyIndex in keys) {
			var key = keys[keyIndex];
			if (msg.indexOf(key) >= 0) {
				buffAt = key;
				addMsgToChatbox(`你是不是很想关注${key}？我来帮一下你～(需要撤销的话请输入"取消buff")`, false, true);
				return;
			}
		}
		if (msg.indexOf('阿草') >= 0) {
			addMsgToChatbox(`喜欢我阿草吗？🥰`, false, true);
			return;
		} else if (msg.indexOf('取消buff') >= 0) {
			buffAt = '';
			addMsgToChatbox(`好吧……那我把buff给你去掉了。`, false, true);
			return;
		}
	}
	addMsgToChatbox(`嘿嘿~`, false, true);
	// 手里没有国内备案，国外服务器又难连，所以不对接聊天机器人了~
	// $.ajax({
	// 	type:"GET",
	// 	url:"api.php?key=free&appid=0&msg="+msg,
	// 	dataType:"json",
	// 	success:function(res){
	// 	},
	// });
}
// 在聊天窗口上增加一条消息（raw）
function addMsgToChatbox(msg, isClient, needDelay, color) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			var appendHtml = isClient
			? `<li class="t2"><img src="img/soul.webp"><div class="txt" style="color:${color ? color : 'black'}">` + msg + '</div></li>'
			: `<li class="t1"><img src="img/acao.jpg"><div class="txt" style="color:${color ? color : 'black'}">` + msg + '</div></li>';
			$("#ui_msg_box").append(appendHtml);
			scrollMsgBottom();
			resolve();
		}, needDelay ? 1000 : 0);
	});
}

// 将聊天消息的滚动条滑到底部
function scrollMsgBottom() {
	var topH = -$("#ui_msg_box").height();
	$("#ui_msg_box>li").each(function() {
		topH += $(this).outerHeight(true);
	});
	$("#ui_msg_box").animate({scrollTop: topH}, 200);
}