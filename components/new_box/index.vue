<template>
  <div
    style="cursor:pointer;"
    @click="go(newsData.url)"
    class="display_flex new_little_box"
    @mouseover="hover_=true"
    @mouseleave="hover_ = false"
  >
    <div class="new_date" v-if="false">
      <div
        class="date"
        v-text="getFormatDate(newsData.happened)"
      ></div>
      <div
        class="year"
        v-text="getFormatDate(newsData.happened,true)"
      ></div>
    </div>
    <div
      class="news_desc"
      :class="has_borderr"
    >
      <div
        class="title_blue display_flex flex_jusify_space"
        :class="showRightIcon"
      >
        <div
          class="new_title"
          v-text="newsData.title"
        ></div>
        <div><i
            class="icon-youbian iconfont"
            v-if="show_icon"
          ></i></div>
      </div>
      <div
        class="news_text"
        v-text="newsData.summary"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    newsData: {
      type: Object,
      default: function() {}
    }
  },
  data() {
    return {
      hover_: false
    };
  },
  computed: {
    has_borderr: function() {
      return !this.newShow && !this.noBorder ? "show_border" : "";
    },
    showRightIcon: function() {
      return this.newShow ? "blue" : "";
    },
    show_icon: function() {
      return this.newShow || this.hover_;
    }
  },
  methods: {
    getFormatDate: function(seconds, flag) {
      var date = new Date(seconds * 1000);
      if (flag) {
        return date.getFullYear();
      } else {
        return date.getMonth() + 1 + "-" + date.getDate();
      }
    },
    go(url) {
      window.location.href = url;
    }
  },
  mounted() {}
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
@color_1: #a6b2bd;
@color_2: #0070f0;
@color_3: #191e25;
@color_4: #2472e7;
@color_5: #a3b0c1;
@color_6: #949ba5;
.noborder{
  .show_border{
    border-bottom: none !important;
  }
}
.index_box_div_all {
  .new_little_box {
    padding-top: 36px;
    color: @color_1;
    .news_desc {
      flex: 1;
      padding-bottom: 46px;
      i {
        color: @color_2;
      }
    }
    &:hover {
      .new_title {
        color: @color_2;
      }
    }
    .news_desc.show_border {
      border-bottom: 1px solid #efefef;
    }
    .new_title {
      color: @color_3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 300px;
    }
    .blue {
      color: @color_4;
    }
    .title_blue {
      font-size: 17px;
      margin-bottom: 20px;
    }
    .new_date {
      width: 100px;
      color: @color_5;
      .date {
        font-size: 24px;
        font-weight: normal;
      }
      .year {
        font-size: 14px;
        padding-left: 3px;
      }
    }
    > a {
      flex: 1;
    }
    .news_text {
      color: @color_6;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
  .news_box {
    .glo_width_percent {
      margin-top: 3rem;
    }
  }
  .glo_width_percent {
    > div {
      position: relative;
    }
  }
  .no-border-bottom.new_little_box {
    .news_desc.show_border {
      border-bottom: none;
    }
  }
}
</style>