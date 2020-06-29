# TODO: be able to take in args for `make gdrive`
gdrive:
	python3 gdrive/gdrive.py
freeze:
	pip freeze > requirements.txt
init:
	pip install -r requirements.txt
upgrade:
	pip install --upgrade -r requirements.txt
