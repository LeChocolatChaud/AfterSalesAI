from http.server import ThreadingHTTPServer
from server import WebHandler, APIHandler
from threading import Thread

EVENTS = []

def run_web_server():
    web_server = ThreadingHTTPServer(('localhost', 8000), WebHandler)
    try:
        web_server.serve_forever()
    except KeyboardInterrupt:
        web_server.shutdown()

def run_api_server():
    api_server = ThreadingHTTPServer(('localhost', 8001), APIHandler)
    try:
        api_server.serve_forever()
    except KeyboardInterrupt:
        api_server.shutdown()

if __name__ == "__main__":
    web_server_thread = Thread(target=run_web_server)
    api_server_thread = Thread(target=run_api_server)
    web_server_thread.start()
    api_server_thread.start()
    print("Server started")
