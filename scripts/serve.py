#!/usr/bin/env python3
"""
Simple zero-dependency live preview server for Portfolio Maker.
Serves any portfolio directory over localhost and automatically opens the default web browser.

Usage:
  python scripts/serve.py
  python scripts/serve.py templates/developer-bento
  python scripts/serve.py templates/video-editor-showreel
  python scripts/serve.py templates/creative-minimalist
"""

import http.server
import socketserver
import webbrowser
import sys
import os
from pathlib import Path

DEFAULT_PORT = 3000

def run_server():
    # Target directory to serve
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    target_path = Path(target_dir).resolve()

    if not target_path.exists():
        print(f"Error: Target path '{target_path}' does not exist.")
        sys.exit(1)

    os.chdir(target_path)
    port = DEFAULT_PORT

    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def end_headers(self):
            # Disable aggressive caching for live development
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            super().end_headers()

    while port < DEFAULT_PORT + 50:
        try:
            with socketserver.TCPServer(("", port), CustomHandler) as httpd:
                url = f"http://localhost:{port}"
                print("\n" + "=" * 60)
                print(f"  🎨 Portfolio Maker Local Preview")
                print(f"  📂 Serving: {target_path}")
                print(f"  🌐 URL:     {url}")
                print("=" * 60 + "\n")
                print("Press Ctrl+C to stop the server.\n")
                webbrowser.open(url)
                httpd.serve_forever()
        except OSError:
            port += 1

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\n\nServer stopped. Happy building!")
