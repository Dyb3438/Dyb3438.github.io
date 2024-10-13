from http.server import BaseHTTPRequestHandler
import os
import json

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write(b"hello world" + b'\n')
        self.wfile.write((os.path.join(os.path.dirname(__file__))).encode('utf-8') + b'\n')
  
        # with open(os.path.join(os.path.dirname(__file__), '../', "./scholar/scholar_results.json"), 'rb') as f:
        #     for line in f.readlines():
        #         self.wfile.write(line)
        #         self.wfile.write(b"\n")
        
        # with open(os.path.join(os.path.dirname(__file__), '../', "./public/scholar/scholar_results.json"), 'rb') as f:
        #     for line in f.readlines():
        #         self.wfile.write(line)
        #         self.wfile.write(b"\n")
        filename = os.path.join(os.path.dirname(__file__), 'tmp.txt')
        if os.path.exists(filename) is False:
            data = {'count': 1}
        else:
            try:
                with open(filename, 'rb') as f:
                    data = json.load(f.read())
                data['count'] += 1
            except:
                self.wfile.write(b"error")
            
        with open(filename, 'wb') as f:
            f.write(json.dumps(data))

        self.wfile.write(json.dumps(data))
        return
