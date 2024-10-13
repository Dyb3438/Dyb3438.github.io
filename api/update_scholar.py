from http.server import BaseHTTPRequestHandler
import os


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write(b"hello world" + b'\n')
        self.wfile.write((os.path.join(os.path.dirname(__file__))).encode('utf-8') + b'\n')
        with open(os.path.join(os.path.dirname(__file__), '../', "./scholar/scholar_results.json"), 'rb') as f:
            for line in f.readlines():
                self.wfile.write(line)
                self.wfile.write(b"\n")
        
        with open(os.path.join(os.path.dirname(__file__), '../', "./public/scholar/scholar_results.json"), 'rb') as f:
            for line in f.readlines():
                self.wfile.write(line)
                self.wfile.write(b"\n")
        # self.wfile.write('Hello, world test!'.encode('utf-8'))
        # if not os.path.exists('test.txt'):
        #     with open('test.txt', 'w') as f:
        #         f.write('abcded')
        #     self.wfile.write('create file!\n'.encode('utf-8'))
        
        # with open('test.txt', 'rb') as f:
        #     self.wfile.write(f.readline())
        # print(os.path.abspath('./'))
        # print(os.path.join(os.path.dirname(__file__)))
        # with open(os.path.join(os.path.dirname(__file__), 'static_file.txt'), 'rb') as f:
        #     self.wfile.write(f.readline())
        return
