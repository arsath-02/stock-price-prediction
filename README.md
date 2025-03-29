# Stock Price Prediction App

## 📌 Overview

This project is a **Stock Price Prediction App** that predicts the next day's stock price based on the last 5 days' prices. It features a clean UI with a **React frontend**, a **Flask backend for predictions**, and integrates **Tailwind CSS** for styling.

## ✨ Features

- 🌟 User-friendly interface
- 📈 Stock price prediction using a trained model
- 🎨 Beautiful UI with Tailwind CSS
- 🔄 Real-time API call to Flask backend
- 📊 Display predicted stock price dynamically

---

## 🛠️ Tech Stack

### **Frontend:**

- React.js (Vite)
- Tailwind CSS
- Axios (for API calls)

### **Backend:**

- Flask (Python)
- NumPy, Pandas (Data Processing)
- TensorFlow/PyTorch (Model Prediction)

### **Database (Optional):**

- MongoDB/PostgreSQL (For future enhancements like user history)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/arsath-02/stock-price-prediction.git
cd stock-price-prediction
```

### 2️⃣ Install Dependencies

#### 📌 Frontend Setup

```bash
cd frontend
npm install
```

#### 📌 Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

### 3️⃣ Run the Application

#### 🏃 Start Backend (Flask API)

```bash
cd backend
python app.py  # or flask run
```

#### 🏃 Start Frontend (React App)

```bash
cd frontend
npm run dev
```

---

## 🖼️ Project Structure

```bash
📂 stock-price-prediction/
 ├── 📂 frontend/     # React Frontend
 │   ├── 📂 src/
 │   │   ├── 📂 components/
 │   │   ├── 📜 App.js
 │   │   ├── 📜 index.js
 │   │   ├── 📜 PredictionPage.js
 │   ├── 📜 package.json
 │   ├── 📜 tailwind.config.js
 │   ├── 📜 vite.config.js
 │
 ├── 📂 backend/      # Flask Backend
 │   ├── 📜 app.py    # Flask API
 │   ├── 📜 model.h5 # Trained ML Model
 │   ├── 📜 requirements.txt
 │
 ├── 📜 README.md
 ├── 📜 .gitignore
 ├── 📜 package.json
```

---

## 🎯 Usage

1. Enter the last 5 stock prices in the input fields.
2. Click on **"Predict"**.
3. The model will process the input and display the predicted stock price.

---

## 📌 Environment Variables

Create a `.env` file in the **backend/** directory and set:

```env
FLASK_ENV=development
SECRET_KEY=your_secret_key
```

---

## 🛠️ Deployment

To deploy the **frontend**:

```bash
npm run build
```

For **backend**, use services like Render, AWS, or Heroku.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request 🚀

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 📧 Contact

For any issues or queries, feel free to reach out:

- ✉️ Email: [arsathh02@gmail.com](mailto:arsathh02@gmail.com)
- 🔗 GitHub: [arsath-02](https://github.com/arsath-02)

🚀 Happy Coding! 🎯
