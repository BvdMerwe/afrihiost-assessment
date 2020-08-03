<template>
    <div class="sentry-issue-list">
        <div class="headings">
            <span></span>
            <span>Users affected</span>
            <span>events</span>
        </div>
        <SentryIssue v-for="issue in issues" :key="issue.index" :issue="issue"></SentryIssue>
    </div>
</template>

<script>
import SentryIssue from "./SentryIssue.vue"
export default {
    name: "SentryIssueList",
    props: {
        issues: Array
    },
    components: {
        SentryIssue
    }
}
</script>

<style lang="scss">
.sentry-issue-list {
    display: grid;
    align-items: center;
    row-gap: 10px;

    &:nth-child(1){
        margin-top: -10px;
    }
}
.headings {
    font-size: 10px;
    line-height: 10px;
    font-weight: 600;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    justify-items: start;
    padding: 0 27px;
    margin-top: -10px;
}
</style>