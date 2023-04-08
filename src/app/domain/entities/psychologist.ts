interface IPsychologist {
    cpf: string,
    name: string, 
    password: string,
    address: string,
    phone: string,
    email: string,
    pacients: []
};

interface NewPsychologist {
  InsertPacients: (newPacient: number) => number; //will return id of pacient on database
  RemovePacients: (pacientToRemove: number) => number; //will return id of pacient on database
};

export class Psychologist implements NewPsychologist {

    dataPsychologist: IPsychologist
    constructor(psychologist: IPsychologist) {
      this.dataPsychologist.cpf = psychologist.cpf;
      this.dataPsychologist.name = psychologist.name;
      this.dataPsychologist.password = psychologist.password;
      this.dataPsychologist.address = psychologist.address;
      this.dataPsychologist.phone = psychologist.phone;
      this.dataPsychologist.email = psychologist.email;
      this.dataPsychologist.pacients = psychologist.pacients;
    };

    InsertPacients: (newPacient: number) => number; 
    RemovePacients: (pacientToRemove: number) => number;
};