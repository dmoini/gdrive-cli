# TODO: be able to take in args for `make gdrive`
gdrive:
	python3 gdrive/gdrive.py
freeze:
	pip3 freeze > requirements.txt
init:
	pip3 install -r requirements.txt
upgrade:
	pip3 install --upgrade -r requirements.txt