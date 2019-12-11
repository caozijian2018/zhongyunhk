<template>
    <div class="mobile_fix_box">
        <div class="pc_show">
            <div class="overflow_hidden mobile_fix">
                <div class="mobile_box position_relative">
                    <img
                        src="../../static/img/games2background/back3.png"
                        class="width_100 transilateX-2 transform_duration15"
                        alt
                    />
                    <div
                        class="glo_width_percent height_100 pcs flex_align_center flex_jusify_space display_flex"
                    >
                        <div class="flex_1">
                            <img
                                src="../../static/img/products/7.png"
                                class="width_100 transform_duration2 transilateX-3"
                                alt
                            />
                        </div>
                        <div class="flex_1 transform_duration15 transilateY3">
                            <div class="float_right">
                                <h2
                                    class="h1_font"
                                    style="margin-bottom: 30px"
                                >FOR USERS AND PARTNERS</h2>
                                <div class="sub_title">
                                    We produce outstanding and fine digital products <br>
                                     and promote campaigns to attract overseas users.<br>
                                    We provide exclusive, high-quality<br>
                                     and pleasant mobile content to netizens all over<br>
                                      the world. After you subscribe our services, we<br>
                                       guarantee you the joy of browsing our products.<br>
                                    Our professional advertising team also<br>
                                     works closely with you to help attract overseas users and achieve the victory of both sides.<br>
                                    <div style="margin-top:62px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show width_95 margin_top_4 margin_auto">
            <!-- games的box -->
            <div class="position_relative">
                <img src="../../static/img/index_mobile/overseas-bg-02.png" class="width_100" alt />
                <img
                    src="../../static/img/index_mobile/overseas-img-02.png"
                    class="width_90 pcs"
                    alt
                />
            </div>
            <!-- text -->
            <div class="mobile_h3_font classmobile_oversea_title text_center">FOR USERS AND Partners</div>
            <div class="mobile_sub_title game_desc width_80 margin_auto margin_top_20 text_center">
                We produce outstanding and fine digital products<br>
                 and promote campaigns to attract overseas users.<br>
                We provide exclusive, high-quality and pleasant<br>
                 mobile content to netizens all over the world.<br>
                  After you subscribe our services, we guarantee<br>
                   you the joy of browsing our products.<br>
                Our professional advertising team also works closely<br>
                 with you to help attract overseas users and achieve<br>
                  the victory of both sides.<br>
            </div>
            <div class="margin_top_20 width_80 margin_auto display_flex flex_jusify_space">
            </div>
        </div>
    </div>
</template>

<script>
import bus from "../../util/bus";
import appButton from "../../components/button";

export default {
    props: {
        showDocument: {
            type: Boolean,
            default: false
        }
    },
    components: {
        appButton
    },
    computed: {
        showcp() {
            return this.$store.state.lang == "e_n";
        }
    },
    mounted() {
        // this.whatchScroll();
    },
    methods: {
        // whatchScroll(){
        //     bus.$on('windowScroll',(v)=>{
        //         console.log("我滚到这里来了"+v);
        //     })
        // }
    }
};
</script>
<style lang='less'>
.mobile_box {
    margin-top: 140px;
}
.mobile_fix_box {
    .phone_show {
        .game_desc {
            line-height: 24px;
        }
        .classmobile_oversea_title {
            margin-top: 60px;
        }
    }
}
</style>