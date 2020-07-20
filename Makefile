run:
	python3 gdrive/gdrive.py

freeze:
	pip freeze > requirements.txt

init:
	pip install -r requirements.txt

help:
	@echo "    freeze"
	@echo "        Freeze and save installed pip packages"
	@echo "    init"
	@echo "        Install pip packages"
	@echo "    run"
	@echo "        Run gdrive CLI program"