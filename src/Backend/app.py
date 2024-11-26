from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.models import save_model

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the LSTM model
model = load_model('lstm.h5')
save_model(model, 'lstm_retrained.h5')

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

        # Make a prediction using the loaded model
        prediction = model.predict(input_data)
        print("Prediction:", prediction)

        # Return the prediction as a JSON response
        return jsonify({"prediction": prediction.tolist()})
    
    except Exception as e:
        print("Error during prediction:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Run the app on host 0.0.0.0 to allow external connections
    app.run(host="0.0.0.0", port=5000, debug=True)