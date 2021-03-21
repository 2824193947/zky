import $ from 'jquery'
import './css/1.css'
import App from './components/App.vue'
import Vue from 'vue';

$(function() {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'black');
})

// ======================================================
// Vue的基本使用步骤

const vm = new Vue({
    // el: '#app',
    render: h => h(App)
}).$mount('#app')