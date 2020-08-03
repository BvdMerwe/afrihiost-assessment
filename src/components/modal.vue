<template>
    <div v-if="show" class="modal-container">
    <!-- <div class="modal-container"> -->
        <div class="modal-bg" @click="hideModal"></div>
        <div class="modal">
            <slot></slot>
            <a href="#" @click="hideModal" class="close-button"><i class="icon-cross"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    data() {
        return {
            show: false
        }
    },
    methods: {
        showModal(e) {
            if (e) {
                e.preventDefault();
            }
            this.show = true
            this.$emit('showModal');
        },
        hideModal(e) {
            if (e) {
                e.preventDefault();
            }
            this.show = false
            this.$emit('hideModal');
        },
        toggleModal() {
            this.show = !this.show
            this.$emit('toggleModal');
        }
    },
    created() {
        this.$on('closeModal', () => {
            this.hideModal()
        })
    }
}
</script>

<style lang="scss">
@import '../assets/css/variables.scss';

.modal-container {
    // display: none;
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    z-index: 100000;
    &.show {
        // display: block;
        opacity: 1;
        pointer-events: none;
    }
}
.modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    z-index: 100000;
    background-color: rgba(#11141D, 0.9);
    // opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
}
.modal {
    background-color: #171C27;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    min-width: 500px;
    // min-height: 500px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    z-index: 2;
}

.close-button {
    color: #CDDDFF !important;
    font-size: 9px;
    position: absolute;
    top:18px;
    right:21px;
    width: 33px;
    height: 33px;
    background-color: rgba(#3D4558, 0.3);
    border-radius: 1000px;
    line-height: 33px;
    // z-index: 1;

    &:hover {
        background-color: #11141D;
        i {
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
            border-radius: 1000px;
        }
    }
}
</style>