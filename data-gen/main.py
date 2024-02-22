import yaml
import json
import uuid
import logging.config
from pathlib import Path
from faker import Faker

NUM_OF_RECORDS = 100_000

fake = Faker()

Faker.seed(100)

LOGGING_CONFIG_PATH = Path(__file__).parent / "logging_configs" / "config.yaml"

logger = logging.getLogger("data-gen")

def setup_logging():
    config_file = Path(LOGGING_CONFIG_PATH)
    with open(config_file) as f:
        config = yaml.safe_load(f)
    logging.config.dictConfig(config)

def generate_record() -> dict:
    material = dict()
    material["name"] = fake.name()
    parts = []
    for _ in range(2):
        parts.append({
            "name": fake.word()
        })
    material["parts"] = parts
    return material

def main():
    for _ in range(NUM_OF_RECORDS):
        logging.info(generate_record())

if __name__ == "__main__":
    setup_logging()
    main()
