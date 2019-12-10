<template>
    <div class="media_head">
        <div class="pc_show">
            <div class="publisher_box position_relative overflow_hidden">
                <div class="overflow_hidden">
                    <div class="publish_head_text transform_duration15 transilateY3">
                        <div class="title1">TBmedia</div>
                        <div class="title1">{{$t('words.buying_solution_f')}}</div>
                        <div class="margin_top_64">
                            <app-button :button-text="$t('words.contact_us')"  @click.native="nuxtLinkJump('/publisher')"></app-button>
                        </div>
                    </div>
                    <img
                        src="../../static/img/tb_media/1.png"
                        class="float_right width_45 transform_duration15 transilateX2"
                        alt
                    >
                    <img
                        src="../../static/img/tb_media/2.png"
                        class="media_img transform_duration15 transilateX3"
                        alt
                    >
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="position_relative padding_bottom_30">
                <img src="../../static/img/tb_media/1.png" class="width_95 margin_left_5p" alt="">
                <img src="../../static/img/tb_media/2.png" class="width_80 pcs " style="top:40%;" alt="">
                <div class="mobile_h2_font text_center margin_top_4">
                    TBmedia
                    <br>
                    {{$t('words.buying_solution_f')}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appButton from "../button";
export default {
    components: {
        appButton
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.media_head {
    .pc_show {
        .publisher_box {
            .publish_head_text {
                .title1 {
                    font-size: 29px;
                    color: @gray2;
                }
                position: absolute;
                left: 20%;
                top: 210px;
            }
            .media_img {
                width: 30%;
                position: absolute;
                right: 27%;
                top: 10%;
            }
        }
    }
    .phone_show {
        
    }
}
</style>