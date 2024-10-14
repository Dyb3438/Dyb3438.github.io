from http.server import BaseHTTPRequestHandler
import os
import json
from .vercel_blob import blob_store

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write(b"hello world" + b'\n')
        self.wfile.write((os.path.join(os.path.dirname(__file__))).encode('utf-8') + b'\n')

        blobs = blob_store.list({
            'limit': '5',
        })

        self.wfile.write(json.dumps(blobs))
        return
