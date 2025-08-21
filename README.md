# Bella Bella Restaurant Website

An elegant and responsive web application for **Bella Bella**, an Italian restaurant offering online menu browsing, dish customization, and table reservations. The website is designed to provide a seamless and visually appealing experience for customers, highlighting authentic Italian cuisine and warm hospitality.

[Live Demo](https://bella-bella-black.vercel.app/)

---

## Table of Contents

1. [Introduction](#introduction)
2. [screenshots](#screenshots)
3. [Features](#features)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Pages Overview](#pages-overview)
8. [Technologies Used](#technologies-used)
9. [Customization](#customization)
10. [Contact Info](#contact-info)
11. [Contributors](#contributors)
12. [License](#license)

---

## Introduction

Bella Bella is an online platform for showcasing the restaurant’s menu, offering customers the ability to:

- Browse detailed dish descriptions, pricing, and nutritional info.
- Add extra toppings and see updated totals instantly.
- Reserve tables directly online with custom preferences and dietary requests.

---

## Screenshots

![Bella Bell Home Page](/public/screenshots/screenshot-home.png)

![Bella Bell Menu Page](/public/screenshots/screenshot-menu.png)

![Bella Bell Menu Details Page](/public/screenshots/screenshot-menu-details.png)

![Bella Bell Booking Page](/public/screenshots/screenshot-booking.png)

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
│   ├── 📁 data/
│   ├── 📁 images/
│   ├── 📁 screenshots/
├── 📁 src/
│   ├── 📁 assets/
│   ├── 📁 components/
│   │   └── About.jsx
│   │   └── Filter.jsx
│   │   └── Footer.jsx
│   │   └── Form.jsx
│   │   └── Header.jsx
│   │   └── Hero.jsx
│   │   └── MenuItem.jsx
│   │   └── MenusList.jsx
│   │   └── NavLink.jsx
│   │   └── PageHeader.jsx
│   │   └── Specials.jsx
│   │   └── SpecialsCard.jsx
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

- **Frontend**: React, Vite  
- **Styling**: Tailwind CSS
- **Icons & UI Elements**: React Icons, Font Awesome 
- **Hosting**: Vercel

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

## Contributors

- [**Khadar Siciid**](https://github.com/khadaroo)
- [**Sadiya Mahamoud**](https://github.com/sadiya959)

## License

This project is licensed under the **MIT License**.
