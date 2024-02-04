VENV_NAME := env
VENV_ACTIVATE := $(VENV_NAME)/bin/activate

.ONESHELL:
.PHONY: venv

venv:
	{\
	@echo "Creating virtual environment..."; \
	python3 -m venv $(VENV_NAME); \
	@echo "Virtual environment created. To activate, run: source $(VENV_ACTIVATE)"; \
	}
activate:
	@echo "Activating virtual environment..."
	@source $(VENV_ACTIVATE) || . $(VENV_ACTIVATE)
	@echo "Virtual environment activated."

generate: activate
	@echo "Generating data..."
	python3 data-gen/main.py
	@echo "Test data generated."
