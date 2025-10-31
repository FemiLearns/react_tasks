App.jsx (main - holds all state)
├── Header.jsx (title, date)
├── AddExpenseForm.jsx (form to add expenses)
├── CategoryFilter.jsx (filter buttons)
├── ExpenseStats.jsx (statistics display)
├── ExpenseList.jsx (maps through expenses)
│   └── ExpenseItem.jsx (individual expense)
└── ExpenseTracker.css (all styles)

---

## ⚙ Features


1. *Add Expenses*
   - Input: description, amount, and category  
   - Categories: Food, Transport, Bills, Entertainment, Others  
   - Validation ensures no empty fields or zero amounts  

2. *Display Expenses*
   - View all expenses in a list  
   - Each shows: description, amount (₦), category, and date  
   - Category-based color coding  

3. *Manage Expenses*
   - Edit and delete existing expenses  

4. *Filter by Category*
   - Quickly filter to show expenses in specific categories  

5. *Statistics*
   - Total amount spent  
   - Number of expenses  
   - Highest single expense  
   - Breakdown by category  




### ExpenseTracker.jsx
- The main component that holds all states (expenses, filters, stats).
- Passes data and handlers down to child components via props.

### AddExpenseForm.jsx
- Handles adding a new expense.
- Validates inputs and sends data to App.jsx.

### ExpenseList.jsx & ExpenseItem.jsx
- Display the list of expenses.
- ExpenseItem supports edit and delete actions.

### CategoryFilter.jsx
- Lets you select categories to filter expenses.

### ExpenseStats.jsx
- Displays totals and summary statistics.

### Header.jsx
- Shows the app title and current date.

### index.css
- Handles all styles (colors, layout, responsiveness).

---

## 💻 Technologies Used
- *React.js* – Frontend framework  
- *JavaScript (ES6+)*  
- *CSS3* – External stylesheet for layout and styling  
- *Date API* – For timestamps
