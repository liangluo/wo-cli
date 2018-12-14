
var _html =`<div class="mod-book">
                <div class="mod-book-one" v-if="Model==1">
                    <div class="list" v-for="(bookItem,index) in  bookList" :key="index">
                        <div @click="openPage()">
                            <div class="mod-book-img">
                                <img :src="bookItem.coveroneUrl" />
                                <span class="icon-label">免费</span>
                            </div>
                            <div class="mod-book-detail">
                                <h2 class="mod-book-title one-text">{{bookItem.cntname}}</h2>
                                <div class="mod-book-intr  two-text">{{bookItem.shortsummary}}</div>
                                <div class="mod-book-bottom">
                                    <div class="mod-book-author">
                                        <span class="author-label"></span>
                                        <span class="author-name one-text">{{bookItem.author}}</span>
                                    </div>
                                    <div class="mod-book-class">
                                        <span class="label-push">{{bookItem.catename}}</span>
                                        <span class="label-numb">{{bookItem.num}}人在看</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mod-book-three" v-else-if="Model==3">
                    <div class="list" v-for="(bookItem,index) in  bookList" :key="index">
                        <div @click="openPage()">
                            <div class="mod-book-img">
                                <img :src="bookItem.coveroneUrl"  />
                            </div>
                            <div class="mod-book-detail">
                                <h2 class="mod-book-title  one-text">{{bookItem.cntname}}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

var book =Vue.component('book', {
    data: function () {
      return {
      }
    },
    props: {
        Model:{
            type: Number,
            default: 1
        },
        bookList: {
          type: Array,
          default:[{
            coveroneUrl:"http://iread.wo.com.cn/res/images/cover/lhsz/1498551132580/stream/smlf/image/cover.jpg",
            cntindex:"13213",
            cntname:"BOSS来了，包子快跑1",
            shortsummary:"小弓躺在松软的大床上.香甜地睡着.被子外，露出一张雪白的脸和一条雪白的胳膊.突然响起了一阵歌声:月儿弯弯照九州几家欢乐几家愁",
            author:"洪晓婷",
            catename:"玄幻武侠",
            num:"3.4万"
        },{
            coveroneUrl:"http://iread.wo.com.cn/res/images/cover/lhsz/1498551132580/stream/smlf/image/cover.jpg",
            cntindex:"13213",
            cntname:"BOSS来了，包子快跑1",
            shortsummary:"小弓躺在松软的大床上.香甜地睡着.被子外，露出一张雪白的脸和一条雪白的胳膊.突然响起了一阵歌声:月儿弯弯照九州几家欢乐几家愁",
            author:"洪晓婷",
            catename:"玄幻武侠",
            num:"3.4万"
        },{
            coveroneUrl:"http://iread.wo.com.cn/res/images/cover/lhsz/1498551132580/stream/smlf/image/cover.jpg",
            cntindex:"13213",
            cntname:"BOSS来了，包子快跑1",
            shortsummary:"小弓躺在松软的大床上.香甜地睡着.被子外，露出一张雪白的脸和一条雪白的胳膊.突然响起了一阵歌声:月儿弯弯照九州几家欢乐几家愁",
            author:"洪晓婷",
            catename:"玄幻武侠",
            num:"3.4万"
        }
    ]
        }
    },
    template:_html
})
