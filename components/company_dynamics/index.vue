<template>
    <div class="news_box margin_top_100">
        <model-desc class="margin_bottom_3" :desc="$t('words.company_new')"></model-desc>
        <!-- <div class="width_45">
        <new-box :news-data="newsData[0]"></new-box>
        <div>
          <img
            :src="newsData[0].image_url"
            class="width_100"
            alt
          >
        </div>
      </div>
      <div class="width_45">
        <new-box
          v-for="i in 3"
          :news-data="newsData[i]"
          class="margin_top_10"
          :class="{noborder:i==3}"
          :key="i"
        ></new-box>
        </div>-->
        <!-- <div class="pc_show">
                <div class="margin_top_100 partener_box padding_bottom_20">
                    <model-desc :desc="$t('words.corporate_partner')" class></model-desc>
                    <el-carousel
                        indicator-position="outside"
                        class="glo_width_percent margin_auto patner_img margin_top_20"
                        arrow="never"
                        :height="swiper_height"
                    >
                        <el-carousel-item v-for="item in partner_logo" :key="item">
                            <div class="margin_top_20">
                                <img :src="item" class="width_100">
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
        </div>-->

        <el-carousel :interval="5000" class="width_100 pc_show">
            <el-carousel-item v-for="item in list" :key="item[0].id">
                <div
                    class="glo_width_percent margin_auto text_center display_flex flex_jusify_space"
                >
                    <nuxt-link
                        :to="'/news/'+item_.id"
                        class="new_div"
                        v-for="item_ in item"
                        :key="item_.id"
                    >
                        <div class="width_90 margin_auto overflow_hidden">
                            <div class="font_weight_600 font_size_15px">{{item_.title}}</div>
                            <div v-html="item_.innerhtml"></div>
                        </div>
                    </nuxt-link>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import newBox from "../../components/new_box";
import modelDesc from "../../components/model_desc";
export default {
    components: {
        modelDesc,
        newBox
    },
    props: ["news-data"],
    mounted() {
        this.getNewList();
    },
    data() {
        return {
            list: []
        };
    },
    methods: {
        getNewList() {
            this.$jquery.get(
                "http://106.52.237.64:12000/backend/api/v1/news/",
                res => {
                    var list = res.results
                    var results = []
                    debugger
                    for(var i=0;i<list.length;i+=4){
                        results.push(list.slice(i,i+4));
                    }
                    this.list = results;
                }
            );
        }
    }
};
</script>
<style lang='less'>
@color_1: #a6b2bd;
@color_2: #0070f0;
@color_3: #191e25;
@color_4: #2472e7;
@color_5: #a3b0c1;
@color_6: #949ba5;

.news_box {
    .pc_show {
        .el-carousel__container{
            height: 400px;
        }
        .el-carousel__indicators {
            // bottom: -13px;
        }
        .el-carousel__button {
            width: 38px;
            height: 4px;
            opacity: 1;
            background: #dadfe5;
        }
        .is-active {
            .el-carousel__button {
                background: rgba(36, 114, 231, 1);
            }
        }
    }
}

.news_box {
    .new_div {
        width: 24%;
        height: 300px;
        overflow: hidden;
        box-shadow: 2px 5px 12px #ddd;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    // .h1_font {
    //     padding-top: 100px;
    // }
    // .new_little_box {
    //     padding-top: 36px;
    //     color: @color_1;
    //     .news_desc {
    //         flex: 1;
    //         padding-bottom: 46px;
    //         i {
    //             color: @color_2;
    //         }
    //     }
    //     &:hover {
    //         .new_title {
    //             color: @color_2;
    //         }
    //     }
    //     .news_desc.show_border {
    //         border-bottom: 1px solid #efefef;
    //     }
    //     .new_title {
    //         color: @color_3;
    //         -webkit-box-orient: vertical;
    //         overflow: hidden;
    //         white-space: nowrap;
    //         text-overflow: ellipsis;
    //         width: 300px;
    //     }
    //     .blue {
    //         color: @color_4;
    //     }
    //     .title_blue {
    //         font-size: 17px;
    //         margin-bottom: 20px;
    //     }
    //     .new_date {
    //         width: 100px;
    //         color: @color_5;
    //         .date {
    //             font-size: 24px;
    //             font-weight: normal;
    //         }
    //         .year {
    //             font-size: 14px;
    //             padding-left: 3px;
    //         }
    //     }
    //     > a {
    //         flex: 1;
    //     }
    //     .news_text {
    //         color: @color_6;
    //         display: -webkit-box;
    //         -webkit-box-orient: vertical;
    //         -webkit-line-clamp: 2;
    //         // height: 38px;
    //         overflow: hidden;
    //     }
    // }
    // .news_box {
    //     .glo_width_percent {
    //         margin-top: 3rem;
    //     }
    // }
    // .glo_width_percent {
    //     > div {
    //         position: relative;
    //     }
    // }
    // .no-border-bottom.new_little_box {
    //     .news_desc.show_border {
    //         border-bottom: none;
    //     }
    // }
}
</style>