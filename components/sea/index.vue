<template>
  <div :class="{transition_back:showDocument}">
    <div class="sea_box position_relative">
      <img
        src="../../static/img/products/sea-bg.png"
        class="width_100 transform_duration1 transilateY2"
        alt
      >
      <img
        class="location-bg transform_duration15 transilateY3"
        src="../../static/img/products/sea-2.png"
        alt
      >
      <div class="white sea_title_box pcs text_center">
        <h1 class="sea_title">{{$t('words.service_for_you')}}</h1>
        <div>{{$t('words.global_mobile_internet')}}</div>
      </div>
      <template v-for="i in location">
        <div
          :key='i.name'
          class="animate-container clearfix"
          :class="i.flag?i.name+' active':i.name"
          @click="changeLocation(i.num,true)"
        >
          <div class="dot"><img src="../../static/img/products/green.png"><img src="../../static/img/products/yellow.png"></div>
          <div
            v-if="i.flag"
            class="out-line"
          ></div>
          <div
            v-if="i.flag"
            class="out-line2"
          ></div>
        </div>
      </template>
      <div class="customer-service ">
        <el-carousel
          :interval="5000"
          indicator-position="outside"
          arrow="never"
          height="120px"
          ref="locationCarousel"
          @change="chooseLocation"
        >
          <template v-for="item in customInfo">
            <el-carousel-item :key='item.type'>
              <div class="user-info"><img
                  :src="'/img/products/' +item.type + '.png'"
                  alt="headerImg"
                >
                <div>
                  <p>{{item.location}}: {{ item.name}}</p>
                  <p class="customer-service-box">
                    <span><img src="../../static/img/products/tel.png">{{$t('words.phone')}}: {{ item.tel}} </span>
                    <span><img src="../../static/img/products/qq.jpg"> QQ:{{ item.qq}} </span><br>
                    <span><img src="../../static/img/products/email.jpg">{{$t('words.email')}}: {{ item.email}} </span>
                    <span><img src="../../static/img/products/address.jpg">{{$t('words.addr')}}: {{ item.address}} </span></p>
                </div>
              </div>
            </el-carousel-item>
          </template>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDocument: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      customInfo: [
        {
          num: 0,
          type: "cn_xinan",
          location: this.$t('words.southwest_responsible_person'), 
          name: "刘先生",
          tel: "153 2818 5669",
          qq: "924957891",
          email: "liuxiao@testbird.com",
          address: this.$t('words.addr1') 
        },
        {
          num: 1,
          type: "cn_huanan",
          location: this.$t('words.south_china'), 
          name: "张先生",
          tel: "135 4077 0984",
          qq: "1873436847",
          email: "zhangyunfeng@testbird.com",
          address: this.$t('words.addr2') 
        },
        {
          num: 2,
          type: "cn_huadong",
          location: this.$t('words.east_china'), 
          name: "李女士",
          tel: "159 0088 5049",
          qq: "3038387066",
          email: "liyibing@testbird.com",
          address: this.$t('words.addr3') 
        },
        {
          num: 3,
          type: "cn_huabei",
          location: this.$t('words.north_china'), 
          name: "刘先生",
          tel: "155 1037 9835",
          qq: "568938413",
          email: "liuxinghan@testbird.com",
          address: this.$t('words.addr4') 
        },
        {
          num: 4,
          type: "haiwai",
          location: this.$t('words.responsible_person'), 
          name: "杨先生",
          tel: "180 3075 1314",
          qq: "453477581",
          email: "yangchunmiao@testbird.com ",
          address: this.$t('words.addr1') 
        }
      ],
      location: [
        {
          name: "cn_xinan",
          flag: true,
          num: 0
        },
        {
          name: "cn_huanan",
          flag: false,
          num: 1
        },
        {
          name: "cn_huadong",
          flag: false,
          num: 2
        },
        {
          name: "cn_huabei",
          flag: false,
          num: 3
        },
        {
          name: "european",
          flag: false,
          num: 4
        },
        {
          name: "usa",
          flag: false,
          num: 4
        },
        {
          name: "japan",
          flag: false,
          num: 4
        },
        {
          name: "ma",
          flag: false,
          num: 4
        },
        {
          name: "sa",
          flag: false,
          num: 4
        },
        {
          name: "bz",
          flag: false,
          num: 4
        }
      ]
    };
  },
  methods: {
    changeLocation: function(no, flag) {
      this.$refs.locationCarousel.setActiveItem(no);
    },
    chooseLocation(no) {
      for (let i in this.location) {
        if (this.location[i].num === no) {
          this.location[i].flag = true;
        } else {
          this.location[i].flag = false;
        }
      }
    }
  },
  mounted() {}
};
</script>
<style lang='less'>
.sea {
  margin-top: 150px;
}
.sea_box {
  .sea_title_box {
    top: 28%;
    .sea_title {
      font-weight: 500;
      margin-bottom: 7px;
    }
  }
  img.location-bg {
    width: 60%;
    position: absolute;
    left: 20%;
    top: 40%;
  }
  .animate-container {
    margin-left: 1.5%;
    margin-top: 1.5%;
    position: absolute;
    cursor: pointer;
    .dot {
      img + img {
        display: none;
      }
    }
    &.active {
      .dot {
        img {
          display: none;
          & + img {
            display: inline-block;
          }
        }
      }
    }
    .out-line {
      position: absolute;
      width: 50px;
      height: 50px;
      left: -19px;
      top: -2px;
      border: 2px solid #ffbd59;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      z-index: 1;
      opacity: 0.5;
      animation: warn 2s ease-out;
      animation-iteration-count: infinite;
    }
    .out-line2 {
      position: absolute;
      width: 50px;
      height: 50px;
      left: -19px;
      top: -2px;
      border: 2px solid #ffbd59;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      z-index: 1;
      opacity: 0.3;
      animation: warn1 2s ease-out;
      animation-iteration-count: infinite;
    }
  }
  .usa {
    top: 45%;
    left: 27%;
  }
  .european {
    top: 42%;
    left: 47%;
  }
  .japan {
    top: 45%;
    left: 68.5%;
  }
  .sa {
    top: 67%;
    left: 74%;
  }
  .bz {
    top: 61%;
    left: 28%;
  }
  .ma {
    top: 56%;
    left: 64%;
  }
  .cn_xinan {
    top: 46.6%;
    left: 62.5%;
  }
  .cn_huanan {
    top: 48%;
    left: 64.5%;
  }
  .cn_huadong {
    top: 46.5%;
    left: 65.5%;
  }
  .cn_huabei {
    top: 44%;
    left: 64%;
  }
}

.customer-service {
  border-radius: 4px;
  width: 850px;
  background-color: #fff;
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  margin-left: -450px;
  bottom: -70px;
  padding: 15px 0 20px 50px;
  height: 140px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 5px 15px 0px;
  .user-info {
    display: flex;
    > img {
      width: 70px;
      height: 70px;
      position: relative;
      top: 15px;
    }
    div {
      flex: 1;
      padding-left: 30px;
      p {
        img {
          width: 15px;
          height: 15px;
          position: relative;
          margin-right: 5px;
          top: 2px;
          display: inline-block;
        }
      }
    }
    p {
      font-size: 18px;
      margin: 10px 0;

      &.customer-service-box {
        font-size: 14px;
        margin: 10px 0;
        line-height: 1.75;
        span {
          &:nth-of-type(odd) {
            width: 300px;
            display: inline-block;
          }
          &:nth-of-type(even) {
            width: 380px;
            display: inline-block;
          }
        }
      }
    }
  }
  ul.el-carousel__indicators {
    margin-top: 10px;
    li {
      border-radius: 50%;
      padding: 4px;
      button.el-carousel__button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      &.is-active {
        button.el-carousel__button {
          background-color: #0070f0;
        }
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .animate-container {
    margin-left: 1%;
    margin-top: 1%;
  }
}
@media screen and (max-width: 1000px) {
  .animate-container {
    margin-left: 1%;
    margin-top: 0%;
  }
}
@keyframes warn {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0;
  }

  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.1;
  }

  50% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.3;
  }

  75% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0;
  }
}
@keyframes warn1 {
  0% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0;
  }

  25% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.1;
  }

  50% {
    transform: scale(0.3);
    -webkit-transform: scale(0.3);
    opacity: 0.3;
  }

  75% {
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    opacity: 0;
  }
}
</style>