<template>
  <div class="regiest_box_div">
    <div class="pc_show">
      <div class="regiest_box">
        <div class="glo_width_percent margin_auto position_relative">
          <img
            src="../../static/img/adv/3.png"
            class="width_100"
            alt
          >
          <div class="width_60 regiest_box_ipt">
            <h3
              class="white text_center"
              style="height:30px;"
            >{{submit_success}}</h3>
            <div class="wrop display_flex flex_jusify_space">
              <div
                class="ipt"
                v-for="item in regiest_form"
                :key="item.id"
              >
                <input
                  type="text"
                  v-model="item.value"
                  :id="item.id"
                >
                <label
                  :class="{gotop: item.value }"
                  :for="item.id"
                >{{$t('words.'+item.name)}}</label>
              </div>
            </div>
            <app-button
              :button-text="$t('words.submit')"
              @click.native="submit()"
              class="green padding30"
            ></app-button>
          </div>
        </div>
      </div>
    </div>
    <div class="phone_show">
      <div class="regiest_box">
        <div class="position_relative">
          <img
            src="../../static/img/regist_bg.png"
            class="width_100"
            alt
          >
          <div class="width_90 regiest_box_ipt">
            <h3
              class="white text_center"
              style="height:30px;"
            >{{submit_success}}</h3>
            <div class="wrop display_flex flex_jusify_space">
              <div
                class="ipt"
                v-for="item in regiest_form"
                :key="item.id"
              >
                <input
                  type="text"
                  v-model="item.value"
                  :id="item.id"
                >
                <label
                  class="xxx"
                  :class="{gotop:item.value}"
                  :for="item.id"
                >{{$t('words.'+item.name)}}</label>
              </div>
            </div>
            <div class="text_center margin_top_10">
              <app-button
                :button-text="$t('words.submit')"
                @click.native="submit()"
                class="margin_auto green padding30"
              ></app-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appButton from "../button";
export default {
  components: {
    appButton
  },
  methods: {
    submit() {
      var obj = {};
      var that = this;
      for (var i = 0; i < this.regiest_form.length; i++) {
        if (!this.regiest_form[i].value) {
          this.submit_success = "请校验输入的值";
          setTimeout(function() {
            that.submit_success = "";
          }, 3000);
          return;
        }
        obj[this.regiest_form[i].id] = this.regiest_form[i].value;
      }
      this.$http("email", "post", {
        ...obj
      })
        .then(res => {
          console.log(res);
          that.submit_success = "提交成功";
          setTimeout(function() {
            that.submit_success = "";
          }, 3000);
          for (var i = 0; i < that.regiest_form.length; i++) {
            that.regiest_form[i].value = "";
          }
        })
        .catch(res => {
          that.submit_success = "提交失败";
          setTimeout(function() {
            that.submit_success = "";
          }, 3000);
        });
    }
  },
  data() {
    return {
      submit_success: "",
      regiest_form: [
        {
          name: "name",
          value: "",
          id: "name"
        },
        {
          name: "qq",
          value: "",
          id: "qq"
        },
        {
          name: "email",
          value: "",
          id: "email"
        },
        {
          name: "company_name",
          value: "",
          id: "company_name"
        },
        {
          name: "phone",
          value: "",
          id: "phone"
        },
        {
          name: "job_name",
          value: "",
          id: "job_name"
        }
      ]
    };
  }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
.regiest_box_div {
  &.blue {
    background: rgba(239, 247, 253, 1);
  }
  .pc_show {
    .regiest_box {
      // background: @gray_font;
      &.transparent {
        background: transparent;
      }
      .regiest_box_ipt {
        position: absolute;
        left: 40px;
        top: 20%;
        .ipt {
          position: relative;
          margin-bottom: 24px;
          label.gotop {
            top: -20px;
          }
          label {
            &.gotop {
              top: -20px;
            }
            position: absolute;
            left: 0;
            top: 4px;
            transition-property: top;
            transition-duration: 0.4s;
            color: #fff;
          }
          width: 40%;
          input {
            &:focus + label {
              top: -20px;
            }
            color: #fff;
            background: transparent;
            outline: none;
            width: 100%;
            height: 34px;
            line-height: 34px;
            border: none;
            border-bottom: 1px dotted rgba(68, 154, 254, 1);
          }
        }
      }
    }
  }
  .phone_show {
    .regiest_box {
      img {
        min-height: 315px;
      }
      background: @gray_font;
      &.transparent {
        background: transparent;
      }
      .regiest_box_ipt {
        position: absolute;
        left: 5%;
        top: 5%;
        .ipt {
          position: relative;
          margin-bottom: 24px;
          label {
            &.gotop {
              top: -20px;
            }
            position: absolute;
            left: 0;
            top: 4px;
            transition-property: top;
            transition-duration: 0.4s;
            color: #fff;
          }
          width: 40%;
          input {
            &:focus + label {
              top: -20px;
            }
            color: #fff;
            background: transparent;
            outline: none;
            width: 100%;
            height: 34px;
            line-height: 34px;
            border: none;
            border-bottom: 1px dashed rgba(88, 174, 254, 1);
          }
        }
      }
    }
  }
}
</style>