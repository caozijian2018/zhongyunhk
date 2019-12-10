<template>
    <div class="container">
        <nuxt/>
    </div>
</template>

<script>
import Vue from "vue";
import "../util/glo_request";
import "../util/filter";
import "../util/msg";
import "../util/es62es5";
import "../util/glo_fun";
import jquery from "jquery";
Vue.prototype.$jquery = jquery;
import init_token from "../util/init_token";
init_token();
export default {
    mounted() {}
};


if (process.client) {
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5bd65393c6086a8e7616f4e86a036e20";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}
</script>


<style lang="less">
// @import "http://at.alicdn.com/t/font_843189_zrgmiohmyin.css";
@import "../assets/css/glo.less";
@import "../assets/css/iconfont/iconfont.css";
@import "../assets/css/current_theme";
@import "../assets/css/current_app";

body {
    background: #fff;
}

.container {
    width: 100%;
}
</style>

