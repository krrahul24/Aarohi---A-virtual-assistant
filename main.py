import os
import eel
eel.init("8.Virtual Assistant")
os.system('start chrome.exe --app="http://127.0.0.1:5500/index.html"')
eel.start("index.html", mode=None, host='localhost', block=True)