
# Tech Forward: Event Talks Website

This project is a simple, serverless, single-page website designed to display the schedule for a one-day technical conference. It is built with standard HTML, CSS, and JavaScript, and uses a Node.js script for a simple build process that compiles all assets into a single `index.html` file.

## Objective

The main goal is to provide a clean, fast, and easy-to-use interface for event attendees to view the day's schedule. Users can see the timings for all talks, read their descriptions, and filter the talks based on specific categories (e.g., "Frontend", "AI", "Security").

## Features

- **Dynamic Schedule**: The event schedule is generated dynamically from a JSON data source.
- **Filter by Category**: A search bar allows users to filter the talks in real-time.
- **Serverless**: The final output is a single `index.html` file that can be hosted on any static hosting service or opened locally in a browser.
- **Responsive Design**: The layout is designed to work on both desktop and mobile devices.

## Project Structure

```
.
├── build.js              # Node.js script to compile the project into a single HTML file.
├── data/
│   └── talks.json        # The source data for all event talks.
├── dist/
│   └── index.html        # The final, compiled, serverless output file.
├── src/
│   ├── app.js            # Main JavaScript for schedule generation and filtering.
│   ├── index.html        # The base HTML template.
│   └── style.css         # All CSS styles for the application.
├── .gitignore            # Specifies files to be ignored by Git.
└── package.json          # Project metadata.
```

## Getting Started

Follow these instructions to build and run the project locally.

### Prerequisites

You will need the following software installed on your machine:
- [Node.js](https://nodejs.org/) (which includes npm)
- [Python 3](https://www.python.org/downloads/)

### Installation & Building

1.  **Clone the repository (or use the existing local files):**
    ```sh
    git clone https://github.com/ajeyob/ajeyo-event-talks-app.git
    cd ajeyo-event-talks-app
    ```
2.  **Build the application:**
    Run the Node.js build script. This will take all the files from `src/` and `data/` and compile them into `dist/index.html`.
    ```sh
    node build.js
    ```

### Running Locally

1.  **Start the local web server:**
    Use the simple Python web server to serve the `dist` directory.
    ```sh
    python3 -m http.server 8000 --directory dist
    ```

2.  **View the website:**
    Open your browser and navigate to **[http://localhost:8000](http://localhost:8000)**.
