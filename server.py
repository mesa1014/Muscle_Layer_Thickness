import sys
import time
import webbrowser
print(sys.version_info.major)
if sys.version_info.major == 3:
    print('Python3')
    import threading
    from http.server import HTTPServer, SimpleHTTPRequestHandler

    ip = "127.0.0.1"
    port = 3600
    url = f"http://{ip}:{port}"


    def start_server():
        server_address = (ip, port)
        httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
        httpd.serve_forever()


    threading.Thread(target=start_server).start()
    webbrowser.open_new(url)

    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            sys.exit(0)

else:
    print('Python2')
    import thread
    import BaseHTTPServer, SimpleHTTPServer

    def start_server():
        httpd = BaseHTTPServer.HTTPServer(('127.0.0.1', 3600), SimpleHTTPServer.SimpleHTTPRequestHandler)
        httpd.serve_forever()

        thread.start_new_thread(start_server,())
        url = 'http://127.0.0.1:3600'
        webbrowser.open_new(url)

        while True:
            try:
                time.sleep(1)
            except KeyboardInterrupt:
                sys.exit(0)
