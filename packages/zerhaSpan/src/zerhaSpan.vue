<template>
  <div>
    <span class="spanDemo" @click="clickSpan">span标签----zerha</span>
  </div>
</template>

<script>
  export default {
  methods: {
      clickSpan () {
        alert('点击触发span标签！')
      }
    }
  }
</script>

<style scoped>
.spanDemo{
  color: red;
  font-weight: 700;
  font-size: 18px;
}
</style>