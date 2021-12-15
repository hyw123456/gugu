<template>
  <Index></Index>

</template>

<script setup lang="ts">
  import Index from './views/index.vue'
</script>

<style>
#app {
  //min-height: 100vh;
}

* {
  box-sizing: border-box;
}

html {
  overflow: hidden;
}

body {
  font-size: 14px;
  color: #333;
  background-color: rgba(0, 0, 0, .04) !important;
  overflow-y: auto;
  overflow-y: overlay;
  height: 100vh;
}

h1 {
  font-weight: 200;
}

html,
body,
div,
p, h1 {
  border: 0;
  margin: 0;
  padding: 0;
}

strong {
  font-weight: normal;
}

em,
i {
  font-style: normal;
}

ul,
ol,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
.pointer{
  cursor: pointer;
}
</style>
