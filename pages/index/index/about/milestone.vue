<template>
    <div class="comp">
        <!-- left -->
        <h1 class="text_center font_weight_400">{{$t('words.company_milestones')}} </h1>
        <div class>
            <div class="width_50 position_relative">
                <!-- head -->
                <div class="position_absolute padding_1 back_white icon_right">
                    <div class="sprite-base sprite-base-ms-6"></div>
                </div>
                <div class="display_flex flex_align_center">
                    <div class="year_text blue"> {{$t('words.august_2019')}}  </div>
                    <div class="border flex_1"></div>
                </div>
                <div class="year_desc margin_top_20 right_boder_calendar_box">
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.9m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20197')}}</div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.8m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20196')}}</div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.7m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20195')}}</div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.6m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20194')}}</div>
                    </div>

                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.5m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20191')}}</div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.3m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20192')}}  </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.1m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20193')}}  </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- right -->
        <div class="display_flex flex_end">
            <div class="width_50 position_relative">
                <div class="position_absolute padding_1 back_white icon_left">
                    <div class="sprite-base sprite-base-ms-5"></div>
                </div>
                <div class="display_flex flex_align_center">
                    <div class="border flex_1"></div>
                    <div class="year_text blue">2018 </div>
                </div>
                <div class="year_desc margin_top_20 padding_left_20 left_boder_calendar_box">
                    <div class="display_flex month_desc">
                        <div>{{$t('words.12m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20181')}}  </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.9m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20182')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.8m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20183')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.7m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20184')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.5m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20185')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.2m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20186')}} </div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div>{{$t('words.1m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20187')}} </div>
                    </div>
                </div>
            </div>
        </div>
        <div class>
            <div class="width_50 position_relative">
                <!-- head -->
                <div class="position_absolute padding_1 back_white icon_right">
                    <div class="sprite-base sprite-base-ms-1"></div>
                </div>
                <div class="display_flex flex_align_center">
                    <div class="year_text blue">2017</div>
                    <div class="border flex_1"></div>
                </div>
                <div class="year_desc margin_top_20 right_boder_calendar_box">
                    <div class="display_flex month_desc">
                        <div>{{$t('words.12m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20171')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.10m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20172')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.9m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20173')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.6m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20174')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.3m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20175')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.2m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20176')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.1m')}} </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20177')}} </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="display_flex flex_end">
            <div class="width_50 position_relative">
                <div class="position_absolute padding_1 back_white icon_left">
                    <div class="sprite-base sprite-base-ms-2"></div>
                </div>
                <div class="display_flex flex_align_center">
                    <div class="border flex_1"></div>
                    <div class="year_text blue">2016</div>
                </div>
                <div class="year_desc margin_top_20 padding_left_20 left_boder_calendar_box">
                    <div class="display_flex month_desc">
                        <div> {{$t('words.8m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20161')}}  </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.7m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20162')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.6m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20163')}} </div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.5m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20164')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.3m')}} </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20165')}}  </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.2m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20166')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.1m')}} </div>
                        <div
                            class="flex_1 margin_left_14"
                        > {{$t('words.20167')}} </div>
                    </div>
                </div>
            </div>
        </div>
        <div class>
            <div class="width_50 position_relative">
                <!-- head -->
                <div class="position_absolute padding_1 back_white icon_right">
                    <div class="sprite-base sprite-base-ms-4"></div>
                </div>
                <div class="display_flex flex_align_center">
                    <div class="year_text blue">2015</div>
                    <div class="border flex_1"></div>
                </div>
                <div class="year_desc margin_top_20 right_boder_calendar_box">
                    <div class="display_flex month_desc">
                        <div>{{$t('words.9m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20151')}}  </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.8m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20152')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.7m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20153')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.6m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20154')}}</div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.3m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20155')}} </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div>{{$t('words.1m')}}  </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20156')}} </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="display_flex flex_end">
            <div class="width_50 position_relative">
                <div class="position_absolute padding_1 back_white icon_left">
                    <div class="sprite-base sprite-base-ms-5"></div>
                </div>
                <div class="display_flex flex_align_center">
                    <div class="border flex_1"></div>
                    <div class="year_text blue">2014</div>
                </div>
                <div class="year_desc margin_top_20 padding_left_20 left_boder_calendar_box">
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div>{{$t('words.12m')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20141')}}  </div>
                    </div>
                    <div class="display_flex month_desc">
                        <div> {{$t('words.11m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20142')}} </div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.10m')}} </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20143')}} </div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div>{{$t('words.9m')}}  </div>
                        <div class="flex_1 margin_left_14">成为被政府正式认可的 “国家手游测试中心”。{{$t('words.20144')}}        </div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.5m')}}</div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20145')}}</div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div>{{$t('words.beginning_of_the_year')}}  </div>
                        <div class="flex_1 margin_left_14">{{$t('words.20146')}}  </div>
                    </div>
                </div>
            </div>
        </div>

        <div class>
            <div class="width_50 position_relative">
                <!-- head -->
                <div class="position_absolute padding_1 back_white icon_right">
                    <div class="sprite-base sprite-base-ms-4"></div>
                </div>
                <div class="display_flex flex_align_center">
                    <div class="year_text blue">2013</div>
                    <div class="border flex_1"></div>
                </div>
                <div class="year_desc margin_top_20 right_boder_calendar_box">
                    <div class="display_flex month_desc">
                        <div> {{$t('words.8m')}} </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20131')}} </div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div> {{$t('words.4m')}}</div>
                        <div class="flex_1 margin_left_14">{{$t('words.20132')}} </div>
                    </div>
                    <div class="display_flex month_desc" v-if="is_not_e_n">
                        <div>{{$t('words.3m')}} </div>
                        <div
                            class="flex_1 margin_left_14"
                        >{{$t('words.20133')}}  </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "公司里程碑 – 移动互联测试专家",
            meta: [
                {
                    name: "keyword",
                    content:
                        "移动广告，TB Media，TB 网盟，TB Network，海外广告平台，海外移动营销，海外应用推广，海外品牌推广，Facebook广告投放，Google广告投放，海外媒体投放，用户获取，海外广告投放平台、手机游戏测试，手游测试，手游测试工具，手游行业测试解决方案、标准兼容性测试、压力测试，云测试，云测试平台、远程真机调试，APP测试，移动应用测试，应用测试，安卓测试，Android测试，iOS测试，金融APP测试，银行APP测试，证券APP测试，场景测试，金融行业测试解决方案，TROC 移动APP自动化测试平台"
                },
                {
                    name: "description",
                    content:
                        "TestBird移动互联测试专家，专注为企业提供与移动应用相关的云端测试和移动广告链条式生态服务，目前拥有针对移动广告业务的TB Media、TB 网盟及云测试服务、众测服务、TROC自动化测试平台。为全球移动互联紧密联系的企业提供成熟的行业测试和移动广告解决方案，服务行业涵盖手游、金融、电商、硬件、教育等，业务线包含港澳台、日、韩、欧美等全球市场。依托在北、上、广、深等地分部，持续服务40万开发者，助力企业提升业务效力，在全球市场释放品牌价值"
                }
            ]
        };
    },
    data() {
        return {
            height: 0
        };
    },
    methods: {},
    mounted() {},
    computed:{
        is_not_e_n:function(){
            return this.$store.state.lang != 'e_n'
        }
    },
};
</script>
<style lang='less'>
.comp {
    .month_desc {
        line-height: 20px;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 30px;
        text-align: center;
        padding-top: 60px;
        padding-bottom: 76px;
        margin-top: 50px;
    }
    .icon_right {
        right: -42px;
        top: -30px;
    }
    .icon_left {
        left: -44px;
        top: -30px;
    }
    .right_boder_calendar_box {
        border-right: 1px solid #ddd;
    }
    .left_boder_calendar_box {
        border-left: 1px solid #ddd;
    }
    .year_desc {
        padding: 20px;
        color: #5d6570;
        font-size: 14px;
    }
    .year_text {
        color: #0070f0;
        font-size: 32px;
    }
    .sprite-base {
        background-image: url("../../../../static/img/about/sprite-base@2x.png");
        background-size: 100px;
    }
    .sprite-base-ms-1 {
        background-position: -0px -116px;
        width: 61px;
        height: 70px;
    }
    .sprite-base-ms-2 {
        background-position: -0px -46px;
        width: 61px;
        height: 70px;
    }
    .sprite-base-ms-3 {
        background-position: -0px -256px;
        width: 61px;
        height: 70px;
    }
    .sprite-base-ms-4 {
        background-position: -0px -186px;
        width: 61px;
        height: 70px;
    }
    .sprite-base-ms-5 {
        background-position: -0px -726px;
        width: 61px;
        height: 70px;
    }
    .sprite-base-ms-6 {
        background-position: -0px -796px;
        width: 61px;
        height: 70px;
    }
    .border {
        border: 1px dashed #ddd;
        margin: 0 15px;
    }
}
</style>