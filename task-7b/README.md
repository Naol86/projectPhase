Here’s how to update the README to reflect that the videos are located in the public folder of your project:

---

# Job Posting Cards and Dashboard using React

This project implements a job posting dashboard using React. The application is structured using reusable components to ensure modularity and ease of maintenance. Now, it includes data fetching from a backend using Redux Toolkit Query and displays a skeleton loader while data is loading.

### Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Videos](#videos)

### Features

- Display job postings in card format.
- Dashboard to manage job postings.
- Responsive design.
- Fetch data from the backend using Redux Toolkit Query.
- Skeleton loader while data is loading.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Naol86/projectPhase.git
   cd task-7b
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

After installation, you can start the application and view the job postings on the dashboard. You can add, edit, and delete job postings from the dashboard.

### Components

The project is structured using the following main components:

1. **JobCard.js:** Displays individual job posting details.
2. **JobList.js:** Lists all job postings using the JobCard component.
3. **MainPageSkeleton.js:** Displays a skeleton loader while the page is loading.
4. **Header.js:** Displays the header of the application.
5. **SelectSortedBy.js:** Dropdown to sort job postings.

These components are located in the `components` directory and can be reused across different parts of the application.

### Redux Toolkit Query

The project uses Redux Toolkit Query to handle data fetching from the backend. It provides a simple and efficient way to manage server state.

### ScreenShots

**Job Posting Dashboard:**

#### skeleton of landing page

![skeleton of landing page](https://github.com/Naol86/projectPhase/blob/main/task-7b/public/demo/demo-1.png)

#### landing page

![landing page](https://github.com/Naol86/projectPhase/blob/main/task-7b/public/demo/demo-2.png)

#### skeleton of derail page

![skeleton of detail page](https://github.com/Naol86/projectPhase/blob/main/task-7b/public/demo/demo-3.png)

#### detail page

![detail page](https://github.com/Naol86/projectPhase/blob/main/task-7b/public/demo/demo-4.png)

#### not found page

![not found page](https://github.com/Naol86/projectPhase/blob/main/task-7b/public/demo/demo-9.png)

#### responsive on mobile

![responsive](https://github.com/Naol86/projectPhase/blob/main/task-7b/public/demo/demo-6.png)
