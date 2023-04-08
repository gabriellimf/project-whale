interface psychologist {
  cpf: string,
  name: string, 
  password: string,
  address: string,
  phone: string,
  email: string,
  pacients: []
  CreatePacients: (newPacient: number) => boolean 
  RemovePacients: (pacientToRemove: number) => boolean 
  ShowPacients: () => any
  UpdateSessionPrice: (newPrice: number) => boolean
  SendNotification: (pacient: number) => boolean
  UpdatePacient: (pacient: number) => boolean
  DeletePacient: (pacient: number) => boolean
}

export class Psychologist implements psychologist {
  cpf: string
  name: string
  password: string
  address: string
  phone: string
  email: string
  pacients: []
  
  constructor(psychologist: psychologist) {
    this.cpf = psychologist.cpf
    this.name = psychologist.name
    this.password = psychologist.password
    this.address = psychologist.address
    this.phone = psychologist.phone
    this.email = psychologist.email
  }
  CreatePacients (newPacient: number) {
    return true
  }

  RemovePacients (pacientToRemove: number) {
    return true
  }

  UpdatePacient (pacient: number) {
    return true
  }

  DeletePacient (pacient: number){
    return true
  }

  ShowPacients () {
    return []
  }

  UpdateSessionPrice (newPrice: number) {
    return true
  }

  SendNotification (pacient: number) {
    return true
  }
}