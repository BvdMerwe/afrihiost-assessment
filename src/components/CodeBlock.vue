<template>
  <pre class="codeblock">
    <slot></slot>
  </pre>
</template>

<script>
export default {
    name: "CodeBlock"
}
</script>

<style>
pre.codeblock {
    font-family: 'Menlo', monospace, sans-serif;
    color: #647291;
    text-align: left;
    font-size: 12px;
    display: block;
    padding: 35px 40px;
    background-color: #171C27;
    border-radius: 10px;
}
</style>