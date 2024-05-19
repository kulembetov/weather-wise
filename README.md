# Weather Wise

Weather Wise is a Next.js application that displays the weather forecast and current weather conditions based on the user-selected location. The application uses Google Maps for location search and display, and the Open-Meteo API for weather data. It also utilizes shadcn UI and Material-UI icons for the user interface, and Radix Toast for notifications.

## Features

- **Real-time Weather Data**: Get the latest weather updates for your chosen location.
- **Search Functionality**: Search for locations using the Open Meteo API.
- **Dynamic Map**: View the selected location on a Google Map.
- **Notifications**: Receive success and error notifications using the Shadcn Toaster.
- **Theme Toggler**: Switch between light and dark themes.
- **Husky**: Used for Git hooks to enforce code quality checks.

## Tech Stack

- **Next.js**: React framework for building the application.
- **Shadcn**: Used for UI components and toast notifications.
- **Tailwind CSS**: For styling and layout.
- **Material UI Icons**: Used for icons in the application.
- **ESLint**: Ensures code quality and consistency.
- **Prettier**: Formats code to maintain a consistent style.
- **Google Geocode API**: Converts location names into geographical coordinates.
- **Google Maps API**: Displays the selected location on a map.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/).
- You have a Google Maps API key.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/kulembetov/weather-wise.git
cd weather-wise
```

2. Install dependencies:

`yarn install`

3. Create a `.env` file in the root of the project and add your Google Maps API key:

`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=`
,
`NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=`

## Scripts

- `yarn dev`: Start the development server
- `yarn build`: Build the application for production
- `yarn start`: Start the application in production mode
- `yarn lint`: Run ESLint for code quality
- `yarn format`: Format the code using Prettier
- `yarn prepare`: Set up Husky for git hooks

## Usage

1. Start the development server:

`yarn dev`

2. Open your browser and navigate to \`http://localhost:3000\`.

3. Use the search bar to enter a location and view the weather forecast and current conditions.

## Contributing

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/auth\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add authorization'\`).
5. Push to the branch (\`git push origin feature/auth\`).
6. Create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [shadcn UI](https://shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI Icons](https://mui.com/components/material-icons/)
- [Google Maps API](https://developers.google.com/maps)
- [Open-Meteo API](https://open-meteo.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)
