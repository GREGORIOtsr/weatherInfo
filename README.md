# WEATHER INFO Exercise #

[**Netlify page**](https://lucent-chimera-645c03.netlify.app/)

Vite and React project using [**OpenWeahter**](https://openweathermap.org/) API with useEffect and useState methods.

The first location the web will give you is your current location, so you'll have to allow the browser to get your location. If not you can type any city in the input and get its weahter!

The project follows the following component structure:

    /src 
    ├── App.jsx                                 # Main jsx file
    ├── main.jsx                                # Root file
    └── /components                             # Components folder
        ├── /Header
        |   └── Header.jsx                      # <header> component with logo and title
        └── /Main
            ├── Main.jsx                        # <main> component
            └── /WeatherComponent               # Weather search form and cards folder
                ├── WeatherComponent            # Father component with functions and states
                ├── /WeatherError
                |   └── WeatherError.jsx        # Error component with a message in case something goes wrong!
                ├── /WeatherForm
                |   └── WeatherForm.jsx         # Form component where you can submit a city to search its weather
                └── /WeatherList
                    ├── WeatherList.jsx         # List component where all wheaters cards are printed
                    └── /WeahterCard
                        └── WeatherCard.jsx     # Card component with a weather card structure