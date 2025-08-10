class Plant:
    """Simple representation of a plant that grows over time."""

    def __init__(self, height: int = 0) -> None:
        self.height = height

    def grow(self, days: int = 1, rate: int = 1) -> int:
        """Grow the plant.

        Args:
            days: Number of days the plant grows.
            rate: Growth rate per day.

        Returns:
            The new height of the plant.
        """
        self.height += days * rate
        return self.height
