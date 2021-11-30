<template>
  <div class='app-container'>
    <div class='w-container'>
      <div class='w-header-container'>
        <p class="today-temp">71<span>&#176;F</span></p>
        <p class="today-wind">
          <span>Wind 11 mph</span><br/>
          <span>Humidy: 48%</span>
        </p>
        <div class="city-search">
          <input class="city-search__input" type="text" />
          <p class="city-search__today">Tuesday</p>
        </div>
      </div>

      <div class='w-temp-container'>
        <p class='label'>Today's hourly temperatures</p>
        <div class='list'>
          <HourTemperature time="1pm" :temperature="71" />
          <HourTemperature time="2pm" :temperature="78" />
          <HourTemperature time="3pm" :temperature="74" />
          <HourTemperature time="4pm" :temperature="72" />
          <HourTemperature time="5pm" :temperature="75" />
          <HourTemperature time="6pm" :temperature="74" />          
          <HourTemperature time="" :temperature="0" :visibility="true" />
        </div>
      </div>

      <div class='w-temp-container'>
        <p class='label'>7 day forecast</p>
        <div class='list'>
          <DayTemperature day="Mon" :high="71" :low="50" />
          <DayTemperature day="Tue" :high="78" :low="50" />
          <DayTemperature day="Wed" :high="74" :low="50" />
          <DayTemperature day="Thu" :high="72" :low="50" />
          <DayTemperature day="Fri" :high="75" :low="50" />
          <DayTemperature day="Sat" :high="74" :low="50" />          
          <DayTemperature day="Sun" :high="71" :low="50" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HourTemperature from '../components/HourTemperature.vue';
import DayTemperature from '../components/DayTemperature.vue';

export default {
  name: 'Weather',
  components: {
    HourTemperature,
    DayTemperature
  }
}
</script>
