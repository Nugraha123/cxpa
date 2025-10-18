from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# 🔗 Ganti URL MongoDB sesuai milikmu
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://rzynugraha30:semangat123@cluster0.8foxpcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
client = MongoClient(MONGO_URI)
db = client["cxpa_db"]
collection = db["messages"]

@app.route("/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        message = data.get("message")

        if not all([name, email, message]):
            return jsonify({"success": False, "error": "Semua field wajib diisi"}), 400

        # Simpan ke MongoDB
        collection.insert_one({
            "name": name,
            "email": email,
            "message": message
        })

        return jsonify({"success": True, "message": "Pesan berhasil disimpan ke MongoDB!"}), 201

    except Exception as e:
        print("Error:", e)
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
