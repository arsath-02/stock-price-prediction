from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model, Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.optimizers import Adam
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import keras_tuner as kt
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set up the pipeline - Data Preprocessing + Model Training + Hyperparameter Tuning
def build_model(hp):
    model = Sequential()
    
    # Tune the number of LSTM layers and units in each layer
    model.add(LSTM(units=hp.Int('units', min_value=32, max_value=256, step=32),
                   activation='relu',
                   input_shape=(None, 1),
                   return_sequences=True))
    model.add(Dropout(0.2))
    
    model.add(LSTM(units=hp.Int('units', min_value=32, max_value=256, step=32),
                   activation='relu',
                   return_sequences=False))
    model.add(Dropout(0.2))
    
    # Add a Dense output layer
    model.add(Dense(1, activation='sigmoid'))  # Assuming binary classification, adjust for your case
    
    # Tune the optimizer's learning rate
    model.compile(optimizer=Adam(learning_rate=hp.Float('learning_rate', min_value=1e-5, max_value=1e-2, sampling='log')),
                  loss='binary_crossentropy',  # Change based on your problem (binary or categorical)
                  metrics=['accuracy'])
    
    return model

def create_and_train_model(X_train, y_train, X_test, y_test):
    tuner = kt.Hyperband(
        build_model,
        objective='val_accuracy',
        max_epochs=10,
        factor=3,
        directory='my_dir',
        project_name='stock_prediction'
    )

    # Start hyperparameter search
    tuner.search(X_train, y_train, epochs=10, validation_data=(X_test, y_test))

    # Get the best model
    best_model = tuner.get_best_models(num_models=1)[0]
    return best_model

# Dummy data for example purposes
# Replace with your actual data loading and preprocessing code
data = np.random.rand(100, 10)
labels = np.random.randint(2, size=100)

# Preprocess the data
scaler = StandardScaler()
data = scaler.fit_transform(data)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, random_state=42)

# Load the trained model or retrain with hyperparameter tuning
model = None

if os.path.exists('lstm_retrained.h5'):
    model = load_model('lstm_retrained.h5')
else:
    # If model does not exist, perform hyperparameter tuning and retrain
    model = create_and_train_model(X_train, y_train, X_test, y_test)
    model.save('lstm_retrained.h5')  # Save the best model after retraining

# Prediction endpoint
@app.route("/predict", methods=["POST"])
def predict():
    # Get the JSON request data
    data = request.get_json()

    if "input" not in data:
        return jsonify({"error": "Invalid input, 'input' key is missing"}), 400

    input_list = data["input"]
    print("Received input data:", input_list)

    try:
        # Reshape the input data to match the LSTM model's expected input format
        input_data = np.array(input_list).reshape(1, len(input_list), 1)
        print("Reshaped input data:", input_data.shape)

        # Make a prediction using the loaded or retrained model
        prediction = model.predict(input_data)
        print("Prediction:", prediction)

        # Return the prediction as a JSON response
        return jsonify({"prediction": prediction.tolist()})
    
    except Exception as e:
        print("Error during prediction:", str(e))
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
