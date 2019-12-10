<template>
    <div class="text_center">
        <h1 class="margin_top_10" v-html="title"></h1>
        <h5 class="margin_bottom_2 gray">{{create_time.split("T")[0]}}   <i class="padding_left_20 iconfont icon-shouzhi"></i>{{readed_number}}</h5>
        <div v-html="html">
        </div>
        
    </div>
</template>

<script>
export default {
    mounted() {
        this.getNewInfo();
    },
    data(){
        return {
            html: "loading...",
            title: "",
            create_time: "",
            readed_number: ""
        }
    },
    methods: {
        getNewInfo() {
            var newid = this.$route.params.newid;
            this.$jquery.get("http://106.52.237.64:12000/backend/api/v1/news/"+ newid +"/",(res) => {
                console.log(res)
                this.html = res.innerhtml;
                this.title = res.title;
                this.create_time = res.create_time;
                this.readed_number = res.readed_number;
            })
        }
    }
};
</script>
<style lang='less'>
.gray{
    color: #555
}
</style>