from argparse import ArgumentParser

from plant import Plant


def main() -> None:
    parser = ArgumentParser(description="Simulate plant growth")
    parser.add_argument("--days", type=int, default=1, help="Number of days")
    parser.add_argument("--rate", type=int, default=1, help="Growth rate per day")
    args = parser.parse_args()

    plant = Plant()
    height = plant.grow(days=args.days, rate=args.rate)
    print(f"Plant height after {args.days} days: {height} cm")


if __name__ == "__main__":
    main()
