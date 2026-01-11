# 📦 Lets Shyp — Package Delivery & Booking App

Live Demo: https://lets-shyp-nu.vercel.app/

Lets Shyp is a **frontend-focused Next.js package delivery booking application** that allows users to create delivery requests by entering pickup & drop locations, selecting package/vehicle options, reviewing pricing, and completing a **mocked payment flow**.  
The project is designed for **UI/UX demonstration, system design clarity, and frontend architecture practice**.

---

## 🚀 Features

✔ Multi-step booking flow  
✔ Pickup & Drop address inputs  
✔ Optional delivery instructions / notes  
✔ Package weight & vehicle selection  
✔ Pricing summary with fare breakdown  
✔ Mocked payment methods (UPI, Card, COD)  
✔ Payment confirmation & booking reference  
✔ Ability to edit previous steps while retaining state  

---

## 🧠 How It Works

1. **Pickup & Drop Details**  
   User enters pickup and drop addresses with optional delivery instructions.

2. **Package / Vehicle Selection**  
   User selects a suitable vehicle based on package weight constraints.

3. **Pricing & Order Summary**  
   Fare is calculated using mocked base fare + distance + add-ons.

4. **Checkout / Payment (Mocked)**  
   User selects a payment method and places the booking.

5. **Booking Confirmation**  
   A success screen with a generated booking reference (e.g. `LS-XXXXXX`) is shown.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js (App Router) | Application framework |
| React | UI & state management |
| Tailwind CSS | Styling |
| Vercel | Deployment |

---

## 🧑‍💻 Setup & Installation

### Prerequisites
- Node.js v18 or higher
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/Shani-001/LetsShyp.git

# Navigate to project folder
cd LetsShyp

# Install dependencies
npm install

# Start development server
npm run dev
