import Vue from "vue"
Vue.mixin({
  methods: {
    nuxtLinkJump: function (link='/',out_side) {
        out_side ? open(link) : this.$router.push({path:link})
    }
  }
})
