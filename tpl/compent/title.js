var _html = `<div class="mod-title">
                <div class="left">
                    <div class="title">{{titles}}</div>
                </div>
            </div>`

var toptitle = Vue.component('toptitle', {
    data: function () {
        return {}
    },
    props: {
        titles: {
            type:String,
            default: "免费好书"
        },
    },
    template: _html
})