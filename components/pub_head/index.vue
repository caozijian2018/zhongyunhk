<template>
    <div class="publisher_div">
        <div class="pc_show">
            <div class="publisher_box position_relative overflow_hidden">
                <div class="overflow_hidden">
                    <div class="publish_head_text transform_duration15 transilateY3">
                        <div class="title1">{{showcp ? 'Content Provider ' :$t('words.monetize_your_pre')}}</div>
                        <div class="sub_title margin_top_10">{{showcp ? "Thousands of high-quality licensed contents: Games, Adult Video, Funny Video,Fitness Video,etc.": $t('words.publishers_can_reach_the_users')}}</div>
                        <div class="margin_top_64">
                            <!-- <a class="glo_button  app_button green  " href="http://partners.tbnetwork.im/login.html"></a> -->
                            <app-button :button-text="$t('words.immediately_register')" @click.native="nuxtLinkJump('http://partners.tbnetwork.im/login.html',true)"></app-button>
                            <app-button :button-text="$t('words.contact_us')" @click.native="nuxtLinkJump('/about')" class="hollow" style="margin-left:10px"></app-button>
                        </div>
                    </div>
                    <img
                        src="../../static/img/fbs/1.png"
                        class="float_right width_50 transform_duration15 transilateX2"
                        alt
                    >
                    <img
                        src="../../static/img/fbs/5.png"
                        class="money_img transform_duration15 transilateX3"
                        alt
                    >
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="overflow_hidden position_relative">
                <img
                        src="../../static/img/fbs/1.png"
                        class=" float_right width_95 transform_duration15 transilateX1"
                        alt
                    >
                <img src="../../static/img/fbs/5.png" class="width_60 transform_duration2 transilateX2 position_absolute" style="top:13%;left:16%;"  alt="">
            </div>
            <div class="text_center transform_duration15 margin_auto width_80 transilateX1">
                <div class="mobile_h2_font">
                    {{showcp ? 'Content Provider ' :$t('words.monetize_your_pre')}}
                </div>
                <div  class="mobile_sub_11_title margin_top_1">
                    {{showcp ? "Thousands of high-quality licensed contents: Games, Adult Video, Funny Video,Fitness Video,etc.": $t('words.publishers_can_reach_the_users')}}
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
    components: {
        appButton
    },
    computed:{
        showcp:function(){
            return this.$store.state.lang == 'e_n'
        }
    },
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
@import "../../assets/css/publisher.css";
</style>