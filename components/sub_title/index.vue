<template>
    <div class="sub_title text_center">{{desc}}</div>
</template>

<script>
export default {
    props: {
        desc: {
            type: String
        }
    }
};
</script>
<style lang='less'>
@import "../../assets/css/glo";
</style>