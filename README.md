# weather application
I have almost implemented features required for this application. I have listed both implemented and not implemented list

## Not implemented
- Auto-complete city search, I can implement this using third-party library or implement manually using debouncing
- Click event for 7-day forecast and show details for the selected day, no difficulty here, just time required
- Loading screen for the user experience, no difficulty here, just time required

## Implemented
- Show basic information, current day, temperature, humidity, wind speed
- When user press return key, it will call the openweathermap api
- Show weather forecase for the next 6 hours and 7 days
- Implement error handling when the city is not found
- State management using Vue, placed weather module and defined getters, actions, mutations, ...
- Build 1 page and 2 components, routing defined

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
