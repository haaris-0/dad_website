from flask import Flask, render_template, request, jsonify, send_from_directory
import os

app = Flask(__name__)

# Assuming your services and appointments data are stored in memory
services = [
    {"name": "Lip Filler", "description": "Enhance your lips."},
    {"name": "Dermaplane", "description": "Exfoliate and remove dead skin cells."},
    # Add other services
]

appointments = []

@app.route('/')
def index():
    return render_template('index.html', services=services)

@app.route('/login', methods=['POST'])
def login():
    # Add your authentication logic here
    return jsonify({'message': 'Login functionality here'})

@app.route('/schedule', methods=['POST'])
def schedule_appointment():
    # Add your appointment scheduling logic here
    appointment_data = request.json
    appointments.append(appointment_data)
    return jsonify({'message': 'Appointment scheduling functionality here'})

# Add a route to serve static files directly
@app.route('/static/<path:filename>')
def serve_static(filename):
    root_dir = os.getcwd()
    return send_from_directory(os.path.join(root_dir, 'static'), filename)

if __name__ == '__main__':
    app.run(debug=True)
