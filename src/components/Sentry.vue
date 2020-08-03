<template>
    <div class="sentry">
        <SentryIssueList :issues="sentry.issues"></SentryIssueList>
        <div class="sentry-counters">
            <div class="users">{{sentry.usersAffected}}<div>users&nbsp;affected</div></div>
            <div class="errors">{{sentry.totalIssues}}<div>errors</div></div>
        </div>
    </div>
</template>

<script>
import SentryIssueList from "./SentryIssueList.vue"

export default {
    name: "Sentry",
    props: {
        sentry: {
            type: Object
        }
    },
    components: {
        SentryIssueList
    }
}
</script>

<style lang="scss" scoped>
.sentry {
    display: grid;
    column-gap: 13px;
    grid-template-columns: 2fr 1fr;
}

.sentry-counters {
    display: grid;
    gap: 11px;
    .users,
    .errors {
        color: #647291;
        font-weight: 600;
        font-size: 42px;
        background-color: #171C27;
        padding: 30px 76px;
        border-radius: 10px;

        div {
            font-size: 10px;
            line-height: 10px;
            text-transform: uppercase;
        }
    }
}
</style>