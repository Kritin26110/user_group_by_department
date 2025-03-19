import { User } from "../interfaces/user";
import { formatUserData } from "../utils/formatUserData";

describe("formatUserData", () => {
  const mockUserTest: User[] = [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      gender: "female",
      age: 28,
      hair: {
        color: "Brown",
        type: "Curly",
      },
      address: {
        address: "",
        postalCode: "29112",
        city: "",
        state: "",
        stateCode: "",
        coordinates: {
          lat: 0,
          lng: 0,
        },
        country: "",
      },
      company: {
        department: "Engineering",
        name: "Dooley, Kozey and Cronin",
        title: "",
        address: {
          address: "",
          city: "",
          state: "",
          stateCode: "",
          postalCode: "",
          coordinates: {
            lat: 0,
            lng: 0,
          },
          country: "",
        },
      },
      department: "",
      maidenName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      birthDate: "",
      image: "",
      bloodGroup: "",
      height: 0,
      weight: 0,
      eyeColor: "",
      ip: "",
      macAddress: "",
      university: "",
      bank: {
        cardExpire: "",
        cardNumber: "",
        cardType: "",
        currency: "",
        iban: "",
      },
      ein: "",
      ssn: "",
      userAgent: "",
      crypto: {
        coin: "",
        wallet: "",
        network: "",
      },
      role: "",
    },
  ];

  it("correctly group data by department", () => {
    const result = formatUserData(mockUserTest);

    expect(result.Engineering).toEqual({
      male: 0,
      female: 1,
      ageRange: "28-28",
      hair: {
        Brown: 1,
      },
      addressUser: {
        EmilyJohnson: "29112",
      },
    });
  });
});
