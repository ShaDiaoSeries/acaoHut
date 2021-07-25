let acaoMoaning = [
    '呃～',
    '啊啊啊～',
    '雅蠛蝶～',
    '哦哦哦哦哦哦～',
    '摩多摩多～',
    '奇摸鸡一一～',
    '一库一库～',
]

let lottery = [
    { location: 1, name: '嘉然', rate: 20 },
    { location: 2, name: '向晚', rate: 20 },
    { location: 3, name: '乃琳', rate: 20 },
    { location: 4, name: '贝拉', rate: 20 },
    { location: 5, name: '珈乐', rate: 20 },
    { location: 6, name: '阿草', rate: 0 },
    { location: 7, name: '七海', rate: 0 },
    { location: 8, name: '阿梓', rate: 0 },
    { location: 9, name: '兰音', rate: 0 },
    { location: 10, name: '希桃', rate: 0 },
    { location: 11, name: '文静', rate: 0 },
    { location: 12, name: '柯洁', rate: 0 },
    { location: 13, name: '电棍', rate: 0 },
    { location: 14, name: '金轮', rate: 0 },
    { location: 15, name: '金轮', rate: 0 },
    { location: 16, name: '乌兹', rate: 0 },
    { location: 17, name: '罗翔', rate: 0 },
    { location: 18, name: 'CR', rate: 0 },
];

let afterCheatLottery = [
    { location: 1, name: '嘉然', rate: 20 },
    { location: 2, name: '嘉然', rate: 20 },
    { location: 3, name: '嘉然', rate: 20 },
    { location: 4, name: '嘉然', rate: 20 },
    { location: 5, name: '嘉然', rate: 20 },
    { location: 6, name: '嘉然', rate: 20 },
    { location: 7, name: '嘉然', rate: 20 },
    { location: 8, name: '嘉然', rate: 20 },
    { location: 9, name: '嘉然', rate: 20 },
    { location: 10, name: '嘉然', rate: 20 },
    { location: 11, name: '嘉然', rate: 20 },
    { location: 12, name: '嘉然', rate: 20 },
    { location: 13, name: '嘉然', rate: 20 },
    { location: 14, name: '嘉然', rate: 20 },
    { location: 15, name: '嘉然', rate: 20 },
    { location: 16, name: '嘉然', rate: 20 },
    { location: 17, name: '嘉然', rate: 20 },
    { location: 18, name: '嘉然', rate: 20 },
];

let nameToSubLinkMap = {
    '嘉然': '关注嘉然，顿顿解馋！快来关注<a href="https://space.bilibili.com/672328094">@嘉然今天吃什么</a>！',
    '向晚': 'Avava，AvA！欢迎关注<a href="https://space.bilibili.com/672346917">@向晚大魔王</a>！',
    '贝拉': '关注<a href="https://space.bilibili.com/672353429">@贝拉kira</a>，让你知道什么是队长的含金量！',
    '珈乐': '快来关注<a href="https://space.bilibili.com/351609538">@珈乐Carol</a>，沉醉在她的歌声里吧~',
    '乃琳': '一起关注<a href="https://space.bilibili.com/672342685">@乃琳Queen</a>，实现永不疲惫的双向奔赴~',
};
let imageMap = {
    '嘉然': 'img/diana.webp',
    '向晚': 'img/ava.webp',
    '乃琳': 'img/eileen.webp',
    '贝拉': 'img/bella.webp',
    '珈乐': 'img/carol.webp',
    '阿草': 'img/acao.jpg',
    '七海': 'img/nanami.webp',
    '阿梓': 'img/azi.webp',
    '兰音': 'img/reine.webp',
    '希桃': 'img/xitao.webp',
    '文静': 'img/wenjing.webp',
    '柯洁': 'img/kejie.webp',
    '电棍': 'img/otto.webp',
    '金轮': 'img/jinlun.webp',
    '乌兹': 'img/uzi.webp',
    '罗翔': 'img/luoxiang.webp',
    'CR': 'img/cr.webp',
};
// 标记抽中率100%的buff在谁身上
let buffAt = "";

let rouletteHidden = true;
