$(document).ready(function () {

    var products = [{
        RetailerID: 1,
        RetailerName: "Chai",
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: "10 boxes x 20 bags",
        UnitPrice: 18.0000,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 2,
        RetailerName: "Chang",
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: "24 - 12 oz bottles",
        UnitPrice: 19.0000,
        UnitsInStock: 17,
        UnitsOnOrder: 40,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 3,
        RetailerName: "Aniseed Syrup",
        SupplierID: 1,
        CategoryID: 2,
        QuantityPerUnit: "12 - 550 ml bottles",
        UnitPrice: 10.0000,
        UnitsInStock: 13,
        UnitsOnOrder: 70,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 4,
        RetailerName: "Chef Anton's Cajun Seasoning",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "48 - 6 oz jars",
        UnitPrice: 22.0000,
        UnitsInStock: 53,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 5,
        RetailerName: "Chef Anton's Gumbo Mix",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "36 boxes",
        UnitPrice: 21.3500,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 6,
        RetailerName: "Grandma's Boysenberry Spread",
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: "12 - 8 oz jars",
        UnitPrice: 25.0000,
        UnitsInStock: 120,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 7,
        RetailerName: "Uncle Bob's Organic Dried Pears",
        SupplierID: 3,
        CategoryID: 7,
        QuantityPerUnit: "12 - 1 lb pkgs.",
        UnitPrice: 30.0000,
        UnitsInStock: 15,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: "Produce",
            Description: "Dried fruit and bean curd"
        }
    }, {
        RetailerID: 8,
        RetailerName: "Northwoods Cranberry Sauce",
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: "12 - 12 oz jars",
        UnitPrice: 40.0000,
        UnitsInStock: 6,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 9,
        RetailerName: "Mishi Kobe Niku",
        SupplierID: 4,
        CategoryID: 6,
        QuantityPerUnit: "18 - 500 g pkgs.",
        UnitPrice: 97.0000,
        UnitsInStock: 29,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: "Meat/Poultry",
            Description: "Prepared meats"
        }
    }, {
        RetailerID: 10,
        RetailerName: "Ikura",
        SupplierID: 4,
        CategoryID: 8,
        QuantityPerUnit: "12 - 200 ml jars",
        UnitPrice: 31.0000,
        UnitsInStock: 31,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 11,
        RetailerName: "Queso Cabrales",
        SupplierID: 5,
        CategoryID: 4,
        QuantityPerUnit: "1 kg pkg.",
        UnitPrice: 21.0000,
        UnitsInStock: 22,
        UnitsOnOrder: 30,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 12,
        RetailerName: "Queso Manchego La Pastora",
        SupplierID: 5,
        CategoryID: 4,
        QuantityPerUnit: "10 - 500 g pkgs.",
        UnitPrice: 38.0000,
        UnitsInStock: 86,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 13,
        RetailerName: "Konbu",
        SupplierID: 6,
        CategoryID: 8,
        QuantityPerUnit: "2 kg box",
        UnitPrice: 6.0000,
        UnitsInStock: 24,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 14,
        RetailerName: "Tofu",
        SupplierID: 6,
        CategoryID: 7,
        QuantityPerUnit: "40 - 100 g pkgs.",
        UnitPrice: 23.2500,
        UnitsInStock: 35,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: "Produce",
            Description: "Dried fruit and bean curd"
        }
    }, {
        RetailerID: 15,
        RetailerName: "Genen Shouyu",
        SupplierID: 6,
        CategoryID: 2,
        QuantityPerUnit: "24 - 250 ml bottles",
        UnitPrice: 15.5000,
        UnitsInStock: 39,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 16,
        RetailerName: "Pavlova",
        SupplierID: 7,
        CategoryID: 3,
        QuantityPerUnit: "32 - 500 g boxes",
        UnitPrice: 17.4500,
        UnitsInStock: 29,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 17,
        RetailerName: "Alice Mutton",
        SupplierID: 7,
        CategoryID: 6,
        QuantityPerUnit: "20 - 1 kg tins",
        UnitPrice: 39.0000,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: "Meat/Poultry",
            Description: "Prepared meats"
        }
    }, {
        RetailerID: 18,
        RetailerName: "Carnarvon Tigers",
        SupplierID: 7,
        CategoryID: 8,
        QuantityPerUnit: "16 kg pkg.",
        UnitPrice: 62.5000,
        UnitsInStock: 42,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 19,
        RetailerName: "Teatime Chocolate Biscuits",
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: "10 boxes x 12 pieces",
        UnitPrice: 9.2000,
        UnitsInStock: 25,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 20,
        RetailerName: "Sir Rodney's Marmalade",
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: "30 gift boxes",
        UnitPrice: 81.0000,
        UnitsInStock: 40,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 21,
        RetailerName: "Sir Rodney's Scones",
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: "24 pkgs. x 4 pieces",
        UnitPrice: 10.0000,
        UnitsInStock: 3,
        UnitsOnOrder: 40,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 22,
        RetailerName: "Gustaf's Knäckebröd",
        SupplierID: 9,
        CategoryID: 5,
        QuantityPerUnit: "24 - 500 g pkgs.",
        UnitPrice: 21.0000,
        UnitsInStock: 104,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: "Grains/Cereals",
            Description: "Breads, crackers, pasta, and cereal"
        }
    }, {
        RetailerID: 23,
        RetailerName: "Tunnbröd",
        SupplierID: 9,
        CategoryID: 5,
        QuantityPerUnit: "12 - 250 g pkgs.",
        UnitPrice: 9.0000,
        UnitsInStock: 61,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: "Grains/Cereals",
            Description: "Breads, crackers, pasta, and cereal"
        }
    }, {
        RetailerID: 24,
        RetailerName: "Guaraná Fantástica",
        SupplierID: 10,
        CategoryID: 1,
        QuantityPerUnit: "12 - 355 ml cans",
        UnitPrice: 4.5000,
        UnitsInStock: 20,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 25,
        RetailerName: "NuNuCa Nuß-Nougat-Creme",
        SupplierID: 11,
        CategoryID: 3,
        QuantityPerUnit: "20 - 450 g glasses",
        UnitPrice: 14.0000,
        UnitsInStock: 76,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 26,
        RetailerName: "Gumbär Gummibärchen",
        SupplierID: 11,
        CategoryID: 3,
        QuantityPerUnit: "100 - 250 g bags",
        UnitPrice: 31.2300,
        UnitsInStock: 15,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 27,
        RetailerName: "Schoggi Schokolade",
        SupplierID: 11,
        CategoryID: 3,
        QuantityPerUnit: "100 - 100 g pieces",
        UnitPrice: 43.9000,
        UnitsInStock: 49,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 28,
        RetailerName: "Rössle Sauerkraut",
        SupplierID: 12,
        CategoryID: 7,
        QuantityPerUnit: "25 - 825 g cans",
        UnitPrice: 45.6000,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 7,
            CategoryName: "Produce",
            Description: "Dried fruit and bean curd"
        }
    }, {
        RetailerID: 29,
        RetailerName: "Thüringer Rostbratwurst",
        SupplierID: 12,
        CategoryID: 6,
        QuantityPerUnit: "50 bags x 30 sausgs.",
        UnitPrice: 123.7900,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: "Meat/Poultry",
            Description: "Prepared meats"
        }
    }, {
        RetailerID: 30,
        RetailerName: "Nord-Ost Matjeshering",
        SupplierID: 13,
        CategoryID: 8,
        QuantityPerUnit: "10 - 200 g glasses",
        UnitPrice: 25.8900,
        UnitsInStock: 10,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 31,
        RetailerName: "Gorgonzola Telino",
        SupplierID: 14,
        CategoryID: 4,
        QuantityPerUnit: "12 - 100 g pkgs",
        UnitPrice: 12.5000,
        UnitsInStock: 0,
        UnitsOnOrder: 70,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 32,
        RetailerName: "Mascarpone Fabioli",
        SupplierID: 14,
        CategoryID: 4,
        QuantityPerUnit: "24 - 200 g pkgs.",
        UnitPrice: 32.0000,
        UnitsInStock: 9,
        UnitsOnOrder: 40,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 33,
        RetailerName: "Geitost",
        SupplierID: 15,
        CategoryID: 4,
        QuantityPerUnit: "500 g",
        UnitPrice: 2.5000,
        UnitsInStock: 112,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 34,
        RetailerName: "Sasquatch Ale",
        SupplierID: 16,
        CategoryID: 1,
        QuantityPerUnit: "24 - 12 oz bottles",
        UnitPrice: 14.0000,
        UnitsInStock: 111,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 35,
        RetailerName: "Steeleye Stout",
        SupplierID: 16,
        CategoryID: 1,
        QuantityPerUnit: "24 - 12 oz bottles",
        UnitPrice: 18.0000,
        UnitsInStock: 20,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 36,
        RetailerName: "Inlagd Sill",
        SupplierID: 17,
        CategoryID: 8,
        QuantityPerUnit: "24 - 250 g  jars",
        UnitPrice: 19.0000,
        UnitsInStock: 112,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 37,
        RetailerName: "Gravad lax",
        SupplierID: 17,
        CategoryID: 8,
        QuantityPerUnit: "12 - 500 g pkgs.",
        UnitPrice: 26.0000,
        UnitsInStock: 11,
        UnitsOnOrder: 50,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 38,
        RetailerName: "Côte de Blaye",
        SupplierID: 18,
        CategoryID: 1,
        QuantityPerUnit: "12 - 75 cl bottles",
        UnitPrice: 263.5000,
        UnitsInStock: 17,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 39,
        RetailerName: "Chartreuse verte",
        SupplierID: 18,
        CategoryID: 1,
        QuantityPerUnit: "750 cc per bottle",
        UnitPrice: 18.0000,
        UnitsInStock: 69,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 40,
        RetailerName: "Boston Crab Meat",
        SupplierID: 19,
        CategoryID: 8,
        QuantityPerUnit: "24 - 4 oz tins",
        UnitPrice: 18.4000,
        UnitsInStock: 123,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 41,
        RetailerName: "Jack's New England Clam Chowder",
        SupplierID: 19,
        CategoryID: 8,
        QuantityPerUnit: "12 - 12 oz cans",
        UnitPrice: 9.6500,
        UnitsInStock: 85,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 42,
        RetailerName: "Singaporean Hokkien Fried Mee",
        SupplierID: 20,
        CategoryID: 5,
        QuantityPerUnit: "32 - 1 kg pkgs.",
        UnitPrice: 14.0000,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 5,
            CategoryName: "Grains/Cereals",
            Description: "Breads, crackers, pasta, and cereal"
        }
    }, {
        RetailerID: 43,
        RetailerName: "Ipoh Coffee",
        SupplierID: 20,
        CategoryID: 1,
        QuantityPerUnit: "16 - 500 g tins",
        UnitPrice: 46.0000,
        UnitsInStock: 17,
        UnitsOnOrder: 10,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 44,
        RetailerName: "Gula Malacca",
        SupplierID: 20,
        CategoryID: 2,
        QuantityPerUnit: "20 - 2 kg bags",
        UnitPrice: 19.4500,
        UnitsInStock: 27,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 45,
        RetailerName: "Rogede sild",
        SupplierID: 21,
        CategoryID: 8,
        QuantityPerUnit: "1k pkg.",
        UnitPrice: 9.5000,
        UnitsInStock: 5,
        UnitsOnOrder: 70,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 46,
        RetailerName: "Spegesild",
        SupplierID: 21,
        CategoryID: 8,
        QuantityPerUnit: "4 - 450 g glasses",
        UnitPrice: 12.0000,
        UnitsInStock: 95,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 47,
        RetailerName: "Zaanse koeken",
        SupplierID: 22,
        CategoryID: 3,
        QuantityPerUnit: "10 - 4 oz boxes",
        UnitPrice: 9.5000,
        UnitsInStock: 36,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 48,
        RetailerName: "Chocolade",
        SupplierID: 22,
        CategoryID: 3,
        QuantityPerUnit: "10 pkgs.",
        UnitPrice: 12.7500,
        UnitsInStock: 15,
        UnitsOnOrder: 70,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 49,
        RetailerName: "Maxilaku",
        SupplierID: 23,
        CategoryID: 3,
        QuantityPerUnit: "24 - 50 g pkgs.",
        UnitPrice: 20.0000,
        UnitsInStock: 10,
        UnitsOnOrder: 60,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 50,
        RetailerName: "Valkoinen suklaa",
        SupplierID: 23,
        CategoryID: 3,
        QuantityPerUnit: "12 - 100 g bars",
        UnitPrice: 16.2500,
        UnitsInStock: 65,
        UnitsOnOrder: 0,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 51,
        RetailerName: "Manjimup Dried Apples",
        SupplierID: 24,
        CategoryID: 7,
        QuantityPerUnit: "50 - 300 g pkgs.",
        UnitPrice: 53.0000,
        UnitsInStock: 20,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: "Produce",
            Description: "Dried fruit and bean curd"
        }
    }, {
        RetailerID: 52,
        RetailerName: "Filo Mix",
        SupplierID: 24,
        CategoryID: 5,
        QuantityPerUnit: "16 - 2 kg boxes",
        UnitPrice: 7.0000,
        UnitsInStock: 38,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: "Grains/Cereals",
            Description: "Breads, crackers, pasta, and cereal"
        }
    }, {
        RetailerID: 53,
        RetailerName: "Perth Pasties",
        SupplierID: 24,
        CategoryID: 6,
        QuantityPerUnit: "48 pieces",
        UnitPrice: 32.8000,
        UnitsInStock: 0,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: true,
        Category: {
            CategoryID: 6,
            CategoryName: "Meat/Poultry",
            Description: "Prepared meats"
        }
    }, {
        RetailerID: 54,
        RetailerName: "Tourtière",
        SupplierID: 25,
        CategoryID: 6,
        QuantityPerUnit: "16 pies",
        UnitPrice: 7.4500,
        UnitsInStock: 21,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 6,
            CategoryName: "Meat/Poultry",
            Description: "Prepared meats"
        }
    }, {
        RetailerID: 55,
        RetailerName: "Pâté chinois",
        SupplierID: 25,
        CategoryID: 6,
        QuantityPerUnit: "24 boxes x 2 pies",
        UnitPrice: 24.0000,
        UnitsInStock: 115,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 6,
            CategoryName: "Meat/Poultry",
            Description: "Prepared meats"
        }
    }, {
        RetailerID: 56,
        RetailerName: "Gnocchi di nonna Alice",
        SupplierID: 26,
        CategoryID: 5,
        QuantityPerUnit: "24 - 250 g pkgs.",
        UnitPrice: 38.0000,
        UnitsInStock: 21,
        UnitsOnOrder: 10,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: "Grains/Cereals",
            Description: "Breads, crackers, pasta, and cereal"
        }
    }, {
        RetailerID: 57,
        RetailerName: "Ravioli Angelo",
        SupplierID: 26,
        CategoryID: 5,
        QuantityPerUnit: "24 - 250 g pkgs.",
        UnitPrice: 19.5000,
        UnitsInStock: 36,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: "Grains/Cereals",
            Description: "Breads, crackers, pasta, and cereal"
        }
    }, {
        RetailerID: 58,
        RetailerName: "Escargots de Bourgogne",
        SupplierID: 27,
        CategoryID: 8,
        QuantityPerUnit: "24 pieces",
        UnitPrice: 13.2500,
        UnitsInStock: 62,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 59,
        RetailerName: "Raclette Courdavault",
        SupplierID: 28,
        CategoryID: 4,
        QuantityPerUnit: "5 kg pkg.",
        UnitPrice: 55.0000,
        UnitsInStock: 79,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 60,
        RetailerName: "Camembert Pierrot",
        SupplierID: 28,
        CategoryID: 4,
        QuantityPerUnit: "15 - 300 g rounds",
        UnitPrice: 34.0000,
        UnitsInStock: 19,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 61,
        RetailerName: "Sirop d'érable",
        SupplierID: 29,
        CategoryID: 2,
        QuantityPerUnit: "24 - 500 ml bottles",
        UnitPrice: 28.5000,
        UnitsInStock: 113,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 62,
        RetailerName: "Tarte au sucre",
        SupplierID: 29,
        CategoryID: 3,
        QuantityPerUnit: "48 pies",
        UnitPrice: 49.3000,
        UnitsInStock: 17,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 63,
        RetailerName: "Vegie-spread",
        SupplierID: 7,
        CategoryID: 2,
        QuantityPerUnit: "15 - 625 g jars",
        UnitPrice: 43.9000,
        UnitsInStock: 24,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 64,
        RetailerName: "Wimmers gute Semmelknödel",
        SupplierID: 12,
        CategoryID: 5,
        QuantityPerUnit: "20 bags x 4 pieces",
        UnitPrice: 33.2500,
        UnitsInStock: 22,
        UnitsOnOrder: 80,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 5,
            CategoryName: "Grains/Cereals",
            Description: "Breads, crackers, pasta, and cereal"
        }
    }, {
        RetailerID: 65,
        RetailerName: "Louisiana Fiery Hot Pepper Sauce",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "32 - 8 oz bottles",
        UnitPrice: 21.0500,
        UnitsInStock: 76,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 66,
        RetailerName: "Louisiana Hot Spiced Okra",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "24 - 8 oz jars",
        UnitPrice: 17.0000,
        UnitsInStock: 4,
        UnitsOnOrder: 100,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }, {
        RetailerID: 67,
        RetailerName: "Laughing Lumberjack Lager",
        SupplierID: 16,
        CategoryID: 1,
        QuantityPerUnit: "24 - 12 oz bottles",
        UnitPrice: 14.0000,
        UnitsInStock: 52,
        UnitsOnOrder: 0,
        ReorderLevel: 10,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 68,
        RetailerName: "Scottish Longbreads",
        SupplierID: 8,
        CategoryID: 3,
        QuantityPerUnit: "10 boxes x 8 pieces",
        UnitPrice: 12.5000,
        UnitsInStock: 6,
        UnitsOnOrder: 10,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 3,
            CategoryName: "Confections",
            Description: "Desserts, candies, and sweet breads"
        }
    }, {
        RetailerID: 69,
        RetailerName: "Gudbrandsdalsost",
        SupplierID: 15,
        CategoryID: 4,
        QuantityPerUnit: "10 kg pkg.",
        UnitPrice: 36.0000,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 70,
        RetailerName: "Outback Lager",
        SupplierID: 7,
        CategoryID: 1,
        QuantityPerUnit: "24 - 355 ml bottles",
        UnitPrice: 15.0000,
        UnitsInStock: 15,
        UnitsOnOrder: 10,
        ReorderLevel: 30,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 71,
        RetailerName: "Flotemysost",
        SupplierID: 15,
        CategoryID: 4,
        QuantityPerUnit: "10 - 500 g pkgs.",
        UnitPrice: 21.5000,
        UnitsInStock: 26,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 72,
        RetailerName: "Mozzarella di Giovanni",
        SupplierID: 14,
        CategoryID: 4,
        QuantityPerUnit: "24 - 200 g pkgs.",
        UnitPrice: 34.8000,
        UnitsInStock: 14,
        UnitsOnOrder: 0,
        ReorderLevel: 0,
        Discontinued: false,
        Category: {
            CategoryID: 4,
            CategoryName: "Dairy Products",
            Description: "Cheeses"
        }
    }, {
        RetailerID: 73,
        RetailerName: "Röd Kaviar",
        SupplierID: 17,
        CategoryID: 8,
        QuantityPerUnit: "24 - 150 g jars",
        UnitPrice: 15.0000,
        UnitsInStock: 101,
        UnitsOnOrder: 0,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 8,
            CategoryName: "Seafood",
            Description: "Seaweed and fish"
        }
    }, {
        RetailerID: 74,
        RetailerName: "Longlife Tofu",
        SupplierID: 4,
        CategoryID: 7,
        QuantityPerUnit: "5 kg pkg.",
        UnitPrice: 10.0000,
        UnitsInStock: 4,
        UnitsOnOrder: 20,
        ReorderLevel: 5,
        Discontinued: false,
        Category: {
            CategoryID: 7,
            CategoryName: "Produce",
            Description: "Dried fruit and bean curd"
        }
    }, {
        RetailerID: 75,
        RetailerName: "Rhönbräu Klosterbier",
        SupplierID: 12,
        CategoryID: 1,
        QuantityPerUnit: "24 - 0.5 l bottles",
        UnitPrice: 7.7500,
        UnitsInStock: 125,
        UnitsOnOrder: 0,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 76,
        RetailerName: "Lakkalikööri",
        SupplierID: 23,
        CategoryID: 1,
        QuantityPerUnit: "500 ml",
        UnitPrice: 18.0000,
        UnitsInStock: 57,
        UnitsOnOrder: 0,
        ReorderLevel: 20,
        Discontinued: false,
        Category: {
            CategoryID: 1,
            CategoryName: "Beverages",
            Description: "Soft drinks, coffees, teas, beers, and ales"
        }
    }, {
        RetailerID: 77,
        RetailerName: "Original Frankfurter grüne Soße",
        SupplierID: 12,
        CategoryID: 2,
        QuantityPerUnit: "12 boxes",
        UnitPrice: 13.0000,
        UnitsInStock: 32,
        UnitsOnOrder: 0,
        ReorderLevel: 15,
        Discontinued: false,
        Category: {
            CategoryID: 2,
            CategoryName: "Condiments",
            Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
        }
    }];

    //Methods
    function GetDataSource() {
        var tmpDS = new kendo.data.DataSource({
            data: products,
            pageSize: 25
        });
        return tmpDS;
    }
    function LoadList() {

        $("#pager").kendoPager({
            dataSource: dataSource
        });

        $("#listView").kendoListView({
            dataSource: dataSource,
            template: kendo.template($("#template").html())
        });
    }

    //Event Handlers
    $("#txt-retailer-search").keyup(function (e) {
        //console.log(e);
        var filterField = "RetailerName";//This is the object field you will filter by
        var filterOperator = "contains";//How you will filter
        var filterValue = $(this).val();//What your filter value will be
        //refresh the list
        dataSource.filter(
            {
                field: filterField,
                operator: filterOperator,
                value: filterValue
            });
    });

    var dataSource = GetDataSource();
    LoadList(dataSource);
    SelectMenu('retailers');
});