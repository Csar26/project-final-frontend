# Novabeat - Artist Information Platform

## Project Overview
Novabeat is a React-based web application that connects with the Spotify API to provide detailed information about music artists. The application manages authentication tokens and displays comprehensive artist data in an intuitive interface.

## Features
- Artist search functionality
- Display of artist details including:
  - Profile information
  - Follower count
  - Genres
  - Artist images
- Responsive design for mobile and desktop viewing
- Token-based authentication with Spotify API

## Technical Stack
- React.js
- Spotify Web API
- CSS3 for styling
- React Router for navigation

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Spotify Developer account and API credentials

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Csar26/project-final-frontend.git
cd novabeat
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Spotify API credentials:
```
REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret
```

4. Start the development server:
```bash
npm start
```

## API Integration
The application uses two types of tokens from the Spotify API:
1. Client Credentials Token - For application authentication
2. Access Token - For making API requests

### Token Management
- The application automatically handles token generation and renewal
- Tokens are stored securely in localStorage
- Token expiration is handled automatically

## Project Structure
```
src/
├── components/
│   ├── About/
│   ├── Header/
│   ├── Main/
│   ├── Navigation/
│   └── SearchForm/
├── utils/
│   └── ThirdPartyApi.js
└── App.js
```

## Key Components

### SearchForm
- Handles artist search functionality
- Manages search input state
- Triggers API calls

### InfoDisplay
- Displays artist information
- Handles data formatting and presentation
- Manages loading states

### ThirdPartyApi
- Manages API connections
- Handles token generation and management
- Processes API responses

## Error Handling
- Token expiration and renewal
- Network request failures
- Invalid search queries
- Missing artist data

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
- Spotify Web API
- React Documentation
- [Add any other resources or acknowledgments]

## Autor
Cesar Vivas.
Web Developer

