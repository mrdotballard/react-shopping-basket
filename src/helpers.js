export function seedItems() {

  return {
    A: {
      name: "apple",
      price: 20,
      rule: {
        ruleCount: 5,
        rulePrice: 80
      }
    },
    B: {
      name: "bananna",
      price: 40,
      rule: {
        ruleCount: 10,
        rulePrice: 300
      }
    },
    C: {
      name: "nuts",
      price: 55,
      rule: {
        ruleCount: 2,
        rulePrice: 90
      }
    }
  }
}

export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "GBP"
  });
}