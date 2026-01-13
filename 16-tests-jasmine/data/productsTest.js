import {
  Product,
  Clothing,
  Appliance,
} from "../../13- Amazon-Project/data/products.js";

describe("test suite: Product", () => {
  let product;

  beforeEach(() => {
    product = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    });
  });

  it("It has the correct properties", () => {
    expect(product.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(product.image).toEqual("images/products/athletic-cotton");
    expect(product.name).toEqual(
      "Black and Gray Athletic Cotton Socks - 6 Pairs"
    );
    expect(product.rating).toEqual({
      stars: 4.5,
      count: 87,
    });
    expect(product.priceCents).toEqual(1090);
  });

  it("It gets the stars url", () => {
    expect(product.getStarUrl()).toEqual("images/ratings/rating-45.png");
  });

  it("It gets the price", () => {
    expect(product.getPrice()).toEqual("$10.90");
  });

  it("It does not display any extra info", () => {
    expect(product.extraInfoHTML()).toEqual("");
  });
});

describe("test suite: Clothing", () => {});

describe("test suite: Appliance", () => {});
