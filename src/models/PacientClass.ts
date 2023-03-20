interface IPacient {
    cpf: string,
    name: string, 
    password: string,
    address: string,
    phone: string,
    email: string,
    sessionPrice: number,
    monthly: boolean,
    discount: number
};

interface NewPacient {
  UpdateSessionPrice: (newPrice: number) => number; 
};

export class Pacient implements NewPacient {
    dataPacient: IPacient
    constructor(pacient: IPacient) {
      this.dataPacient.cpf = pacient.cpf;
      this.dataPacient.name = pacient.name;
      this.dataPacient.password = pacient.password;
      this.dataPacient.address = pacient.address;
      this.dataPacient.phone = pacient.phone;
      this.dataPacient.email = pacient.email;
      this.dataPacient.sessionPrice = pacient.sessionPrice;
      this.dataPacient.monthly = pacient.monthly;
      this.dataPacient.discount = pacient.discount;
    };

    UpdateSessionPrice: (newPrice: number) => number;
};