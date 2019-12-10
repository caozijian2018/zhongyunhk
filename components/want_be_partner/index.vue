<template>
    <div class="bottom_nav_div">
        <div class="pc_show">
            <div class="bottom_nav">
                <div
                    class="height_100 white glo_width_percent margin_auto display_flex flex_align_center flex_jusify_space"
                >
                    <div class="left_font">{{$t('words.o_be_my_partner')}}</div>
                    <div class="height_100 display_flex flex_align_center flex_end">
                        <app-button :button-text="$t('words.contact_the_business')" @click.native="nuxtLinkJump('/about')" class="hollow"></app-button>
                        <div class="margin_left_10 white margin_right_10">{{$t('words.or')}}</div>
                        <app-button :button-text="$t('words.overseas_marketing')" @click.native="nuxtLinkJump('/advertiser')"></app-button>
                        <app-button :button-text="$t('words.testing_services')" @click.native="nuxtLinkJump('/mobile-internet-testing-expert')" class="margin_left_10"></app-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="phone_show back_img padding_top_20 padding_bottom_20">
            <div class="width_80 margin_auto">
                <div class="white font_size_15 text_center">{{$t('words.o_be_my_partner')}}</div>
                <div class="display_flex flex_jusify_space margin_top_20">
                    <app-button :button-text="$t('words.overseas_marketing')" @click.native="nuxtLinkJump('/advertiser')"></app-button>
                    <app-button :button-text="$t('words.testing_services')" @click.native="nuxtLinkJump('/mobile-internet-testing-expert')" class="margin_left_10"></app-button>
                </div>
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