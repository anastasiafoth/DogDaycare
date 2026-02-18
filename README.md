# Dog Daycare 

A simple and React application for managing a dog daycare registry. Add dogs to your daycare list, view them with adorable placeholder images, and persist your data locally.

##  Features

- **Add Dogs**: Easily add new dogs to your daycare registry with their names
- **Visual Display**: Each dog gets a unique placeholder image from [PlaceDog.net](https://placedog.net/)
- **Toggle View**: Show or hide the dog list with a simple toggle button
- **Local Storage**: Your dog list is automatically saved to browser localStorage
- **Responsive Design**: Clean, modern interface with gradient styling

##  Tech Stack

- **React 19.2.0** - Modern React with hooks
- **Vite 7.2.4** - Fast development server and build tool
- **CSS3** - Custom styling with gradients and fonts
- **ESLint** - Code quality and consistency

##  Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anastasiafoth/DogDaycare.git
cd DogDaycare
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
DogDaycare/
├── src/
│   ├── App.jsx          # Main application component
│   ├── Dog.jsx          # Individual dog component
│   ├── Dogs.jsx         # Dog list component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── assets/          # Static assets
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Usage

1. **Adding a Dog**: Type a dog's name in the input field and click "Add"
2. **Viewing Dogs**: Click "Show Dogs" to toggle the visibility of your dog list
3. **Data Persistence**: Your dog list is automatically saved and will persist between sessions

## Components

### App.jsx
The main application component that manages:
- Dog list state with localStorage integration
- Form handling for adding new dogs
- Toggle functionality for showing/hiding the dog list

### Dog.jsx
Individual dog component that displays:
- A unique placeholder image for each dog
- The dog's name

### Dogs.jsx
Container component that renders the list of dogs using the Dog component.

## Styling

The application features:
- **Gradient Background**: Orange to yellow gradient for a warm, playful feel
- **Nunito Font**: Clean, friendly typography from Google Fonts
- **Responsive Layout**: Centered design with proper spacing
- **Modern UI**: Rounded corners and subtle shadows

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

This project uses:
- **ESLint** for code linting and consistency
- **Vite** for fast development and optimized builds
- **React Hooks** (useState, useEffect) for state management

## Images

Dog images are provided by [PlaceDog.net](https://placedog.net/), a service that provides random dog placeholder images. Each dog gets a unique image based on their index in the list.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made for dog lovers everywhere! 🐾
