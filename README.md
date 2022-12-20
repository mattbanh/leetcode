# leetcode

## Introduction

I created this project to house my leetcode solutions. This project is my first project during my post-bootcamp bootcamp period and will be ongoing while I look for work as a developer.

## My Steps in Getting Started

**Deciding where to start:**
I explored options such as Remix and Create-React-App to start the project but decided to use Vite because I wanted to become more familiar with it.
I chose to use Tailwind CSS for styling for the same reason.

**Steps:**

1. Create Vite project

```bash
$ npm create vite@latest
```

2. Install dependencies

```bash
$ npm install
```

3. Install Tailwind CSS

```bash
$ npm install -D tailwindcss postcss autoprefixer

$ npx tailwindcss init -p
```

4.  Configure template paths

    > /\*_ @type {import('tailwindcss').Config} _/
    > module.exports = {
    > content: [

        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

5.  Add Tailwind directives to index.css

    > @tailwind base;
    > @tailwind components;
    > @tailwind utilities;

6.  Install react-router-dom

```bash
npm install react-router-dom localforage match-sorter sort-by
```
