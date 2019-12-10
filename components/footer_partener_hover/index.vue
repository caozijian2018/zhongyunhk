<template>
    <div class="bottom_nav ">
        <div class="height_100 white glo_width_percent margin_auto display_flex flex_align_center flex_jusify_space">
            <div class="left_font">
                {{$t('words.o_be_my_partner')}}
            </div>
            <div class="height_100 display_flex flex_align_center flex_end">
                <app-button :hasBorder="true" class="green" :buttonText="$t('words.contact_the_business')"></app-button>
                <div class="margin_left_10 white margin_right_10">
                    {{$t('words.or')}}
                </div>
                <app-button  class="green" :buttonText="$t('words.overseas_marketing')"></app-button>
                <app-button  class="green margin_left_10" :buttonText="$t('words.testing_services')"></app-button>

            </div>
        </div>
    </div>
</template>

<script>
import appButton from "../button";
export default {
    components:{
        appButton,
    }
};
</script>
<style lang='less'>
.bottom_nav {
    width: 100%;
    height: 90px;
    background: rgba(27, 105, 243, 0.85);
    .left_font{
        font-size:28px;
    }
}
</style>