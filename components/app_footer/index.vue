<template>
  <div class="footer_box_div">
    <div class="pc_show">
      <div class="footer_box">
        <div class="glo_width_percent margin_auto">
          <div class="display_flex flex_jusify_space">
            <div class="footer_left_text">
              <img
                src="../../static/img/testbird-logo.png"
                class="margin_bottom_1"
                alt
              >
              <div v-if="!showcp">
                 成都中云天下科技有限公司
                <br>电话 028-61666170
                <br>邮箱:marketing@testbird.com
              </div>
             
            </div>
            <div
              class="text_right"
              style='position:relative;'
            >
              <div
                v-show='showWechatCode'
                style="display:block;right:80px;top:0;position: absolute;width: 150px;height:150px;z-index:9;"
              ><img
                  style="width: 100%"
                  src="/img/wechat-code.gif"
                  alt="wechat-code"
                >
              </div>
              <div class="margin_bottom_1">
                <a
                  target="_blank"
                  href="https://weibo.com/p/1006065261583727/home?from=page_100606&mod=TAB#place"
                >
                  <img src="../../static/img/Sina.png">
                  <img
                    class="hover"
                    src="../../static/img/sina-hover.png"
                  > </a>
                <a
                  href="javascript:;"
                  class="margin_left_10"
                  @mouseover="showWechatCode=true"
                  @mouseleave="showWechatCode=false"
                >
                  <img src="../../static/img/WeChat.png">
                  <img                  
                    src="../../static/img/wechat-hover.png"
                    class="hover"
                  >
                </a>
              </div>
              <div>简体中文</div>
            </div>
          </div>
          <div class="footer_border"></div>
          <div class="display_flex flex_jusify_space">
            <div class="cursor" @click="nuxtLinkJump('http://www.miitbeian.gov.cn/publish/query/indexFirst.action',true)">蜀ICP备16010307</div>
            <div>由华为云提供计算服务</div>
          </div>
        </div>
      </div>
    </div>
    <div class="phone_show">
      <!--  上半步分 -->
      <div class="text_center">
        <img
          src="../../static/img/index_mobile/logo.png"
          class="width_30"
          alt
        >
        <div class="company_name">成都中云天下科技有限公司</div>
        <div class="follow_us display_flex flex_align_center flex_center">关注我们
          <!-- <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5MTY5NDEwNA==&scene=124#wechat_redirect">
            <img
              src="../../static/img/index_mobile/wx.png"
              class="chats"
              alt
            > </a>
          <a href="https://weibo.com/p/1006065261583727/home?from=page_100606&mod=TAB#place">
            <img
              src="../../static/img/index_mobile/sina.png"
              class="chats"
              alt
            >
          </a> -->
        </div>
        <img
          src="/img/wechat-code.png"
          alt="wechat-code"
          class="phone-wechat-code"
          style="display:block;margin: 20px auto 0;width: 100px;"
        >
      </div>
      <!-- 下半部分 -->
      <div class="display_flex wrop width_95 margin_auto down_div" v-if="!showcp">
        <div class="width_50">
          <span>电&nbsp;&nbsp;&nbsp;话</span>：
          <a href="tel:028-61666170">028-61666170</a>
        </div>
        <div class="width_50">
          <span>西南区 ：</span>
          <a href="tel:15328185669">刘先生 15328185669</a>

        </div>
        <div class="width_50">
          <span>华南区 ：</span>
          <a href="tel:13540770985">张先生 13540770985</a>

        </div>
        <div class="width_50">
          <span>华东区 ：</span>
          <a href="tel:15900885049">李女士 15900885049</a>
        </div>
        <div class="width_50">
          <span>华北区 ：</span>
          <a href="tel:15900885049">刘先生 15510379835</a>

        </div>
        <div class="width_50">
          <span>海&nbsp;&nbsp;&nbsp;外 ：</span>
          <a href="tel:15900885049">杨先生 18030751314</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact_information_list: {},
      showWechatCode: false
    };
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
.footer_box_div {
  .phone_show {
    padding-bottom: 30px;
    padding-top: 50px;
    background: @gray_font;
    .down_div {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px solid rgba(216, 233, 244, 1);
      color: @font_color;
      font-size: 11px;
      .width_50 {
        margin-bottom: 10px;
      }
    }
    .company_name {
      color: @font_color;
      font-size: 15px;
      margin: 14px 0;
    }
    .follow_us {
      color: @font_color;
      font-size: 13px;
    }
    .chats {
      margin-left: 10px;
      width: 20px;
    }
  }
  .pc_show {
    .footer_box {
      color: @gray_color;
      background: @gray_font;
      padding: 40px 0;
      .footer_left_text {
        line-height: 26px;
      }
      .footer_border {
        border-bottom: 1px solid #ddd;
        transform: scaleY(0.5);
        margin: 30px 0;
      }
    }
    .text_right {
      a {
        display: inline-block;
        img {
          display: inline-block;
        }
        img.hover {
          display: none;
        }
        &:hover {
          img {
            display: none;
          }
          img.hover {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>