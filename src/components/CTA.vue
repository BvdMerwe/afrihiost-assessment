<template>
    <a class="cta">
        <span>
            <slot></slot>
        </span>
    </a>
</template>

<script>
export default {
    name: "CTA"
}
</script>

<style lang="scss">
@import '../assets/css/variables.scss';
.cta {
    position: relative;
    color: #647291 !important;
    display: inline-block;
    line-height: 13px;
    font-size: 13px;
    padding: 15px 15px;
    background-color: rgba(#3D4558, 0.3);
    min-width: 45px;
    max-height: 45px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;

    &.small {
        color: #CDDDFF !important;
        border: 1px solid;
        font-size: 10px;
        line-height: 10px;
        padding: 8px 20px;
    }
    &.outline {
        background: transparent;
        color: #CDDDFF !important;
        border: 1px solid;
    }
    &.discrete {
        background: transparent;
        text-transform: uppercase;
    }
    &.disabled {
        // pointer-events: none;
        cursor: not-allowed;
        
        &:active {
            pointer-events: none;
        }
    }
    &:hover:not(.discrete) {
        background-color: #11141D;
        span {
            background: $orange-gradient;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        ::after{
            position: absolute;
            top: -1px; bottom: -1px;
            left: -1px; right: -1px;
            background: $orange-gradient;
            content: '';
            z-index: -1;
            border-radius: 10px;
        }
    }
}
</style>