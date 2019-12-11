<template>
    <div class="bottom_nav_div">
        <div class="pc_show">
            <div class="bottom_nav">
                <div
                    class="height_100 white glo_width_percent margin_auto display_flex flex_center flex_align_center flex_jusify_space"
                >
                    <!-- <div class="left_font">{{$t('words.o_be_my_partner')}}</div> -->
                    <img src="../../static/img/logo_white.png" style="width: 200px" alt="">
                </div>
            </div>
        </div>
        <div class="phone_show back_img padding_top_20 padding_bottom_20">
            <div class="width_80 margin_auto  text_center">
                <!-- <div class="white font_size_15 text_center">{{$t('words.o_be_my_partner')}}</div> -->
                <img src="../../static/img/logo_white.png" style="width: 150px" alt="">

            </div>
        </div>
    </div>
</template>

<script>
import appButton from "../../components/button";
export default {
    components: {
        appButton
    }
};
</script>
<style lang='less'>
.bottom_nav_div {
    .pc_show {
        .bottom_nav {
            width: 100%;
            bottom: 0;
            height: 198px;
            background: url("../../static/img/products/btn-bg.png");
            background-size: cover;
            .left_font {
                font-size: 28px;
            }
        }
    }
    .phone_show {
        &.back_img {
            background-image: url("../../static/img/index_mobile/btn-bg.png");
            background-size: 103%;
        }
    }
}
</style>