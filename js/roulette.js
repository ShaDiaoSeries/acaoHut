// 单例模式，转盘唯一，用对象字面量方式表示
let roulette = {
    lightNum: 18, // 转盘上的灯
    light: null, // 转盘旋转灯容器
    roulette: null, // 转盘
    bg: null, // 转盘背景
    gift: null, // 转盘上的中奖结果图
    pointer: null, // 转盘指针
    lottery: [], // 中奖数据
    imageMap: {}, // 转盘图片
    isGoing: false, // 游戏是否开始
    isFinished: false, // 是否转完了

    frameworkInit() {
        // 初始化灯
        let lightFragment = document.createDocumentFragment();
        for (let i = 0; i < this.lightNum; i++) {
            let lightItem = document.createElement('span');
            let deg = (360 / this.lightNum) * i
            lightItem.style.transform = `rotate(${deg}deg)`;
            lightFragment.appendChild(lightItem);
        }
        this.light.appendChild(lightFragment);
        // 给点击抽奖按钮添加点击事件
        this.pointer.onclick = this.gameStart.bind(this);
    },

    prizeInit() {
        // 清空原bg和gift数据
        this.bg.innerHTML = '';
        this.gift.innerHTML = '';
        itemNum = this.lottery.length;
        if (!itemNum) {
            this.pointer.style.display = 'none';
            throw new Error('请设置中奖结果数据');
        }
        // 初始化转盘背景、转盘上的中奖图
        let bgFragment = document.createDocumentFragment();
        let giftFragment = document.createDocumentFragment();
        for (let i = 0; i < itemNum; i++) {
            let bgItem = document.createElement('li');
            let deg = (360 / itemNum) * i
            bgItem.style.transform = `rotate(${deg}deg)`;
            bgFragment.appendChild(bgItem);

            let giftItem = document.createElement('li');
            giftItem.style.transform = `rotate(${deg}deg)`;
            giftItem.className = 'tableSection';
            let span = document.createElement('span');
            span.className = 'sector';
            span.id = this.lottery[i].location;
            span.innerHTML = `<img src='${this.imageMap[this.lottery[i].name]}' class='roulette-headimg' /><p>${this.lottery[i].name}</p>`;
            giftItem.appendChild(span);
            giftFragment.appendChild(giftItem)
        }
        this.bg.appendChild(bgFragment);
        this.gift.appendChild(giftFragment);
    },

    gameStart() {
        if (this.isGoing) {
            return;
        }
        if (this.isFinished) {
            this.isFinished = false;
            // 重置转盘样式
            this.roulette.removeAttribute('style');
            document.getElementById('roulette_pointer').innerHTML = '开始抽奖';
            return;
        }
        this.isGoing = true;
        sectors = document.getElementsByClassName('sector');
        this.lottery = [];
        var isFullyCheated = true; // 下面的for循环如果未检测到任意rate>0的奖区，认为是严重作弊，我嘉某要给你点小小的惩罚，哼哼～
        for (var i = 0; i < sectors.length; i++) {
            s = sectors.item(i);
            segLocation = s.id;
            segName = s.children[1].innerHTML;
            segRate = buffAt != '' ? (segName === buffAt ? 20 : 0) : (segName in nameToSubLinkMap ? 20 : 0);
            this.lottery.push({ location: segLocation, name: segName, rate: segRate });
            if (segRate > 0) {
                isFullyCheated = false;
            }
        }
        if (isFullyCheated) {
            this.lottery = afterCheatLottery;
            this.prizeInit();
            setTimeout(() => {
                this.roulette.style.transform = `rotate(-75000deg)`;
                this.roulette.style.transition = `transform 100s ease-in-out`;
            }, 100);
            addMsgToChatbox('居然敢公然作弊，接受圣嘉然的惩罚吧，你今后上网时将无法逃脱出嘉然小姐的幻境！', false, false, 'red');
            setInterval(() => {
                addMsgToChatbox(nameToSubLinkMap['嘉然'], false, false, 'red');
            }, 1000);
            document.write(`<p style="font-size:100px;color:red;">圣嘉然的惩罚</p><p style="font-size:100px;color:red;">降&nbsp;&nbsp;临&nbsp;&nbsp;了&nbsp;&nbsp;！</p>`);
        } else {
            // 1. 随机中奖结果
            // 设置中奖数据的概率范围
            let num = 0
            this.lottery.forEach(item => {
                item.min = num;
                num += item.rate;
                item.max = num;
            })
            // 抽取随机数
            let randomRate = ~~(Math.random() * num) // ~~ == Math.floor()
            // 根据随机数，得到中奖结果
            let res = this.lottery.filter(item => {
                return randomRate >= item.min && randomRate < item.max;
            })[0];
            // 2. 计算旋转角度, 需要多转5圈，达转1圈用时1s, 到旋转的效果
            let rotateItemDeg = (res.location - 1) * (360 / this.lottery.length); // 每个item旋转角度, 第一个不用旋转
            let rotate = rotateItemDeg + 10 * 360;
            let rotateSpeed = (rotateItemDeg / 360 * 1 + 5).toFixed(2);

            // 保证下一次旋转动画生效
            setTimeout(() => {
                this.roulette.style.transform = `rotate(-${rotate}deg)`;
                this.roulette.style.transition = `transform ${rotateSpeed}s ease-in-out`;
            }, 10)

            // 3. 动画结束，显示中奖结果，中奖结果如何显示，视实际情况而定
            setTimeout(() => {
                this.isGoing = false;
                this.isFinished = true;
                document.getElementById('roulette_pointer').innerHTML = '重置转盘';
                addMsgToChatbox(nameToSubLinkMap[res.name], false, false)
            }, rotateSpeed * 1000);
        }
    }
}

roulette.roulette = document.querySelector('#roulette');
roulette.light = document.querySelector('#roulette_light');
roulette.bg = document.querySelector('#roulette_bg');
roulette.gift = document.querySelector('#roulette_gift');
roulette.pointer = document.querySelector('#roulette_pointer');
roulette.lottery = lottery;
roulette.imageMap = imageMap;
roulette.frameworkInit();
roulette.prizeInit();