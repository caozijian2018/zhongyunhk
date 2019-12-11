<template>
    <div>
        <div class="go_top_box">
            <!-- <div @click="goTopBoxJump(1)"></div>
            <div @click="goTopBoxJump(2)"></div> -->
            <div @click="goTopBoxJump(3)"></div>
            <!-- <div class="details contact">
                <div class="head">联系方式</div>
                <div class="display_flex flex_jusify_space wrop">
                    <div class="contact-block width_45">
                        <div class="region">西南大区</div>
                        <div class="regional-manager">刘先生：153 2818 5669</div>
                    </div>

                    <div class="contact-block width_45">
                        <div class="region">华北大区</div>
                        <div class="regional-manager">刘先生：155 1037 9835</div>
                    </div>
                    <div class="contact-block width_45">
                        <div class="region">华东大区</div>
                        <div class="regional-manager">李女士：159 0088 5049</div>
                    </div>
                    <div class="contact-block width_45">
                        <div class="region">华南大区</div>
                        <div class="regional-manager">张先生：135 4077 0984</div>
                        <br>
                    </div>
                </div>
                <div class="contact-block">
                    <div class="region">客服电话</div>
                    <div class="regional-manager">028-61666170</div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goTopBoxJump(i) {
            switch (i) {
                case 1:
                    (() => {
                        location.href =
                            "http://chat.live800.com/live800/chatClient/chatbox.jsp?companyID=758788&configID=126454&jid=9932796806";
                    })();
                    break;
                case 2:
                    (() => {})();
                    break;
                case 3:
                    (() => {
                        this.$jquery(".scroll_box").animate(
                            { scrollTop: 0 },
                            300
                        );
                    })();
                    break;
            }
        }
    }
};
</script>
<style lang='less'>
.go_top_box {
    .contact {
        font-size: 14px;
        .head {
            font-size: 18px;
            margin-bottom: 20px;
        }
        .contact-block {
            .region {
                margin-bottom: 14px;
            }
            margin-bottom: 20px;
        }
        display: none;
        position: absolute;
        right: 80px;
        bottom: 20px;
        width: 430px;
        height: 290px;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #dde1e8;
        -webkit-box-shadow: 0 5px 8px rgba(33, 52, 69, 0.09);
        -moz-box-shadow: 0 5px 8px rgba(33, 52, 69, 0.09);
        box-shadow: 0 5px 8px rgba(33, 52, 69, 0.09);
    }
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 10000;
    letter-spacing: 0;
    & > div:not(.contact) {
        display: block;
        background: url(../../static/img/base/box-icons.png);
        width: 36px;
        height: 36px;
        background-size: 108px;
        margin-bottom: 10px;
        right: 30px;
        cursor: pointer;
        border-radius: 36px;
        box-shadow: 0px 5px 8px 0px rgba(166, 215, 252, 0.28);
        // &:nth-child(2) {
        //     background-position: -36px 0;
        //     &:hover ~ .contact {
        //         display: block;
        //     }
        // }
        &:nth-child(1) {
            background-position: -72px 0;
        }
    }
}
</style>