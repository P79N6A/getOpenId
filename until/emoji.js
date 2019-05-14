module.exports = (rawText) => {
    // rawText 未处理原始文本数据
    console.log(rawText);
    const emojiDir = [
        {
            name: '[捂脸]',
            img: `emoji_1f202.png`
        },
        {
            name: '[困]',
            img: 'emoji_1f208.png'
        },
        {
            name: '[吐血]',
            img: 'emoji_1f210.png'
        },
        {
            name: '[石化]',
            img: 'emoji_1f20e.png'
        },
        {
            name: '[发怒]',
            img: 'emoji_1f196.png'
        },
        {
            name: '[偷笑]',
            img: 'emoji_1f20d.png'
        },
        {
            name: '[啤酒]',
            img: 'emoji_1f22b.png'
        },
        {
            name: '[泣不成声]',
            img: 'emoji_1f20a.png'
        },
        {
            name: '[鼾睡]',
            img: 'emoji_1f198.png'
        },
        {
            name: '[耶]',
            img: 'emoji_1f201.png'
        },
        {
            name: '[互粉]',
            img: 'emoji_1f222.png'
        },
        {
            name: '[我想静静]',
            img: 'emoji_1f22c.png'
        },
        {
            name: '[吻]',
            img: 'emoji_1f21d.png'
        },
        {
            name: '[笑]',
            img: 'emoji_1f21f.png'
        },
        {
            name: '[呆无辜]',
            img: 'emoji_1f238.png'
        },
        {
            name: '[what]',
            img: 'emoji_1f209.png'
        },
        {
            name: '[撇嘴]',
            img: 'emoji_1f213.png'
        },
        {
            name: '[衰]',
            img: 'emoji_1f19c.png'
        },
        {
            name: '[666]',
            img: 'emoji_1f228.png'
        },
        {
            name: '[机智]',
            img: 'emoji_1f19e.png'
        },
        {
            name: '[大笑]',
            img: 'emoji_1f204.png'
        },
        {
            name: '[熊吉]',
            img: 'emoji_1f23b.png'
        },
        {
            name: '[求抱抱]',
            img: 'emoji_1f234.png'
        },
        {
            name: '[奸笑]',
            img: 'emoji_1f217.png'
        },
        {
            name: '[再见]',
            img: 'emoji_1f231.png'
        },
        {
            name: '[翻白眼]',
            img: 'emoji_1f221.png'
        },
        {
            name: '[害羞]',
            img: 'emoji_1f199.png'
        },
        {
            name: '[笑哭]',
            img: 'emoji_1f215.png'
        },
        {
            name: '[流泪]',
            img: 'emoji_1f195.png'
        },
        {
            name: '[谢谢]',
            img: 'emoji_1f225.png'
        },
        {
            name: '[酷拽]',
            img: 'emoji_1f193.png'
        },
        {
            name: '[委屈]',
            img: 'emoji_1f22d.png'
        },
        {
            name: '[小鼓掌]',
            img: 'emoji_1f20b.png'
        },
        {
            name: '[呲牙]',
            img: 'emoji_1f197.png'
        },
        {
            name: '[鄙视]',
            img: 'emoji_1f22f.png'
        },
        {
            name: '[快哭了]',
            img: 'emoji_1f220.png'
        },
        {
            name: '[可爱]',
            img: 'emoji_1f19a.png'
        },
        {
            name: '[震惊]',
            img: 'emoji_1f206.png'
        },
        {
            name: '[紫薇别走]',
            img: 'emoji_1f232.png'
        },
        {
            name: '[哈欠]',
            img: 'emoji_1f205.png'
        },
        {
            name: '[爱慕]',
            img: 'emoji_1f191.png'
        },
        {
            name: '[微笑]',
            img: 'emoji_1f190.png'
        },
        {
            name: '[来看我]',
            img: 'emoji_1f19f.png'
        },
        {
            name: '[看]',
            img: 'emoji_1f239.png'
        },
        {
            name: '[可怜]',
            img: 'emoji_1f211.png'
        },
        {
            name: '[赞]',
            img: 'emoji_1f223.png'
        },
        {
            name: '[抠鼻]',
            img: 'emoji_1f194.png'
        },
        {
            name: '[晕]',
            img: 'emoji_1f19b.png'
        },
        {
            name: '[雾霾]',
            img: 'emoji_1f216.png'
        },
        {
            name: '[送心]',
            img: 'emoji_1f207.png'
        },
        {
            name: '[得意]',
            img: 'emoji_1f218.png'
        },
        {
            name: '[吐舌]',
            img: 'emoji_1f237.png'
        },
        {
            name: '[飞吻]',
            img: 'emoji_1f230.png'
        },
        {
            name: '[打脸]',
            img: 'emoji_1f203.png'
        },
        {
            name: '[白眼]',
            img: 'emoji_1f23a.png'
        },
        {
            name: '[黑线]',
            img: 'emoji_1f214.png'
        },
        {
            name: '[抓狂]',
            img: 'emoji_1f21a.png'
        },
        {
            name: '[舔屏]',
            img: 'emoji_1f22e.png'
        },
        {
            name: '[鼓掌]',
            img: 'emoji_1f224.png'
        },
        {
            name: '[周冬雨的凝视]',
            img: 'emoji_1f235.png'
        },
        {
            name: '[灵光一闪]',
            img: 'emoji_1f200.png'
        },
        {
            name: '[嘘]',
            img: 'emoji_1f212.png'
        },
        {
            name: '[马思纯的微笑]',
            img: 'emoji_1f236.png'
        },
        {
            name: '[去污粉]',
            img: 'emoji_1f227.png'
        },
        {
            name: '[听歌]',
            img: 'emoji_1f233.png'
        },
        {
            name: '[酷]',
            img: 'emoji_1f20c.png'
        },
        {
            name: '[钱]',
            img: 'emoji_1f21c.png'
        },
        {
            name: '[玫瑰]',
            img: 'emoji_1f229.png'
        },
        {
            name: '[骷髅]',
            img: 'emoji_1f23c.png'
        },
        {
            name: '[泪奔]',
            img: 'emoji_1f21b.png'
        },
        {
            name: '[恐惧]',
            img: 'emoji_1f21e.png'
        },
        {
            name: '[黑脸]',
            img: 'emoji_1f23d.png'
        },
        {
            name: '[惊呆]',
            img: 'emoji_1f192.png'
        },
        {
            name: '[胡瓜]',
            img: 'emoji_1f22a.png'
        },
        {
            name: '[闭嘴]',
            img: 'emoji_1f19d.png'
        },
        {
            name: '[思考]',
            img: 'emoji_1f20f.png'
        },
        {
            name: '[憨笑]',
            img: 'emoji_1f219.png'
        },


    ]
    let nodeList = [
        {
            name: 'div',
            attrs: {
                class: 'div_class',
                style: 'line-height:25px;width:100%'
            },
            children: []
        }
    ]
    let string = rawText.replace(/\[.*?\]/g, '_3*=X#[]_3*=X#')
    let match0 = string.match(/\[.*?\]/g)
    // console.log(rawText.split(/\[.*?\]/g));
    // console.log("_______");

    // console.log(rawText.match(/\[.*?\]/g));

    // let match1 = rawText.match(/\[.*?\]/g)
    // 获得非表情的文字部分，即 数组内容非空 
    let emojiText = string.split('_3*=X#')

    // console.log("新的数组");
    // console.log(emojiText.filter(function (n) { return n }));
    emojiText = emojiText.filter(function (n) { return n })
    // console.log(emojiText);

    // 获取所有 [表情] 的数组
    // let breakText = rawText.split(/\[.*?\]/)
    let breakText = rawText.match(/\[.*?\]/g)
    console.log(breakText);


    // 循环大数组，非空部分即 文字 ，[]空部分代表 [表情] 但是不一定有 表情 看情况返回
    (function (emoji_index = 0) {

        for (let j in emojiText) {
            // 表情的下标
            // emoji_index = 0
            // 判断是否是空值

            if (emojiText[j] != "[]") {
                // console.log("这不是表情哦");
                // console.log(emojiText[j].length);
                // console.log(emojiText[j].split(""));

                // 将字符串切割，现是完全切割，待改
                let fenci = emojiText[j].split("")

                for (let w in fenci) {
                    let obj = {}
                    obj = {
                        type: 'node',
                        name: 'span',
                        attrs: {
                            // class: 'div_class',
                            style: 'display:inline-block;margin:0;'
                        },
                        children: [{
                            type: 'text',
                            text: fenci[w]
                        }]
                    }
                    nodeList[0].children.push(obj)
                }

                continue;
            } else {
                // console.log(emojiText[j]);
                // console.log(breakText[emoji_index]);
                // console.log(emoji_index);


                loop1:
                for (let a in emojiDir) {
                    // console.log(breakText[emoji_index] != emojiDir[a].name && Number(a) + 1 == emojiDir.length);
                    // console.log(Number(a) + 1);
                    // console.log(emojiDir.length);

                    // console.log(a);

                    // 如果确实是表情 匹配图片 否则返回纯文本
                    if (breakText[emoji_index] == emojiDir[a].name) {
                        // console.log(emojiDir[a].name);
                        let obj = {}
                        obj = {
                            type: 'node',
                            name: 'img',
                            attrs: {
                                style: 'margin:auto 2px',
                                height: '20rpx',
                                class: 'emoji-small',
                                src: `http://cqctj.bytedance.net/emoji/${emojiDir[a].img}`,
                            },
                        }
                        emoji_index++
                        nodeList[0].children.push(obj)
                        break;
                    } else if (breakText[emoji_index] != emojiDir[a].name && Number(a) + 1 == emojiDir.length) {
                        let obj = {}
                        obj = {
                            type: 'text',
                            text: breakText[emoji_index]
                        }
                        emoji_index++
                        nodeList[0].children.push(obj)
                        // break loop1;
                    }

                }


            }
            // console.log(obj);

        }
    }());

    // console.log(nodeList[0].children);

    return nodeList

}