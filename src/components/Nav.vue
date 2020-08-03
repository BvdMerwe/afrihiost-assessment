<template>
    <div id="nav">
        <img class="logo" :src="getImgUrl(logo)" alt="DPLOY" >

        <div class="button-container">
            <a href="#" class="nav-button">
                <i class="icon-home"></i>
            </a>
            <a href="#" class="nav-button selected">
                <i class="icon-build"></i>
            </a>
        </div>

        <div class="notification">
            <i class="icon-check"></i> Build on project name completed by person name 
        </div>

        <div class="button-container">
            <a href="#" class="nav-button">
                <i class="icon-bell"></i>
                <span class="counter">2</span>
            </a>
            <a href="#" class="nav-button disabled">
                <i class="icon-bolt"></i>
                <span class="counter">x</span>
            </a>
        </div>

        <a class="user-profile" href="#path-to-user-profile">
            <div class="user-info">
                <div class="name">{{user.username}}</div>
                <div class="email">{{user.userEmail}}</div>
            </div>
            <div class="image">
                <img :src="getImgUrl(user.userImage)" alt="Profile picture">
            </div>
        </a>
    </div>
</template>

<script>
import helpers from '../mixins/helpers';


export default {
    props: {
        logo: String,
        user: {
            type: Object
        }
    },
    mixins: [helpers]
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables.scss';



#nav {
    display: grid;
    grid-template-columns: 99px 20% auto 20% auto;
    align-items: center;
    position:fixed;
    top: 0;
    width: 100%;
    background-color: #171C27;
    padding: 0 25px;
    color: #647291;
    line-height: 70px;
    z-index: 999;
}

.nav-button {
    position: relative;
    display: inline-block;
    font-size: 22px;
    width: 54px;
    height: 54px;
    margin: 0 10px 0 0;
    line-height: 54px;
    border-radius: 10px;

    background-color: rgba(#3D4558, 0.3);

    &.selected,
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
            border-radius: 10px;
        }
    }
    &.disabled {
        background-color: #11141D;
        pointer-events: none;
    }

    .counter {
        position: absolute;
        top: 0;
        right: 0;
        line-height: 18px;
        background-color: #fff;
        color:#040220;
        font-weight: bolder;
        font-size: 10px;
        border-radius: 100px;
        width: 18px;
        height: 18px;
        padding: 0 6px;
    }
}

.notification {
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    background-color: #11141D;
    border-radius: 10px;
    i {
        color: #CDDDFF;
        margin-right: 5px;
    }
}

.user-profile {
    display: grid;
    grid-template-columns: auto 50px;
    align-items: center;
    height: 54px;

    .user-info {
        font-size: 14px;
        line-height: 1em;
        text-align: right;
        margin-right: 10px;

        .email {
            font-size: 10px;
        }
    }

    .image {
        max-width: 50px;
        max-height: 50px;
        border-radius: 10px;
        overflow: hidden;

        img {
            max-width: 100%;
        }
    }
}

</style>