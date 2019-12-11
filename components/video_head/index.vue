<template>
  <div class="head_box" :class="whichClass">
    <!--PC-->
    <div class="pc_show flex_jusify_space display_flex height_100 header_margin">
      <div class="with70 height_100 display_flex flex_align_center" @mouseleave="leave()">
        <img
          :src="whichClass == 'transparent' ? graybird : bluebird "
          @click="xxx"
          class="img_logo margin_right_20"
          alt
        >
        <div class="header_body" :class="listStatu" :style="{left: changLeft}" v-show="showNav_pc">
          <div class="header_body_chiled">
            <div class="header_body_title" v-if="hoverSelect.id===2" @click="act">
              <app-button :has-border="true" :button-text="btnText"></app-button>
            </div>
            <div>
              <div class="body_title">
                {{body_title_text}}
              </div>
              <div v-if="hoverSelect.id===2">
                <ul class="ul_float bottom_border_head">
                  <li>云测试服务</li>
                </ul>
                <ul class="ul_float bottom_border_head">
                  <li>众测服务</li>
                </ul>
                <ul class="ul_float bottom_border_head">
                  <li>自动化测试平台</li>
                </ul>
              </div>
              <div>
                <ul class="header_body_ul ul_float" v-for="(i,n) in showData" :key="n">
                  <li v-for="(item,index) in i" :key="index" class="li_body_text" @click="closeHover">
                    <nuxt-link :to="item.link" v-if="!item.a">
                              <span v-if="item.name=='The publishers' && showcp" class="body_text">
                                Content Provider
                              </span>
                              <span v-else class="body_text">
                                {{item.name}}
                              </span>
                    </nuxt-link>
                    <a :href="item.link" target="view_window" v-else>
                          <span class="body_text">
                            {{item.name}}2
                          </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div style="clear: both;"></div>
            <div class="margin-bottom-2" v-if="hoverSelect.id===2">
              <div class="body_title">
                行业测试解决方案
              </div>
              <div>
                <ul class="header_body_ul ul_float">
                  <li class="li_body_text">
                    <nuxt-link to="/solution-mobile-game">
                              <span class="body_text">
                                手游行业测试解决方案
                              </span>
                    </nuxt-link>
                  </li>
                </ul>
                <ul class="header_body_ul ul_float">
                  <li class="li_body_text">
                    <nuxt-link to="/solution-financial">
                              <span class="body_text">
                                金融行业测试解决方案
                              </span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    </div>
    <!--Phone-->
    <div class="phone_show flex_jusify_space display_flex height_100 header_margin">
      <div class="with70 height_100 display_flex flex_align_center">
        <img
          :src="whichClass == 'transparent' ? graybird : bluebird "
          @click="xxx"
          class="img_logo margin_right_20"
          alt
        >
      </div>
    </div>
  </div>
</template>

<script>
  import appButton from "../../components/button";

  export default {
    components: {
      appButton
    },
    watch: {
      $route(to, from) {
        var lang = this.$route.query.lang || localStorage.lang || 'zh';
        this.changeLang(lang);
        this.watchRouteShowLang()
      }
    },
    mounted() {
      this.body_title_text = this.$t('words.home_page');
      this.showData = this.SYdata;
      this.watchRouteShowLang();
    },
    computed: {
      head_title_arr() {
        if (this.$store.state.lang == 'e_n') {
          return [
            {name: this.$t('words.home_page'), id: 1, active: true, show: false},
            // {name: this.$t('words.testing_services'), id:2, active: false, show:true},
            {name: this.$t('words.overseas_marketing'), id: 3, active: false, show: true},
            // {name: this.$t('words.resource'), id:4, active: false, show:true},
            {name: this.$t('words.about_us'), id: 5, active: false, show: false},
            // {name: this.$t('words.help'), id:6, active: false, show:true}
          ]
        } else {
          return [
            {name: this.$t('words.home_page'), id: 1, active: true, show: false},
            {name: this.$t('words.testing_services'), id: 2, active: false, show: true},
            {name: this.$t('words.overseas_marketing'), id: 3, active: false, show: true},
            {name: this.$t('words.resource'), id: 4, active: false, show: true},
            {name: this.$t('words.about_us'), id: 5, active: false, show: false},
            {name: this.$t('words.help'), id: 6, active: false, show: true}
          ]
        }
      },
      showcp:function(){
        return this.$store.state.lang == 'e_n'
      }
    },
    methods: {
      enter(value, index) {
        let _this = this;
        this.showNav_pc = true;
        let height;
        let left;
        this.$nextTick(function () {
          this.head_title_arr.forEach(function (item) {
            _this.$set(item, 'active', false);
          });
          this.$set(value, 'active', true);
        });
        if (value.id) {
          this.changIndex = value.id
        }
        this.showData = [];
        if (value.id === 2) {
          this.body_title_text = this.$t('words.product');
          this.showData = this.CSFWdata;
          height = "height1"
        } else if (value.id === 3) {
          this.body_title_text = this.$t('words.overseas_marketing');
          this.showData = this.HWYXdata;
          height = "height2"
        } else if (value.id === 4) {
          this.body_title_text = this.$t('words.resource');
          this.showData = this.ZYdata;
          height = "height3"
        } else if (value.id === 6) {
          this.body_title_text = this.$t('words.help');
          this.showData = this.BZZXdata;
          height = "height4"
        } else {
          height = "h-little-list-hide";
          // left = 0
        }
        this.listStatu = height;
        this.changLeft = this.$el.querySelectorAll(".title_text")[index].offsetLeft + "px";
        // this.changHeight = height;
        if (value.name !== this.$t('words.home_page') || value.name !== this.$t('words.about_us')) {
          this.hoverSelect.name = value.name;
          this.hoverSelect.id = value.id
        }
      },
      leave(value, index) {
        // this.$el.querySelectorAll(".header_body")[0].style.height = "0"
        this.listStatu = "h-little-list-hide";
        // this.changLeft = this.$el.querySelectorAll(".title_text")[index].offsetLeft + "px";
      },
      closeHover() {
        this.showNav_pc = false
      },
      xxx() {
        this.$router.push({path: "/"});
      },
      showNav() {
        let menu = this.$el.querySelectorAll(".bigmenu")[0];
        let deg = 0;
        if (this.showNavBody) {
          deg = 0
        } else {
          deg = 90
        }
        menu.style.transform = "rotate(" + deg + "deg)";
        menu.style.transition = "0.5s";
        this.showNavBody = !this.showNavBody
      },
      act() {
        this.$router.push({
          path: '/mobile-internet-testing-expert'
        });
        this.showNavBody = !this.showNavBody
      },
      login() {
        // https://stage-official.testbird.com/
        window.location.href = process.env.NODE_ENV == 'production' ? "https://dt.testbird.com/login/?i18n=zh-cn" : "https://stage-official.testbird.com/dt/";
      },
      register() {
        window.location.href = process.env.NODE_ENV == 'production' ? "https://dt.testbird.com/signup/signup.html" : "https://stage-official.testbird.com/dt/signup/signup.html";
      },
      changeNav(v) {
        this.phoneSelect.id = v;
        if (v === 2) {
          this.body_title_text = this.$t('words.product');
          this.showData = this.CSFWdata
        } else if (v === 3) {
          this.body_title_text = this.$t('words.overseas_marketing');
          this.showData = this.HWYXdata
        }
      },
      watchRouteShowLang() {
        var oversea_arr = [
          "/advertiser",
          "/publisher",
          "/network",
          "/media"
        ];
        this.show_change_lang = oversea_arr.indexOf(this.$route.path) != -1;
      },
      changeLang: function (l) {
        this.$i18n.locale = localStorage.lang = this.$store.state.lang = this.selected_index = l;
      },
    },
    data() {
      return {
        bluebird: require("../../static/img/logo.png"),
        graybird: require("../../static/img/testbird-logo.png"),
        whichClass: "",
        showNav_pc: false,
        listStatu: "h-little-list-hide",
        head_title_arr1: [
          {name: this.$t('words.home_page'), id: 1, active: true, show: false},
          {name: this.$t('words.testing_services'), id: 2, active: false, show: true},
          {name: this.$t('words.overseas_marketing'), id: 3, active: false, show: true},
          {name: this.$t('words.resource'), id: 4, active: false, show: true},
          {name: this.$t('words.about_us'), id: 5, active: false, show: false},
          {name: this.$t('words.help'), id: 6, active: false, show: true}
        ],
        phone_head_title_arr: [
          {name: this.$t('words.testing_services'), id: 2, active: false, show: true},
          {name: this.$t('words.overseas_marketing'), id: 3, active: false, show: true},
          {name: this.$t('words.resource'), id: 4, active: false, show: true}
        ],
        changLeft: "0px",
        changIndex: 0,
        // changHeight: "0px",
        display: "none",
        hoverSelect: {
          name: this.$t('words.home_page'),
          id: null
        },
        phoneSelect: {
          id: 1
        },
        body_title_text: this.$t('words.home_page'),
        btnText: "移动应用质量管理",
        showData: [],
        SYdata: [
          [
            {name: this.$t('words.home_page'), link: "/", a: false}
          ]
        ],
        CSFWdata: [
          [
            {name: "标准兼容性测试", link: "/compatibility", a: false},
            {name: "远程调试", link: "/tphone-remote-debug", a: false},
            {name: "场景测试", link: "/scenario", a: false},
            {name: "控件遍历测试", link: "/control", a: false}
          ],
          [
            {name: "压力测试", link: "/load-testing", a: false}
          ],
          [
            {name: "TROC移动APP自动化测试平台", link: "/troc", a: false}
          ]
        ],
        HWYXdata: [
          [
            {name: this.$t('words.Advertiser'), link: "/advertiser", a: false},
            {name: "TBmedia", link: "/media", a: false}
          ],
          [
            {name: this.$t('words.the_publishers'), link: "/publisher", a: false}
          ],
          [
            {name: this.$t('words.tb_network'), link: "/network", a: false}
          ]
        ],
        ZYdata: [
          [
            {name: "行业白皮书", link: "/support-white-book", a: false}
          ],
          [
            {name: "博客", link: "/support-blog", a: false}
          ]
        ],
        GSdata: [
          [
            {name: this.$t('words.about_us'), link: "/about"}
          ]
        ],
        BZZXdata: [
          [
            {
              name: "标准兼容性测试使用说明",
              link: "http://dtfiles.testbird.com/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83%20-%20%E6%A0%87%E5%87%86%E5%85%BC%E5%AE%B9%E6%80%A7%E6%B5%8B%E8%AF%95%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf",
              a: true
            }
          ],
          [
            {
              name: "远程真机测试使用说明",
              link: "http://dtfiles.testbird.com/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83%20-%20%E8%BF%9C%E7%A8%8B%E7%9C%9F%E6%9C%BA%E8%B0%83%E8%AF%95%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf",
              a: true
            },
            {
              name: "压力测试使用说明",
              link: "http://dtfiles.testbird.com/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83%20-%20%E5%8E%8B%E5%8A%9B%E6%B5%8B%E8%AF%95%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf",
              a: true
            }
          ],
          [
            {
              name: "场景测试使用说明",
              link: "http://dtfiles.testbird.com/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83%20-%20%E5%9C%BA%E6%99%AF%E6%B5%8B%E8%AF%95%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf",
              a: true
            },
            {
              name: "充值及发票流程说明",
              link: "http://dtfiles.testbird.com/%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83%20-%20%E5%85%85%E5%80%BC%E5%8F%8A%E5%8F%91%E7%A5%A8%E6%B5%81%E7%A8%8B%E8%AF%B4%E6%98%8E.pdf",
              a: true
            }
          ]
        ],
        activeName: 1,
        showNavBody: false,
        show_change_lang: false,
        selected_index: "zh",
        // showcp: false
      };
    }
  };
</script>
<style lang='less'>
  @import "../../assets/css/glo.less";
  @import "../../assets/css/herder_main.css";

  @head_height: 50px;
  .head_box {
    .img_logo {
      width: 154px;
    }
    color: @font_color;
    height: @head_height;
    background: #fff;
    border-bottom: 1px solid rgba(235, 235, 242, 1);
    .head_title_box {
      line-height: @head_height;
      float: left;
    }
    &.transparent {
      background: transparent;
      position: absolute;
      width: 100%;
      top: 0;
      border-bottom: none;
      z-index: 2000;
    }
  }

  .with70 {
    width: 70% !important;
    float: left;
  }

  .with20 {
    width: 20% !important;
    float: right;
  }

  .with10 {
    width: 10% !important;
    float: right;
  }

  .change_lang_box {
    .selected_lang {
      background: rgba(36, 114, 231, 1);
      color: #fff;
    }
    div:first-child {
      border-right: 1px solid rgba(36, 114, 231, 1);
    }
    div {
      width: 60px;
      color: rgba(36, 114, 231, 1);
      text-align: center;
      line-height: 30px;
      background: #fff;
    }
    z-index: 10000;
    // position: absolute;
    // top: 15px;
    // right: 15px;
    display: flex;
    /* border:1px solid #469773; */
    border-radius: 15px;
    height: 30px;
    overflow: hidden;
    border: 1px solid rgba(36, 114, 231, 1);
  }

  .el-collapse-item__content {
    padding-top: 5px;
    padding-bottom: 15px;
  }
</style>
