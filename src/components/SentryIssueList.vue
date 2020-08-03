<template>
    <div class="sentry-issue-list">
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

<style>
.sentry-issue-list {
    display: grid;
    align-items: center;
    row-gap: 10px;
}
</style>