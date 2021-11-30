<template>
  <div class="hour" :class="{ 'hidden': visibility }">
    <p class="hour__time">{{ time }}</p>
    <p class="hour__temperature">
      {{ temperature }}<span class="hour__label">&#176;F</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HourTemperature',
  props: {
    time: String,
    temperature: Number,
    visibility: Boolean
  },
  mounted() {}
}
</script>

<style scoped>
.hour {
  width: auto;
  padding: 8px 16px;
}

.hour:hover {
  background: #f4f4f4;
  cursor: pointer;
}

.hour__time {
  color: #afafaf;
  margin-bottom: 4px;
  font-size: 14px;
}

.hour__temperature {
  font-size: 24px;
  font-weight: 500;
}

.hour__label {
  font-size: 18px;
}

.hidden {
  visibility: hidden;
}
</style>