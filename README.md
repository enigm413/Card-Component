## Project Description

A simple profile card create using React

## React Concept Covered In Projects

The goal of the project is used to teaches the following topic

- Importing Modules
- Defining Components
- Define the nested components
- Passing props to components
- Recieving props that are passed

## Project Explanation

### **Dependencies and Styling**

- It imports React and ReactDOM modules from React libraries.
- It imports an external CSS file (**`index.css`**) for styling.

### **Components**

- **App:** The main component **`App()`** renders the profile card containing an avatar, introduction, and a list of skills using the **`<Avatar />`**, **`<Intro />`**, and **`<SkillList />`** components.
- **Avatar:** Renders the profile image.
- **Intro** **:** Renders the persons name & brief introduction
- **SkillList:** Renders an unordered list (**`<ul>`**) containing different skills using the **`Skill`** component
- **Skill :** Render individual skills as list items (**`<li>`**), each with its name, emoji, and associated color:

### **Rendering**

- It creates a root container element using **`ReactDOM.createRoot`**.
- It renders the **`App`** component into the root container element using **`root.render(<App />)`**.
