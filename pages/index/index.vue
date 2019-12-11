<template>
    <div class="container display_flex flex_column" :style="{height:height_}">
        <video-head style class></video-head>
        <div class="flex_1 overflow_scroll scroll_box scroll_slide" @scroll="scroll">
            <!-- <login-box v-if="show_login" @close="show_login=false"></login-box> -->
            <nuxt-child style="-webkit-overflow-scrolling: touch;"></nuxt-child>
            <app-footer></app-footer>
            <right-bottom-box class="pc_show"></right-bottom-box>
        </div>
    </div>
</template>

<script>
import videoHead from "../../components/video_head";
import rightBottomBox from "../../components/right_bottom_box";
import appFooter from "../../components/app_footer";
import loginBox from "../../components/loginBox";
import initLanguage from "../../util/init_language";
import initOp from "../../util/init_op";
import bus from "../../util/bus";
import getCountry from "../../util/get_country";
import hasLogin from "../../util/has_login";
import pcOrPhone from "../../util/get_pc_or_phone";
import isScrollBottom from "../../util/is_scroll_bottom";


export default {
    async asyncData({
      store,
      query
    }) {
      var lang = query.lang || store.state.locale || "zh";
      store.state.lang = lang;
    },
    components: {
        videoHead,
        loginBox,
        appFooter,
        rightBottomBox
    },
    data() {
        return {
            prev_scroll: 0,
            height_: "",
            show_login: false
        };
    },
    mounted() {
        this.saveLang();
        this.setHeightAndPhoneOrPc();
        this.watchOnresize();
    },
    methods: {

        saveLang() {
            var lang = this.$route.query.lang;
            initLanguage(lang);
        },
        showLogin() {
            this.show_login = true;
        },
        watchOnresize() {
            window.onresize = this.setHeightAndPhoneOrPc;
        },
        setHeightAndPhoneOrPc() {
            this.height_ = innerHeight + "px";
            this.$store.state.innerHeight = parseInt(this.height_);
            this.$store.state.pc_or_phone = pcOrPhone();
        },
        scroll(v) {
            var scrollTop = v.target.scrollTop;
            bus.$emit("windowScroll", scrollTop);
        }
    }
};
</script>

<style lang='less'>

</style>
