<template>
    <div class="monitor_box">
        <div class="pc_show">
            <div class="margin_top_20 first_party_monitor">
                <model-desc
                    :desc="$t('words.third_party_data_tracking_supported')"
                    class="margin_bottom_4 transform_duration15 transilateY1"
                ></model-desc>
                <div
                    class="glo_width_percent margin_auto text_center overflow_hidden transform_duration1 transilateY1"
                >
                    <img
                        src="../../static/img/tb_media/TB-media_15-05.png"
                        class="width_30 float_left"
                        alt
                    >
                    <img src="../../static/img/tb_media/TB-media_15-06.png" class="width_30" alt>
                    <img
                        src="../../static/img/tb_media/TB-media_15.png"
                        class="width_30 float_right"
                        alt
                    >
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="margin_top_20 first_party_monitor">
                <div class="mobile_h2_font text_center" style="padding-bottom:30px;">{{$t('words.third_party_data_tracking_supported')}}</div>
                <div
                    class="width_95 margin_auto text_center overflow_hidden transform_duration1 transilateY1 padding_bottom_20"
                >
                    <img
                        src="../../static/img/tb_media/TB-media_15-05.png"
                        class="width_30 float_left"
                        alt
                    >
                    <img src="../../static/img/tb_media/TB-media_15-06.png" class="width_30" alt>
                    <img
                        src="../../static/img/tb_media/TB-media_15.png"
                        class="width_30 float_right"
                        alt
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import modelDesc from "../model_desc";
export default {
    components: {
        modelDesc
    }
};
</script>
<style lang='less'>
.monitor_box {
    .pc_show {
        .first_party_monitor {
            background: rgb(250, 250, 252);
            padding-top: 60px;
            padding-bottom: 60px;
        }
    }
    .phone_show {
        .first_party_monitor {
            background: rgb(250, 250, 252);
            padding-top: 30px;
            padding-bottom: 10px;
        }
    }
}
</style>