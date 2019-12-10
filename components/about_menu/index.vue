<template>
    <div class="menu">
        <a
            :class="{active:selected_index == index}"
            @click="aboutJump(item,index)"
            v-for="(item,index) in menu_list"
            :key="item.title"
        >{{item.title}}</a>
    </div>
</template>

<script>
export default {
    methods: {
        aboutJump(item, index) {
            this.selected_index = index;
            this.nuxtLinkJump(item.path);
        }
    },
    data() {
        return {
            selected_index: 0,
            menu_list1: [
                { title: this.$t('words.about_us'), path: "/about" },
                { title: this.$t('words.company_milestones'), path: "/about/milestone" },
                { title: this.$t('words.comzz'), path: "/about/plaque" },
                { title: this.$t('words.Partner'), path: "/about/partner" },
                { title: "招贤纳士" , path: "/about/jobs" },
                { title: "市场活动", path: "/about/marketing" },
                { title: "媒体关系", path: "/about/media" },
                { title: "服务协议", path: "/about/agreement" }
            ]
        };
    },
    computed:{
        menu_list(){
            if(this.$store.state.lang!="e_n"){
                return  [
                { title: this.$t('words.about_us'), path: "/about" },
                { title: this.$t('words.company_milestones'), path: "/about/milestone" },
                { title: this.$t('words.comzz'), path: "/about/plaque" },
                { title: this.$t('words.Partner'), path: "/about/partner" },
                { title: "招贤纳士" , path: "/about/jobs" },
                { title: "市场活动", path: "/about/marketing" },
                { title: "媒体关系", path: "/about/media" },
                { title: "服务协议", path: "/about/agreement" }
            ]
            }else{
                return   [
                    { title: this.$t('words.about_us'), path: "/about" },
                    { title: this.$t('words.company_milestones'), path: "/about/milestone" },
                    { title: this.$t('words.comzz'), path: "/about/plaque" },
                    { title: this.$t('words.Partner'), path: "/about/partner" }
                ]
            }
        },
    },
};
</script>
<style lang='less'>
.menu {
    padding: 10px;
    text-align: center;
    background: #e6ebf0;
    font-size: 14px;
}
.menu a {
    font-size: 16px;
    color: #191e25;
    padding: 5px 10px;
    margin: 0 10px;
    border-bottom: 2px solid transparent;
}

.menu .current {
    border-color: #0070f0 !important;
    color: #0070f0 !important;
}

.menu a:hover {
    color: #0070f0 !important;
}

.menu .active {
    border-color: #0070f0 !important;
    color: #0070f0 !important;
}
</style>