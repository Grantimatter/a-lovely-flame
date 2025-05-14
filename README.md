# **A Lovely Flame**

This repository contains the code for "A Lovely Flame," an e-commerce website built with SvelteKit. The site features product listings, a shopping cart, checkout functionality powered by Stripe, and newsletter sign-ups via SendGrid.

## **Project Structure**

The project follows a standard SvelteKit application structure:  
└── grantimatter-a-lovely-flame/  
    ├── README.md  
    ├── firebase.json             \# Firebase configuration for emulation  
    ├── netlify.toml              \# Netlify deployment configuration  
    ├── package.json              \# Project dependencies and scripts  
    ├── playwright.config.ts      \# Playwright end-to-end testing configuration  
    ├── postcss.config.cjs        \# PostCSS configuration (for Tailwind)  
    ├── svelte.config.js          \# SvelteKit configuration  
    ├── tailwind.config.cjs       \# Tailwind CSS configuration (with DaisyUI and Typography)  
    ├── tsconfig.json             \# TypeScript configuration  
    ├── vite.config.js            \# Vite configuration  
    ├── .eslintignore             \# Files to ignore for ESLint  
    ├── .eslintrc.cjs             \# ESLint configuration  
    ├── .firebaserc               \# Firebase project configuration  
    ├── .npmrc                    \# npm configuration  
    ├── .prettierignore           \# Files to ignore for Prettier  
    ├── .prettierrc               \# Prettier configuration  
    ├── src/                      \# Source code  
    │   ├── app.d.ts              \# TypeScript type definitions for the SvelteKit app  
    │   ├── app.html              \# Main HTML template  
    │   ├── lib/                  \# Project libraries (components, models, stores, utilities)  
    │   │   ├── global.css        \# Global CSS (imports Tailwind)  
    │   │   ├── variables.ts      \# Environment variables  
    │   │   ├── assets/           \# Static assets (images, fonts)  
    │   │   ├── components/       \# Reusable Svelte components  
    │   │   ├── model/            \# Data models (Product, Cart, User, etc.)  
    │   │   ├── stores/           \# Svelte stores (cart, products, session, user)  
    │   │   └── utility/          \# Utility functions (API calls, string helpers)  
    │   ├── params/               \# Custom SvelteKit route parameters  
    │   └── routes/               \# SvelteKit routes (pages and API endpoints)  
    ├── static/                   \# Static files served directly  
    │   └── fonts/                \# Custom fonts  
    ├── styles/                   \# Additional styles  
    │   └── fonts.css             \# Custom font definitions  
    └── tests/                    \# End-to-end tests  
        └── test.ts

## **Technologies Used**

* **Framework:** SvelteKit  
* **Styling:** Tailwind CSS, DaisyUI, @tailwindcss/typography  
* **Language:** TypeScript  
* **Backend/API:** Strapi (external, based on utility code)  
* **Payments:** Stripe  
* **Email/Newsletter:** SendGrid  
* **Testing:** Playwright  
* **Linting/Formatting:** ESLint, Prettier  
* **Local Development Server/Bundler:** Vite  
* **Deployment:** Netlify  
* **Emulation:** Firebase Emulators (Auth, Firestore, Storage, Hosting)

## **Getting Started**

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

* Node.js (LTS recommended)  
* npm or yarn or pnpm

### **Installation**

1. Clone the repository:  
```sh
   git clone https://github.com/Grantimatter/a-lovely-flame  
   cd a-lovely-flame
```

2. Install dependencies:  
```
   npm install  
   \# or yarn install  
   \# or pnpm install
```

3. Set up environment variables. Create a .env file in the root directory based on src/app.d.ts and src/lib/variables.ts. You will need variables for your Strapi API, Stripe secret key, SendGrid API key, and host URL.  
```sh
   VITE_PUBLIC_STRAPI_URI=your_strapi_frontend_url  
   VITE_STRAPI_URL=your_strapi_backend_url  
   VITE_STRAPI_API_URL=your_strapi_api_url  
   VITE_HOST_URL=your_site_host_url # e.g., http://localhost:5173 for local  
   STRIPE_SECRET_KEY=your_stripe_secret_key  
   SENDGRID_API_KEY=your_sendgrid_api_key
```

   *Note: `VITE_PUBLIC_STRAPI_URI`, `VITE_STRAPI_URL`, `VITE_STRAPI_API_URL`, and `VITE_HOST_URL` should likely point to your Strapi instance and the site's URL. `STRIPE_SECRET_KEY` and `SENDGRID_API_KEY` are sensitive and should be handled securely.*

### **Running Locally**

To start the development server:
```sh
npm run dev  
# or yarn dev  
# or pnpm dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The application will be available at http://localhost:5173/ by default.

### **Building**

To create a production build of the app:
```sh
npm run build  
# or yarn build  
# or pnpm build
```

This will generate the production-ready files in the build directory.

### **Previewing the Build**

You can preview the production build locally:
```sh
npm run preview  
# or yarn preview  
# or pnpm preview
```

This will serve the content from the build directory.

### **Running Tests**

End-to-end tests are configured with Playwright. To run the tests:
```sh
npx playwright test  
# or yarn playwright test  
# or pnpm playwright test
```

### **Linting and Formatting**

To check code for linting errors and formatting issues:
```sh
npm run lint  
# or yarn lint  
# or pnpm lint
```

To automatically fix formatting issues:  
```sh
npm run format  
# or yarn format  
# or pnpm format
```

## **Deployment**

This project is configured to be deployed on Netlify. The netlify.toml file specifies the build command (npm run build) and the publish directory (build).  
To deploy:

1. Connect your Git repository to Netlify.  
2. Netlify will automatically detect the netlify.toml file and configure the build and deployment process.  
3. Ensure your environment variables (especially `STRIPE_SECRET_KEY` and `SENDGRID_API_KEY`) are configured in your Netlify site settings under "Build & deploy" \> "Environment variables".

## **Firebase Emulation**

The firebase.json and .firebaserc files are included for local Firebase emulation. This is useful for developing features that interact with Firebase Auth, Firestore, Storage, and Hosting without deploying to a live Firebase project.  
To use the emulators:

1. Make sure you have the Firebase CLI installed (`npm install -g firebase-tools`).  
2. Log in to Firebase: firebase login  
3. Navigate to the project directory.  
4. Run the emulators: firebase emulators:start

This will start the emulators, typically accessible via a web UI at `http://localhost:4000`. The application's Firebase configuration would need to be set up to point to the emulators during local development.
