from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from tensorflow.keras.models import load_model
import numpy as np
import ngrok
import uvicorn

class PredictRequest(BaseModel):
    input: list

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = load_model('lstm.h5')

ngrok.set_auth_token("2a1iGE4Q5SDAF4mhdAVXeNptwJd_2GBcW2ACMaj2JoAJy8Gtt")
listener = ngrok.forward("127.0.0.1:5000", authtoken_from_env=True, domain="apparent-wolf-obviously.ngrok-free.app")

@app.post("/predict")
def predict(request: PredictRequest):
    input_list = request.input
    print("Received input data:", input_list)

    try:
        input_data = np.array(input_list).reshape(1, len(input_list), 1) 
        print("Reshaped input data:", input_data.shape)

        prediction = model.predict(input_data)
        print("Prediction:", prediction)
        return {"prediction": prediction.tolist()}
    
    except Exception as e:
        print("Error during prediction:", str(e))
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    public_url = ngrok.connect(5000)
    print(f"Public URL: {public_url}")
    uvicorn.run(app, host="0.0.0.0", port=5000)
