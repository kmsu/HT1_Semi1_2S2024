from flask import Flask, jsonify

app = Flask(__name__)

# Endpoint 1: Verificación de estado
@app.route('/check', methods=['GET'])
def check():
    return 'OK', 200

# Endpoint 2: Retorna un objeto JSON
@app.route('/', methods=['GET'])
def index():
    response_object = {
        "Instancia": "Instancia #2 - API #2",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Kevin Samayoa - 200915348"
    }
    return jsonify(response_object)

if __name__ == '__main__':
    # Configuración para escuchar en todas las interfaces de red en el puerto 5000
    #app.run(port=8080)
    app.run(host='0.0.0.0', port=8080)
