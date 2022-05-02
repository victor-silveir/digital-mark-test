type Geo = {
	lat: string;
	lng: string;
};

type Adress = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
};

export type Company = {
	name: string;
	catchPhrase: string;
	bs: string;
};

export type Customers = {
	id: number;
	username: string;
	email: string;
	address: Adress;
	phone: string;
	website: string;
	company: Company;
};
