# TODO List Application

This is a React-based TODO list application with persistent data storage using Firestore. The application allows users to add, view, remove, and edit tasks through an interactive web interface.

## Features

1. **Add Task**: Create a new task and store it in Firestore.
2. **View Task**: Display all tasks from Firestore with their details.
3. **Remove Task**: Delete a task from Firestore by its ID.
4. **Edit Task**: Update the title of a task in Firestore by its ID.
5. **Persistent Data**: All tasks are stored in Firestore, ensuring data is retained across sessions.

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Naol86/projectPhase.git
   ```
2. **Navigate to the Project Directory**:
   ```sh
   cd task-4
   ```
3. **Install the Dependencies**:

   ```sh
   npm install
   ```

4. **Set Up Firestore**:
   - Create a Firebase project and set up Firestore.
   - Add your Firebase configuration to the project. Replace the placeholder values in `src/firebaseConfig.js` with your Firebase project details.

## Usage

1. **Run the Application**:

   ```sh
   npm start
   ```

2. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to use the TODO list app.

3. **Follow the On-Screen Instructions**:
   - **Add a Task**: Enter the task title and click "Add Task" to save it to Firestore.
   - **View Tasks**: View all tasks listed on the main page.
   - **Remove a Task**: Click the "Delete" button next to a task to remove it from Firestore.
   - **Edit a Task**: Click the "Edit" button next to a task to update its title.

## Demo

Below are some screenshots demonstrating the usage of the TODO list application.

### Welcome Screen

![Welcome Screen](https://github.com/Naol86/projectPhase/blob/main/task-4/images/demo-1.png)
_The welcome screen presents the main menu with options to add, view, remove, edit tasks, or exit the application._

### Adding a Task

![Adding a Task](https://github.com/Naol86/projectPhase/blob/main/task-4/images/demo-2.png)
_After selecting the option to add a task, the user is prompted to enter the task title. The task is then added to Firestore and confirmed._

### Viewing Tasks

![Viewing Tasks](https://github.com/Naol86/projectPhase/blob/main/task-4/images/demo-3.png)
_The task list is displayed with each task's ID and title, fetched from Firestore._

### Removing a Task

![Removing a Task](https://github.com/Naol86/projectPhase/blob/main/task-4/images/demo-4.png)
_To remove a task, the user clicks the "Delete" button next to the task. The task is then removed from Firestore, and a confirmation message is displayed._

### Editing a Task

![Editing a Task](https://github.com/Naol86/projectPhase/blob/main/task-4/images/demo-5.png)
_When editing a task, the user is edit task in place . The task's title is updated in Firestore, and a confirmation message is shown._
