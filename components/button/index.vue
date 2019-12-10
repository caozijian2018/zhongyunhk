<template>
    <div class="glo_button">{{buttonText}}</div>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: "button"
        }
    }
};
</script>

<style lang='less'>
@import "../../assets/css/glo";
.glo_button {
    letter-spacing: 1px;
    height: 34px;
    padding: 0 30px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    transition: 0.3s;
    overflow: hidden;
    font-size: 14px;
    position: relative;
    border: 1px solid transparent;
    border-radius: 17px;
    display: inline-block;
    background: #12da9f;
    box-shadow: 0px 6px 14px 0px rgba(0, 190, 134, 0.2);
    &:hover {
        background: #11c993;
    }
    &.hollow {
        color: #12da9f;
        background: transparent;
        border-color: #12da9f;
        &:hover {
            background: #11c993;
            color: #fff;
        }
    }
    // &.backwhite{
    //     color: #12da9f;
    //     background: transparent;
    //     border-color: #12da9f;
    //      &:hover {
    //     background: #11c993;
    // }
    // }
}
</style>