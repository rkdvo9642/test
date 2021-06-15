var app_1 = new Vue({
    el: '#app_1',
    data: {
      message: '안녕하세요 Vue!'
    }
})

var app_2 = new Vue({
    el: '#app_2',
    data: {
        message: '이 페이지는 '+ new Date() + '에 로드 되었습니다.'
    }
})
var app_3 = new Vue({
    el: '#app_3',
    data: {
        seen:true
    }
})
var app_4 = new Vue({
    el: '#app_4',
    data: {
        todos: [
            { text: 'javaScript 배우기'},
            { text: 'Vue 배우기'},
            { text: '무언가 멋진 것을 만들기'}
        ]
    }
})
var app_5 = new Vue({
    el: '#app_5',
    data: {
        message: '안녕하세요! Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app_6 = new Vue({
    el: '#app_6',
    data: {
        message: '안녕하세요 Vue!'
    }
})

// todo-item 이름을 가진 컴포넌트 정의
Vue.component('todo-item', {
    props: ['todo'],
    template:'<li>{{ todo.text }}</li>'
})
// {
//     todo: {
//         type: Object
//     },
//     id: {
//         type: Number
//     }
// },
var app_7 = new Vue({
    el: '#app_7', // 태그 알려줌
    data: { // 데이터
        groceryList: [
            {id: 0, text: 'Vegatables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
    }
})