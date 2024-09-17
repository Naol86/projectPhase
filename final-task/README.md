
# Job Posting Cards and Dashboard using Next.js

This project implements a job posting dashboard using Next.js. The application is structured using reusable components to ensure modularity and ease of maintenance.

### Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Screenshots](#screenshots)

### Features

- Display job postings in card format.
- Dashboard to manage job postings.
- Responsive design.
- **Bookmark Button:** Allows users to bookmark job postings for easy access later.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/naol86/projectPhase.git
   cd final-task
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Usage

After installation, you can start the application and view the job postings on the dashboard. You can add, edit, delete, and bookmark job postings from the dashboard.

### Components

The project is structured using the following main components:

1. **JobCard.js:** Displays individual job posting details, including a bookmark button.
2. **JobList.js:** Lists all job postings using the JobCard component.
3. **BookmarkButton.js:** Allows users to bookmark and unbookmark job postings.

These components are located in the `components` directory and can be reused across different parts of the application.

### Screenshots

**Job Posting Dashboard:**

![Dashboard](/demo/demo-1.png)

**Job Posting Cards:**

![Job Cards](./demo/demo-1.png)
