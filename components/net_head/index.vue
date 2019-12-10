<template>
    <div class="net_head_box">
        <div class="pc_show">
            <div class="publisher_box position_relative overflow_hidden">
                <div class="overflow_hidden">
                    <div class="publish_head_text transform_duration15 transilateY3">
                        <div class="title1">{{$t('words.tb_network')}}</div>
                        <div class="title1">{{$t('words.Network_wide_flow')}}</div>
                        <div class="margin_top_64">
                            <app-button :button-text="$t('words.Publisher')" @click.native="nuxtLinkJump('/publisher')" class="green"></app-button>
                            <app-button :button-text="$t('words.Advertiser')" class="green margin_left_10" @click.native="crollBottom()"></app-button>
                        </div>
                    </div>
                    <img
                        src="../../static/img/network/2.png"
                        class="float_right width_45 transform_duration15 transilateX2"
                        alt
                    >
                    <img
                        src="../../static/img/network/1.png"
                        class="media_img transform_duration15 transilateX3"
                        alt
                    >
                </div>
            </div>
        </div>
        <div class="phone_show">
             <div class="position_relative padding_bottom_30">
                <img src="../../static/img/network/2.png" class="width_95 margin_left_5p" alt="">
                <img src="../../static/img/network/1.png" class="width_60 pcs " style="top:40%;" alt="">
                <div class="mobile_h2_font text_center margin_top_4">
                    {{$t('words.tb_network')}}
                    <br>
                    {{$t('words.Network_wide_flow')}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appButton from "../button";
export default {
    props: {
        showDocument: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        crollBottom() {
            this.$jquery('.scroll_box').animate({ scrollTop: 11110 }, 800);
        },
    },
    components: {
        appButton
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.net_head_box{
    .pc_show{

    }
    .phone_show{

    }
}
</style>