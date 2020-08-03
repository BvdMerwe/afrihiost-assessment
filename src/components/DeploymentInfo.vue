<template>
  <div class="deployment" :class="deployment.status">
        <div class="title">{{deployment.title}}</div>
        <div class="date">{{formatDate(deployment.date)}}</div>
        <div v-if="deployment.status == 'success'" class="status">
            <i class="icon-check"></i>
        </div>
        <div v-else class="status">
            failed
        </div>

        <div class="message">{{deployment.message}}</div>
        <div class="hash">{{deployment.hash}}</div>
  </div>
</template>

<script>
export default {
    name: "DeploymentInfo",
    props: {
        deployment: {
            type: Object
        }
    },
    methods: {
        formatDate(date) {
            if (!date) return
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];
            let result = "";

            let hours = date.getHours();
            let minutes = date.getMinutes();

            result = hours + ":" + minutes;
            result += " | ";
            result += date.getDate() + " " + monthNames[date.getMonth()].toUpperCase();
            return result;
        },
    }
}
</script>

<style lang="scss">
@import '../assets/css/variables.scss';
.deployment {
    position: relative;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 32px;
    background-color: #171C27;
    padding: 0 25px 25px;
    border-radius: 10px;
    text-align: left;
    overflow: hidden;

    & > * {
        margin-top: 25px;
    }

    &.fail{
        border: 1px solid #FF3B70;

        .status {
            font-weight: bold;
            text-transform: uppercase;
            font-size: 11px;
            color: #040220;
            background-image: $orange-gradient;
            padding: 7px 22px;
            border-radius: 0 0 0 10px;
        }
    }

    &.success .status {
        font-size: 11px;
        color: #647291;
        top: 25px;
        right: 25px;
    }
}

.status {
    position: absolute;
    top: 0; right: 0;
    margin: 0;
}

.title {
    color: #CDDDFF;
    font-size: 20px;
}

.date {
    color: #647291;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.5;
}

.message {
    color: #647291;
    font-size: 10px;
    font-weight: bold;
}

.hash {
    color: #647291;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    padding: 16px 46px;
    background-color: rgba(#3D4558,0.4);
    border-radius: 10px;
    align-self: start;
}
</style>