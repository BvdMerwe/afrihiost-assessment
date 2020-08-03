<template>
    <div class="sentry-issue">
        <span>{{issue.issue}}</span>
        <span>{{issue.usersAffected}}</span>
        <span>{{issue.events}}</span>
    </div>
</template>

<script>
export default {
    name: "SentryIssue",
    props: {
        issue: {
            type: Object
        }
    }
}
</script>

<style>
.sentry-issue {
    color: #647291;
    font-weight: 600;
    font-size: 14px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    justify-items: self-start;
    padding: 14px 27px;
    background-color: #171C27;
    border-radius: 10px;

}
</style>