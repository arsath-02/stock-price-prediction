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
import ngrok
import uvicorn

app = Flask(__name__)
CORS(app)  

ngrok.set_auth_token("2a1iGE4Q5SDAF4mhdAVXeNptwJd_2GBcW2ACMaj2JoAJy8Gtt")
listener = ngrok.forward("127.0.0.1:5000", authtoken_from_env=True, domain="apparent-wolf-obviously.ngrok-free.app")


model = None

if os.path.exists('lstm_retrained.h5'):
    model = load_model('lstm_retrained.h5')
else:

    model = create_and_train_model(X_train, y_train, X_test, y_test)
    model.save('lstm_retrained.h5') 

@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    if "input" not in data:
        return jsonify({"error": "Invalid input, 'input' key is missing"}), 400

    input_list = data["input"]
    print("Received input data:", input_list)

    try:

        input_data = np.array(input_list).reshape(1, len(input_list), 1)
        print("Reshaped input data:", input_data.shape)

 
        prediction = model.predict(input_data)
        print("Prediction:", prediction)


        return jsonify({"prediction": prediction.tolist()})
    
    except Exception as e:
        print("Error during prediction:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    public_url = ngrok.connect(5000)
    print(f"Public URL: {public_url}")
    app.run(host="0.0.0.0", port=5000)
