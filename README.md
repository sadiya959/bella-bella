# Bella Bella Restaurant Website

An elegant and responsive web application for **Bella Bella**, an Italian restaurant offering online menu browsing, dish customization, and table reservations. The website is designed to provide a seamless and visually appealing experience for customers, highlighting authentic Italian cuisine and warm hospitality.


[Live Demo](https://bella-bella-black.vercel.app/)

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Pages Overview](#pages-overview)
7. [Technologies Used](#technologies-used)
8. [Customization](#customization)
9. [Contact Info](#contact-info)
10. [License](#license)

---

## Introduction

Bella Bella is an online platform for showcasing the restaurant’s menu, offering customers the ability to:

- Browse detailed dish descriptions, pricing, and nutritional info.
- Add extra toppings and see updated totals instantly.
- Reserve tables directly online with custom preferences and dietary requests.

---

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile.
- **Dynamic Menu Pages**: Organized by categories (Antipasti, Pasta, Pizza, Secondi Piatti, Dolci).
- **Dish Details**:
  - Price display with optional extras.
  - Ingredient tags and allergen warnings.
  - Nutritional information panel.
- **Reservation System**: Select date, time, number of guests, and add special requests.
- **Business Information**: Contact details, opening hours, and restaurant highlights.
- **Brand Storytelling**: Sections showcasing expert chefs, fresh ingredients, and romantic atmosphere.

---

## Project Structure

```
📁 bellabella/
├── 📁 public/
│   ├── favicon.ico
│   ├── screenshot-home.png
│   └── screenshot-menu.png
│   └── screenshot-menu-details.png
│   └── screenshot-booking.png
├── 📁 src/
│   ├── 📁 assets/
│   ├── 📁 components/
│   │   └── Footer.jsx
│   │   └── Header.jsx
│   ├── 📁 data/
│   │   └── menu.json
│   ├── 📁 pages/
│   │   └── Booking.jsx
│   │   └── Home.jsx
│   │   └── Menu.jsx
│   │   └── MenuDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bella-vista.git
   ```
2. Navigate to the project folder:

   ```bash
   cd bella-vista
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- **Menu Browsing**: Navigate to `/menu` to explore all dishes.
- **View Dish Details**: Click “View Details” on any item.
- **Make a Reservation**: Go to `/booking`, fill in the form, and submit.
- **Contact Info**: Located in the footer across all pages.

---

## Pages Overview

1. **Home** – Introduction to the restaurant and quick navigation links.
2. **Menu** – Category filters and dish listing.
3. **Dish Details** – Pricing, extras, nutritional info, allergens.
4. **Booking** – Reservation form with preferred time slots and guest count.
5. **Why Choose Us** – Highlights of Bella Vista’s unique qualities.
6. **Footer** – Contact info, opening hours, and brand tagline.

---

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (likely React or Vue if dynamic behavior is included)
- **Styling**: Tailwind CSS / Custom SCSS (based on the design)
- **Icons & UI Elements**: Material Icons or custom SVGs
- **Hosting**: Netlify / Vercel / Static hosting (to be specified)

---

## Customization

- **Menu Items**: Edit `menu.json` or equivalent data file.
- **Brand Colors**: Update in `styles.css` or Tailwind config.
- **Contact Info**: Modify footer component.
- **Opening Hours**: Change in footer template.

---

## Contact Info

**Bella Bella**  
📍 123 Italian Street, Food City, FC 12345  
📞 (555) 123-4567  
✉️ info@bellavista.com

---

## License

This project is licensed under the **MIT License**.
