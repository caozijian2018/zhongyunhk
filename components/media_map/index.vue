<template>
    <div class="media_map_box">
        <div class="pc_show">
            <div class="media_map overflow_hidden">
                <div class="width_60 margin_auto text_center">
                    <div class="h1_font transform_duration15 transilateY1">TBmedia</div>
                    <div
                        class="sub_title width_50 margin_auto margin_top_20 transform_duration15 transilateY2"
                    >{{$t('words.with_the_world')}}</div>
                    <div
                        class="display_flex flex_jusify_space margin_top_20 width_80 margin_auto transform_duration2 transilateY3"
                    >
                        <div class="map_item">
                            <div class="map_item_title">
                                <span class="flip">50</span>
                                <span>M</span>
                                <sub>+</sub>
                            </div>
                            <div class="sub_title">{{$t('words.downloads')}}</div>
                        </div>
                        <div class="map_item">
                            <div class="map_item_title">
                                500
                                <sub>+</sub>
                            </div>
                            <div class="sub_title">{{$t('words.products')}}</div>
                        </div>
                        <div class="map_item">
                            <div class="map_item_title">
                                30
                                <sub class="font_size_2">{{$t('words.Billion')}}</sub>
                                <sub>+</sub>
                            </div>
                            <div class="sub_title">{{$t('words.covering_population')}}</div>
                        </div>
                        <div class="map_item">
                            <div class="map_item_title">
                                200
                                <sub>+</sub>
                            </div>
                            <div class="sub_title">{{$t('words.countries')}}</div>
                        </div>
                    </div>
                    <img
                        src="../../static/img/tb_media/3.png"
                        class="width_100 margin_top_20 transform_duration2 transilateY4"
                        alt
                    >
                </div>
            </div>
        </div>
        <div class="phone_show">
            <div class="width_100">
                <div
                    class="width_80 margin_auto mobile_sub_title text_center"
                >{{$t('words.with_the_world')}}</div>
                <div class="margin_top_3 display_flex wrop width_80 margin_auto">
                    <div class="map_item width_50 text_center">
                        <div class="map_item_title">
                            <span class="flip">50</span>
                            <span>M</span>
                            <sub>+</sub>
                        </div>
                        <div class="sub_title">{{$t('words.downloads')}}</div>
                    </div>
                    <div class="map_item width_50 text_center">
                        <div class="map_item_title">
                            500
                            <sub>+</sub>
                        </div>
                        <div class="sub_title">{{$t('words.products')}}</div>
                    </div>
                    <div class="map_item width_50 text_center margin_top_1">
                        <div class="map_item_title">
                            30
                            <sub class="font_size_2">{{$t('words.Billion')}}</sub>
                            <sub>+</sub>
                        </div>
                        <div class="sub_title">{{$t('words.covering_population')}}</div>
                    </div>
                    <div class="map_item width_50 text_center margin_top_1">
                        <div class="map_item_title">
                            200
                            <sub>+</sub>
                        </div>
                        <div class="sub_title">{{$t('words.countries')}}</div>
                    </div>
                </div>
                <img src="../../static/img/tb_media/3.png" class="width_100 margin_top_20" alt>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 50
        };
    },
    mounted() {},
    methods: {}
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.media_map_box {
    .pc_show {
        .media_map {
            background: rgba(250, 250, 252, 1);
            padding-top: 40px;
            padding-bottom: 40px;

            .map_item {
                sub {
                    vertical-align: baseline;
                }
                .map_item_title {
                    color: rgba(48, 48, 48, 1);
                    font-size: 30px;
                    font-weight: 200;
                }
                .map_item_sub {
                }
            }
        }
        .phone_show {
        }
    }
    .phone_show {
        background: rgba(250, 250, 252, 1);
        padding: 30px 0;
        .map_item {
            sub {
                vertical-align: baseline;
            }
            .map_item_title {
                color: rgba(48, 48, 48, 1);
                font-size: 25px;
                font-weight: 200;
            }
            .map_item_sub {
            }
        }
    }
}
</style>