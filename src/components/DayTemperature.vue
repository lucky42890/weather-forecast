<template>
  <div class="day" :class="{ 'hidden': visibility }">
    <p class="day__name">{{ day }}</p>
    <p class="day__high-temp">
      {{ high }}<span class="day__label">&#176;F</span>
    </p>
    <p class="day__low-temp">
      {{ low }}<span class="day__label">&#176;F</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DayTemperature',
  props: {
    day: String,
    high: Number,
    low: Number,
    visibility: Boolean
  },
  mounted() {}
}
</script>

<style scoped>
.day {
  width: auto;
  padding: 8px 16px;
}

.day:hover {
  background: #f4f4f4;
  cursor: pointer;
}

.day__name {
  color: #afafaf;
  margin-bottom: 4px;
  font-size: 18px;
}

.day__high-temp {
  font-size: 24px;
  font-weight: 500;
}

.day__low-temp {
  font-size: 14px;
  font-weight: 500;
}

.day__high-temp .day__label {
  font-size: 18px;
}

.day__low-temp .day__label {
  font-size: 10px;
}

.hidden {
  visibility: hidden;
}
</style>