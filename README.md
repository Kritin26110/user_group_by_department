## Project Overview

This is a Create data from API (transform data)

## Challenge

API from <https://dummyjson.com/users>

- Your project must use Typescript, Typescript module, and HTTP framework
- Tranforms JSON data from API to new data groupBy department
- We encourage you to write tests, which we will give you some extra score
- We will give you an extra score if you focus on performance.

## Group By Department response

```json
    {
        [Department]: {
            "male": 1,                      // ---> Male Count Summary
            "female": 1,                    // ---> Female Count Summary
            "ageRange": "XX-XX",            // ---> Range
            "hair": {                       // ---> "Color": Color Summary
                "Black": 1,
                "Blond": 1,
                "Chestnut": 1,
                "Brown": 1
            },
            "addressUser": {                // ---> "firstNamelastName": postalCode
                "TerryMedhurst": "XXXXX",
            }
        }
    },
    ...
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
