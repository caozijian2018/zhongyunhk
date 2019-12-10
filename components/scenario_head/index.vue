<template>
    <div class="senario_head_box">
        <div class="pc_show">
            <div class="position_relative">
                <img src="../../static/img/scenario/banner.png" class="width_100" alt>
                <div class="white pcs text_center">
                    <div class="font_size_34px margin_bottom_15">场景测试</div>
                    <div class="margin_bottom_3">有效解决金融APP复杂使用场景测试问题</div>
                    <div class>
                        <div class="test_div" @click="nuxtLinkJump('/about')">联系我们</div>
                        <div class="test_div margin_left_15" @click="nuxtLinkJump('https://dt.testbird.com/login/?i18n=zh-cn',true)">立即测试</div>
                    </div>
                    <div class="small_text margin_top_1">注意：请联系我们开通测试权限</div>
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="position_relative">
                <img src="../../static/img/scenario_phone/cj-bg.png" class="width_100" alt>
                <div class="white pcs text_center white width_100">
                    <div class="font_size_14px margin_bottom_15">场景测试</div>
                    <div class="font_size_12px">有效解决金融APP复杂使用场景测试问题</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style lang='less'>
.senario_head_box {
    .pc_show{

    }
    .phone_show{

    }
}
</style>