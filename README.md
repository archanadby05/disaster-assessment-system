# Flood Impact Mapping System

This project is a **Django + React** application that visualizes **flood impact severity** using **GeoJSON** and an **interactive map** built with `react-leaflet`. The system processes flood severity data from **TIFF files**, clusters the data using **K-Means and HDBSCAN**, and serves the results as **GeoJSON** for frontend visualization.

## Features

- **Interactive Map**: Displays flood severity using `react-leaflet`.
- **GeoJSON API**: Backend API provides GeoJSON data for the frontend.
- **Flood Data Processing**: Uses K-Means & HDBSCAN for impact clustering.
- **Django Backend**: Manages data processing and API endpoints.
- **React Frontend**: Renders the map and handles user interaction.

## Installation

### Prerequisites
Ensure you have the following installed:
- Python 3.x
- Node.js & npm
- PostgreSQL (or SQLite for development)

### Backend (Django) Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/geospatial-flood-analysis.git
   cd geospatial-flood-analysis/backend
   ```
2. Create a virtual environment and install dependencies:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```
3. Apply migrations and start the server:
   ```sh
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (React) Setup

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

## Workflow

### 1️⃣ Data Processing & Clustering
- **Fetching TIFF Data**: The system retrieves flood-related **TIFF files** from **Google Earth Engine (GEE)** or other satellite data sources.
- **Preprocessing**: TIFF images are processed to extract flood-related features like **water extent, elevation, and vegetation indices**.
- **K-Means Clustering**: The processed data is clustered into different severity levels using **K-Means**, which segments the flood impact zones.
- **HDBSCAN Refinement**: The **HDBSCAN** algorithm refines the clusters by identifying high-density flood-prone regions and filtering noise.

### 2️⃣ GeoJSON API Generation
- The clustered and refined flood impact data is **converted into GeoJSON format**.
- A **Django REST Framework (DRF) API** serves the GeoJSON data to the frontend via a dedicated endpoint.
- The API ensures that the data is efficiently queried and delivered to the frontend.

### 3️⃣ Interactive Visualization
- The **React-Leaflet map** dynamically fetches and loads the GeoJSON flood severity data.
- The map provides **interactive layers** where users can toggle flood severity zones and inspect specific areas.
- Color-coded markers and polygons indicate different levels of flood impact for better decision-making and analysis.

## API Endpoints

| Endpoint               | Method | Description                   |
|------------------------|--------|-------------------------------|
| `/api/flood-data/`    | GET    | Fetches processed GeoJSON data |
| `/api/clustering/`    | POST   | Triggers clustering process   |

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
MIT License. See `LICENSE` for details.
