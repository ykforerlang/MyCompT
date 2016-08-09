/**
 * base data2 data
 * Created by yk on 2016/8/9.
 */
"use strict"

exports.getHeroData = (id) => {
    return heroData[id]
}
exports.getItemData = (id) => {
    return itemData[id]
}
exports.getTeamData = (id) => {
    return teamData[id]
}
exports.getPlayerData =(id) => {
    return playData[id]
}
exports.getLeagueList = (type) => {
    return leagueData[type]
}


const heroData = {
    "1": {
        "id": 1,
        "name": "敌法师",
        "icon": require('../images/hero/hero_1.png')
    },
    "2": {
        "id": 2,
        "name": "斧王",
        "icon": require('../images/hero/hero_2.png')
    },
    "3": {
        "id": 3,
        "name": "祸乱之源",
        "icon": require('../images/hero/hero_3.png')
    },
    "4": {
        "id": 4,
        "name": "嗜血狂魔",
        "icon": require('../images/hero/hero_4.png')
    },
    "5": {
        "id": 5,
        "name": "水晶室女",
        "icon": require('../images/hero/hero_5.png')
    },
    "6": {
        "id": 6,
        "name": "卓尔游侠",
        "icon": require('../images/hero/hero_6.png')
    },
    "7": {
        "id": 7,
        "name": "撼地者",
        "icon": require('../images/hero/hero_7.png')
    },
    "8": {
        "id": 8,
        "name": "主宰",
        "icon": require('../images/hero/hero_8.png')
    },
    "9": {
        "id": 9,
        "name": "米拉娜",
        "icon": require('../images/hero/hero_9.png')
    },
    "10": {
        "id": 10,
        "name": "变体精灵",
        "icon": require('../images/hero/hero_10.png')
    },
    "11": {
        "id": 11,
        "name": "影魔",
        "icon": require('../images/hero/hero_11.png')
    },
    "12": {
        "id": 12,
        "name": "幻影长矛手",
        "icon": require('../images/hero/hero_12.png')
    },
    "13": {
        "id": 13,
        "name": "帕克",
        "icon": require('../images/hero/hero_13.png')
    },
    "14": {
        "id": 14,
        "name": "帕吉",
        "icon": require('../images/hero/hero_14.png')
    },
    "15": {
        "id": 15,
        "name": "剃刀",
        "icon": require('../images/hero/hero_15.png')
    },
    "16": {
        "id": 16,
        "name": "沙王",
        "icon": require('../images/hero/hero_16.png')
    },
    "17": {
        "id": 17,
        "name": "风暴之灵",
        "icon": require('../images/hero/hero_17.png')
    },
    "18": {
        "id": 18,
        "name": "斯温",
        "icon": require('../images/hero/hero_18.png')
    },
    "19": {
        "id": 19,
        "name": "小小",
        "icon": require('../images/hero/hero_19.png')
    },
    "20": {
        "id": 20,
        "name": "复仇之魂",
        "icon": require('../images/hero/hero_20.png')
    },
    "21": {
        "id": 21,
        "name": "风行者",
        "icon": require('../images/hero/hero_21.png')
    },
    "22": {
        "id": 22,
        "name": "宙斯",
        "icon": require('../images/hero/hero_22.png')
    },
    "23": {
        "id": 23,
        "name": "昆卡",
        "icon": require('../images/hero/hero_23.png')
    },
    "25": {
        "id": 25,
        "name": "莉娜",
        "icon": require('../images/hero/hero_25.png')
    },
    "26": {
        "id": 26,
        "name": "莱恩",
        "icon": require('../images/hero/hero_26.png')
    },
    "27": {
        "id": 27,
        "name": "暗影萨满",
        "icon": require('../images/hero/hero_27.png')
    },
    "28": {
        "id": 28,
        "name": "斯拉达",
        "icon": require('../images/hero/hero_28.png')
    },
    "29": {
        "id": 29,
        "name": "潮汐猎人",
        "icon": require('../images/hero/hero_29.png')
    },
    "30": {
        "id": 30,
        "name": "巫医",
        "icon": require('../images/hero/hero_30.png')
    },
    "31": {
        "id": 31,
        "name": "巫妖",
        "icon": require('../images/hero/hero_31.png')
    },
    "32": {
        "id": 32,
        "name": "力丸",
        "icon": require('../images/hero/hero_32.png')
    },
    "33": {
        "id": 33,
        "name": "谜团",
        "icon": require('../images/hero/hero_33.png')
    },
    "34": {
        "id": 34,
        "name": "修补匠",
        "icon": require('../images/hero/hero_34.png')
    },
    "35": {
        "id": 35,
        "name": "狙击手",
        "icon": require('../images/hero/hero_35.png')
    },
    "36": {
        "id": 36,
        "name": "瘟疫法师",
        "icon": require('../images/hero/hero_36.png')
    },
    "37": {
        "id": 37,
        "name": "术士",
        "icon": require('../images/hero/hero_37.png')
    },
    "38": {
        "id": 38,
        "name": "兽王",
        "icon": require('../images/hero/hero_38.png')
    },
    "39": {
        "id": 39,
        "name": "痛苦女王",
        "icon": require('../images/hero/hero_39.png')
    },
    "40": {
        "id": 40,
        "name": "剧毒术士",
        "icon": require('../images/hero/hero_40.png')
    },
    "41": {
        "id": 41,
        "name": "虚空假面",
        "icon": require('../images/hero/hero_41.png')
    },
    "42": {
        "id": 42,
        "name": "冥魂大帝",
        "icon": require('../images/hero/hero_42.png')
    },
    "43": {
        "id": 43,
        "name": "死亡先知",
        "icon": require('../images/hero/hero_43.png')
    },
    "44": {
        "id": 44,
        "name": "幻影刺客",
        "icon": require('../images/hero/hero_44.png')
    },
    "45": {
        "id": 45,
        "name": "帕格纳",
        "icon": require('../images/hero/hero_45.png')
    },
    "46": {
        "id": 46,
        "name": "圣堂刺客",
        "icon": require('../images/hero/hero_46.png')
    },
    "47": {
        "id": 47,
        "name": "冥界亚龙",
        "icon": require('../images/hero/hero_47.png')
    },
    "48": {
        "id": 48,
        "name": "露娜",
        "icon": require('../images/hero/hero_48.png')
    },
    "49": {
        "id": 49,
        "name": "龙骑士",
        "icon": require('../images/hero/hero_49.png')
    },
    "50": {
        "id": 50,
        "name": "戴泽",
        "icon": require('../images/hero/hero_50.png')
    },
    "51": {
        "id": 51,
        "name": "发条技师",
        "icon": require('../images/hero/hero_51.png')
    },
    "52": {
        "id": 52,
        "name": "拉席克",
        "icon": require('../images/hero/hero_52.png')
    },
    "53": {
        "id": 53,
        "name": "先知",
        "icon": require('../images/hero/hero_53.png')
    },
    "54": {
        "id": 54,
        "name": "噬魂鬼",
        "icon": require('../images/hero/hero_54.png')
    },
    "55": {
        "id": 55,
        "name": "黑暗贤者",
        "icon": require('../images/hero/hero_55.png')
    },
    "56": {
        "id": 56,
        "name": "克林克兹",
        "icon": require('../images/hero/hero_56.png')
    },
    "57": {
        "id": 57,
        "name": "全能骑士",
        "icon": require('../images/hero/hero_57.png')
    },
    "58": {
        "id": 58,
        "name": "魅惑魔女",
        "icon": require('../images/hero/hero_58.png')
    },
    "59": {
        "id": 59,
        "name": "哈斯卡",
        "icon": require('../images/hero/hero_59.png')
    },
    "60": {
        "id": 60,
        "name": "暗夜魔王",
        "icon": require('../images/hero/hero_60.png')
    },
    "61": {
        "id": 61,
        "name": "育母蜘蛛",
        "icon": require('../images/hero/hero_61.png')
    },
    "62": {
        "id": 62,
        "name": "赏金猎人",
        "icon": require('../images/hero/hero_62.png')
    },
    "63": {
        "id": 63,
        "name": "编织者",
        "icon": require('../images/hero/hero_63.png')
    },
    "64": {
        "id": 64,
        "name": "杰奇洛",
        "icon": require('../images/hero/hero_64.png')
    },
    "65": {
        "id": 65,
        "name": "蝙蝠骑士",
        "icon": require('../images/hero/hero_65.png')
    },
    "66": {
        "id": 66,
        "name": "陈",
        "icon": require('../images/hero/hero_66.png')
    },
    "67": {
        "id": 67,
        "name": "幽鬼",
        "icon": require('../images/hero/hero_67.png')
    },
    "68": {
        "id": 68,
        "name": "远古冰魄",
        "icon": require('../images/hero/hero_68.png')
    },
    "69": {
        "id": 69,
        "name": "末日使者",
        "icon": require('../images/hero/hero_69.png')
    },
    "70": {
        "id": 70,
        "name": "熊战士",
        "icon": require('../images/hero/hero_70.png')
    },
    "71": {
        "id": 71,
        "name": "裂魂人",
        "icon": require('../images/hero/hero_71.png')
    },
    "72": {
        "id": 72,
        "name": "矮人直升机",
        "icon": require('../images/hero/hero_72.png')
    },
    "73": {
        "id": 73,
        "name": "炼金术士",
        "icon": require('../images/hero/hero_73.png')
    },
    "74": {
        "id": 74,
        "name": "祈求者",
        "icon": require('../images/hero/hero_74.png')
    },
    "75": {
        "id": 75,
        "name": "沉默术士",
        "icon": require('../images/hero/hero_75.png')
    },
    "76": {
        "id": 76,
        "name": "殁境神蚀者",
        "icon": require('../images/hero/hero_76.png')
    },
    "77": {
        "id": 77,
        "name": "狼人",
        "icon": require('../images/hero/hero_77.png')
    },
    "78": {
        "id": 78,
        "name": "酒仙",
        "icon": require('../images/hero/hero_78.png')
    },
    "79": {
        "id": 79,
        "name": "暗影恶魔",
        "icon": require('../images/hero/hero_79.png')
    },
    "80": {
        "id": 80,
        "name": "德鲁伊",
        "icon": require('../images/hero/hero_80.png')
    },
    "81": {
        "id": 81,
        "name": "混沌骑士",
        "icon": require('../images/hero/hero_81.png')
    },
    "82": {
        "id": 82,
        "name": "米波",
        "icon": require('../images/hero/hero_82.png')
    },
    "83": {
        "id": 83,
        "name": "树精卫士",
        "icon": require('../images/hero/hero_83.png')
    },
    "84": {
        "id": 84,
        "name": "食人魔魔法师",
        "icon": require('../images/hero/hero_84.png')
    },
    "85": {
        "id": 85,
        "name": "不朽尸王",
        "icon": require('../images/hero/hero_85.png')
    },
    "86": {
        "id": 86,
        "name": "拉比克",
        "icon": require('../images/hero/hero_86.png')
    },
    "87": {
        "id": 87,
        "name": "干扰者",
        "icon": require('../images/hero/hero_87.png')
    },
    "88": {
        "id": 88,
        "name": "司夜刺客",
        "icon": require('../images/hero/hero_88.png')
    },
    "89": {
        "id": 89,
        "name": "娜迦海妖",
        "icon": require('../images/hero/hero_89.png')
    },
    "90": {
        "id": 90,
        "name": "光之守卫",
        "icon": require('../images/hero/hero_90.png')
    },
    "91": {
        "id": 91,
        "name": "艾欧",
        "icon": require('../images/hero/hero_91.png')
    },
    "92": {
        "id": 92,
        "name": "维萨吉",
        "icon": require('../images/hero/hero_92.png')
    },
    "93": {
        "id": 93,
        "name": "斯拉克",
        "icon": require('../images/hero/hero_93.png')
    },
    "94": {
        "id": 94,
        "name": "美杜莎",
        "icon": require('../images/hero/hero_94.png')
    },
    "95": {
        "id": 95,
        "name": "巨魔战将",
        "icon": require('../images/hero/hero_95.png')
    },
    "96": {
        "id": 96,
        "name": "半人马战行者",
        "icon": require('../images/hero/hero_96.png')
    },
    "97": {
        "id": 97,
        "name": "马格纳斯",
        "icon": require('../images/hero/hero_97.png')
    },
    "98": {
        "id": 98,
        "name": "伐木机",
        "icon": require('../images/hero/hero_98.png')
    },
    "99": {
        "id": 99,
        "name": "钢背兽",
        "icon": require('../images/hero/hero_99.png')
    },
    "100": {
        "id": 100,
        "name": "巨牙海民",
        "icon": require('../images/hero/hero_100.png')
    },
    "101": {
        "id": 101,
        "name": "天怒法师",
        "icon": require('../images/hero/hero_101.png')
    },
    "102": {
        "id": 102,
        "name": "亚巴顿",
        "icon": require('../images/hero/hero_102.png')
    },
    "103": {
        "id": 103,
        "name": "上古巨神",
        "icon": require('../images/hero/hero_103.png')
    },
    "104": {
        "id": 104,
        "name": "军团指挥官",
        "icon": require('../images/hero/hero_104.png')
    },
    "105": {
        "id": 105,
        "name": "工程师",
        "icon": require('../images/hero/hero_105.png')
    },
    "106": {
        "id": 106,
        "name": "灰烬之灵",
        "icon": require('../images/hero/hero_106.png')
    },
    "107": {
        "id": 107,
        "name": "大地之灵",
        "icon": require('../images/hero/hero_107.png')
    },
    "109": {
        "id": 109,
        "name": "恐怖利刃",
        "icon": require('../images/hero/hero_109.png')
    },
    "110": {
        "id": 110,
        "name": "凤凰",
        "icon": require('../images/hero/hero_110.png')
    },
    "111": {
        "id": 111,
        "name": "神谕者",
        "icon": require('../images/hero/hero_111.png')
    },
    "112": {
        "id": 112,
        "name": "寒冬飞龙",
        "icon": require('../images/hero/hero_112.png')
    },
    "113": {
        "id": 113,
        "name": "天穹守望者",
        "icon": require('../images/hero/hero_113.png')
    }
}

const itemData = {
    "1": {
        "id": 1,
        "name": "闪烁匕首",
        "icon": require('../images/item/item_1.png')
    },
    "2": {
        "id": 2,
        "name": "攻击之爪",
        "icon": require('../images/item/item_2.png')
    },
    "3": {
        "id": 3,
        "name": "阔剑",
        "icon": require('../images/item/item_3.png')
    },
    "4": {
        "id": 4,
        "name": "锁子甲",
        "icon": require('../images/item/item_4.png')
    },
    "5": {
        "id": 5,
        "name": "大剑",
        "icon": require('../images/item/item_5.png')
    },
    "6": {
        "id": 6,
        "name": "铁意头盔",
        "icon": require('../images/item/item_6.png')
    },
    "7": {
        "id": 7,
        "name": "标枪",
        "icon": require('../images/item/item_7.png')
    },
    "8": {
        "id": 8,
        "name": "秘银锤",
        "icon": require('../images/item/item_8.png')
    },
    "9": {
        "id": 9,
        "name": "板甲",
        "icon": require('../images/item/item_9.png')
    },
    "10": {
        "id": 10,
        "name": "短棍",
        "icon": require('../images/item/item_10.png')
    },
    "11": {
        "id": 11,
        "name": "压制之刃",
        "icon": require('../images/item/item_11.png')
    },
    "12": {
        "id": 12,
        "name": "守护指环",
        "icon": require('../images/item/item_12.png')
    },
    "13": {
        "id": 13,
        "name": "力量手套",
        "icon": require('../images/item/item_13.png')
    },
    "14": {
        "id": 14,
        "name": "敏捷便鞋",
        "icon": require('../images/item/item_14.png')
    },
    "15": {
        "id": 15,
        "name": "智力斗篷",
        "icon": require('../images/item/item_15.png')
    },
    "16": {
        "id": 16,
        "name": "铁树枝干",
        "icon": require('../images/item/item_16.png')
    },
    "17": {
        "id": 17,
        "name": "力量腰带",
        "icon": require('../images/item/item_17.png')
    },
    "18": {
        "id": 18,
        "name": "精灵布带",
        "icon": require('../images/item/item_18.png')
    },
    "19": {
        "id": 19,
        "name": "法师长袍",
        "icon": require('../images/item/item_19.png')
    },
    "20": {
        "id": 20,
        "name": "圆环",
        "icon": require('../images/item/item_20.png')
    },
    "21": {
        "id": 21,
        "name": "食人魔之斧",
        "icon": require('../images/item/item_21.png')
    },
    "22": {
        "id": 22,
        "name": "欢欣之刃",
        "icon": require('../images/item/item_22.png')
    },
    "23": {
        "id": 23,
        "name": "魔力法杖",
        "icon": require('../images/item/item_23.png')
    },
    "24": {
        "id": 24,
        "name": "极限法球",
        "icon": require('../images/item/item_24.png')
    },
    "25": {
        "id": 25,
        "name": "加速手套",
        "icon": require('../images/item/item_25.png')
    },
    "26": {
        "id": 26,
        "name": "吸血面具",
        "icon": require('../images/item/item_26.png')
    },
    "27": {
        "id": 27,
        "name": "回复戒指",
        "icon": require('../images/item/item_27.png')
    },
    "28": {
        "id": 28,
        "name": "贤者面罩",
        "icon": require('../images/item/item_28.png')
    },
    "29": {
        "id": 29,
        "name": "速度之靴",
        "icon": require('../images/item/item_29.png')
    },
    "30": {
        "id": 30,
        "name": "真视宝石",
        "icon": require('../images/item/item_30.png')
    },
    "31": {
        "id": 31,
        "name": "抗魔斗篷",
        "icon": require('../images/item/item_31.png')
    },
    "32": {
        "id": 32,
        "name": "闪避护符",
        "icon": require('../images/item/item_32.png')
    },
    "33": {
        "id": 33,
        "name": "奶酪",
        "icon": require('../images/item/item_33.png')
    },
    "34": {
        "id": 34,
        "name": "魔棒",
        "icon": require('../images/item/item_34.png')
    },
    "35": {
        "id": 35,
        "name": "卷轴：魔杖",
        "icon": require('../images/item/item_35.png')
    },
    "36": {
        "id": 36,
        "name": "魔杖",
        "icon": require('../images/item/item_36.png')
    },
    "37": {
        "id": 37,
        "name": "幽魂权杖",
        "icon": require('../images/item/item_37.png')
    },
    "38": {
        "id": 38,
        "name": "净化药水",
        "icon": require('../images/item/item_38.png')
    },
    "39": {
        "id": 39,
        "name": "治疗药膏",
        "icon": require('../images/item/item_39.png')
    },
    "40": {
        "id": 40,
        "name": "显影之尘",
        "icon": require('../images/item/item_40.png')
    },
    "41": {
        "id": 41,
        "name": "魔瓶",
        "icon": require('../images/item/item_41.png')
    },
    "42": {
        "id": 42,
        "name": "侦查守卫",
        "icon": require('../images/item/item_42.png')
    },
    "43": {
        "id": 43,
        "name": "岗哨守卫",
        "icon": require('../images/item/item_43.png')
    },
    "44": {
        "id": 44,
        "name": "树之祭祀",
        "icon": require('../images/item/item_44.png')
    },
    "45": {
        "id": 45,
        "name": "动物信使",
        "icon": require('../images/item/item_45.png')
    },
    "46": {
        "id": 46,
        "name": "回城卷轴",
        "icon": require('../images/item/item_46.png')
    },
    "47": {
        "id": 47,
        "name": "卷轴：远行鞋",
        "icon": require('../images/item/item_47.png')
    },
    "48": {
        "id": 48,
        "name": "远行鞋",
        "icon": require('../images/item/item_48.png')
    },
    "49": {
        "id": 49,
        "name": "卷轴：相位鞋",
        "icon": require('../images/item/item_49.png')
    },
    "50": {
        "id": 50,
        "name": "相位鞋",
        "icon": require('../images/item/item_50.png')
    },
    "51": {
        "id": 51,
        "name": "恶魔刀锋",
        "icon": require('../images/item/item_51.png')
    },
    "52": {
        "id": 52,
        "name": "鹰歌弓",
        "icon": require('../images/item/item_52.png')
    },
    "53": {
        "id": 53,
        "name": "掠夺者之斧",
        "icon": require('../images/item/item_53.png')
    },
    "54": {
        "id": 54,
        "name": "圣者遗物",
        "icon": require('../images/item/item_54.png')
    },
    "55": {
        "id": 55,
        "name": "振奋宝石",
        "icon": require('../images/item/item_55.png')
    },
    "56": {
        "id": 56,
        "name": "治疗指环",
        "icon": require('../images/item/item_56.png')
    },
    "57": {
        "id": 57,
        "name": "虚无宝石",
        "icon": require('../images/item/item_57.png')
    },
    "58": {
        "id": 58,
        "name": "神秘法杖",
        "icon": require('../images/item/item_58.png')
    },
    "59": {
        "id": 59,
        "name": "能量之球",
        "icon": require('../images/item/item_59.png')
    },
    "60": {
        "id": 60,
        "name": "精气之球",
        "icon": require('../images/item/item_60.png')
    },
    "61": {
        "id": 61,
        "name": "活力之球",
        "icon": require('../images/item/item_61.png')
    },
    "62": {
        "id": 62,
        "name": "卷轴：动力鞋",
        "icon": require('../images/item/item_62.png')
    },
    "63": {
        "id": 63,
        "name": "动力鞋",
        "icon": require('../images/item/item_63.png')
    },
    "64": {
        "id": 64,
        "name": "卷轴：迈达斯之手",
        "icon": require('../images/item/item_64.png')
    },
    "65": {
        "id": 65,
        "name": "迈达斯之手",
        "icon": require('../images/item/item_65.png')
    },
    "66": {
        "id": 66,
        "name": "卷轴：空明杖",
        "icon": require('../images/item/item_66.png')
    },
    "67": {
        "id": 67,
        "name": "空明杖",
        "icon": require('../images/item/item_67.png')
    },
    "68": {
        "id": 68,
        "name": "卷轴：坚韧球",
        "icon": require('../images/item/item_68.png')
    },
    "69": {
        "id": 69,
        "name": "坚韧球",
        "icon": require('../images/item/item_69.png')
    },
    "70": {
        "id": 70,
        "name": "卷轴：穷鬼盾",
        "icon": require('../images/item/item_70.png')
    },
    "71": {
        "id": 71,
        "name": "穷鬼盾",
        "icon": require('../images/item/item_71.png')
    },
    "72": {
        "id": 72,
        "name": "卷轴：护腕",
        "icon": require('../images/item/item_72.png')
    },
    "73": {
        "id": 73,
        "name": "护腕",
        "icon": require('../images/item/item_73.png')
    },
    "74": {
        "id": 74,
        "name": "卷轴：怨灵系带",
        "icon": require('../images/item/item_74.png')
    },
    "75": {
        "id": 75,
        "name": "怨灵系带",
        "icon": require('../images/item/item_75.png')
    },
    "76": {
        "id": 76,
        "name": "卷轴：空灵挂件",
        "icon": require('../images/item/item_76.png')
    },
    "77": {
        "id": 77,
        "name": "空灵挂件",
        "icon": require('../images/item/item_77.png')
    },
    "78": {
        "id": 78,
        "name": "卷轴：梅肯斯姆",
        "icon": require('../images/item/item_78.png')
    },
    "79": {
        "id": 79,
        "name": "梅肯斯姆",
        "icon": require('../images/item/item_79.png')
    },
    "80": {
        "id": 80,
        "name": "卷轴：弗拉迪米尔的祭品",
        "icon": require('../images/item/item_80.png')
    },
    "81": {
        "id": 81,
        "name": "弗拉迪米尔的祭品",
        "icon": require('../images/item/item_81.png')
    },
    "84": {
        "id": 84,
        "name": "飞行信使",
        "icon": require('../images/item/item_84.png')
    },
    "85": {
        "id": 85,
        "name": "卷轴：玄冥盾牌",
        "icon": require('../images/item/item_85.png')
    },
    "86": {
        "id": 86,
        "name": "玄冥盾牌",
        "icon": require('../images/item/item_86.png')
    },
    "87": {
        "id": 87,
        "name": "卷轴：王者之戒",
        "icon": require('../images/item/item_87.png')
    },
    "88": {
        "id": 88,
        "name": "王者之戒",
        "icon": require('../images/item/item_88.png')
    },
    "89": {
        "id": 89,
        "name": "卷轴：洞察烟斗",
        "icon": require('../images/item/item_89.png')
    },
    "90": {
        "id": 90,
        "name": "洞察烟斗",
        "icon": require('../images/item/item_90.png')
    },
    "91": {
        "id": 91,
        "name": "卷轴：影之灵龛",
        "icon": require('../images/item/item_91.png')
    },
    "92": {
        "id": 92,
        "name": "影之灵龛",
        "icon": require('../images/item/item_92.png')
    },
    "93": {
        "id": 93,
        "name": "卷轴：恢复头巾",
        "icon": require('../images/item/item_93.png')
    },
    "94": {
        "id": 94,
        "name": "恢复头巾",
        "icon": require('../images/item/item_94.png')
    },
    "95": {
        "id": 95,
        "name": "卷轴：邪恶镰刀",
        "icon": require('../images/item/item_95.png')
    },
    "96": {
        "id": 96,
        "name": "邪恶镰刀",
        "icon": require('../images/item/item_96.png')
    },
    "97": {
        "id": 97,
        "name": "卷轴：紫怨",
        "icon": require('../images/item/item_97.png')
    },
    "98": {
        "id": 98,
        "name": "紫怨",
        "icon": require('../images/item/item_98.png')
    },
    "99": {
        "id": 99,
        "name": "卷轴：Eul的神圣法杖",
        "icon": require('../images/item/item_99.png')
    },
    "100": {
        "id": 100,
        "name": "Eul的神圣法杖",
        "icon": require('../images/item/item_100.png')
    },
    "101": {
        "id": 101,
        "name": "卷轴：原力法杖",
        "icon": require('../images/item/item_101.png')
    },
    "102": {
        "id": 102,
        "name": "原力法杖",
        "icon": require('../images/item/item_102.png')
    },
    "103": {
        "id": 103,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_103.png')
    },
    "104": {
        "id": 104,
        "name": "达贡之神力",
        "icon": require('../images/item/item_104.png')
    },
    "105": {
        "id": 105,
        "name": "卷轴：死灵书",
        "icon": require('../images/item/item_105.png')
    },
    "106": {
        "id": 106,
        "name": "死灵书",
        "icon": require('../images/item/item_106.png')
    },
    "107": {
        "id": 107,
        "name": "卷轴：阿哈利姆神杖",
        "icon": require('../images/item/item_107.png')
    },
    "108": {
        "id": 108,
        "name": "阿哈利姆神杖",
        "icon": require('../images/item/item_108.png')
    },
    "109": {
        "id": 109,
        "name": "卷轴：刷新球",
        "icon": require('../images/item/item_109.png')
    },
    "110": {
        "id": 110,
        "name": "刷新球",
        "icon": require('../images/item/item_110.png')
    },
    "111": {
        "id": 111,
        "name": "卷轴：强袭胸甲",
        "icon": require('../images/item/item_111.png')
    },
    "112": {
        "id": 112,
        "name": "强袭胸甲",
        "icon": require('../images/item/item_112.png')
    },
    "113": {
        "id": 113,
        "name": "卷轴：恐鳌之心",
        "icon": require('../images/item/item_113.png')
    },
    "114": {
        "id": 114,
        "name": "恐鳌之心",
        "icon": require('../images/item/item_114.png')
    },
    "115": {
        "id": 115,
        "name": "卷轴：黑皇杖",
        "icon": require('../images/item/item_115.png')
    },
    "116": {
        "id": 116,
        "name": "黑皇杖",
        "icon": require('../images/item/item_116.png')
    },
    "117": {
        "id": 117,
        "name": "不朽之守护",
        "icon": require('../images/item/item_117.png')
    },
    "118": {
        "id": 118,
        "name": "卷轴：希瓦的守护",
        "icon": require('../images/item/item_118.png')
    },
    "119": {
        "id": 119,
        "name": "希瓦的守护",
        "icon": require('../images/item/item_119.png')
    },
    "120": {
        "id": 120,
        "name": "卷轴：血精石",
        "icon": require('../images/item/item_120.png')
    },
    "121": {
        "id": 121,
        "name": "血精石",
        "icon": require('../images/item/item_121.png')
    },
    "122": {
        "id": 122,
        "name": "卷轴：林肯法球",
        "icon": require('../images/item/item_122.png')
    },
    "123": {
        "id": 123,
        "name": "林肯法球",
        "icon": require('../images/item/item_123.png')
    },
    "124": {
        "id": 124,
        "name": "卷轴：先锋盾",
        "icon": require('../images/item/item_124.png')
    },
    "125": {
        "id": 125,
        "name": "先锋盾",
        "icon": require('../images/item/item_125.png')
    },
    "126": {
        "id": 126,
        "name": "卷轴：刃甲",
        "icon": require('../images/item/item_126.png')
    },
    "127": {
        "id": 127,
        "name": "刃甲",
        "icon": require('../images/item/item_127.png')
    },
    "128": {
        "id": 128,
        "name": "卷轴：振魂石",
        "icon": require('../images/item/item_128.png')
    },
    "129": {
        "id": 129,
        "name": "振魂石",
        "icon": require('../images/item/item_129.png')
    },
    "130": {
        "id": 130,
        "name": "卷轴：挑战头巾",
        "icon": require('../images/item/item_130.png')
    },
    "131": {
        "id": 131,
        "name": "挑战头巾",
        "icon": require('../images/item/item_131.png')
    },
    "132": {
        "id": 132,
        "name": "卷轴：圣剑",
        "icon": require('../images/item/item_132.png')
    },
    "133": {
        "id": 133,
        "name": "圣剑",
        "icon": require('../images/item/item_133.png')
    },
    "134": {
        "id": 134,
        "name": "卷轴：金箍棒",
        "icon": require('../images/item/item_134.png')
    },
    "135": {
        "id": 135,
        "name": "金箍棒",
        "icon": require('../images/item/item_135.png')
    },
    "136": {
        "id": 136,
        "name": "卷轴：辉耀",
        "icon": require('../images/item/item_136.png')
    },
    "137": {
        "id": 137,
        "name": "辉耀",
        "icon": require('../images/item/item_137.png')
    },
    "138": {
        "id": 138,
        "name": "卷轴：蝴蝶",
        "icon": require('../images/item/item_138.png')
    },
    "139": {
        "id": 139,
        "name": "蝴蝶",
        "icon": require('../images/item/item_139.png')
    },
    "140": {
        "id": 140,
        "name": "卷轴：代达罗斯之殇",
        "icon": require('../images/item/item_140.png')
    },
    "141": {
        "id": 141,
        "name": "代达罗斯之殇",
        "icon": require('../images/item/item_141.png')
    },
    "142": {
        "id": 142,
        "name": "卷轴：碎颅锤",
        "icon": require('../images/item/item_142.png')
    },
    "143": {
        "id": 143,
        "name": "碎颅锤",
        "icon": require('../images/item/item_143.png')
    },
    "144": {
        "id": 144,
        "name": "卷轴：狂战斧",
        "icon": require('../images/item/item_144.png')
    },
    "145": {
        "id": 145,
        "name": "狂战斧",
        "icon": require('../images/item/item_145.png')
    },
    "146": {
        "id": 146,
        "name": "卷轴：幻影斧",
        "icon": require('../images/item/item_146.png')
    },
    "147": {
        "id": 147,
        "name": "幻影斧",
        "icon": require('../images/item/item_147.png')
    },
    "148": {
        "id": 148,
        "name": "卷轴：水晶剑",
        "icon": require('../images/item/item_148.png')
    },
    "149": {
        "id": 149,
        "name": "水晶剑",
        "icon": require('../images/item/item_149.png')
    },
    "150": {
        "id": 150,
        "name": "卷轴：莫尔迪基安的臂章",
        "icon": require('../images/item/item_150.png')
    },
    "151": {
        "id": 151,
        "name": "莫尔迪基安的臂章",
        "icon": require('../images/item/item_151.png')
    },
    "152": {
        "id": 152,
        "name": "影刃",
        "icon": require('../images/item/item_152.png')
    },
    "153": {
        "id": 153,
        "name": "卷轴：散夜对剑",
        "icon": require('../images/item/item_153.png')
    },
    "154": {
        "id": 154,
        "name": "散夜对剑",
        "icon": require('../images/item/item_154.png')
    },
    "155": {
        "id": 155,
        "name": "卷轴：撒旦之邪力",
        "icon": require('../images/item/item_155.png')
    },
    "156": {
        "id": 156,
        "name": "撒旦之邪力",
        "icon": require('../images/item/item_156.png')
    },
    "157": {
        "id": 157,
        "name": "卷轴：雷神之锤",
        "icon": require('../images/item/item_157.png')
    },
    "158": {
        "id": 158,
        "name": "雷神之锤",
        "icon": require('../images/item/item_158.png')
    },
    "159": {
        "id": 159,
        "name": "卷轴：斯嘉蒂之眼",
        "icon": require('../images/item/item_159.png')
    },
    "160": {
        "id": 160,
        "name": "斯嘉蒂之眼",
        "icon": require('../images/item/item_160.png')
    },
    "161": {
        "id": 161,
        "name": "卷轴：散华",
        "icon": require('../images/item/item_161.png')
    },
    "162": {
        "id": 162,
        "name": "散华",
        "icon": require('../images/item/item_162.png')
    },
    "163": {
        "id": 163,
        "name": "卷轴：支配头盔",
        "icon": require('../images/item/item_163.png')
    },
    "164": {
        "id": 164,
        "name": "支配头盔",
        "icon": require('../images/item/item_164.png')
    },
    "165": {
        "id": 165,
        "name": "卷轴：漩涡",
        "icon": require('../images/item/item_165.png')
    },
    "166": {
        "id": 166,
        "name": "漩涡",
        "icon": require('../images/item/item_166.png')
    },
    "167": {
        "id": 167,
        "name": "卷轴：黯灭",
        "icon": require('../images/item/item_167.png')
    },
    "168": {
        "id": 168,
        "name": "黯灭",
        "icon": require('../images/item/item_168.png')
    },
    "169": {
        "id": 169,
        "name": "卷轴：夜叉",
        "icon": require('../images/item/item_169.png')
    },
    "170": {
        "id": 170,
        "name": "夜叉",
        "icon": require('../images/item/item_170.png')
    },
    "171": {
        "id": 171,
        "name": "卷轴：疯狂面具",
        "icon": require('../images/item/item_171.png')
    },
    "172": {
        "id": 172,
        "name": "疯狂面具",
        "icon": require('../images/item/item_172.png')
    },
    "173": {
        "id": 173,
        "name": "卷轴：净魂之刃",
        "icon": require('../images/item/item_173.png')
    },
    "174": {
        "id": 174,
        "name": "净魂之刃",
        "icon": require('../images/item/item_174.png')
    },
    "175": {
        "id": 175,
        "name": "卷轴：虚灵之刃",
        "icon": require('../images/item/item_175.png')
    },
    "176": {
        "id": 176,
        "name": "虚灵之刃",
        "icon": require('../images/item/item_176.png')
    },
    "177": {
        "id": 177,
        "name": "卷轴：灵魂之戒",
        "icon": require('../images/item/item_177.png')
    },
    "178": {
        "id": 178,
        "name": "灵魂之戒",
        "icon": require('../images/item/item_178.png')
    },
    "179": {
        "id": 179,
        "name": "卷轴：奥术鞋",
        "icon": require('../images/item/item_179.png')
    },
    "180": {
        "id": 180,
        "name": "奥术鞋",
        "icon": require('../images/item/item_180.png')
    },
    "181": {
        "id": 181,
        "name": "淬毒之珠",
        "icon": require('../images/item/item_181.png')
    },
    "182": {
        "id": 182,
        "name": "圆盾",
        "icon": require('../images/item/item_182.png')
    },
    "183": {
        "id": 183,
        "name": "卷轴：影刃",
        "icon": require('../images/item/item_183.png')
    },
    "184": {
        "id": 184,
        "name": "卷轴：韧鼓",
        "icon": require('../images/item/item_184.png')
    },
    "185": {
        "id": 185,
        "name": "韧鼓",
        "icon": require('../images/item/item_185.png')
    },
    "186": {
        "id": 186,
        "name": "卷轴：勇气勋章",
        "icon": require('../images/item/item_186.png')
    },
    "187": {
        "id": 187,
        "name": "勇气勋章",
        "icon": require('../images/item/item_187.png')
    },
    "188": {
        "id": 188,
        "name": "诡计之雾",
        "icon": require('../images/item/item_188.png')
    },
    "189": {
        "id": 189,
        "name": "卷轴：纷争面纱",
        "icon": require('../images/item/item_189.png')
    },
    "190": {
        "id": 190,
        "name": "纷争面纱",
        "icon": require('../images/item/item_190.png')
    },
    "191": {
        "id": 191,
        "name": "卷轴：死灵书",
        "icon": require('../images/item/item_191.png')
    },
    "192": {
        "id": 192,
        "name": "卷轴：死灵书",
        "icon": require('../images/item/item_192.png')
    },
    "193": {
        "id": 193,
        "name": "死灵书",
        "icon": require('../images/item/item_193.png')
    },
    "194": {
        "id": 194,
        "name": "死灵书",
        "icon": require('../images/item/item_194.png')
    },
    "195": {
        "id": 195,
        "name": "卷轴：净魂之刃",
        "icon": require('../images/item/item_195.png')
    },
    "196": {
        "id": 196,
        "name": "净魂之刃",
        "icon": require('../images/item/item_196.png')
    },
    "197": {
        "id": 197,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_197.png')
    },
    "198": {
        "id": 198,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_198.png')
    },
    "199": {
        "id": 199,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_199.png')
    },
    "200": {
        "id": 200,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_200.png')
    },
    "201": {
        "id": 201,
        "name": "达贡之神力",
        "icon": require('../images/item/item_201.png')
    },
    "202": {
        "id": 202,
        "name": "达贡之神力",
        "icon": require('../images/item/item_202.png')
    },
    "203": {
        "id": 203,
        "name": "达贡之神力",
        "icon": require('../images/item/item_203.png')
    },
    "204": {
        "id": 204,
        "name": "达贡之神力",
        "icon": require('../images/item/item_204.png')
    },
    "205": {
        "id": 205,
        "name": "卷轴：阿托斯之棍",
        "icon": require('../images/item/item_205.png')
    },
    "206": {
        "id": 206,
        "name": "阿托斯之棍",
        "icon": require('../images/item/item_206.png')
    },
    "207": {
        "id": 207,
        "name": "卷轴：深渊之刃",
        "icon": require('../images/item/item_207.png')
    },
    "208": {
        "id": 208,
        "name": "深渊之刃",
        "icon": require('../images/item/item_208.png')
    },
    "209": {
        "id": 209,
        "name": "卷轴：天堂之戟",
        "icon": require('../images/item/item_209.png')
    },
    "210": {
        "id": 210,
        "name": "天堂之戟",
        "icon": require('../images/item/item_210.png')
    },
    "211": {
        "id": 211,
        "name": "卷轴：天鹰之戒",
        "icon": require('../images/item/item_211.png')
    },
    "212": {
        "id": 212,
        "name": "天鹰之戒",
        "icon": require('../images/item/item_212.png')
    },
    "213": {
        "id": 213,
        "name": "卷轴：静谧之鞋",
        "icon": require('../images/item/item_213.png')
    },
    "214": {
        "id": 214,
        "name": "静谧之鞋",
        "icon": require('../images/item/item_214.png')
    },
    "215": {
        "id": 215,
        "name": "暗影护符",
        "icon": require('../images/item/item_215.png')
    },
    "216": {
        "id": 216,
        "name": "魔法芒果",
        "icon": require('../images/item/item_216.png')
    },
    "217": {
        "id": 217,
        "name": "卷轴：侦查·岗哨守卫",
        "icon": require('../images/item/item_217.png')
    },
    "218": {
        "id": 218,
        "name": "侦查·岗哨守卫",
        "icon": require('../images/item/item_218.png')
    },
    "219": {
        "id": 219,
        "name": "卷轴：远行鞋",
        "icon": require('../images/item/item_219.png')
    },
    "220": {
        "id": 220,
        "name": "远行鞋",
        "icon": require('../images/item/item_220.png')
    },
    "221": {
        "id": 221,
        "name": "卷轴：清莲宝珠",
        "icon": require('../images/item/item_221.png')
    },
    "226": {
        "id": 226,
        "name": "清莲宝珠",
        "icon": require('../images/item/item_226.png')
    },
    "227": {
        "id": 227,
        "name": "卷轴：炎阳纹章",
        "icon": require('../images/item/item_227.png')
    },
    "228": {
        "id": 228,
        "name": "卷轴：玲珑心",
        "icon": require('../images/item/item_228.png')
    },
    "229": {
        "id": 229,
        "name": "炎阳纹章",
        "icon": require('../images/item/item_229.png')
    },
    "230": {
        "id": 230,
        "name": "卷轴：卫士胫甲",
        "icon": require('../images/item/item_230.png')
    },
    "231": {
        "id": 231,
        "name": "卫士胫甲",
        "icon": require('../images/item/item_231.png')
    },
    "232": {
        "id": 232,
        "name": "以太之镜",
        "icon": require('../images/item/item_232.png')
    },
    "233": {
        "id": 233,
        "name": "卷轴：以太之镜",
        "icon": require('../images/item/item_233.png')
    },
    "234": {
        "id": 234,
        "name": "卷轴：魔龙枪",
        "icon": require('../images/item/item_234.png')
    },
    "235": {
        "id": 235,
        "name": "玲珑心",
        "icon": require('../images/item/item_235.png')
    },
    "236": {
        "id": 236,
        "name": "魔龙枪",
        "icon": require('../images/item/item_236.png')
    },
    "237": {
        "id": 237,
        "name": "仙灵之火",
        "icon": require('../images/item/item_237.png')
    },
    "238": {
        "id": 238,
        "name": "卷轴：寒铁钢爪",
        "icon": require('../images/item/item_238.png')
    },
    "239": {
        "id": 239,
        "name": "寒铁钢爪",
        "icon": require('../images/item/item_239.png')
    },
    "240": {
        "id": 240,
        "name": "枯萎之石",
        "icon": require('../images/item/item_240.png')
    },
    "241": {
        "id": 241,
        "name": "树之祭祀（共享）",
        "icon": require('../images/item/item_241.png')
    },
    "242": {
        "id": 242,
        "name": "赤红甲",
        "icon": require('../images/item/item_242.png')
    },
    "243": {
        "id": 243,
        "name": "卷轴：赤红甲",
        "icon": require('../images/item/item_243.png')
    },
    "244": {
        "id": 244,
        "name": "风灵之纹",
        "icon": require('../images/item/item_244.png')
    },
    "245": {
        "id": 245,
        "name": "卷轴：血棘",
        "icon": require('../images/item/item_245.png')
    },
    "246": {
        "id": 246,
        "name": "卷轴：银月之晶",
        "icon": require('../images/item/item_246.png')
    },
    "247": {
        "id": 247,
        "name": "银月之晶",
        "icon": require('../images/item/item_247.png')
    },
    "248": {
        "id": 248,
        "name": "卷轴：白银之锋",
        "icon": require('../images/item/item_248.png')
    },
    "249": {
        "id": 249,
        "name": "白银之锋",
        "icon": require('../images/item/item_249.png')
    },
    "250": {
        "id": 250,
        "name": "血棘",
        "icon": require('../images/item/item_250.png')
    },
    "251": {
        "id": 251,
        "name": "卷轴：回音战刃",
        "icon": require('../images/item/item_251.png')
    },
    "252": {
        "id": 252,
        "name": "回音战刃",
        "icon": require('../images/item/item_252.png')
    },
    "253": {
        "id": 253,
        "name": "卷轴：微光披风",
        "icon": require('../images/item/item_253.png')
    },
    "254": {
        "id": 254,
        "name": "微光披风",
        "icon": require('../images/item/item_254.png')
    },
    "257": {
        "id": 257,
        "name": "知识之书",
        "icon": require('../images/item/item_257.png')
    },
    "262": {
        "id": 262,
        "name": "卷轴：飓风长戟",
        "icon": require('../images/item/item_262.png')
    },
    "263": {
        "id": 263,
        "name": "飓风长戟",
        "icon": require('../images/item/item_263.png')
    },
    "264": {
        "id": 264,
        "name": "香蕉",
        "icon": require('../images/item/item_264.png')
    },
    "265": {
        "id": 265,
        "name": "凝魂之泪",
        "icon": require('../images/item/item_265.png')
    }
}

const leagueData = {
    "amateur": [
        {
            "id": 4770,
            "icon": require('../images/league/4770.png'),
            "name": "比什凯克群星联赛第5赛季 - 职业夏季赛",
            "description": "第5届公开的比什凯克群星联赛。众多选手将争夺20 000索姆的奖金。由FORW@RD主办。",
            "itemdef": 17113,
            "creationDate": "2016-06-30",
            "imageInventory": "econ/leagues/subscriptions_bishkek_stars_league_5__pro_summer",
            "free_to_spectate": 1
        },
        {
            "id": 4771,
            "icon": require('../images/league/4771.png'),
            "name": "Adrenalina锦标赛第2赛季",
            "description": "锦标赛由8个预选赛区组成，最终集结16支顶尖队伍。预选赛将在2天内进行胜败者组的比赛。比赛覆盖的国家包括秘鲁、阿根廷、智利、厄瓜多尔、委内瑞拉和哥伦比亚，足以使比赛精彩纷呈。",
            "itemdef": 17112,
            "creationDate": "2016-06-30",
            "imageInventory": "econ/leagues/subscriptions_adrenalina_tournament_season_2",
            "free_to_spectate": 1
        },
        {
            "id": 4573,
            "icon": require('../images/league/4573.png'),
            "name": "Dotus锦标赛",
            "description": "Dotus Tournament面向有志于积累团队作战经验的业余战队。Dotus可以让队伍认识到自己发展的方向，如何一同构建和提升他们的比赛。同时，选手可以学习评价他们的对手，并且在此基础上制定对抗策略。Dotus采用的赛制和比赛条件与其他大型比赛相同。",
            "itemdef": 17110,
            "creationDate": "2016-06-29",
            "imageInventory": "econ/leagues/subscriptions_dotus_tournament",
            "free_to_spectate": 1
        },
        {
            "id": 4738,
            "icon": require('../images/league/4738.png'),
            "name": "2016年ReSF公开赛",
            "description": "Open ReSF Cup 2016 is your best chance to start professional carrier as a e-Sport player. Fight your way from online qualifiers to Grand Final, which would be conducted in Moscow in October 2016.",
            "itemdef": 17107,
            "creationDate": "2016-06-16",
            "imageInventory": "econ/leagues/subscriptions_open_resf_cup_2016_",
            "free_to_spectate": 1
        },
        {
            "id": 4737,
            "icon": require('../images/league/4737.png'),
            "name": "2016年LGP - Agosto联赛",
            "description": "Second edition of this great event of the Gaming of Paraguay (LGP) in conjunction with DotaPy.",
            "itemdef": 17106,
            "creationDate": "2016-06-16",
            "imageInventory": "econ/leagues/subscriptions_lgp__cups_agosto_2016",
            "free_to_spectate": 1
        },
        {
            "id": 4724,
            "icon": require('../images/league/4724.png'),
            "name": "AD2L联赛第12赛季",
            "description": "Amateur Dota 2 League is a dedicated league providing world class tournaments to amateur players worldwide. Sign up now https://dota.playon.gg/seasons",
            "itemdef": 17105,
            "creationDate": "2016-06-16",
            "imageInventory": "econ/leagues/subscriptions_ad2l_season_12",
            "free_to_spectate": 1
        },
        {
            "id": 4655,
            "icon": require('../images/league/4655.png'),
            "name": "Dota2 Plast联赛 - 第2赛季",
            "description": "Second season of the Dota2 Plast League with a prize of 100$",
            "itemdef": 17104,
            "creationDate": "2016-06-16",
            "imageInventory": "econ/leagues/subscriptions_dota2_plast_league__season_2",
            "free_to_spectate": 1
        },
        {
            "id": 4732,
            "icon": require('../images/league/4732.png'),
            "name": "幸运金币联赛第1赛季",
            "description": "The first season of the tournament Lucky Coin. 16 teams of the CIS and Ukraine will compete for a prize of 3,200 rubles. TOP 3 teams will share the prize. TOP 3 team will be able to participate in free next tournament.",
            "itemdef": 17103,
            "creationDate": "2016-06-16",
            "imageInventory": "econ/leagues/subscriptions_lucky_coin_season_1",
            "free_to_spectate": 1
        },
        {
            "id": 4731,
            "icon": require('../images/league/4731.png'),
            "name": "印度尼西亚Dota 2联赛",
            "description": "This Competition has a concept to selection for Indonesian Dota 2 Team with League Division System.\r\n\tThis Competition has a vision to bring forward the Indonesian E-Sport with a fair Competition and Equally through the Concept that has been created.\r\n\tTo get a Great Teams who can truely selection from every single Division stages.\r\n\tThis Competition has a Mision to Find, Develop and Create the National Teams so can compete with fair on every selection which has been made",
            "itemdef": 17102,
            "creationDate": "2016-06-16",
            "imageInventory": "econ/leagues/subscriptions_indonesian_dota_2_league",
            "free_to_spectate": 1
        },
        {
            "id": 4713,
            "icon": require('../images/league/4713.png'),
            "name": "2016年南苏门答腊业余联赛",
            "description": "第三届为南苏门答腊地区所有业余Dota 2战队准备的Dota 2年度大赛的预选赛。",
            "itemdef": 17095,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_south_sumatera_amateur_league_2016",
            "free_to_spectate": 1
        },
        {
            "id": 4692,
            "icon": require('../images/league/4692.png'),
            "name": "职业电竞联赛",
            "description": "职业联赛第二赛季的回归，将带来巨额奖金。",
            "itemdef": 17092,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_tournament_pro_games",
            "free_to_spectate": 1
        },
        {
            "id": 4641,
            "icon": require('../images/league/4641.png'),
            "name": "2016年努桑塔拉Dota 2冠军赛",
            "description": "âThe Nusantaraâ is adapted by The International as the biggest Dota2 Competition across the globe. âThe Nusantaraâ means an Indonesian term for the Indonesian archipelago, it represent Indonesia as a nusantara which will gather a professional gamer in a Dota 2 competition.",
            "itemdef": 17090,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_the_nusantara_dota_2_championship_2016",
            "free_to_spectate": 1
        },
        {
            "id": 4688,
            "icon": require('../images/league/4688.png'),
            "name": "joinDOTA联赛第10赛季",
            "description": "面向所有玩家的全球Dota 2联赛。包括半职业分赛和业余分赛。",
            "itemdef": 17088,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_joindota_league_10",
            "free_to_spectate": 1
        },
        {
            "id": 4712,
            "icon": require('../images/league/4712.png'),
            "name": "保密联赛第3赛季",
            "description": "面向竞技平台ProStage玩家的保密联赛",
            "itemdef": 17087,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_closed_tournament_season_3",
            "free_to_spectate": 1
        },
        {
            "id": 4725,
            "icon": require('../images/league/4725.png'),
            "name": "2016年“黑炎杯”业余系列赛",
            "description": "业余系列赛旨在帮助战队进入国内职业圈。整个赛事将在“黑炎杯”的官网（www.blackfyre.com.br）以及脸书的粉丝主页（www.facebook.com/BlackFyre）上公布。",
            "itemdef": 17085,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_black_fyre_amateur_series__2016",
            "free_to_spectate": 1
        },
        {
            "id": 4661,
            "icon": require('../images/league/4661.png'),
            "name": "Steelshock联赛",
            "description": "8支独联体队伍将争夺Steelshock联赛的冠军头衔。",
            "itemdef": 17081,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_steelshock_cup",
            "free_to_spectate": 1
        },
        {
            "id": 4652,
            "icon": require('../images/league/4652.png'),
            "name": "Steelshock联赛 | 资格赛",
            "description": "Steelshock联赛的线上选拔赛。",
            "itemdef": 17080,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_steelshock_cup__qualifications",
            "free_to_spectate": 1
        },
        {
            "id": 4578,
            "icon": require('../images/league/4578.png'),
            "name": "Berserker Scrimming",
            "description": "Play only with the Best of your Region, Scrim with the ticket and save your Stats, Practice Matches with us. We will help you get in touch with other teams at your same level.\r\n\t",
            "itemdef": 17079,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_berserker_scrimming",
            "free_to_spectate": 1
        },
        {
            "id": 4668,
            "icon": require('../images/league/4668.png'),
            "name": "ClanWar SnooKeR联赛第1赛季",
            "description": "Amateur tournament for amateur teams",
            "itemdef": 17078,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_clanwar_snooker_cup_1",
            "free_to_spectate": 1
        },
        {
            "id": 4628,
            "icon": require('../images/league/4628.png'),
            "name": "Reach the Hyperst.one #2",
            "description": "Reach the Hyperst.one is a community founded (german) amateur league and we're go into our second round now! Who will reach the Hyperstone? ",
            "itemdef": 17076,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_reach_the_hyperstone_2",
            "free_to_spectate": 1
        },
        {
            "id": 4683,
            "icon": require('../images/league/4683.png'),
            "name": "GBG DOTA2 Madness",
            "description": "We organize weekly and monthly leagues in DOTA2. The platform that we use is a new platform that aims to automate the tournament process and help players focus on the most important thing, their game. ",
            "itemdef": 17075,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_gbg_dota2_madness",
            "free_to_spectate": 1
        },
        {
            "id": 4697,
            "icon": require('../images/league/4697.png'),
            "name": "GeSLeague联赛第XY赛季",
            "description": "GES League, is amateur league for beginner teams of Dota 2",
            "itemdef": 17072,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_gesleague_season_xy",
            "free_to_spectate": 1
        },
        {
            "id": 4694,
            "icon": require('../images/league/4694.png'),
            "name": "3RI Gaming线上联赛",
            "description": "所有团队将争夺奖金。 该锦标赛由3RI Gaming举办，并由Dota Base Indonesia和Dota 2 Indonesia TV提供支持。",
            "itemdef": 17071,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_3ri_gaming_online_tournament",
            "free_to_spectate": 1
        },
        {
            "id": 4699,
            "icon": require('../images/league/4699.png'),
            "name": "巴基斯坦电竞联赛",
            "description": "The premier Esports league of Pakistan offering various prizes for players of different skill levels. Register now at esportspk.com to find a match and start playing.",
            "itemdef": 17070,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_esports_pakistan_league",
            "free_to_spectate": 1
        },
        {
            "id": 4642,
            "icon": require('../images/league/4642.png'),
            "name": "浙江大学DOTA2联赛",
            "description": "浙江大学和网娱大师app携手举办Dota 2联赛。超过32支战队和250名选手将争夺冠军头衔。",
            "itemdef": 17067,
            "creationDate": "2016-05-20",
            "imageInventory": "econ/leagues/subscriptions_zhejiang_university_dota2_league",
            "free_to_spectate": 1
        },
        {
            "id": 4627,
            "icon": require('../images/league/4627.png'),
            "name": "LGL - 黎巴嫩电竞联赛",
            "description": "eSports Lebanon presents the first Lebanese Gaming League. Only\r\n\tthe top 16 Teams will take the Challenge! \r\n\t\r\n\tThe tournament will be divided into 3 phases:\r\n\t- The Group Stage: Played online (2 groups, 8 each).\r\n\t- The Playoffs (upper and lower brackets).\r\n\t- The Grand Final (At ABC Grand Cinema).\r\n\t",
            "itemdef": 17066,
            "creationDate": "2016-05-20",
            "imageInventory": "econ/leagues/subscriptions_lgl__lebanese_gaming_league",
            "free_to_spectate": 1
        },
        {
            "id": 4638,
            "icon": require('../images/league/4638.png'),
            "name": "2016年印度尼西亚Cyberia电竞联赛",
            "description": "Registration Deadline: 18 May 2016\r\n\tFill team description in our form in http://www.cyberia.online/\r\n\t",
            "itemdef": 17065,
            "creationDate": "2016-05-20",
            "imageInventory": "econ/leagues/subscriptions_indonesia_cyberia_esport_tournament_2016",
            "free_to_spectate": 1
        },
        {
            "id": 4698,
            "icon": require('../images/league/4698.png'),
            "name": "中国Dota 2职业联赛 - 业余组",
            "description": "Dota 2职业联赛 - 业余组联赛由国家体育总局体育信息中心主办，MarsTV承办，并且得到完美世界的官方支持。联赛旨在为没有身在战队的选手提供一个证明自己实力的机会，获得职业战队的青睐。",
            "itemdef": 17064,
            "creationDate": "2016-05-20",
            "imageInventory": "econ/leagues/subscriptions_dota_2_professional_league__amateur",
            "free_to_spectate": 1
        },
        {
            "id": 4656,
            "icon": require('../images/league/4656.png'),
            "name": "Dota国际战队大赛 - 第6赛季",
            "description": "Dota国际战队大赛的第6赛季。来自东南亚地区的众多业余战队将争夺冠军头衔和奖金。",
            "itemdef": 17063,
            "creationDate": "2016-05-20",
            "imageInventory": "econ/leagues/subscriptions_dota_internationals_clan_wars__season_6",
            "free_to_spectate": 1
        },
        {
            "id": 4670,
            "icon": require('../images/league/4670.png'),
            "name": "Yolo锦标赛第4赛季",
            "description": "这是项业余法国联赛。第4赛季我们使用了DotaTV，并且参赛队伍达到了16支。比赛将由yolo赛事组在twitch上直播，欢迎在联赛网站上给我们留言。",
            "itemdef": 17061,
            "creationDate": "2016-05-20",
            "imageInventory": "econ/leagues/subscriptions_the_yolo_tournament_4",
            "free_to_spectate": 1
        }
    ],
    "professional": [
        {
            "id": 4682,
            "icon": require('../images/league/4682.png'),
            "name": "DafaeSports印度尼西亚系列赛",
            "description": "DafaeSports印度尼西亚系列赛是一项职业联赛，由DafaeSports赞助，Eternal Gaming.主办。受到世界知名战队Fnatic的支持。",
            "itemdef": 17111,
            "creationDate": "2016-06-29",
            "imageInventory": "econ/leagues/subscriptions_dafaesports_indonesia_series_presented_by_eternal_gaming",
            "free_to_spectate": 0
        },
        {
            "id": 4644,
            "icon": require('../images/league/4644.png'),
            "name": "捷克斯洛伐克Dota 2联赛第8赛季",
            "description": "捷克斯洛伐克联赛的第8赛季，比赛持续两个月。冠军将赢得丰厚奖金。",
            "itemdef": 17109,
            "creationDate": "2016-06-29",
            "imageInventory": "econ/leagues/subscriptions_czsk_dota_2_league_season_8",
            "free_to_spectate": 0
        },
        {
            "id": 4618,
            "icon": require('../images/league/4618.png'),
            "name": "墨西哥Dota 2挑战赛",
            "description": "Dota 2墨西哥挑战赛是墨西哥首个职业赛事，参赛的八支队伍将在三大地区预选赛和一项外卡赛中脱颖而出。",
            "itemdef": 17094,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_dota_2_challenge_mexico",
            "free_to_spectate": 0
        },
        {
            "id": 4709,
            "icon": require('../images/league/4709.png'),
            "name": "ESL印度精英赛第1赛季",
            "description": "ESL India Premiership is a mix of online and offline tournaments, monumental prize pool, daily content, celebrity showdowns, cosplay competition and many more. It will set the benchmark in the quality of entertainment for future eSports events, something you have experienced only on mainstream entertainment.",
            "itemdef": 17093,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_esl_india_premiership__season_one",
            "free_to_spectate": 0
        },
        {
            "id": 4598,
            "icon": require('../images/league/4598.png'),
            "name": "2016年北京电子竞技公开赛",
            "description": "北京电子竞技公开赛（NEA）创立于2016年。联赛以鸟巢为总决赛永久举办地，由国家体育总局体育信息中心和北京体育局管理，北京市体育竞赛管理中心、国家体育场·鸟巢主办，同方传媒（北京）有限公司承办，以“竞技精神”为宗旨、以“电竞中国梦”为愿景打造专业赛事品牌。持续以举办精品赛事的方式服务社会，致力于推动电竞产业、文化多元发展步伐。",
            "itemdef": 17091,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_nea2016",
            "free_to_spectate": 0
        },
        {
            "id": 4610,
            "icon": require('../images/league/4610.png'),
            "name": "上海Dota 2公开赛",
            "description": "上海公开赛（SDO）由上海蓝游文化策划，众多战队将争夺52万元的总奖金。",
            "itemdef": 17089,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_shanghai_dota2_open",
            "free_to_spectate": 1
        },
        {
            "id": 4716,
            "icon": require('../images/league/4716.png'),
            "name": "全球大师赛",
            "description": "12 total teams will fight in this event to claim the $50.000 total prize pool. 8 team will be invited to the closed qualifier 4 will survive and face against the 4 directly invited team.",
            "itemdef": 17086,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_global_grand_masters_by_prodotaeu",
            "free_to_spectate": 0
        },
        {
            "id": 4729,
            "icon": require('../images/league/4729.png'),
            "name": "红牛英雄联赛",
            "description": "Are you ready for a new and innovative Dota 2 tournament? Watch four top international teams and a German rookie team battle each other in a complete new tournament mode and at the most impressive venue in Dota 2 history.",
            "itemdef": 17084,
            "creationDate": "2016-06-06",
            "imageInventory": "econ/leagues/subscriptions_red_bull_heroicks",
            "free_to_spectate": 1
        },
        {
            "id": 4665,
            "icon": require('../images/league/4665.png'),
            "name": "ProDotA杯系列赛",
            "description": "Professional teams participating from EU and US region to claim the $5.000 prize pool for each region",
            "itemdef": 17082,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_prodota_cup_series_by_azubutv",
            "free_to_spectate": 0
        },
        {
            "id": 4525,
            "icon": require('../images/league/4525.png'),
            "name": "2016年世界电子竞技大赛（WCA）第2赛季",
            "description": "2016年世界电子竞技大赛已经回归，将带来3个赛季。每个赛季的优胜队伍最终将于12月的银川线下总决赛会集，争夺76万美元的奖金。本联赛为第2赛季。",
            "itemdef": 17077,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_world_cyber_arena_2016_s2",
            "free_to_spectate": 0
        },
        {
            "id": 4685,
            "icon": require('../images/league/4685.png'),
            "name": "AES夏季联赛第1赛季",
            "description": "Asian E-Sports Games (AES) Summer League S1 is an indonesian Pro event where teams compete for a total prize pool of USD 10 000.\r\n\t\r\n\tTop 2 winning teams will get direct invites to our annual Major Events",
            "itemdef": 17074,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_aes_summer_league_s1",
            "free_to_spectate": 0
        },
        {
            "id": 4695,
            "icon": require('../images/league/4695.png'),
            "name": "LootMarket邀请赛",
            "description": "8 invited teams competing in a Double-Elimination bracket to claim the 3,000$ prizepool.",
            "itemdef": 17073,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_lootmarket_invitational",
            "free_to_spectate": 0
        },
        {
            "id": 4704,
            "icon": require('../images/league/4704.png'),
            "name": "Serie XLG Dota 2 - First Split",
            "description": "The Serie XLG Dota 2 is part of the company XLG (Xtreme League) an independent league of E-Sports. This league is a competition with the top teams in the Brazilian scene.",
            "itemdef": 17069,
            "creationDate": "2016-05-26",
            "imageInventory": "econ/leagues/subscriptions_serie_xlg_dota_2__first_split",
            "free_to_spectate": 1
        },
        {
            "id": 4669,
            "icon": require('../images/league/4669.png'),
            "name": "“VitalBet”WellPlay邀请赛",
            "description": "8支受邀队伍将在双败淘汰制的联赛中争夺3000美元的奖金。",
            "itemdef": 17062,
            "creationDate": "2016-05-20",
            "imageInventory": "econ/leagues/subscriptions_wellplay_invitational_by_vitalbet",
            "free_to_spectate": 0
        },
        {
            "id": 4660,
            "icon": require('../images/league/4660.png'),
            "name": "南洋国际锦标赛第2赛季",
            "description": "南洋冠军赛现已回归！8支全球顶尖职业Dota 2战队将于7月6日至10日前往上海争夺巨额奖金。",
            "itemdef": 17059,
            "creationDate": "2016-05-12",
            "imageInventory": "econ/leagues/subscriptions_nanyang_championships_season2",
            "free_to_spectate": 0
        },
        {
            "id": 4613,
            "icon": require('../images/league/4613.png'),
            "name": "KOD联赛第2赛季",
            "description": "KOD联赛是一项顶尖美洲队伍参加的职业联赛。",
            "itemdef": 17058,
            "creationDate": "2016-05-12",
            "imageInventory": "econ/leagues/subscriptions_kod_league",
            "free_to_spectate": 0
        },
        {
            "id": 4632,
            "icon": require('../images/league/4632.png'),
            "name": "2016年SGC联赛",
            "description": "2016年SGC联赛将云集地区内10大顶尖战队，并且冠军将获得Dota 2职业联赛之冠的称号。",
            "itemdef": 17018,
            "creationDate": "2016-05-02",
            "imageInventory": "econ/leagues/subscriptions_sgc_2016",
            "free_to_spectate": 1
        },
        {
            "id": 4646,
            "icon": require('../images/league/4646.png'),
            "name": "“SL i-联赛”群星联赛第2赛季",
            "description": "Starladder和英雄传媒联袂推出著名国际性赛事“SL i-联赛”群星联赛的全新赛季。赶快与全球的粉丝一同支持自己最喜爱的战队！",
            "itemdef": 17015,
            "creationDate": "2016-05-02",
            "imageInventory": "econ/leagues/subscriptions_sl_ileague_starseries_s2",
            "free_to_spectate": 1
        },
        {
            "id": 4297,
            "icon": require('../images/league/4297.png'),
            "name": "Dota 2加拿大联赛第7赛季",
            "description": "Dota 2加拿大联赛已回归！参赛的都是北美和南美的精英战队。",
            "itemdef": 17012,
            "creationDate": "2016-04-21",
            "imageInventory": "econ/leagues/subscriptions_dota_2_canada_cup_season_7",
            "free_to_spectate": 0
        },
        {
            "id": 4543,
            "icon": require('../images/league/4543.png'),
            "name": "CyberGamer职业联赛第3赛季",
            "description": "CyberGamer是大洋洲领先的线上赛事。Dota 2职业联赛第3赛季将见证地区内的顶尖战队争夺3000余美元的现金大奖。",
            "itemdef": 16961,
            "creationDate": "2016-03-28",
            "imageInventory": "econ/leagues/subscriptions_cybergamer_pro_leagues_season_3",
            "free_to_spectate": 0
        },
        {
            "id": 4489,
            "icon": require('../images/league/4489.png'),
            "name": "传奇电竞联赛第1赛季",
            "description": "6支受邀和10支业余欧洲队伍将在此次锦标赛中亮相，总奖金将决定联赛的参赛队伍和观众。门票的销售额中部分将进入总奖金。冠军还将获得Dota 2纪念品和服饰。 \r\n淘汰赛将在Twitch频道上直播，并邀请知名解说。\r\n门票仅提供Legendary Gaming联赛第1赛季的观战资格。",
            "itemdef": 16953,
            "creationDate": "2016-03-28",
            "imageInventory": "econ/leagues/subscriptions_legendary_gaming_league_season_1",
            "free_to_spectate": 0
        },
        {
            "id": 4515,
            "icon": require('../images/league/4515.png'),
            "name": "Mineski职业电竞联赛第8赛季",
            "description": "MPGL已携第8赛季回归，菲律宾的精英战队再次云集。谁将从沉睡中崛起？",
            "itemdef": 16951,
            "creationDate": "2016-03-28",
            "imageInventory": "econ/leagues/subscriptions_mineski_pro_gaming_league_season_8",
            "free_to_spectate": 0
        },
        {
            "id": 4530,
            "icon": require('../images/league/4530.png'),
            "name": "“Hitbox.tv”WellPlay邀请赛",
            "description": "8支受邀队伍将在双败淘汰制的联赛中争夺3000美元的奖金。",
            "itemdef": 16945,
            "creationDate": "2016-03-23",
            "imageInventory": "econ/leagues/subscriptions_wellplay_invitational_by_hitboxtv",
            "free_to_spectate": 0
        },
        {
            "id": 4546,
            "icon": require('../images/league/4546.png'),
            "name": "好汉杯联赛",
            "description": "IMBATV隆重推出，每周都是一个单独的赛季，并且拥有周奖金高达2万元，参赛的中国战队将以提高自身为追求，为广大玩家奉上精彩的比赛。",
            "itemdef": 16941,
            "creationDate": "2016-03-17",
            "imageInventory": "econ/leagues/subscriptions_hcup",
            "free_to_spectate": 1
        },
        {
            "id": 4507,
            "icon": require('../images/league/4507.png'),
            "name": "梦幻联赛第5赛季",
            "description": "9支世界顶尖的西方强队将在淘汰赛中争夺出现资格和15万6000美元的奖金！",
            "itemdef": 16940,
            "creationDate": "2016-03-17",
            "imageInventory": "econ/leagues/subscriptions_dreamleague_season_5",
            "free_to_spectate": 1
        },
        {
            "id": 4478,
            "icon": require('../images/league/4478.png'),
            "name": "2016年ASEAN电竞联赛",
            "description": "2016年ASEAN电竞联赛是东南亚第一个官方全国赛事，总奖金高达23万6000美元。\r\n7个来自东南亚的国家，包括马来西亚、新加坡、印度尼西亚、菲律宾、泰国、越南和柬埔寨，将于2016年3月19-20日派出各自的国家队，为东南亚之王一争高下。\r\n快来支持自己国家的国际队或者自己最喜爱的选手，见证2016年ASEAN电竞联赛冠军加冕的时刻！",
            "itemdef": 16938,
            "creationDate": "2016-03-17",
            "imageInventory": "econ/leagues/subscriptions_asean_games_for_esports_2016",
            "free_to_spectate": 0
        },
        {
            "id": 4471,
            "icon": require('../images/league/4471.png'),
            "name": "东南亚Kappa邀请赛",
            "description": "SEA Kappa联赛是东南亚最大的地区锦标赛之一，5万美元的奖金将分布在4个赛季之内！",
            "itemdef": 16932,
            "creationDate": "2016-03-09",
            "imageInventory": "econ/leagues/subscriptions_sea_kappa_invitationals",
            "free_to_spectate": 0
        },
        {
            "id": 4405,
            "icon": require('../images/league/4405.png'),
            "name": "2016年世界电子竞技大赛（WCA）第1赛季",
            "description": "2016年世界电子竞技大赛已经回归，将带来3个赛季。每个赛季的优胜队伍最终将于12月的银川线下总决赛会集，争夺76万美元的奖金。本联赛为第1赛季。",
            "itemdef": 16924,
            "creationDate": "2016-03-09",
            "imageInventory": "econ/leagues/subscriptions_world_cyber_arena_2016_s1",
            "free_to_spectate": 0
        },
        {
            "id": 4361,
            "icon": require('../images/league/4361.png'),
            "name": "DobroCup联赛第2赛季",
            "description": "32支女子战队，将争夺20000卢布的奖金，联赛的所有收益都将用于慈善。",
            "itemdef": 16917,
            "creationDate": "2016-02-18",
            "imageInventory": "econ/leagues/subscriptions_dobrocup_season_2",
            "free_to_spectate": 1
        },
        {
            "id": 4408,
            "icon": require('../images/league/4408.png'),
            "name": "Click-Storm DOTA 2联赛",
            "description": "Click-Storm DOTA 2联赛专门为喜欢与好友一同游戏的玩家准备，他们将在积极的氛围中积累游戏的经验。联赛的主要合作伙伴有hitbox.tv，缤特力和VakeTV。",
            "itemdef": 16910,
            "creationDate": "2016-02-15",
            "imageInventory": "econ/leagues/subscriptions_clickstorm_dota_2_league",
            "free_to_spectate": 1
        },
        {
            "id": 4272,
            "icon": require('../images/league/4272.png'),
            "name": "南美大师赛第4赛季",
            "description": "美洲最大联赛之一的第4赛季。南美和北美的顶尖队伍将争夺超过4000美元的奖金。",
            "itemdef": 16895,
            "creationDate": "2016-02-01",
            "imageInventory": "econ/leagues/subscriptions_sudamerican_master_4",
            "free_to_spectate": 0
        },
        {
            "id": 4263,
            "icon": require('../images/league/4263.png'),
            "name": "DOTA地区赛：日本联赛",
            "description": "面向日本Dota 2顶尖高手的高端赛事。赛事将以日语和英语进行直播，战队将为高额奖金一决高下。",
            "itemdef": 16870,
            "creationDate": "2016-01-17",
            "imageInventory": "econ/leagues/subscriptions_dota_regions__japan",
            "free_to_spectate": 0
        },
        {
            "id": 3960,
            "icon": require('../images/league/3960.png'),
            "name": "BTS系列赛",
            "description": "在接下来的一年里，BTS将投资总计18万美元的奖金，举办三个地区（美国，东南亚和欧洲）的18项比赛。系列赛将为新秀战队提供竞技的平台，在一系列的短期线上赛事中发掘天才选手。",
            "itemdef": 16866,
            "creationDate": "2016-01-15",
            "imageInventory": "econ/leagues/subscriptions_the_bts_series_",
            "free_to_spectate": 0
        },
        {
            "id": 3511,
            "icon": require('../images/league/3511.png'),
            "name": "“Azubu.tv”杯ProDotA联赛",
            "description": "8支受邀战队和8支晋级战队将在单败淘汰制的比赛中争夺5000美元的奖金！",
            "itemdef": 16833,
            "creationDate": "2015-12-31",
            "imageInventory": "econ/leagues/subscriptions_prodota_cup_by_azubutv",
            "free_to_spectate": 0
        },
        {
            "id": 4194,
            "icon": require('../images/league/4194.png'),
            "name": "迪拜电竞冠军赛",
            "description": "迪拜的首个国际电竞赛事，将于迪拜免税网球馆。中东的顶尖队伍将在2016年1月21-22日争夺超过15万美元的总奖金。",
            "itemdef": 16827,
            "creationDate": "2015-12-16",
            "imageInventory": "econ/leagues/subscriptions_dubai_esports_championship",
            "free_to_spectate": 1
        },
        {
            "id": 4249,
            "icon": require('../images/league/4249.png'),
            "name": "宏碁Predator Dota 2线上联赛",
            "description": "宏碁Predator Dota 2线上联赛\r\n64支印尼队伍将争夺1千万印尼盾\r\n赛事由Halberd电竞之家主办",
            "itemdef": 16824,
            "creationDate": "2015-12-10",
            "imageInventory": "econ/leagues/subscriptions_acer_predator_dota_2_online_tournament",
            "free_to_spectate": 1
        },
        {
            "id": 2747,
            "icon": require('../images/league/2747.png'),
            "name": "Dota 2加拿大联赛第6赛季",
            "description": "Dota 2加拿大联赛已回归！参赛的都是北美和南美的精英战队。",
            "itemdef": 16816,
            "creationDate": "2015-12-03",
            "imageInventory": "econ/leagues/subscriptions_dota_2_canada_cup_season_6",
            "free_to_spectate": 0
        },
        {
            "id": 3538,
            "icon": require('../images/league/3538.png'),
            "name": "Dota精英系列赛 - 第2赛季",
            "description": "DOTA 2精英系列赛的第2赛季，参赛的部分队伍是北美的顶尖战队。",
            "itemdef": 16801,
            "creationDate": "2015-11-24",
            "imageInventory": "econ/leagues/subscriptions_dota_elite_series__season_2",
            "free_to_spectate": 0
        },
        {
            "id": 4112,
            "icon": require('../images/league/4112.png'),
            "name": "全球电竞联赛线下总决赛第1赛季",
            "description": "Game Show全球电竞联赛有三个赛季，奖金高达100万美元。所有赛区将在不同的舞台上开赛，直到8支战队在维尔纽斯的Game Show Studio线下相遇。排名前4的队伍将晋级Dreamhack莫斯科站，进入总决赛争夺25万美元。",
            "itemdef": 16800,
            "creationDate": "2015-11-24",
            "imageInventory": "econ/leagues/subscriptions_global_esports_cup_lan_finals_season_1",
            "free_to_spectate": 1
        },
        {
            "id": 4183,
            "icon": require('../images/league/4183.png'),
            "name": "VivaWin Dota 2大联赛",
            "description": "VIVAWIN大联赛将会集印尼的顶尖战队争夺1千万印尼盾的总奖金。赛事由VivaWin赞助。",
            "itemdef": 16794,
            "creationDate": "2015-11-23",
            "imageInventory": "econ/leagues/subscriptions_vivawin_grand_slam_dota_2_tournament",
            "free_to_spectate": 0
        },
        {
            "id": 4177,
            "icon": require('../images/league/4177.png'),
            "name": "CDEC大师赛",
            "description": "CDEC大师赛是最高级别的CDEC联赛。只有职业选手和高水平的业余玩家可以参加这项联赛。每个大师赛的赛季持续两周。比赛模式为队长联赛。在赛季结束，名列前茅的选手将获得若干奖励。",
            "itemdef": 16790,
            "creationDate": "2015-11-23",
            "imageInventory": "econ/leagues/subscriptions_cdec_master",
            "free_to_spectate": 1
        },
        {
            "id": 4181,
            "icon": require('../images/league/4181.png'),
            "name": "Dota 2加拿大联赛第6赛季公开预选赛",
            "description": "Dota 2加拿大联赛第6赛季公开预选赛。排名前2的队伍直接晋级小组赛。赛事将于11月28、29日开始！",
            "itemdef": 16787,
            "creationDate": "2015-11-23",
            "imageInventory": "econ/leagues/subscriptions_dota_2_canada_cup_season_6_open_qualifiers",
            "free_to_spectate": 1
        },
        {
            "id": 4127,
            "icon": require('../images/league/4127.png'),
            "name": "Uprise冠军联赛：特别赛",
            "description": "UCC特殊联赛第3赛季面向独联体和欧洲的职业战队。顶尖战队将在2个月内争夺4000美元的奖金。",
            "itemdef": 16784,
            "creationDate": "2015-11-18",
            "imageInventory": "econ/leagues/subscriptions_uprise_champions_cup_special",
            "free_to_spectate": 0
        },
        {
            "id": 3844,
            "icon": require('../images/league/3844.png'),
            "name": "Ve_Dota虚灵之刃联赛",
            "description": "VeDota系列赛已携虚灵之刃联赛回归了！16支拉美战队将争夺超过500美元的奖金和冠军荣耀。",
            "itemdef": 16777,
            "creationDate": "2015-10-26",
            "imageInventory": "econ/leagues/subscriptions_ve_dota_ethereal_blade_cup",
            "free_to_spectate": 0
        },
        {
            "id": 3991,
            "icon": require('../images/league/3991.png'),
            "name": "Nxtgame Eternal Dota联赛第4赛季",
            "description": "Nxtgame Eternal Dota联赛第4赛季，由Eternal Gaming组委会主办，众多战队将争夺800万印尼盾的总奖金。由NXTGAME、罗技G、G2A ,Unipin、Dota2Geek赞助。",
            "itemdef": 16758,
            "creationDate": "2015-10-15",
            "imageInventory": "econ/leagues/subscriptions_nxtgame_eternal_dota_league_season_4",
            "free_to_spectate": 0
        },
        {
            "id": 3904,
            "icon": require('../images/league/3904.png'),
            "name": "2015年电子竞技冠军联赛（ECL）秋季赛",
            "description": "2015年ECL秋季赛DOTA2分赛由中国电子竞技运动发展中心主办，于10月16日-11月28日举行，参赛队伍包括IG，CDEC和VG等顶尖战队。",
            "itemdef": 16756,
            "creationDate": "2015-10-15",
            "imageInventory": "econ/leagues/subscriptions_esports_champion_league_2015_autumn",
            "free_to_spectate": 0
        },
        {
            "id": 3782,
            "icon": require('../images/league/3782.png'),
            "name": "2015年Tecnolan联赛",
            "description": "Tecnolan表演联赛是哥伦比亚最大的Dota 2联赛。今年将回归2015年第2赛季。届时将有32支队伍争夺前往哥伦比亚卡利市的线下决赛入场券。",
            "itemdef": 16753,
            "creationDate": "2015-10-15",
            "imageInventory": "econ/leagues/subscriptions_tecnolan_2015",
            "free_to_spectate": 0
        },
        {
            "id": 2578,
            "icon": require('../images/league/2578.png'),
            "name": "ProDotA 2全国联赛",
            "description": "DotA职业选手将带领国家队一同为Dota 2最强国度与奖金一决高下！",
            "itemdef": 16733,
            "creationDate": "2015-09-17",
            "imageInventory": "econ/leagues/subscriptions_prodota_2_national_cup",
            "free_to_spectate": 0
        },
        {
            "id": 3779,
            "icon": require('../images/league/3779.png'),
            "name": "BTS美洲联赛第2赛季",
            "description": "BTS美洲系列赛将北美的顶尖战队齐聚到同个赛场，争夺10000美元的奖金。",
            "itemdef": 16720,
            "creationDate": "2015-08-28",
            "imageInventory": "econ/leagues/subscriptions_bts_americas_2",
            "free_to_spectate": 1
        },
        {
            "id": 3482,
            "icon": require('../images/league/3482.png'),
            "name": "g2a杯南美大师赛第3赛季",
            "description": "拉丁美洲规模最大的联赛之一，已进入第三赛季。南美的顶尖队伍将争夺超过3500美元的奖金。",
            "itemdef": 16718,
            "creationDate": "2015-08-27",
            "imageInventory": "econ/leagues/subscriptions_sudamerican_master_3_by_g2a",
            "free_to_spectate": 0
        }
    ],
    "premium": [
        {
            "id": 4768,
            "icon": require('../images/league/4768.png'),
            "name": "2016年国际邀请赛公开预选赛",
            "description": "谁将站在冠军的巅峰？且看全世界顶尖战队争夺国际邀请赛的一席之地。",
            "itemdef": 17096,
            "creationDate": "2016-06-16",
            "imageInventory": "econ/testitem_slot_empty",
            "free_to_spectate": 1
        },
        {
            "id": 4664,
            "icon": require('../images/league/4664.png'),
            "name": "2016年国际邀请赛",
            "description": "谁将站在冠军的巅峰？且看全世界顶尖战队在国际邀请赛上一决高下。",
            "itemdef": 17043,
            "creationDate": "2016-05-06",
            "imageInventory": "econ/testitem_slot_empty",
            "free_to_spectate": 1
        },
        {
            "id": 4649,
            "icon": require('../images/league/4649.png'),
            "name": "马尼拉特级锦标赛预选赛",
            "description": "见证来自全世界的战队争夺马尼拉特锦赛地区预选赛的参赛名额。",
            "itemdef": 17010,
            "creationDate": "2016-04-28",
            "imageInventory": "econ/leagues/subscriptions_manila_major_open_qualifiers",
            "free_to_spectate": 1
        },
        {
            "id": 4579,
            "icon": require('../images/league/4579.png'),
            "name": "SL i-联赛国际邀请赛第1赛季",
            "description": "Starladder和ImbaTV联袂推出10万美元奖金的国际性大赛。赶快与全球的粉丝一同支持自己最喜爱的战队！",
            "itemdef": 16964,
            "creationDate": "2016-04-11",
            "imageInventory": "econ/leagues/subscriptions_sl_ileague_invitational_season_1",
            "free_to_spectate": 1
        },
        {
            "id": 4554,
            "icon": require('../images/league/4554.png'),
            "name": "2016年ESL One法兰克福联赛",
            "description": "6月18日和19日，Dota 2将以2016年ESL One法兰克福联赛的形式重返商业银行竞技场！在壮观的场馆里享受令人惊叹的电子竞技，而且还能让Dota粉丝感受到节日的气氛。\r\n\r\n来一同见证全世界的顶尖战队争夺25万美元的总奖金和ESL One冠军的称号。",
            "itemdef": 16952,
            "creationDate": "2016-03-28",
            "imageInventory": "econ/leagues/subscriptions_esl_one_frankfurt_2016",
            "free_to_spectate": 0
        },
        {
            "id": 4461,
            "icon": require('../images/league/4461.png'),
            "name": "EPICENTER：莫斯科联赛",
            "description": "全世界的顶尖战队将在莫斯科争夺50万美元的奖金。",
            "itemdef": 16923,
            "creationDate": "2016-03-09",
            "imageInventory": "econ/leagues/subscriptions_epicenter_moscow",
            "free_to_spectate": 1
        },
        {
            "id": 4357,
            "icon": require('../images/league/4357.png'),
            "name": "2016年ESL One马尼拉联赛",
            "description": "ESL One开进东南亚，首次于马尼拉举办高端Dota 2联赛，就在2016年4月23和24日！\r\n\r\n来一同见证全世界的顶尖战队争夺25万美元的总奖金和ESL One冠军的称号。",
            "itemdef": 16892,
            "creationDate": "2016-02-01",
            "imageInventory": "econ/leagues/subscriptions_esl_one_manila_2016",
            "free_to_spectate": 0
        },
        {
            "id": 4289,
            "icon": require('../images/league/4289.png'),
            "name": "DotaCinema & MoonduckTV 队长征召联赛3.0",
            "description": "队长征召联赛的3.0将带来更加独特的赛事对抗，参赛的是全世界部分顶尖战队。在唯一采用队长征召模式的职业联赛中，队长们不会舒舒服服地拿到他们拿手的阵容。",
            "itemdef": 16865,
            "creationDate": "2016-01-15",
            "imageInventory": "econ/leagues/subscriptions_captains_draft_30_presented_by_dotacinema__moonducktv",
            "free_to_spectate": 0
        },
        {
            "id": 3454,
            "icon": require('../images/league/3454.png'),
            "name": "WePlay联赛第3赛季",
            "description": "WePlay联赛已携第3赛季回归，赛事总奖金超过20万美元。\r\n全世界的顶尖战队将为冠军而战。4支受邀队伍和4支晋级队伍将空降基辅会师线下总决赛。\r\n购买门票和4套联赛专属套装就能提高总奖金，快来见证Dota 2历史中崭新的篇章！",
            "itemdef": 16860,
            "creationDate": "2016-01-13",
            "imageInventory": "econ/leagues/subscriptions_weplay_league_season_3",
            "free_to_spectate": 0
        },
        {
            "id": 4325,
            "icon": require('../images/league/4325.png'),
            "name": "上海特级锦标赛公开预选赛",
            "description": "见证来自全世界的众多战队争夺2016年上海特级锦标赛的一席之地。",
            "itemdef": 16842,
            "creationDate": "2016-01-02",
            "imageInventory": "econ/leagues/subscriptions_shanghai_major_open_qualifiers",
            "free_to_spectate": 1
        },
        {
            "id": 4301,
            "icon": require('../images/league/4301.png'),
            "name": "2015年MarsTV Dota 2联赛",
            "description": "MarsTV Dota 2联赛已携2015年冬季赛回归，基础奖金高达25万美元，还有全球顶尖战队的参赛，包括上个赛季的冠军：Team Secret。购买门票不仅能直接支持联赛，门票销售额的25%还将进入总奖金。",
            "itemdef": 16832,
            "creationDate": "2015-12-21",
            "imageInventory": "econ/leagues/subscriptions_2015_marstv_dota_2_league",
            "free_to_spectate": 0
        },
        {
            "id": 4088,
            "icon": require('../images/league/4088.png'),
            "name": "2015年世界电子竞技大赛（WCA）总决赛",
            "description": "2015年世界电子竞技大赛（WCA）现已回归，四个赛区的预选赛接连而至。预选赛冠军于十二月齐聚银川的线下总决赛争夺680000美元的归属。本门票可以观看中国赛区的总决赛。",
            "itemdef": 16821,
            "creationDate": "2015-12-10",
            "imageInventory": "econ/leagues/subscriptions_world_cyber_arena_2015_grand_final",
            "free_to_spectate": 0
        },
        {
            "id": 4266,
            "icon": require('../images/league/4266.png'),
            "name": "上海特级锦标赛",
            "description": "见证来自全世界的众多战队在2016年上海特级锦标赛一决高下。",
            "itemdef": 16807,
            "creationDate": "2015-12-02",
            "imageInventory": "econ/leagues/subscriptions_winter_major_2016",
            "free_to_spectate": 1
        },
        {
            "id": 3877,
            "icon": require('../images/league/3877.png'),
            "name": "2015年DOTA2辉夜杯",
            "description": "2015年DOTA2辉夜杯由完美世界主办，旨在帮助中国DotA圈寻找新鲜血液。赛事将邀请国内所有顶尖战队，尽心打造全新的电竞格局。",
            "itemdef": 16806,
            "creationDate": "2015-11-30",
            "imageInventory": "econ/leagues/subscriptions_dota2_radiant__dire_cup_2015",
            "free_to_spectate": 0
        },
        {
            "id": 4210,
            "icon": require('../images/league/4210.png'),
            "name": "Dota之渊联赛第4赛季",
            "description": "Dota之渊联赛第4赛季回归了！北美、欧洲、独联体和亚太地区的顶尖队伍将争夺至少100000美元的奖金。互动手册的销售额中25%将进入总奖金，第4赛季珍藏中10%将进入总奖金。\r\n\r\nDota之渊联赛第4赛季最终将在欧盟克罗地亚斯普利特的Seater Spaladium万人竞技场举办盛大的线下决赛。线下总决赛将于2016年3月19和20日全球直播。",
            "itemdef": 16786,
            "creationDate": "2015-11-23",
            "imageInventory": "econ/leagues/subscriptions_dota_pit_league_season_four",
            "free_to_spectate": 0
        },
        {
            "id": 3990,
            "icon": require('../images/league/3990.png'),
            "name": "2015年法兰克福特锦赛公开预选赛",
            "description": "见证来自全世界的众多战队争夺2015年法兰克福特锦赛的一席之地。",
            "itemdef": 16747,
            "creationDate": "2015-10-02",
            "imageInventory": "econ/testitem_slot_empty",
            "free_to_spectate": 1
        },
        {
            "id": 3781,
            "icon": require('../images/league/3781.png'),
            "name": "巅峰联赛第4赛季",
            "description": "巅峰联赛第4赛季延续往届的精神传统，将在洛杉矶的Beyond the Summit工作室与全球顶尖战队进行亲密接触。",
            "itemdef": 16738,
            "creationDate": "2015-09-28",
            "imageInventory": "econ/leagues/subscriptions_the_summit_4",
            "free_to_spectate": 0
        },
        {
            "id": 3865,
            "icon": require('../images/league/3865.png'),
            "name": "华硕ROG梦幻联赛第4赛季",
            "description": "8支世界顶尖战队将为150 000美元的奖金一较高下，优胜队伍还将晋级2015年DreamHack冬季赛上的总决赛。赶快购买门票，让奖金更上一层楼！",
            "itemdef": 16737,
            "creationDate": "2015-09-25",
            "imageInventory": "econ/leagues/subscriptions_asus_rog_dreamleague_season_4",
            "free_to_spectate": 1
        },
        {
            "id": 3902,
            "icon": require('../images/league/3902.png'),
            "name": "StarLadder | i-联赛",
            "description": "Starladder和i-联赛联袂推出全新的群星联赛第13赛季",
            "itemdef": 16736,
            "creationDate": "2015-09-17",
            "imageInventory": "econ/leagues/subscriptions_starladder__ileague",
            "free_to_spectate": 1
        },
        {
            "id": 3671,
            "icon": require('../images/league/3671.png'),
            "name": "2015年法兰克福特级锦标赛",
            "description": "谁将夺得冠军的丰碑？见证全世界顶尖战队在2015年法兰克福特锦赛一决高下。",
            "itemdef": 16731,
            "creationDate": "2015-09-01",
            "imageInventory": "econ/tools/frankfut_major_2015_ticket",
            "free_to_spectate": 1
        },
        {
            "id": 3534,
            "icon": require('../images/league/3534.png'),
            "name": "The Defense联赛第5赛季",
            "description": "The Defense联赛曾是www.joinDOTA.com为Dota 2推出的仅次于“国际邀请赛”的首个大型赛事。现在是回归的时候了。",
            "itemdef": 16722,
            "creationDate": "2015-09-01",
            "imageInventory": "econ/leagues/subscriptions_the_defense_season_5",
            "free_to_spectate": 0
        },
        {
            "id": 3798,
            "icon": require('../images/league/3798.png'),
            "name": "ESL One纽约超级周",
            "description": "传奇战队。传奇城市。\r\nESL One将于2015年10月3-4日回归麦迪逊广场的剧院！赶紧加入东海岸第二大的Dota 2赛事。",
            "itemdef": 16708,
            "creationDate": "2015-08-27",
            "imageInventory": "econ/leagues/subscriptions_esl_one_at_new_york_super_week",
            "free_to_spectate": 0
        },
        {
            "id": 3502,
            "icon": require('../images/league/3502.png'),
            "name": "南洋国际锦标赛",
            "description": "南洋杯DOTA2国际锦标赛是由KeyTV主办的赛事，2015年首届赛事将通过直接邀请和地区预选赛的方式，遴选出世界范围内的10支顶尖DOTA2劲旅，10月底共赴“狮城”新加坡一决高下！",
            "itemdef": 16695,
            "creationDate": "2015-08-27",
            "imageInventory": "econ/leagues/subscriptions_nanyang_championships",
            "free_to_spectate": 0
        },
        {
            "id": 2986,
            "icon": require('../images/league/2986.png'),
            "name": "2015年Rescuer MDL",
            "description": "2015年Rescuer MarsTV Dota 2联赛（MDL）由MarsTV主办，基础奖金高达$320 000（约合200万元）。",
            "itemdef": 16571,
            "creationDate": "2015-05-06",
            "imageInventory": "econ/leagues/subscriptions_marstv_dota_2_league",
            "free_to_spectate": 0
        },
        {
            "id": 2980,
            "icon": require('../images/league/2980.png'),
            "name": "joinDOTA MLG职业联赛第2赛季",
            "description": "joinDOTA MLG职业联赛的第二赛季。20%的销售额将进入第2赛季的总奖金，而5%的销售额将进入2015年年底的世界冠军赛。这张门票只允许你观看joinDOTA MLG职业联赛第2赛季，不包含附赠的物品。",
            "itemdef": 16488,
            "creationDate": "2015-04-14",
            "imageInventory": "econ/leagues/subscriptions_mlg_pro_league_season_2",
            "free_to_spectate": 0
        },
        {
            "id": 2922,
            "icon": require('../images/league/2922.png'),
            "name": "2015年世界电子竞技大赛（WCA）",
            "description": "2015年世界电子竞技大赛（WCA）现已回归，四个赛区的预选赛将接连而至。预选赛冠军将于十二月齐聚银川的线下总决赛争夺140000美元的归属。本门票可以观看中国赛区的职业预选赛。",
            "itemdef": 16470,
            "creationDate": "2015-04-13",
            "imageInventory": "econ/leagues/subscriptions_world_cyber_arena_2015_proqualifierchinese_region",
            "free_to_spectate": 0
        },
        {
            "id": 2790,
            "icon": require('../images/league/2790.png'),
            "name": "华硕ROG梦幻联赛第3赛季",
            "description": "华硕ROG梦幻联赛已进入第3赛季。全球顶尖的Dota 2战队每周都将争夺2015年DreamHack夏季联赛淘汰赛的参赛资格。联赛的基础奖金高达10万美元。",
            "itemdef": 16465,
            "creationDate": "2015-04-02",
            "imageInventory": "econ/leagues/subscriptions_asus_rog_dreamleague_season_3",
            "free_to_spectate": 1
        },
        {
            "id": 2985,
            "icon": require('../images/league/2985.png'),
            "name": "2015年ECL电竞冠军联赛春季赛",
            "description": "16支职业战队将齐聚2015年ECL。参赛战队包括ACE联赛中脱颖而出的顶尖队伍。",
            "itemdef": 16461,
            "creationDate": "2015-04-02",
            "imageInventory": "econ/leagues/subscriptions_esports_champion_league_2015_spring",
            "free_to_spectate": 0
        },
        {
            "id": 2877,
            "icon": require('../images/league/2877.png'),
            "name": "红牛战场Dota 2联赛",
            "description": "二十支战队将争夺各赛区淘汰赛的晋级资格。排名前二的两支队伍将进入2015年5月10日于旧金山举办的总决赛。赶快观看众多战队在首届红牛战场Dota 2联赛中为超过75000美元的奖金一争高下。\r\n\r\n销售额的25%还将进入红牛战场联赛的总奖金！",
            "itemdef": 16440,
            "creationDate": "2015-04-01",
            "imageInventory": "econ/leagues/subscriptions_red_bull_battle_grounds_dota_2",
            "free_to_spectate": 0
        },
        {
            "id": 2673,
            "icon": require('../images/league/2673.png'),
            "name": "Dota 2加拿大联赛第5赛季",
            "description": "Dota 2加拿大联赛回归了！参赛的是北美和南美最顶尖的队伍。",
            "itemdef": 16433,
            "creationDate": "2015-03-31",
            "imageInventory": "econ/leagues/subscriptions_dota_2_canada_cup_season_5",
            "free_to_spectate": 0
        },
        {
            "id": 2815,
            "icon": require('../images/league/2815.png'),
            "name": "i-联赛第3赛季",
            "description": "IMBATV隆重推出全新赛季，为业余战队提供展示自己的平台，还有与全球顶尖战队同台竞技的机会。业余组的优秀队伍将与职业战队一决高下。八支战队届时将在中国上海的总决赛上角逐冠军。这张门票只允许你观看i-联赛第3赛季，不包含附赠的物品。",
            "itemdef": 16417,
            "creationDate": "2015-03-30",
            "imageInventory": "econ/leagues/subscriptions_i_league_season_3",
            "free_to_spectate": 0
        },
        {
            "id": 2733,
            "icon": require('../images/league/2733.png'),
            "name": "2015年国际邀请赛",
            "description": "谁终将赢得冠军的丰碑？且看全世界顶尖战队在国际邀请赛一决高下。",
            "itemdef": 16413,
            "creationDate": "2015-03-20",
            "imageInventory": "econ/tools/international_2015_ticket",
            "free_to_spectate": 1
        },
        {
            "id": 2392,
            "icon": require('../images/league/2392.png'),
            "name": "2015年MLG全球总决赛",
            "description": "MLG全球总决赛将在美国路易斯安那州新奥尔良市举办。",
            "itemdef": 16394,
            "creationDate": "2015-09-17",
            "imageInventory": "econ/leagues/subscriptions_mlg_world_finals_2015",
            "free_to_spectate": 0
        },
        {
            "id": 2686,
            "icon": require('../images/league/2686.png'),
            "name": "2015年ESL One法兰克福联赛",
            "description": "ESL One将于2015年6月20-21日重返德国法兰克福的商业银行竞技场！马上加入第二届欧洲Dota 2最强赛事！来自全球的顶尖战队和选手将空降法兰克福一决高下。",
            "itemdef": 16362,
            "creationDate": "2015-02-26",
            "imageInventory": "econ/leagues/subscriptions_esl_one_frankfurt_2015",
            "free_to_spectate": 0
        },
        {
            "id": 2661,
            "icon": require('../images/league/2661.png'),
            "name": "巅峰联赛第3赛季",
            "description": "巅峰联赛第3赛季延续往届的精神传统，在洛杉矶Beyond the Summit工作室与全球顶尖战队进行亲密接触。联赛门票内含“双面盟友”套装，祈求者的“天赐之懊的面具”，巅峰联赛第三赛季专属界面皮肤，聊天表情和鼠标指针。",
            "itemdef": 16361,
            "creationDate": "2015-02-25",
            "imageInventory": "econ/leagues/subscriptions_the_summit_3_",
            "free_to_spectate": 0
        },
        {
            "id": 4479,
            "icon": require('../images/league/4479.png'),
            "name": "2016年马尼拉特级锦标赛",
            "description": "谁将夺得冠军的丰碑？见证全世界顶尖战队在2016年马尼拉特级锦标赛一决高下。",
            "itemdef": 16325,
            "creationDate": "2016-03-15",
            "imageInventory": "econ/leagues/subscriptions_manila_major_open_qualifiers",
            "free_to_spectate": 1
        },
        {
            "id": 2511,
            "icon": require('../images/league/2511.png'),
            "name": "“群星云集”联赛",
            "description": "由Fallout Gaming主办的“群星云集”联赛将网罗东南亚强队，经过大量的预选赛后晋级队伍将在马来西亚与东西方强队会师决赛。总决赛将于2015年在吉隆坡进行，八支战队将争夺超过10万美元的奖金！",
            "itemdef": 16310,
            "creationDate": "2015-02-09",
            "imageInventory": "econ/leagues/subscriptions_major_allstars_tournament",
            "free_to_spectate": 0
        },
        {
            "id": 2418,
            "icon": require('../images/league/2418.png'),
            "name": "SLTV群星联赛第12赛季",
            "description": "来自全世界的顶尖战队将争夺线下决赛的晋级资格。",
            "itemdef": 16309,
            "creationDate": "2015-02-09",
            "imageInventory": "econ/leagues/subscriptions_sltv_star_series_season_12",
            "free_to_spectate": 0
        },
        {
            "id": 2358,
            "icon": require('../images/league/2358.png'),
            "name": "D2CL第5赛季门票",
            "description": "Dota 2冠军联赛的第5赛季现已回归！来自欧洲和中国的精英队伍将为新的D2CL冠军称号一战到底。上百场激动人心的线上比赛，惊心动魄的线下决赛，还有海量聊天表情，敬请认准D2CL！",
            "itemdef": 16305,
            "creationDate": "2015-02-06",
            "imageInventory": "econ/leagues/subscriptions_d2cl_season_5",
            "free_to_spectate": 0
        },
        {
            "id": 2129,
            "icon": require('../images/league/2129.png'),
            "name": "Dota之渊联赛第3赛季",
            "description": "Dota之渊联赛带着第3赛季回归了！来自北美和欧洲的顶尖队伍将竞相争夺8万美元以上的奖金。这张门票只允许你观看Dota之渊联赛第3赛季的比赛，不包含附赠的物品。",
            "itemdef": 16261,
            "creationDate": "2015-01-22",
            "imageInventory": "econ/leagues/subscriptions_dota_pit_league_season_three",
            "free_to_spectate": 0
        },
        {
            "id": 2337,
            "icon": require('../images/league/2337.png'),
            "name": "joinDOTA MLG职业联赛第1赛季",
            "description": "2015年1月开始MLG和joinDOTA将联合举办多个季赛，并在年底推出全球锦标赛。本次线上收入的20%将进入第1赛季的奖金池，另有5%将进入年底全球锦标赛的奖金池。这张门票只允许你观看joinDOTA MLG职业联赛第1赛季，不包含附赠的物品。",
            "itemdef": 16257,
            "creationDate": "2015-01-13",
            "imageInventory": "econ/leagues/subscriptions_mlg_and_joindota_2015",
            "free_to_spectate": 0
        },
        {
            "id": 2339,
            "icon": require('../images/league/2339.png'),
            "name": "2015年Dota 2亚洲邀请赛",
            "description": "16支世界豪强将为无上荣耀一决高下。",
            "itemdef": 16203,
            "creationDate": "2014-12-31",
            "imageInventory": "econ/leagues/subscriptions_dota_2_asia_championship_2015",
            "free_to_spectate": 1
        }
    ]
}

const teamData = {
    "3": {
        "id": "3",
        "tag": "coL",
        "icon": require('../images/team/3.jpg')
    },
    "4": {
        "id": "4",
        "tag": "EHOME",
        "icon": require('../images/team/4.jpg')
    },
    "5": {
        "id": "5",
        "tag": "iG",
        "icon": require('../images/team/5.jpg')
    },
    "15": {
        "id": "15",
        "tag": "LGD",
        "icon": require('../images/team/15.jpg')
    },
    "20": {
        "id": "20",
        "tag": "TongFu",
        "icon": require('../images/team/20.jpg')
    },
    "24": {
        "id": "24",
        "tag": "SiG",
        "icon": require('../images/team/24.jpg')
    },
    "36": {
        "id": "36",
        "tag": "Na`Vi",
        "icon": require('../images/team/36.jpg')
    },
    "39": {
        "id": "39",
        "tag": "EG",
        "icon": require('../images/team/39.jpg')
    },
    "46": {
        "id": "46",
        "tag": "Empire",
        "icon": require('../images/team/46.jpg')
    },
    "55": {
        "id": "55",
        "tag": "PR",
        "icon": require('../images/team/55.jpg')
    },
    "59": {
        "id": "59",
        "tag": "KP",
        "icon": require('../images/team/59.jpg')
    },
    "67": {
        "id": "67",
        "tag": "paiN",
        "icon": require('../images/team/67.jpg')
    },
    "2163": {
        "id": "2163",
        "tag": "Liquid",
        "icon": require('../images/team/2163.jpg')
    },
    "98301": {
        "id": "98301",
        "tag": "pwr",
        "icon": require('../images/team/98301.jpg')
    },
    "111474": {
        "id": "111474",
        "tag": "Alliance",
        "icon": require('../images/team/111474.jpg')
    },
    "350190": {
        "id": "350190",
        "tag": "Fnatic",
        "icon": require('../images/team/350190.jpg')
    },
    "527114": {
        "id": "527114",
        "tag": "NXT",
        "icon": require('../images/team/527114.jpg')
    },
    "543897": {
        "id": "543897",
        "tag": "Mski",
        "icon": require('../images/team/543897.jpg')
    },
    "726228": {
        "id": "726228",
        "tag": "VG",
        "icon": require('../images/team/726228.jpg')
    },
    "1026207": {
        "id": "1026207",
        "tag": "sN-",
        "icon": require('../images/team/1026207.jpg')
    },
    "1105664": {
        "id": "1105664",
        "tag": "RR.QEON",
        "icon": require('../images/team/1105664.jpg')
    },
    "1148284": {
        "id": "1148284",
        "tag": "MVP",
        "icon": require('../images/team/1148284.jpg')
    },
    "1199060": {
        "id": "1199060",
        "tag": "OpK",
        "icon": require('../images/team/1199060.jpg')
    },
    "1218336": {
        "id": "1218336",
        "tag": "Eternal",
        "icon": require('../images/team/1218336.jpg')
    },
    "1272244": {
        "id": "1272244",
        "tag": "Ehome.X",
        "icon": require('../images/team/1272244.jpg')
    },
    "1276785": {
        "id": "1276785",
        "tag": "Mongolz",
        "icon": require('../images/team/1276785.jpg')
    },
    "1375614": {
        "id": "1375614",
        "tag": "Newbee",
        "icon": require('../images/team/1375614.jpg')
    },
    "1520578": {
        "id": "1520578",
        "tag": "CDEC",
        "icon": require('../images/team/1520578.jpg')
    },
    "1521260": {
        "id": "1521260",
        "tag": "colR",
        "icon": require('../images/team/1521260.jpg')
    },
    "1633432": {
        "id": "1633432",
        "tag": "NoT",
        "icon": require('../images/team/1633432.jpg')
    },
    "1836806": {
        "id": "1836806",
        "tag": "Wings",
        "icon": require('../images/team/1836806.jpg')
    },
    "1838315": {
        "id": "1838315",
        "tag": "Secret",
        "icon": require('../images/team/1838315.jpg')
    },
    "1883502": {
        "id": "1883502",
        "tag": "VP",
        "icon": require('../images/team/1883502.jpg')
    },
    "1884355": {
        "id": "1884355",
        "tag": "VB",
        "icon": require('../images/team/1884355.jpg')
    },
    "1927365": {
        "id": "1927365",
        "tag": "s1 Lykos",
        "icon": require('../images/team/1927365.jpg')
    },
    "1951061": {
        "id": "1951061",
        "tag": "Newbee.Y",
        "icon": require('../images/team/1951061.jpg')
    },
    "1964407": {
        "id": "1964407",
        "tag": "Comanche",
        "icon": require('../images/team/1964407.jpg')
    },
    "1983234": {
        "id": "1983234",
        "tag": "Bheart",
        "icon": require('../images/team/1983234.jpg')
    },
    "2006913": {
        "id": "2006913",
        "tag": "Vega",
        "icon": require('../images/team/2006913.jpg')
    },
    "2016525": {
        "id": "2016525",
        "tag": "Inverse",
        "icon": require('../images/team/2016525.jpg')
    },
    "2108395": {
        "id": "2108395",
        "tag": "TNC",
        "icon": require('../images/team/2108395.jpg')
    },
    "2201839": {
        "id": "2201839",
        "tag": "MVP",
        "icon": require('../images/team/2201839.jpg')
    },
    "2208748": {
        "id": "2208748",
        "tag": "DuoBao",
        "icon": require('../images/team/2208748.jpg')
    },
    "2246141": {
        "id": "2246141",
        "tag": "ATN",
        "icon": require('../images/team/2246141.jpg')
    },
    "2310555": {
        "id": "2310555",
        "tag": "DKB",
        "icon": require('../images/team/2310555.jpg')
    },
    "2398232": {
        "id": "2398232",
        "tag": "AcA",
        "icon": require('../images/team/2398232.jpg')
    },
    "2413318": {
        "id": "2413318",
        "tag": "E-lab",
        "icon": require('../images/team/2413318.jpg')
    },
    "2414095": {
        "id": "2414095",
        "tag": "Avalon",
        "icon": require('../images/team/2414095.jpg')
    },
    "2414475": {
        "id": "2414475",
        "tag": "Way",
        "icon": require('../images/team/2414475.jpg')
    },
    "2447557": {
        "id": "2447557",
        "tag": "EN",
        "icon": require('../images/team/2447557.jpg')
    },
    "2512249": {
        "id": "2512249",
        "tag": "DC",
        "icon": require('../images/team/2512249.jpg')
    },
    "2521210": {
        "id": "2521210",
        "tag": "XTRMST",
        "icon": require('../images/team/2521210.jpg')
    },
    "2527544": {
        "id": "2527544",
        "tag": "TShow",
        "icon": require('../images/team/2527544.jpg')
    },
    "2533075": {
        "id": "2533075",
        "tag": "Imperial",
        "icon": require('../images/team/2533075.jpg')
    },
    "2537636": {
        "id": "2537636",
        "tag": "Elements",
        "icon": require('../images/team/2537636.jpg')
    },
    "2538621": {
        "id": "2538621",
        "tag": "FTD.A",
        "icon": require('../images/team/2538621.jpg')
    },
    "2538753": {
        "id": "2538753",
        "tag": "F5",
        "icon": require('../images/team/2538753.jpg')
    },
    "2552118": {
        "id": "2552118",
        "tag": "FTD.C",
        "icon": require('../images/team/2552118.jpg')
    },
    "2552670": {
        "id": "2552670",
        "tag": "PD",
        "icon": require('../images/team/2552670.jpg')
    },
    "2578382": {
        "id": "2578382",
        "tag": "YeS!",
        "icon": require('../images/team/2578382.jpg')
    },
    "2581813": {
        "id": "2581813",
        "tag": "XctN",
        "icon": require('../images/team/2581813.jpg')
    },
    "2586976": {
        "id": "2586976",
        "tag": "OG",
        "icon": require('../images/team/2586976.jpg')
    },
    "2622695": {
        "id": "2622695",
        "tag": "Luccini",
        "icon": require('../images/team/2622695.jpg')
    },
    "2626685": {
        "id": "2626685",
        "tag": "EHOME.K",
        "icon": require('../images/team/2626685.jpg')
    },
    "2634810": {
        "id": "2634810",
        "tag": "EHOME.L",
        "icon": require('../images/team/2634810.jpg')
    },
    "2635099": {
        "id": "2635099",
        "tag": "CDEC.Y",
        "icon": require('../images/team/2635099.jpg')
    },
    "2640025": {
        "id": "2640025",
        "tag": "iG.V",
        "icon": require('../images/team/2640025.jpg')
    },
    "2642171": {
        "id": "2642171",
        "tag": "AF",
        "icon": require('../images/team/2642171.jpg')
    },
    "2643401": {
        "id": "2643401",
        "tag": "CDEC.A",
        "icon": require('../images/team/2643401.jpg')
    },
    "2644737": {
        "id": "2644737",
        "tag": "NG",
        "icon": require('../images/team/2644737.jpg')
    },
    "2659468": {
        "id": "2659468",
        "tag": "WG.Unity",
        "icon": require('../images/team/2659468.jpg')
    },
    "2662139": {
        "id": "2662139",
        "tag": "Mski-X",
        "icon": require('../images/team/2662139.jpg')
    },
    "2669922": {
        "id": "2669922",
        "tag": "AGG",
        "icon": require('../images/team/2669922.jpg')
    },
    "2672298": {
        "id": "2672298",
        "tag": "Infamous",
        "icon": require('../images/team/2672298.jpg')
    },
    "2677025": {
        "id": "2677025",
        "tag": "FDL",
        "icon": require('../images/team/2677025.jpg')
    },
    "2685608": {
        "id": "2685608",
        "tag": "TP",
        "icon": require('../images/team/2685608.jpg')
    },
    "2687313": {
        "id": "2687313",
        "tag": "SKYVILLE",
        "icon": require('../images/team/2687313.jpg')
    },
    "2714312": {
        "id": "2714312",
        "tag": "A5",
        "icon": require('../images/team/2714312.jpg')
    },
    "2738555": {
        "id": "2738555",
        "tag": "BI",
        "icon": require('../images/team/2738555.jpg')
    },
    "2746885": {
        "id": "2746885",
        "tag": "Wings.R",
        "icon": require('../images/team/2746885.jpg')
    },
    "2759317": {
        "id": "2759317",
        "tag": "Elements",
        "icon": require('../images/team/2759317.jpg')
    },
    "2762745": {
        "id": "2762745",
        "tag": "BM",
        "icon": require('../images/team/2762745.jpg')
    },
    "2764871": {
        "id": "2764871",
        "tag": "CNB",
        "icon": require('../images/team/2764871.jpg')
    },
    "2767921": {
        "id": "2767921",
        "tag": "Rave",
        "icon": require('../images/team/2767921.jpg')
    },
    "2776208": {
        "id": "2776208",
        "tag": "WF",
        "icon": require('../images/team/2776208.jpg')
    },
    "2777247": {
        "id": "2777247",
        "tag": "VG.R",
        "icon": require('../images/team/2777247.jpg')
    },
    "2780729": {
        "id": "2780729",
        "tag": "GS",
        "icon": require('../images/team/2780729.jpg')
    },
    "2783809": {
        "id": "2783809",
        "tag": "[M]",
        "icon": require('../images/team/2783809.jpg')
    },
    "2783913": {
        "id": "2783913",
        "tag": "ESC",
        "icon": require('../images/team/2783913.jpg')
    },
    "2785646": {
        "id": "2785646",
        "tag": "MAX.X",
        "icon": require('../images/team/2785646.jpg')
    },
    "2787008": {
        "id": "2787008",
        "tag": "Ciat",
        "icon": require('../images/team/2787008.jpg')
    },
    "2788336": {
        "id": "2788336",
        "tag": "4vd",
        "icon": require('../images/team/2788336.jpg')
    },
    "2788413": {
        "id": "2788413",
        "tag": "pp",
        "icon": require('../images/team/2788413.jpg')
    },
    "2789129": {
        "id": "2789129",
        "tag": "Bheart.Z",
        "icon": require('../images/team/2789129.jpg')
    },
    "2789395": {
        "id": "2789395",
        "tag": "Taring",
        "icon": require('../images/team/2789395.jpg')
    },
    "2789717": {
        "id": "2789717",
        "tag": "Polarity",
        "icon": require('../images/team/2789717.jpg')
    },
    "2790766": {
        "id": "2790766",
        "tag": "FlipSid3",
        "icon": require('../images/team/2790766.jpg')
    },
    "2791077": {
        "id": "2791077",
        "tag": "Vultur",
        "icon": require('../images/team/2791077.jpg')
    },
    "2822317": {
        "id": "2822317",
        "tag": "T.0.T",
        "icon": require('../images/team/2822317.jpg')
    },
    "2827243": {
        "id": "2827243",
        "tag": "iWings",
        "icon": require('../images/team/2827243.jpg')
    },
    "2827285": {
        "id": "2827285",
        "tag": "OW",
        "icon": require('../images/team/2827285.jpg')
    },
    "2828740": {
        "id": "2828740",
        "tag": "WAY.A",
        "icon": require('../images/team/2828740.jpg')
    },
    "2831964": {
        "id": "2831964",
        "tag": "_TT_",
        "icon": require('../images/team/2831964.jpg')
    },
    "2832413": {
        "id": "2832413",
        "tag": "Meme",
        "icon": require('../images/team/2832413.jpg')
    },
    "2842794": {
        "id": "2842794",
        "tag": "TBE",
        "icon": require('../images/team/2842794.jpg')
    },
    "2850016": {
        "id": "2850016",
        "tag": "SHARKS",
        "icon": require('../images/team/2850016.jpg')
    },
    "2850822": {
        "id": "2850822",
        "tag": "KaK",
        "icon": require('../images/team/2850822.jpg')
    },
    "2856589": {
        "id": "2856589",
        "tag": "Valkyrie",
        "icon": require('../images/team/2856589.jpg')
    },
    "2860081": {
        "id": "2860081",
        "tag": "FTD.a",
        "icon": require('../images/team/2860081.jpg')
    },
    "2860414": {
        "id": "2860414",
        "tag": "TRG",
        "icon": require('../images/team/2860414.jpg')
    },
    "2884142": {
        "id": "2884142",
        "tag": "Unknown",
        "icon": require('../images/team/2884142.jpg')
    },
    "2901438": {
        "id": "2901438",
        "tag": "G-Unit",
        "icon": require('../images/team/2901438.jpg')
    },
    "2970103": {
        "id": "2970103",
        "tag": "friends",
        "icon": require('../images/team/2970103.jpg')
    }
}

const playData = {
    "514364": {
        "personaname": "Utinni",
        "icon": require('../images/player/514364.jpg')
    },
    "3916428": {
        "personaname": "kentuckyfcuk",
        "icon": require('../images/player/3916428.jpg')
    },
    "3940262": {
        "personaname": "shatistical",
        "icon": require('../images/player/3940262.jpg')
    },
    "5390881": {
        "personaname": "matt_f64",
        "icon": require('../images/player/5390881.jpg')
    },
    "6103402": {
        "personaname": "Jok158",
        "icon": require('../images/player/6103402.jpg')
    },
    "10288378": {
        "personaname": "philippe_c2003",
        "icon": require('../images/player/10288378.jpg')
    },
    "10366616": {
        "personaname": "Baddy",
        "icon": require('../images/player/10366616.jpg')
    },
    "11550182": {
        "personaname": "eusattck",
        "icon": require('../images/player/11550182.jpg')
    },
    "12231202": {
        "personaname": "richhomieQ",
        "icon": require('../images/player/12231202.jpg')
    },
    "14891004": {
        "personaname": "CHELSEA",
        "icon": require('../images/player/14891004.jpg')
    },
    "18180970": {
        "personaname": "master_89000",
        "icon": require('../images/player/18180970.jpg')
    },
    "20321748": {
        "personaname": "vejvy017",
        "icon": require('../images/player/20321748.jpg')
    },
    "23090404": {
        "personaname": "SpellmanUA",
        "icon": require('../images/player/23090404.jpg')
    },
    "26356855": {
        "personaname": "Виктор",
        "icon": require('../images/player/26356855.jpg')
    },
    "26596237": {
        "personaname": "[MeG}loMenIaC",
        "icon": require('../images/player/26596237.jpg')
    },
    "26771994": {
        "personaname": "steveaverton",
        "icon": require('../images/player/26771994.jpg')
    },
    "27178898": {
        "personaname": "oliver.drieske",
        "icon": require('../images/player/27178898.jpg')
    },
    "28291366": {
        "personaname": "joyzaza2001",
        "icon": require('../images/player/28291366.jpg')
    },
    "29110522": {
        "personaname": "He4To",
        "icon": require('../images/player/29110522.jpg')
    },
    "30237211": {
        "personaname": "l.j_leyva",
        "icon": require('../images/player/30237211.jpg')
    },
    "31456357": {
        "personaname": "bubbabenali",
        "icon": require('../images/player/31456357.jpg')
    },
    "31674555": {
        "personaname": "amola1984",
        "icon": require('../images/player/31674555.jpg')
    },
    "31818853": {
        "personaname": "Ales320",
        "icon": require('../images/player/31818853.jpg')
    },
    "32428445": {
        "personaname": "~<Reconsabre>~",
        "icon": require('../images/player/32428445.jpg')
    },
    "32948553": {
        "personaname": "rinatkati",
        "icon": require('../images/player/32948553.jpg')
    },
    "33089656": {
        "personaname": "nosferatu",
        "icon": require('../images/player/33089656.jpg')
    },
    "34505203": {
        "personaname": "glories_team",
        "icon": require('../images/player/34505203.jpg')
    },
    "35504297": {
        "personaname": "commando85",
        "icon": require('../images/player/35504297.jpg')
    },
    "35941194": {
        "personaname": "bieber69",
        "icon": require('../images/player/35941194.jpg')
    },
    "36162063": {
        "personaname": "SOUTH.PV PLAYER",
        "icon": require('../images/player/36162063.jpg')
    },
    "36283165": {
        "personaname": "bulletproof77",
        "icon": require('../images/player/36283165.jpg')
    },
    "36327727": {
        "personaname": "apul.21",
        "icon": require('../images/player/36327727.jpg')
    },
    "38100230": {
        "personaname": "AlienFromHell",
        "icon": require('../images/player/38100230.jpg')
    },
    "38346266": {
        "personaname": "Lysander",
        "icon": require('../images/player/38346266.jpg')
    },
    "38628747": {
        "personaname": "Shatz",
        "icon": require('../images/player/38628747.jpg')
    },
    "39256913": {
        "personaname": "gdsgds",
        "icon": require('../images/player/39256913.jpg')
    },
    "39270453": {
        "personaname": "mert_tosun1995",
        "icon": require('../images/player/39270453.jpg')
    },
    "41231571": {
        "personaname": "orlando_malote",
        "icon": require('../images/player/41231571.jpg')
    },
    "41288955": {
        "personaname": "manuel.vitor",
        "icon": require('../images/player/41288955.jpg')
    },
    "41393767": {
        "personaname": "wattsliz",
        "icon": require('../images/player/41393767.jpg')
    },
    "41818582": {
        "personaname": "BlackNick001",
        "icon": require('../images/player/41818582.jpg')
    },
    "42989814": {
        "personaname": "szoko3000",
        "icon": require('../images/player/42989814.jpg')
    },
    "43276219": {
        "personaname": "ghjcnbghbrbym",
        "icon": require('../images/player/43276219.jpg')
    },
    "43401453": {
        "personaname": "duptun",
        "icon": require('../images/player/43401453.jpg')
    },
    "43619695": {
        "personaname": "charan018",
        "icon": require('../images/player/43619695.jpg')
    },
    "44603256": {
        "personaname": "josyadias",
        "icon": require('../images/player/44603256.jpg')
    },
    "47434686": {
        "personaname": "in_a_shoe",
        "icon": require('../images/player/47434686.jpg')
    },
    "47976221": {
        "personaname": "mbfweiand",
        "icon": require('../images/player/47976221.jpg')
    },
    "48510685": {
        "personaname": "virusi",
        "icon": require('../images/player/48510685.jpg')
    },
    "49310752": {
        "personaname": "AxL",
        "icon": require('../images/player/49310752.jpg')
    },
    "49317728": {
        "personaname": "bl@ck_$n@ke",
        "icon": require('../images/player/49317728.jpg')
    },
    "50828662": {
        "personaname": "supersam1992_32",
        "icon": require('../images/player/50828662.jpg')
    },
    "51684352": {
        "personaname": "LuLu^^",
        "icon": require('../images/player/51684352.jpg')
    },
    "51895852": {
        "personaname": "Grit",
        "icon": require('../images/player/51895852.jpg')
    },
    "53178236": {
        "personaname": "allan",
        "icon": require('../images/player/53178236.jpg')
    },
    "53860798": {
        "personaname": "hyosoozzb",
        "icon": require('../images/player/53860798.jpg')
    },
    "55246613": {
        "personaname": "sickprdz",
        "icon": require('../images/player/55246613.jpg')
    },
    "58038052": {
        "personaname": "Клерик Тетраграмматона",
        "icon": require('../images/player/58038052.jpg')
    },
    "59463394": {
        "personaname": "valiev-r",
        "icon": require('../images/player/59463394.jpg')
    },
    "62533910": {
        "personaname": "fe.oli_almeida",
        "icon": require('../images/player/62533910.jpg')
    },
    "63703276": {
        "personaname": "jeoninbeom",
        "icon": require('../images/player/63703276.jpg')
    },
    "64948828": {
        "personaname": "ibegriot",
        "icon": require('../images/player/64948828.jpg')
    },
    "65076060": {
        "personaname": "b.knobloch",
        "icon": require('../images/player/65076060.jpg')
    },
    "65671183": {
        "personaname": "mike7260s",
        "icon": require('../images/player/65671183.jpg')
    },
    "66189266": {
        "personaname": "Ryan's Fork",
        "icon": require('../images/player/66189266.jpg')
    },
    "66228684": {
        "personaname": "jaden_ridden",
        "icon": require('../images/player/66228684.jpg')
    },
    "67601693": {
        "personaname": "n1z4rd.@st0ned!",
        "icon": require('../images/player/67601693.jpg')
    },
    "67882382": {
        "personaname": "Tale",
        "icon": require('../images/player/67882382.jpg')
    },
    "70388657": {
        "personaname": "Crossr",
        "icon": require('../images/player/70388657.jpg')
    },
    "70673409": {
        "personaname": "Митя Кошка",
        "icon": require('../images/player/70673409.jpg')
    },
    "70884685": {
        "personaname": "tinopaphitis",
        "icon": require('../images/player/70884685.jpg')
    },
    "72312627": {
        "personaname": "Magio",
        "icon": require('../images/player/72312627.jpg')
    },
    "73562326": {
        "personaname": "Nerull",
        "icon": require('../images/player/73562326.jpg')
    },
    "75750590": {
        "personaname": "bartack309",
        "icon": require('../images/player/75750590.jpg')
    },
    "76173488": {
        "personaname": "yachtlover77",
        "icon": require('../images/player/76173488.jpg')
    },
    "76482434": {
        "personaname": "hammermanfred70",
        "icon": require('../images/player/76482434.jpg')
    },
    "76600360": {
        "personaname": "Stelio Kontos",
        "icon": require('../images/player/76600360.jpg')
    },
    "76904792": {
        "personaname": "кексИк",
        "icon": require('../images/player/76904792.jpg')
    },
    "77115066": {
        "personaname": "c4289441",
        "icon": require('../images/player/77115066.jpg')
    },
    "78642665": {
        "personaname": "yanzeg",
        "icon": require('../images/player/78642665.jpg')
    },
    "79170759": {
        "personaname": "abhianderson_421",
        "icon": require('../images/player/79170759.jpg')
    },
    "79875438": {
        "personaname": "hikari_",
        "icon": require('../images/player/79875438.jpg')
    },
    "80580792": {
        "personaname": "www.fabian.brunner96",
        "icon": require('../images/player/80580792.jpg')
    },
    "80786329": {
        "personaname": "andre_sot",
        "icon": require('../images/player/80786329.jpg')
    },
    "80929738": {
        "personaname": "Mr.DeCay [German]",
        "icon": require('../images/player/80929738.jpg')
    },
    "81997215": {
        "personaname": "falconforever22",
        "icon": require('../images/player/81997215.jpg')
    },
    "82051518": {
        "personaname": "MY ARSE SHITS GOLD BARS",
        "icon": require('../images/player/82051518.jpg')
    },
    "82059860": {
        "personaname": "-AoK- Indie }C{",
        "icon": require('../images/player/82059860.jpg')
    },
    "82262664": {
        "personaname": "josh",
        "icon": require('../images/player/82262664.jpg')
    },
    "82327674": {
        "personaname": "luke_stevens1",
        "icon": require('../images/player/82327674.jpg')
    },
    "83110967": {
        "personaname": "brightsrsmail",
        "icon": require('../images/player/83110967.jpg')
    },
    "83161861": {
        "personaname": "easygoing01235",
        "icon": require('../images/player/83161861.jpg')
    },
    "83618525": {
        "personaname": "Böff",
        "icon": require('../images/player/83618525.jpg')
    },
    "84429681": {
        "personaname": "NIke",
        "icon": require('../images/player/84429681.jpg')
    },
    "84607700": {
        "personaname": "ninjakyo",
        "icon": require('../images/player/84607700.jpg')
    },
    "84772440": {
        "personaname": "zhangjun007",
        "icon": require('../images/player/84772440.jpg')
    },
    "84853828": {
        "personaname": "tommas.hanncl",
        "icon": require('../images/player/84853828.jpg')
    },
    "85375207": {
        "personaname": "The Pink Lotus",
        "icon": require('../images/player/85375207.jpg')
    },
    "85485252": {
        "personaname": "FeiMao",
        "icon": require('../images/player/85485252.jpg')
    },
    "85805514": {
        "personaname": "benclawson76",
        "icon": require('../images/player/85805514.jpg')
    },
    "85937380": {
        "personaname": "cekas69",
        "icon": require('../images/player/85937380.jpg')
    },
    "86002686": {
        "personaname": "gerret-xl",
        "icon": require('../images/player/86002686.jpg')
    },
    "86485206": {
        "personaname": "marvingrusss",
        "icon": require('../images/player/86485206.jpg')
    },
    "86664345": {
        "personaname": "tommasotitti",
        "icon": require('../images/player/86664345.jpg')
    },
    "86700461": {
        "personaname": "wmdagger",
        "icon": require('../images/player/86700461.jpg')
    },
    "86715129": {
        "personaname": "Z3dZz13",
        "icon": require('../images/player/86715129.jpg')
    },
    "86723389": {
        "personaname": "o.gardiner",
        "icon": require('../images/player/86723389.jpg')
    },
    "86724433": {
        "personaname": "justinstr8",
        "icon": require('../images/player/86724433.jpg')
    },
    "86725175": {
        "personaname": "H!tM@n.sHacKaLu.",
        "icon": require('../images/player/86725175.jpg')
    },
    "86726887": {
        "personaname": "kirill.lyovin2011",
        "icon": require('../images/player/86726887.jpg')
    },
    "86727555": {
        "personaname": "siney93",
        "icon": require('../images/player/86727555.jpg')
    },
    "86738694": {
        "personaname": "Aky",
        "icon": require('../images/player/86738694.jpg')
    },
    "86740201": {
        "personaname": "primer69",
        "icon": require('../images/player/86740201.jpg')
    },
    "86743074": {
        "personaname": "ravi.chinasamy",
        "icon": require('../images/player/86743074.jpg')
    },
    "86745912": {
        "personaname": "NoobKOOL",
        "icon": require('../images/player/86745912.jpg')
    },
    "86747351": {
        "personaname": "Ayok1N",
        "icon": require('../images/player/86747351.jpg')
    },
    "86750050": {
        "personaname": "871036537",
        "icon": require('../images/player/86750050.jpg')
    },
    "86761682": {
        "personaname": "Red",
        "icon": require('../images/player/86761682.jpg')
    },
    "86761836": {
        "personaname": "lefevrearnaud2000",
        "icon": require('../images/player/86761836.jpg')
    },
    "86761912": {
        "personaname": "Desuoroyah~",
        "icon": require('../images/player/86761912.jpg')
    },
    "86767173": {
        "personaname": "26veben",
        "icon": require('../images/player/86767173.jpg')
    },
    "86772934": {
        "personaname": "honG",
        "icon": require('../images/player/86772934.jpg')
    },
    "86785083": {
        "personaname": "Zan",
        "icon": require('../images/player/86785083.jpg')
    },
    "86793739": {
        "personaname": "417791483",
        "icon": require('../images/player/86793739.jpg')
    },
    "86799300": {
        "personaname": "dlghwns6593",
        "icon": require('../images/player/86799300.jpg')
    },
    "86802844": {
        "personaname": "arjun95ster",
        "icon": require('../images/player/86802844.jpg')
    },
    "86804163": {
        "personaname": "littlelovely1986",
        "icon": require('../images/player/86804163.jpg')
    },
    "86811043": {
        "personaname": "mateusz.jakubowski.1",
        "icon": require('../images/player/86811043.jpg')
    },
    "86822085": {
        "personaname": "berendeyyy",
        "icon": require('../images/player/86822085.jpg')
    },
    "86840554": {
        "personaname": "tomsaitch",
        "icon": require('../images/player/86840554.jpg')
    },
    "86850560": {
        "personaname": "Leenso",
        "icon": require('../images/player/86850560.jpg')
    },
    "86861614": {
        "personaname": "crazykenny95",
        "icon": require('../images/player/86861614.jpg')
    },
    "86870856": {
        "personaname": "test_id159",
        "icon": require('../images/player/86870856.jpg')
    },
    "86878488": {
        "personaname": "Twinky",
        "icon": require('../images/player/86878488.jpg')
    },
    "86896635": {
        "personaname": "sdh4202",
        "icon": require('../images/player/86896635.jpg')
    },
    "86919603": {
        "personaname": "AsyluMadness",
        "icon": require('../images/player/86919603.jpg')
    },
    "86953414": {
        "personaname": "cristi_st3aua2000",
        "icon": require('../images/player/86953414.jpg')
    },
    "86992358": {
        "personaname": "ntly2k6",
        "icon": require('../images/player/86992358.jpg')
    },
    "87012746": {
        "personaname": "leo_janis",
        "icon": require('../images/player/87012746.jpg')
    },
    "87177591": {
        "personaname": "usman_z1",
        "icon": require('../images/player/87177591.jpg')
    },
    "87197791": {
        "personaname": "Modest #RoadToWooden1",
        "icon": require('../images/player/87197791.jpg')
    },
    "87276347": {
        "personaname": "Boomslang",
        "icon": require('../images/player/87276347.jpg')
    },
    "87278757": {
        "personaname": "dmddkek12",
        "icon": require('../images/player/87278757.jpg')
    },
    "87360406": {
        "personaname": "andim100",
        "icon": require('../images/player/87360406.jpg')
    },
    "87382579": {
        "personaname": "uuuu.uuu",
        "icon": require('../images/player/87382579.jpg')
    },
    "87394977": {
        "personaname": "Iiro",
        "icon": require('../images/player/87394977.jpg')
    },
    "87419473": {
        "personaname": "DerFistinator",
        "icon": require('../images/player/87419473.jpg')
    },
    "87557623": {
        "personaname": "dj.erik_",
        "icon": require('../images/player/87557623.jpg')
    },
    "87586992": {
        "personaname": "GGGGGGGGGGGGG",
        "icon": require('../images/player/87586992.jpg')
    },
    "88153289": {
        "personaname": "markuss996",
        "icon": require('../images/player/88153289.jpg')
    },
    "88358606": {
        "personaname": "cleggy_91",
        "icon": require('../images/player/88358606.jpg')
    },
    "88389149": {
        "personaname": "martinosuna",
        "icon": require('../images/player/88389149.jpg')
    },
    "88508515": {
        "personaname": "D!E",
        "icon": require('../images/player/88508515.jpg')
    },
    "88521435": {
        "personaname": "dani_2t",
        "icon": require('../images/player/88521435.jpg')
    },
    "88553213": {
        "personaname": "noxie",
        "icon": require('../images/player/88553213.jpg')
    },
    "88719902": {
        "personaname": "Ziggy Stardust",
        "icon": require('../images/player/88719902.jpg')
    },
    "88933594": {
        "personaname": "Santi_gf",
        "icon": require('../images/player/88933594.jpg')
    },
    "88984735": {
        "personaname": "victorino_125",
        "icon": require('../images/player/88984735.jpg')
    },
    "89111275": {
        "personaname": "wedsoncley",
        "icon": require('../images/player/89111275.jpg')
    },
    "89117038": {
        "personaname": "norcal_rcr",
        "icon": require('../images/player/89117038.jpg')
    },
    "89137399": {
        "personaname": "sak_taledum",
        "icon": require('../images/player/89137399.jpg')
    },
    "89157606": {
        "personaname": "vi_jacobucci",
        "icon": require('../images/player/89157606.jpg')
    },
    "89166519": {
        "personaname": "ickeicke",
        "icon": require('../images/player/89166519.jpg')
    },
    "89202829": {
        "personaname": "For Dem Lolz",
        "icon": require('../images/player/89202829.jpg')
    },
    "89217927": {
        "personaname": "tuckerslattery96",
        "icon": require('../images/player/89217927.jpg')
    },
    "89246836": {
        "personaname": "realme301",
        "icon": require('../images/player/89246836.jpg')
    },
    "89268488": {
        "personaname": "エクソシスト",
        "icon": require('../images/player/89268488.jpg')
    },
    "89269794": {
        "personaname": "go to hell",
        "icon": require('../images/player/89269794.jpg')
    },
    "89296893": {
        "personaname": "skidog1023",
        "icon": require('../images/player/89296893.jpg')
    },
    "89330493": {
        "personaname": "testuser9",
        "icon": require('../images/player/89330493.jpg')
    },
    "89399750": {
        "personaname": "nick200908",
        "icon": require('../images/player/89399750.jpg')
    },
    "89407113": {
        "personaname": "zubilo959",
        "icon": require('../images/player/89407113.jpg')
    },
    "89423756": {
        "personaname": "helloschello",
        "icon": require('../images/player/89423756.jpg')
    },
    "89550641": {
        "personaname": "bryan",
        "icon": require('../images/player/89550641.jpg')
    },
    "89598554": {
        "personaname": "Suigintou",
        "icon": require('../images/player/89598554.jpg')
    },
    "89625472": {
        "personaname": "Me go face? yeah!",
        "icon": require('../images/player/89625472.jpg')
    },
    "89871557": {
        "personaname": "dad-g",
        "icon": require('../images/player/89871557.jpg')
    },
    "89884694": {
        "personaname": "Counttler",
        "icon": require('../images/player/89884694.jpg')
    },
    "90031225": {
        "personaname": "matthew.broadbent150489",
        "icon": require('../images/player/90031225.jpg')
    },
    "90125566": {
        "personaname": "ilhom_1989mini",
        "icon": require('../images/player/90125566.jpg')
    },
    "90180366": {
        "personaname": "buxi02",
        "icon": require('../images/player/90180366.jpg')
    },
    "90423751": {
        "personaname": "claire-joe",
        "icon": require('../images/player/90423751.jpg')
    },
    "90547237": {
        "personaname": "msm1143",
        "icon": require('../images/player/90547237.jpg')
    },
    "90882159": {
        "personaname": "ole_shinoda",
        "icon": require('../images/player/90882159.jpg')
    },
    "90892734": {
        "personaname": "zheka1230",
        "icon": require('../images/player/90892734.jpg')
    },
    "91064780": {
        "personaname": "Брат по оружию",
        "icon": require('../images/player/91064780.jpg')
    },
    "91162296": {
        "personaname": "hugo-rugbyman",
        "icon": require('../images/player/91162296.jpg')
    },
    "91191397": {
        "personaname": "Molly (Trade Knife)",
        "icon": require('../images/player/91191397.jpg')
    },
    "91191651": {
        "personaname": "sozonova-natasha",
        "icon": require('../images/player/91191651.jpg')
    },
    "91364275": {
        "personaname": "darko_tomich2005",
        "icon": require('../images/player/91364275.jpg')
    },
    "91443418": {
        "personaname": "bruceman724",
        "icon": require('../images/player/91443418.jpg')
    },
    "91460772": {
        "personaname": "CeMaTheSlayeR",
        "icon": require('../images/player/91460772.jpg')
    },
    "91516368": {
        "personaname": "dehterev.aleksandr",
        "icon": require('../images/player/91516368.jpg')
    },
    "91644707": {
        "personaname": "jverin1",
        "icon": require('../images/player/91644707.jpg')
    },
    "91654584": {
        "personaname": "adrian.scott2011",
        "icon": require('../images/player/91654584.jpg')
    },
    "91698091": {
        "personaname": "SXHOSAHCIOHDFSIOAD",
        "icon": require('../images/player/91698091.jpg')
    },
    "91701543": {
        "personaname": "jackelm",
        "icon": require('../images/player/91701543.jpg')
    },
    "91730177": {
        "personaname": "ab_ygaby78",
        "icon": require('../images/player/91730177.jpg')
    },
    "91932652": {
        "personaname": "well done",
        "icon": require('../images/player/91932652.jpg')
    },
    "91981924": {
        "personaname": "thewantedguitar",
        "icon": require('../images/player/91981924.jpg')
    },
    "92423451": {
        "personaname": "sar_82",
        "icon": require('../images/player/92423451.jpg')
    },
    "92477990": {
        "personaname": "asimonsays243",
        "icon": require('../images/player/92477990.jpg')
    },
    "92847434": {
        "personaname": "stef.holywood",
        "icon": require('../images/player/92847434.jpg')
    },
    "92855627": {
        "personaname": "aarondoisawesome",
        "icon": require('../images/player/92855627.jpg')
    },
    "92897724": {
        "personaname": "MacSlin",
        "icon": require('../images/player/92897724.jpg')
    },
    "92949094": {
        "personaname": "k1ng94",
        "icon": require('../images/player/92949094.jpg')
    },
    "92965969": {
        "personaname": "lauren.votaw",
        "icon": require('../images/player/92965969.jpg')
    },
    "92968238": {
        "personaname": "Guywithejums",
        "icon": require('../images/player/92968238.jpg')
    },
    "93119769": {
        "personaname": "eric.alias.moot",
        "icon": require('../images/player/93119769.jpg')
    },
    "93138854": {
        "personaname": "razzak77",
        "icon": require('../images/player/93138854.jpg')
    },
    "93167925": {
        "personaname": "{Δ} | CodeinePapi | ƬσƉ",
        "icon": require('../images/player/93167925.jpg')
    },
    "93289364": {
        "personaname": "sporrongi",
        "icon": require('../images/player/93289364.jpg')
    },
    "93616251": {
        "personaname": "kevfisher132",
        "icon": require('../images/player/93616251.jpg')
    },
    "93670407": {
        "personaname": "anneazar",
        "icon": require('../images/player/93670407.jpg')
    },
    "94004717": {
        "personaname": "wo-kolb",
        "icon": require('../images/player/94004717.jpg')
    },
    "94049589": {
        "personaname": "dml33",
        "icon": require('../images/player/94049589.jpg')
    },
    "94077575": {
        "personaname": "KpoctPEKEP",
        "icon": require('../images/player/94077575.jpg')
    },
    "94120026": {
        "personaname": "hsh1369",
        "icon": require('../images/player/94120026.jpg')
    },
    "94155156": {
        "personaname": "espensandvig2",
        "icon": require('../images/player/94155156.jpg')
    },
    "94281932": {
        "personaname": "God is Gangsta",
        "icon": require('../images/player/94281932.jpg')
    },
    "94296097": {
        "personaname": "金剛",
        "icon": require('../images/player/94296097.jpg')
    },
    "94338967": {
        "personaname": "105306191",
        "icon": require('../images/player/94338967.jpg')
    },
    "94374420": {
        "personaname": "marx_mendoza",
        "icon": require('../images/player/94374420.jpg')
    },
    "94594574": {
        "personaname": "'kot'BlueIce",
        "icon": require('../images/player/94594574.jpg')
    },
    "94923783": {
        "personaname": "damian068",
        "icon": require('../images/player/94923783.jpg')
    },
    "95145869": {
        "personaname": "That Dick Game",
        "icon": require('../images/player/95145869.jpg')
    },
    "95430068": {
        "personaname": "carrr12",
        "icon": require('../images/player/95430068.jpg')
    },
    "95439451": {
        "personaname": "kamilkonopka.wp",
        "icon": require('../images/player/95439451.jpg')
    },
    "95825708": {
        "personaname": "Freeman good dude",
        "icon": require('../images/player/95825708.jpg')
    },
    "96196828": {
        "personaname": "mckinleyt70",
        "icon": require('../images/player/96196828.jpg')
    },
    "97590558": {
        "personaname": "Sëtsùnä",
        "icon": require('../images/player/97590558.jpg')
    },
    "98131940": {
        "personaname": "pmudhir",
        "icon": require('../images/player/98131940.jpg')
    },
    "98172857": {
        "personaname": "bonzinator-LET'S GO HEAT!",
        "icon": require('../images/player/98172857.jpg')
    },
    "98321104": {
        "personaname": "i.i",
        "icon": require('../images/player/98321104.jpg')
    },
    "98609497": {
        "personaname": "maurice-heinemann",
        "icon": require('../images/player/98609497.jpg')
    },
    "98878010": {
        "personaname": "geteerregepe",
        "icon": require('../images/player/98878010.jpg')
    },
    "98887913": {
        "personaname": "mferreiraljr",
        "icon": require('../images/player/98887913.jpg')
    },
    "99539136": {
        "personaname": "acustro",
        "icon": require('../images/player/99539136.jpg')
    },
    "99796146": {
        "personaname": "nobunaga1449",
        "icon": require('../images/player/99796146.jpg')
    },
    "100058342": {
        "personaname": "coulibaly581",
        "icon": require('../images/player/100058342.jpg')
    },
    "100317750": {
        "personaname": "niko.kamue",
        "icon": require('../images/player/100317750.jpg')
    },
    "100471531": {
        "personaname": "kittymonk",
        "icon": require('../images/player/100471531.jpg')
    },
    "100507647": {
        "personaname": "dobka3",
        "icon": require('../images/player/100507647.jpg')
    },
    "100570739": {
        "personaname": "duffsters2000",
        "icon": require('../images/player/100570739.jpg')
    },
    "100598959": {
        "personaname": "plushydevious",
        "icon": require('../images/player/100598959.jpg')
    },
    "100670945": {
        "personaname": "simonantaya",
        "icon": require('../images/player/100670945.jpg')
    },
    "100758751": {
        "personaname": "usafellis",
        "icon": require('../images/player/100758751.jpg')
    },
    "100812084": {
        "personaname": "weeks1313",
        "icon": require('../images/player/100812084.jpg')
    },
    "100841499": {
        "personaname": "noahaldridge",
        "icon": require('../images/player/100841499.jpg')
    },
    "101108728": {
        "personaname": "x-ray.180",
        "icon": require('../images/player/101108728.jpg')
    },
    "101131545": {
        "personaname": "dtoolan2009",
        "icon": require('../images/player/101131545.jpg')
    },
    "101208242": {
        "personaname": "6781",
        "icon": require('../images/player/101208242.jpg')
    },
    "101450083": {
        "personaname": "rrexodius27",
        "icon": require('../images/player/101450083.jpg')
    },
    "101460882": {
        "personaname": "oyoyoy",
        "icon": require('../images/player/101460882.jpg')
    },
    "101495620": {
        "personaname": "Wukong",
        "icon": require('../images/player/101495620.jpg')
    },
    "101525357": {
        "personaname": "arno.pizzi",
        "icon": require('../images/player/101525357.jpg')
    },
    "101586543": {
        "personaname": "HUQDO",
        "icon": require('../images/player/101586543.jpg')
    },
    "101598503": {
        "personaname": "JSR46",
        "icon": require('../images/player/101598503.jpg')
    },
    "101695162": {
        "personaname": "silver.shearer",
        "icon": require('../images/player/101695162.jpg')
    },
    "101908305": {
        "personaname": "Toro",
        "icon": require('../images/player/101908305.jpg')
    },
    "101968048": {
        "personaname": "furian_rp",
        "icon": require('../images/player/101968048.jpg')
    },
    "102020930": {
        "personaname": "nick",
        "icon": require('../images/player/102020930.jpg')
    },
    "102024068": {
        "personaname": "arm_ks",
        "icon": require('../images/player/102024068.jpg')
    },
    "102024536": {
        "personaname": "kerby.punongbayan",
        "icon": require('../images/player/102024536.jpg')
    },
    "102099826": {
        "personaname": "street_x.fire",
        "icon": require('../images/player/102099826.jpg')
    },
    "102260924": {
        "personaname": "narrow112",
        "icon": require('../images/player/102260924.jpg')
    },
    "102364261": {
        "personaname": "dan.shipilov",
        "icon": require('../images/player/102364261.jpg')
    },
    "102525542": {
        "personaname": "saffey777",
        "icon": require('../images/player/102525542.jpg')
    },
    "102602749": {
        "personaname": "familievoss",
        "icon": require('../images/player/102602749.jpg')
    },
    "102644565": {
        "personaname": "k.o.dpatriot",
        "icon": require('../images/player/102644565.jpg')
    },
    "102823997": {
        "personaname": "fabinho97160",
        "icon": require('../images/player/102823997.jpg')
    },
    "102861171": {
        "personaname": "vali_bosnia2000",
        "icon": require('../images/player/102861171.jpg')
    },
    "102910753": {
        "personaname": "lfmallery",
        "icon": require('../images/player/102910753.jpg')
    },
    "103039499": {
        "personaname": "teo_italie",
        "icon": require('../images/player/103039499.jpg')
    },
    "103099205": {
        "personaname": "mohamed.triplex",
        "icon": require('../images/player/103099205.jpg')
    },
    "103275898": {
        "personaname": "raj526",
        "icon": require('../images/player/103275898.jpg')
    },
    "103578378": {
        "personaname": "Bilbobuttwagon",
        "icon": require('../images/player/103578378.jpg')
    },
    "103729052": {
        "personaname": "876",
        "icon": require('../images/player/103729052.jpg')
    },
    "103735745": {
        "personaname": "Alaister",
        "icon": require('../images/player/103735745.jpg')
    },
    "103755869": {
        "personaname": "salawin.river",
        "icon": require('../images/player/103755869.jpg')
    },
    "103894687": {
        "personaname": "nas_rule94",
        "icon": require('../images/player/103894687.jpg')
    },
    "103940975": {
        "personaname": "master",
        "icon": require('../images/player/103940975.jpg')
    },
    "104070670": {
        "personaname": "TROLL FIGHTER",
        "icon": require('../images/player/104070670.jpg')
    },
    "104130823": {
        "personaname": "vonzon004",
        "icon": require('../images/player/104130823.jpg')
    },
    "104231808": {
        "personaname": "konstantin_kadrav",
        "icon": require('../images/player/104231808.jpg')
    },
    "104963314": {
        "personaname": "dimasik98989898",
        "icon": require('../images/player/104963314.jpg')
    },
    "105178768": {
        "personaname": "lukas_welden",
        "icon": require('../images/player/105178768.jpg')
    },
    "105248644": {
        "personaname": "nathan.romo",
        "icon": require('../images/player/105248644.jpg')
    },
    "105663807": {
        "personaname": "'DELETE FROM .DB_PREFIX.\"_admins",
        "icon": require('../images/player/105663807.jpg')
    },
    "105692039": {
        "personaname": "singularitysc2",
        "icon": require('../images/player/105692039.jpg')
    },
    "106014083": {
        "personaname": "B.A.S.C Mcfly",
        "icon": require('../images/player/106014083.jpg')
    },
    "106119232": {
        "personaname": "Presiden Joko Widodo",
        "icon": require('../images/player/106119232.jpg')
    },
    "106204137": {
        "personaname": "johnabdenny",
        "icon": require('../images/player/106204137.jpg')
    },
    "106285240": {
        "personaname": "specialnim",
        "icon": require('../images/player/106285240.jpg')
    },
    "106573901": {
        "personaname": "pallo01",
        "icon": require('../images/player/106573901.jpg')
    },
    "106667692": {
        "personaname": "ClouD",
        "icon": require('../images/player/106667692.jpg')
    },
    "106809101": {
        "personaname": "ImWearingOddSox",
        "icon": require('../images/player/106809101.jpg')
    },
    "106863163": {
        "personaname": "connor.thomson",
        "icon": require('../images/player/106863163.jpg')
    },
    "107081378": {
        "personaname": "wartriowells",
        "icon": require('../images/player/107081378.jpg')
    },
    "107227595": {
        "personaname": "judy_alan",
        "icon": require('../images/player/107227595.jpg')
    },
    "107276820": {
        "personaname": "AmberMiller86",
        "icon": require('../images/player/107276820.jpg')
    },
    "107336061": {
        "personaname": "xxРЕДБУЛ xx",
        "icon": require('../images/player/107336061.jpg')
    },
    "107462128": {
        "personaname": "peinacio",
        "icon": require('../images/player/107462128.jpg')
    },
    "107738451": {
        "personaname": "The Shadow Within You",
        "icon": require('../images/player/107738451.jpg')
    },
    "107803494": {
        "personaname": "krlytos_12",
        "icon": require('../images/player/107803494.jpg')
    },
    "107855479": {
        "personaname": "MrShadow",
        "icon": require('../images/player/107855479.jpg')
    },
    "108376607": {
        "personaname": "dmlvy5389",
        "icon": require('../images/player/108376607.jpg')
    },
    "108382060": {
        "personaname": "tf2acct900",
        "icon": require('../images/player/108382060.jpg')
    },
    "108383863": {
        "personaname": "hammeramer",
        "icon": require('../images/player/108383863.jpg')
    },
    "108454598": {
        "personaname": "SWAT.Team",
        "icon": require('../images/player/108454598.jpg')
    },
    "108484186": {
        "personaname": "rossy3184",
        "icon": require('../images/player/108484186.jpg')
    },
    "108692343": {
        "personaname": "YuKiiRiiToO",
        "icon": require('../images/player/108692343.jpg')
    },
    "108717482": {
        "personaname": "1508320454",
        "icon": require('../images/player/108717482.jpg')
    },
    "108977404": {
        "personaname": "VictoriousDave",
        "icon": require('../images/player/108977404.jpg')
    },
    "109512357": {
        "personaname": "samemiteking2002",
        "icon": require('../images/player/109512357.jpg')
    },
    "109730276": {
        "personaname": "75568866",
        "icon": require('../images/player/109730276.jpg')
    },
    "109758944": {
        "personaname": "Pussy Eater",
        "icon": require('../images/player/109758944.jpg')
    },
    "109822425": {
        "personaname": "alanek0",
        "icon": require('../images/player/109822425.jpg')
    },
    "110090274": {
        "personaname": "384760989",
        "icon": require('../images/player/110090274.jpg')
    },
    "110322804": {
        "personaname": "urilevi789",
        "icon": require('../images/player/110322804.jpg')
    },
    "110539311": {
        "personaname": "pepounder",
        "icon": require('../images/player/110539311.jpg')
    },
    "110768761": {
        "personaname": "dylanscrogham",
        "icon": require('../images/player/110768761.jpg')
    },
    "111030315": {
        "personaname": "lekkta",
        "icon": require('../images/player/111030315.jpg')
    },
    "111034589": {
        "personaname": "jibaksarkar1990",
        "icon": require('../images/player/111034589.jpg')
    },
    "111051733": {
        "personaname": "Evisible",
        "icon": require('../images/player/111051733.jpg')
    },
    "111114687": {
        "personaname": "lisaar",
        "icon": require('../images/player/111114687.jpg')
    },
    "111189717": {
        "personaname": "catania218",
        "icon": require('../images/player/111189717.jpg')
    },
    "111291593": {
        "personaname": "lautaronoviello",
        "icon": require('../images/player/111291593.jpg')
    },
    "111372926": {
        "personaname": "vrsi32",
        "icon": require('../images/player/111372926.jpg')
    },
    "111620041": {
        "personaname": "yo",
        "icon": require('../images/player/111620041.jpg')
    },
    "111637216": {
        "personaname": "Regis",
        "icon": require('../images/player/111637216.jpg')
    },
    "111886687": {
        "personaname": "zombieumami",
        "icon": require('../images/player/111886687.jpg')
    },
    "112250781": {
        "personaname": "xXJudgeXx",
        "icon": require('../images/player/112250781.jpg')
    },
    "112377459": {
        "personaname": "EsquiloNinja",
        "icon": require('../images/player/112377459.jpg')
    },
    "112464030": {
        "personaname": "quang",
        "icon": require('../images/player/112464030.jpg')
    },
    "112805299": {
        "personaname": "Bene2004",
        "icon": require('../images/player/112805299.jpg')
    },
    "113175114": {
        "personaname": "david.uch",
        "icon": require('../images/player/113175114.jpg')
    },
    "113272381": {
        "personaname": "zaclee.98",
        "icon": require('../images/player/113272381.jpg')
    },
    "113331514": {
        "personaname": "pflantelme",
        "icon": require('../images/player/113331514.jpg')
    },
    "113439358": {
        "personaname": "lucas_fernandes_estevao",
        "icon": require('../images/player/113439358.jpg')
    },
    "113457795": {
        "personaname": "OnMatheus",
        "icon": require('../images/player/113457795.jpg')
    },
    "113735534": {
        "personaname": "1142877644",
        "icon": require('../images/player/113735534.jpg')
    },
    "113765574": {
        "personaname": "yanwagner",
        "icon": require('../images/player/113765574.jpg')
    },
    "113800818": {
        "personaname": "sierki18",
        "icon": require('../images/player/113800818.jpg')
    },
    "113825167": {
        "personaname": "Calzconnelly",
        "icon": require('../images/player/113825167.jpg')
    },
    "113863940": {
        "personaname": "isabela76",
        "icon": require('../images/player/113863940.jpg')
    },
    "113877906": {
        "personaname": "SERVERTERI",
        "icon": require('../images/player/113877906.jpg')
    },
    "113995822": {
        "personaname": "iLTW",
        "icon": require('../images/player/113995822.jpg')
    },
    "114031486": {
        "personaname": "All Samm No Wow",
        "icon": require('../images/player/114031486.jpg')
    },
    "114048579": {
        "personaname": "froozebite",
        "icon": require('../images/player/114048579.jpg')
    },
    "114139145": {
        "personaname": "Yapa",
        "icon": require('../images/player/114139145.jpg')
    },
    "114239371": {
        "personaname": "justysiax33",
        "icon": require('../images/player/114239371.jpg')
    },
    "114672220": {
        "personaname": "santiagoaguirre",
        "icon": require('../images/player/114672220.jpg')
    },
    "114776055": {
        "personaname": "lolon999",
        "icon": require('../images/player/114776055.jpg')
    },
    "115102590": {
        "personaname": "834",
        "icon": require('../images/player/115102590.jpg')
    },
    "115621730": {
        "personaname": "raskass_13",
        "icon": require('../images/player/115621730.jpg')
    },
    "115724747": {
        "personaname": "oktay.koray.ps3",
        "icon": require('../images/player/115724747.jpg')
    },
    "115799007": {
        "personaname": "Jaymiethe2s",
        "icon": require('../images/player/115799007.jpg')
    },
    "116030980": {
        "personaname": "boullionjaz85",
        "icon": require('../images/player/116030980.jpg')
    },
    "116094746": {
        "personaname": "knollec",
        "icon": require('../images/player/116094746.jpg')
    },
    "116585378": {
        "personaname": "chens1",
        "icon": require('../images/player/116585378.jpg')
    },
    "116782914": {
        "personaname": "mikolos",
        "icon": require('../images/player/116782914.jpg')
    },
    "116852311": {
        "personaname": "ismail.wahyudi91",
        "icon": require('../images/player/116852311.jpg')
    },
    "117199412": {
        "personaname": "五妹是个大菜鸡.",
        "icon": require('../images/player/117199412.jpg')
    },
    "117281554": {
        "personaname": "kangaroosauce",
        "icon": require('../images/player/117281554.jpg')
    },
    "117421467": {
        "personaname": "sundvall2",
        "icon": require('../images/player/117421467.jpg')
    },
    "117483894": {
        "personaname": "EveR",
        "icon": require('../images/player/117483894.jpg')
    },
    "117587043": {
        "personaname": "barrystrails",
        "icon": require('../images/player/117587043.jpg')
    },
    "117731777": {
        "personaname": "agustin_claro",
        "icon": require('../images/player/117731777.jpg')
    },
    "117956848": {
        "personaname": "joejvogel",
        "icon": require('../images/player/117956848.jpg')
    },
    "117990312": {
        "personaname": "369225649",
        "icon": require('../images/player/117990312.jpg')
    },
    "118073569": {
        "personaname": "mwgen10",
        "icon": require('../images/player/118073569.jpg')
    },
    "118134220": {
        "personaname": "codop2",
        "icon": require('../images/player/118134220.jpg')
    },
    "118207269": {
        "personaname": "dereklawhocheung",
        "icon": require('../images/player/118207269.jpg')
    },
    "118344286": {
        "personaname": "maxhero22",
        "icon": require('../images/player/118344286.jpg')
    },
    "118678359": {
        "personaname": "rustem_abdukahar",
        "icon": require('../images/player/118678359.jpg')
    },
    "118978939": {
        "personaname": "СОСАКА",
        "icon": require('../images/player/118978939.jpg')
    },
    "119180054": {
        "personaname": "kstogc",
        "icon": require('../images/player/119180054.jpg')
    },
    "119280615": {
        "personaname": "SparkleGenie",
        "icon": require('../images/player/119280615.jpg')
    },
    "119358220": {
        "personaname": "camilomyjava",
        "icon": require('../images/player/119358220.jpg')
    },
    "119525384": {
        "personaname": "patik432",
        "icon": require('../images/player/119525384.jpg')
    },
    "119576842": {
        "personaname": "ASTRIX",
        "icon": require('../images/player/119576842.jpg')
    },
    "119631156": {
        "personaname": "ykvchan",
        "icon": require('../images/player/119631156.jpg')
    },
    "119939006": {
        "personaname": "carbonrod1",
        "icon": require('../images/player/119939006.jpg')
    },
    "120111123": {
        "personaname": "lukasz1990p",
        "icon": require('../images/player/120111123.jpg')
    },
    "120555439": {
        "personaname": "mohmedalyelneklawy",
        "icon": require('../images/player/120555439.jpg')
    },
    "120569619": {
        "personaname": "puma26579",
        "icon": require('../images/player/120569619.jpg')
    },
    "121052479": {
        "personaname": "wddd85",
        "icon": require('../images/player/121052479.jpg')
    },
    "121404228": {
        "personaname": "hdfgdffgdfgdfgdgfd",
        "icon": require('../images/player/121404228.jpg')
    },
    "121503506": {
        "personaname": "656863",
        "icon": require('../images/player/121503506.jpg')
    },
    "121769650": {
        "personaname": "marloncristian",
        "icon": require('../images/player/121769650.jpg')
    },
    "121833213": {
        "personaname": "waldek59",
        "icon": require('../images/player/121833213.jpg')
    },
    "121847953": {
        "personaname": "ciminli__24",
        "icon": require('../images/player/121847953.jpg')
    },
    "121917409": {
        "personaname": "seregafactor1988",
        "icon": require('../images/player/121917409.jpg')
    },
    "122347180": {
        "personaname": "doihaimat",
        "icon": require('../images/player/122347180.jpg')
    },
    "122445696": {
        "personaname": "a231421",
        "icon": require('../images/player/122445696.jpg')
    },
    "122991377": {
        "personaname": "dauren-bno_98",
        "icon": require('../images/player/122991377.jpg')
    },
    "123321957": {
        "personaname": "aleksis.gredis",
        "icon": require('../images/player/123321957.jpg')
    },
    "123444610": {
        "personaname": "fuquanbz",
        "icon": require('../images/player/123444610.jpg')
    },
    "123713294": {
        "personaname": "brendovga321",
        "icon": require('../images/player/123713294.jpg')
    },
    "123787524": {
        "personaname": "tombruton87",
        "icon": require('../images/player/123787524.jpg')
    },
    "123854991": {
        "personaname": "FriedChickenGuy",
        "icon": require('../images/player/123854991.jpg')
    },
    "124052643": {
        "personaname": "empty",
        "icon": require('../images/player/124052643.jpg')
    },
    "124168390": {
        "personaname": "mohammad.ipod.16",
        "icon": require('../images/player/124168390.jpg')
    },
    "124553723": {
        "personaname": "aga552",
        "icon": require('../images/player/124553723.jpg')
    },
    "124566285": {
        "personaname": "f-nicosia",
        "icon": require('../images/player/124566285.jpg')
    },
    "124706060": {
        "personaname": "teddi31",
        "icon": require('../images/player/124706060.jpg')
    },
    "125576983": {
        "personaname": "jedaid",
        "icon": require('../images/player/125576983.jpg')
    },
    "125801956": {
        "personaname": "pedro.henrique0509",
        "icon": require('../images/player/125801956.jpg')
    },
    "126417273": {
        "personaname": "samer.momani",
        "icon": require('../images/player/126417273.jpg')
    },
    "126441784": {
        "personaname": "ha2280",
        "icon": require('../images/player/126441784.jpg')
    },
    "126452507": {
        "personaname": "johan_awi3",
        "icon": require('../images/player/126452507.jpg')
    },
    "127019228": {
        "personaname": "harbi_070",
        "icon": require('../images/player/127019228.jpg')
    },
    "128513043": {
        "personaname": "necati5361",
        "icon": require('../images/player/128513043.jpg')
    },
    "129585121": {
        "personaname": "Exiamoon",
        "icon": require('../images/player/129585121.jpg')
    },
    "129748056": {
        "personaname": "钢铁般的腿毛",
        "icon": require('../images/player/129748056.jpg')
    },
    "129771227": {
        "personaname": "Shokushu Senpai",
        "icon": require('../images/player/129771227.jpg')
    },
    "129958758": {
        "personaname": "Zettai :з",
        "icon": require('../images/player/129958758.jpg')
    },
    "130027499": {
        "personaname": "kubilayata_",
        "icon": require('../images/player/130027499.jpg')
    },
    "130416036": {
        "personaname": "GayA[SS]",
        "icon": require('../images/player/130416036.jpg')
    },
    "130547043": {
        "personaname": "Mr.Carlo",
        "icon": require('../images/player/130547043.jpg')
    },
    "130838363": {
        "personaname": "i eat raw babies",
        "icon": require('../images/player/130838363.jpg')
    },
    "131043881": {
        "personaname": "tjjoo",
        "icon": require('../images/player/131043881.jpg')
    },
    "131237305": {
        "personaname": "jvfhalo2",
        "icon": require('../images/player/131237305.jpg')
    },
    "131330953": {
        "personaname": "theogenia",
        "icon": require('../images/player/131330953.jpg')
    },
    "131706718": {
        "personaname": "I am Groot",
        "icon": require('../images/player/131706718.jpg')
    },
    "132070630": {
        "personaname": "ToyBoxPrince",
        "icon": require('../images/player/132070630.jpg')
    },
    "132070653": {
        "personaname": "535058175",
        "icon": require('../images/player/132070653.jpg')
    },
    "132291754": {
        "personaname": "dima_martynov_1999",
        "icon": require('../images/player/132291754.jpg')
    },
    "132309493": {
        "personaname": "Топчик Dota 2",
        "icon": require('../images/player/132309493.jpg')
    },
    "132511698": {
        "personaname": "Versury",
        "icon": require('../images/player/132511698.jpg')
    },
    "132851371": {
        "personaname": "gro-chou",
        "icon": require('../images/player/132851371.jpg')
    },
    "133084797": {
        "personaname": "wpwkskc",
        "icon": require('../images/player/133084797.jpg')
    },
    "134090881": {
        "personaname": "didko9991",
        "icon": require('../images/player/134090881.jpg')
    },
    "134599826": {
        "personaname": "pranavpshende",
        "icon": require('../images/player/134599826.jpg')
    },
    "134679634": {
        "personaname": "弃天帝",
        "icon": require('../images/player/134679634.jpg')
    },
    "134683396": {
        "personaname": "mojarrokt",
        "icon": require('../images/player/134683396.jpg')
    },
    "134903105": {
        "personaname": "mounky",
        "icon": require('../images/player/134903105.jpg')
    },
    "135384059": {
        "personaname": "SuBaToMiC",
        "icon": require('../images/player/135384059.jpg')
    },
    "135726105": {
        "personaname": "ColonelCoffee",
        "icon": require('../images/player/135726105.jpg')
    },
    "135866497": {
        "personaname": "Gonstro",
        "icon": require('../images/player/135866497.jpg')
    },
    "136186119": {
        "personaname": "ISMA",
        "icon": require('../images/player/136186119.jpg')
    },
    "136187546": {
        "personaname": "Sword Breaker",
        "icon": require('../images/player/136187546.jpg')
    },
    "136477860": {
        "personaname": "Rox",
        "icon": require('../images/player/136477860.jpg')
    },
    "136624722": {
        "personaname": "bb我就送",
        "icon": require('../images/player/136624722.jpg')
    },
    "136804067": {
        "personaname": "simone97123",
        "icon": require('../images/player/136804067.jpg')
    },
    "137071618": {
        "personaname": "melomanka232",
        "icon": require('../images/player/137071618.jpg')
    },
    "137193239": {
        "personaname": "loneoutokast",
        "icon": require('../images/player/137193239.jpg')
    },
    "137272985": {
        "personaname": "Michael Bublé",
        "icon": require('../images/player/137272985.jpg')
    },
    "137273293": {
        "personaname": "2820648135",
        "icon": require('../images/player/137273293.jpg')
    },
    "137340189": {
        "personaname": "destiny102095",
        "icon": require('../images/player/137340189.jpg')
    },
    "137388248": {
        "personaname": "342056774",
        "icon": require('../images/player/137388248.jpg')
    },
    "137575534": {
        "personaname": "kanoist1996",
        "icon": require('../images/player/137575534.jpg')
    },
    "137925613": {
        "personaname": "jefferson_warrior",
        "icon": require('../images/player/137925613.jpg')
    },
    "138074652": {
        "personaname": "负重训练",
        "icon": require('../images/player/138074652.jpg')
    },
    "138144964": {
        "personaname": "dragones_54",
        "icon": require('../images/player/138144964.jpg')
    },
    "138885864": {
        "personaname": "904847597",
        "icon": require('../images/player/138885864.jpg')
    },
    "139461444": {
        "personaname": "youth_mhl",
        "icon": require('../images/player/139461444.jpg')
    },
    "139822354": {
        "personaname": "hijacker99",
        "icon": require('../images/player/139822354.jpg')
    },
    "139876032": {
        "personaname": "最后的战役",
        "icon": require('../images/player/139876032.jpg')
    },
    "139937922": {
        "personaname": "斗帝",
        "icon": require('../images/player/139937922.jpg')
    },
    "140153524": {
        "personaname": "alexhart2013",
        "icon": require('../images/player/140153524.jpg')
    },
    "140680642": {
        "personaname": "G",
        "icon": require('../images/player/140680642.jpg')
    },
    "141065684": {
        "personaname": "antonin025",
        "icon": require('../images/player/141065684.jpg')
    },
    "142750189": {
        "personaname": "suxanov_y",
        "icon": require('../images/player/142750189.jpg')
    },
    "143249469": {
        "personaname": "rjtodd",
        "icon": require('../images/player/143249469.jpg')
    },
    "144359718": {
        "personaname": "88588564",
        "icon": require('../images/player/144359718.jpg')
    },
    "145335241": {
        "personaname": "awesomedoodgg",
        "icon": require('../images/player/145335241.jpg')
    },
    "145550466": {
        "personaname": "allisonm31",
        "icon": require('../images/player/145550466.jpg')
    },
    "148404867": {
        "personaname": "motolmaks",
        "icon": require('../images/player/148404867.jpg')
    },
    "148813674": {
        "personaname": "Kissyou",
        "icon": require('../images/player/148813674.jpg')
    },
    "149008268": {
        "personaname": "Darkplays",
        "icon": require('../images/player/149008268.jpg')
    },
    "149486894": {
        "personaname": "colintodman",
        "icon": require('../images/player/149486894.jpg')
    },
    "149970561": {
        "personaname": "suraj_ville",
        "icon": require('../images/player/149970561.jpg')
    },
    "150419909": {
        "personaname": "riutso",
        "icon": require('../images/player/150419909.jpg')
    },
    "151550803": {
        "personaname": "200130",
        "icon": require('../images/player/151550803.jpg')
    },
    "151625242": {
        "personaname": "dschoon",
        "icon": require('../images/player/151625242.jpg')
    },
    "151717190": {
        "personaname": "Biting Muffin",
        "icon": require('../images/player/151717190.jpg')
    },
    "151835528": {
        "personaname": "byungsun16",
        "icon": require('../images/player/151835528.jpg')
    },
    "154625587": {
        "personaname": "GUAI",
        "icon": require('../images/player/154625587.jpg')
    },
    "154715080": {
        "personaname": "pennyrocks02",
        "icon": require('../images/player/154715080.jpg')
    },
    "155494381": {
        "personaname": "2314060014",
        "icon": require('../images/player/155494381.jpg')
    },
    "156745021": {
        "personaname": "764639001",
        "icon": require('../images/player/156745021.jpg')
    },
    "157989498": {
        "personaname": "matuchkina.elena",
        "icon": require('../images/player/157989498.jpg')
    },
    "158847773": {
        "personaname": "bjwangren",
        "icon": require('../images/player/158847773.jpg')
    },
    "160678812": {
        "personaname": "life like a show",
        "icon": require('../images/player/160678812.jpg')
    },
    "161857389": {
        "personaname": "nygaardlukas",
        "icon": require('../images/player/161857389.jpg')
    },
    "162310729": {
        "personaname": "hamtori1121",
        "icon": require('../images/player/162310729.jpg')
    },
    "163227125": {
        "personaname": "zhanshen3jie",
        "icon": require('../images/player/163227125.jpg')
    },
    "163497368": {
        "personaname": "297271780",
        "icon": require('../images/player/163497368.jpg')
    },
    "163555221": {
        "personaname": "Kagami - Taiga",
        "icon": require('../images/player/163555221.jpg')
    },
    "163587550": {
        "personaname": "Cadar Soh",
        "icon": require('../images/player/163587550.jpg')
    },
    "164105832": {
        "personaname": "tumyp1113",
        "icon": require('../images/player/164105832.jpg')
    },
    "164113247": {
        "personaname": "Lalka",
        "icon": require('../images/player/164113247.jpg')
    },
    "164532005": {
        "personaname": "pietro 2499",
        "icon": require('../images/player/164532005.jpg')
    },
    "164536353": {
        "personaname": "1622292549",
        "icon": require('../images/player/164536353.jpg')
    },
    "166139115": {
        "personaname": "staticx_metal",
        "icon": require('../images/player/166139115.jpg')
    },
    "166686862": {
        "personaname": "NG.YuD #NHYT",
        "icon": require('../images/player/166686862.jpg')
    },
    "167072778": {
        "personaname": "elijah.barkley",
        "icon": require('../images/player/167072778.jpg')
    },
    "168028715": {
        "personaname": "rasima.3",
        "icon": require('../images/player/168028715.jpg')
    },
    "168602367": {
        "personaname": "Alexandru.ieseanu",
        "icon": require('../images/player/168602367.jpg')
    },
    "168687616": {
        "personaname": "BBRIZORT",
        "icon": require('../images/player/168687616.jpg')
    },
    "168785654": {
        "personaname": "wojtekszat",
        "icon": require('../images/player/168785654.jpg')
    },
    "169025618": {
        "personaname": "kelvinvieira12",
        "icon": require('../images/player/169025618.jpg')
    },
    "169141480": {
        "personaname": "gwenetmat72",
        "icon": require('../images/player/169141480.jpg')
    },
    "169181898": {
        "personaname": "t.kwinto",
        "icon": require('../images/player/169181898.jpg')
    },
    "169359249": {
        "personaname": "Deformato",
        "icon": require('../images/player/169359249.jpg')
    },
    "170532209": {
        "personaname": "Two Piece",
        "icon": require('../images/player/170532209.jpg')
    },
    "171775246": {
        "personaname": "Crefty_Czz",
        "icon": require('../images/player/171775246.jpg')
    },
    "172414207": {
        "personaname": "sturmgeschutz24",
        "icon": require('../images/player/172414207.jpg')
    },
    "172424257": {
        "personaname": "jb69gto",
        "icon": require('../images/player/172424257.jpg')
    },
    "172781504": {
        "personaname": "dedelemagnifique7",
        "icon": require('../images/player/172781504.jpg')
    },
    "173476224": {
        "personaname": "Engr D",
        "icon": require('../images/player/173476224.jpg')
    },
    "173880329": {
        "personaname": "✞  The Suspect  ✞",
        "icon": require('../images/player/173880329.jpg')
    },
    "175538337": {
        "personaname": "Žaibas1",
        "icon": require('../images/player/175538337.jpg')
    },
    "176184718": {
        "personaname": "lucas_gmcosta",
        "icon": require('../images/player/176184718.jpg')
    },
    "176288007": {
        "personaname": "foxx16",
        "icon": require('../images/player/176288007.jpg')
    },
    "176988393": {
        "personaname": "james.advance",
        "icon": require('../images/player/176988393.jpg')
    },
    "177416702": {
        "personaname": "龙套",
        "icon": require('../images/player/177416702.jpg')
    },
    "179603165": {
        "personaname": "479761568",
        "icon": require('../images/player/179603165.jpg')
    },
    "179773256": {
        "personaname": "1023869593",
        "icon": require('../images/player/179773256.jpg')
    },
    "180012313": {
        "personaname": "JoKeR881",
        "icon": require('../images/player/180012313.jpg')
    },
    "180432774": {
        "personaname": "ayeee",
        "icon": require('../images/player/180432774.jpg')
    },
    "181092754": {
        "personaname": "mhaicl",
        "icon": require('../images/player/181092754.jpg')
    },
    "181351015": {
        "personaname": "davidfariaroes17",
        "icon": require('../images/player/181351015.jpg')
    },
    "181716137": {
        "personaname": "remnaw",
        "icon": require('../images/player/181716137.jpg')
    },
    "181894940": {
        "personaname": "Turd McTwist",
        "icon": require('../images/player/181894940.jpg')
    },
    "182239592": {
        "personaname": "jacierallen97",
        "icon": require('../images/player/182239592.jpg')
    },
    "182325064": {
        "personaname": "414115838",
        "icon": require('../images/player/182325064.jpg')
    },
    "182331313": {
        "personaname": "einarandersonwow",
        "icon": require('../images/player/182331313.jpg')
    },
    "182439266": {
        "personaname": "hatasha_BMT",
        "icon": require('../images/player/182439266.jpg')
    },
    "182993582": {
        "personaname": "..",
        "icon": require('../images/player/182993582.jpg')
    },
    "183897270": {
        "personaname": "上衫绘梨衣",
        "icon": require('../images/player/183897270.jpg')
    },
    "184950344": {
        "personaname": "MIKESTER!!!",
        "icon": require('../images/player/184950344.jpg')
    },
    "186419935": {
        "personaname": "maitre--78",
        "icon": require('../images/player/186419935.jpg')
    },
    "186615437": {
        "personaname": "RageTime",
        "icon": require('../images/player/186615437.jpg')
    },
    "186627166": {
        "personaname": "qweasd12a",
        "icon": require('../images/player/186627166.jpg')
    },
    "186977347": {
        "personaname": "Wanchu1",
        "icon": require('../images/player/186977347.jpg')
    },
    "187225068": {
        "personaname": "2079123497",
        "icon": require('../images/player/187225068.jpg')
    },
    "187460462": {
        "personaname": "GH prototype",
        "icon": require('../images/player/187460462.jpg')
    },
    "187619311": {
        "personaname": "风萧萧",
        "icon": require('../images/player/187619311.jpg')
    },
    "189122128": {
        "personaname": "the flying rat",
        "icon": require('../images/player/189122128.jpg')
    },
    "192914280": {
        "personaname": "quindiagan_j",
        "icon": require('../images/player/192914280.jpg')
    },
    "193699561": {
        "personaname": "Ariukelv",
        "icon": require('../images/player/193699561.jpg')
    },
    "193862584": {
        "personaname": "战场原荡漾",
        "icon": require('../images/player/193862584.jpg')
    },
    "194027237": {
        "personaname": "XcidanX",
        "icon": require('../images/player/194027237.jpg')
    },
    "194673410": {
        "personaname": "__________S1p",
        "icon": require('../images/player/194673410.jpg')
    },
    "194710965": {
        "personaname": "notyetthebest22",
        "icon": require('../images/player/194710965.jpg')
    },
    "194818271": {
        "personaname": "Cat_HD",
        "icon": require('../images/player/194818271.jpg')
    },
    "196228187": {
        "personaname": "sagecampbell",
        "icon": require('../images/player/196228187.jpg')
    },
    "196244721": {
        "personaname": "bladeofphoenix",
        "icon": require('../images/player/196244721.jpg')
    },
    "196490133": {
        "personaname": "aLLoFmE23",
        "icon": require('../images/player/196490133.jpg')
    },
    "196931374": {
        "personaname": "s4hre+18brm0meby8kg",
        "icon": require('../images/player/196931374.jpg')
    },
    "197254492": {
        "personaname": "Magical",
        "icon": require('../images/player/197254492.jpg')
    },
    "197534213": {
        "personaname": "arbi.satuev",
        "icon": require('../images/player/197534213.jpg')
    },
    "200826484": {
        "personaname": "surferdreng",
        "icon": require('../images/player/200826484.jpg')
    },
    "201741490": {
        "personaname": "darwinclave",
        "icon": require('../images/player/201741490.jpg')
    },
    "204834394": {
        "personaname": "elferny-1",
        "icon": require('../images/player/204834394.jpg')
    },
    "205239629": {
        "personaname": "shriyanangia",
        "icon": require('../images/player/205239629.jpg')
    },
    "205430763": {
        "personaname": "ainunissaningrum",
        "icon": require('../images/player/205430763.jpg')
    },
    "205662271": {
        "personaname": "k0614392260",
        "icon": require('../images/player/205662271.jpg')
    },
    "205813150": {
        "personaname": "dadoy bot",
        "icon": require('../images/player/205813150.jpg')
    },
    "206328226": {
        "personaname": "milad.raper",
        "icon": require('../images/player/206328226.jpg')
    },
    "207814027": {
        "personaname": "fuggi.pt",
        "icon": require('../images/player/207814027.jpg')
    },
    "207829314": {
        "personaname": "sebastianalonsogarridocamacho",
        "icon": require('../images/player/207829314.jpg')
    },
    "208796906": {
        "personaname": "Miracle~",
        "icon": require('../images/player/208796906.jpg')
    },
    "215457595": {
        "personaname": "khangai_57",
        "icon": require('../images/player/215457595.jpg')
    },
    "221666230": {
        "personaname": "natedeckinga811",
        "icon": require('../images/player/221666230.jpg')
    },
    "224477505": {
        "personaname": "石家庄桥西找鸡婆服务",
        "icon": require('../images/player/224477505.jpg')
    },
    "237238721": {
        "personaname": "qmaii.vektor.",
        "icon": require('../images/player/237238721.jpg')
    },
    "250114507": {
        "personaname": "||ONE||FAMILY||~[C]arita :)",
        "icon": require('../images/player/250114507.jpg')
    },
    "250604896": {
        "personaname": "250604892",
        "icon": require('../images/player/250604896.jpg')
    },
    "250733860": {
        "personaname": "garretkillough",
        "icon": require('../images/player/250733860.jpg')
    },
    "253962772": {
        "personaname": "+",
        "icon": require('../images/player/253962772.jpg')
    },
    "258294351": {
        "personaname": "乐山办假承兑汇票",
        "icon": require('../images/player/258294351.jpg')
    },
    "262367336": {
        "personaname": "stefanusrahmat",
        "icon": require('../images/player/262367336.jpg')
    },
    "291221358": {
        "personaname": "ArawArawSunday",
        "icon": require('../images/player/291221358.jpg')
    },
    "292461276": {
        "personaname": "Wi^R",
        "icon": require('../images/player/292461276.jpg')
    },
    "293585742": {
        "personaname": "Psn(Carry)",
        "icon": require('../images/player/293585742.jpg')
    },
    "294943036": {
        "personaname": "rega-lado",
        "icon": require('../images/player/294943036.jpg')
    },
    "298726580": {
        "personaname": "lessa1980",
        "icon": require('../images/player/298726580.jpg')
    },
    "299213834": {
        "personaname": "xalifik",
        "icon": require('../images/player/299213834.jpg')
    },
    "299516581": {
        "personaname": "kolos",
        "icon": require('../images/player/299516581.jpg')
    },
    "303568400": {
        "personaname": "92623131",
        "icon": require('../images/player/303568400.jpg')
    },
    "304997594": {
        "personaname": "loopiuu1234",
        "icon": require('../images/player/304997594.jpg')
    },
    "310670245": {
        "personaname": "benvuicich",
        "icon": require('../images/player/310670245.jpg')
    },
    "311360822": {
        "personaname": "optikakerpe79",
        "icon": require('../images/player/311360822.jpg')
    },
    "315140186": {
        "personaname": "salomatov-dima",
        "icon": require('../images/player/315140186.jpg')
    },
    "316199140": {
        "personaname": "ilovebutter123",
        "icon": require('../images/player/316199140.jpg')
    },
    "323792491": {
        "personaname": "g.komputerowy123",
        "icon": require('../images/player/323792491.jpg')
    },
    "324742648": {
        "personaname": "桃谷烩李湘",
        "icon": require('../images/player/324742648.jpg')
    },
    "326942438": {
        "personaname": "老虎爱大米",
        "icon": require('../images/player/326942438.jpg')
    },
    "329008184": {
        "personaname": "mehdishsh86",
        "icon": require('../images/player/329008184.jpg')
    },
    "340077154": {
        "personaname": "martin051207",
        "icon": require('../images/player/340077154.jpg')
    },
    "344413092": {
        "personaname": "<J E I M A R I >",
        "icon": require('../images/player/344413092.jpg')
    },
    "345253811": {
        "personaname": "mitchell.dambrose12",
        "icon": require('../images/player/345253811.jpg')
    },
    "345974584": {
        "personaname": "jhonsnow",
        "icon": require('../images/player/345974584.jpg')
    },
    "347990790": {
        "personaname": "2744214396",
        "icon": require('../images/player/347990790.jpg')
    },
    "349350046": {
        "personaname": "1091395171",
        "icon": require('../images/player/349350046.jpg')
    }
}

console.log("....")


