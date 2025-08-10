import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

from plant import Plant


def test_growth():
    plant = Plant()
    assert plant.grow(days=5, rate=2) == 10
