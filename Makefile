gdrive:
	python3 gdrive/gdrive.py
freeze:
	pip freeze > requirements.txt
init:
	pip install -r requirements.txt