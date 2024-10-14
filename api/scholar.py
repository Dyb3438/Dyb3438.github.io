from http.server import BaseHTTPRequestHandler
import os
import json
from .vercel_blob import blob_store

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()

        blobs = blob_store.list({'prefix': 'scholar_info.json'})

        self.wfile.write(json.dumps(blobs).encode('utf-8'))

        blobs = blob_store.list({'prefix': 'scholar_info2.json'})

        self.wfile.write(json.dumps(blobs).encode('utf-8'))
        return
    

