interface pacient {
  cpf: string,
  name: string, 
  password: string,
  address: string,
  phone: string,
  email: string,
  sessionPrice: number,
  monthly: boolean,
  discount: number
  ShowPayments: () => number
  SignDocuments: () => void
}

export class Pacient implements pacient {
  cpf: string
  name: string 
  password: string
  address: string
  phone: string
  email: string
  sessionPrice: number
  monthly: boolean
  discount: number
  
  constructor(pacient: pacient) {
    this.cpf = pacient.cpf
    this.name = pacient.name
    this.password = pacient.password
    this.address = pacient.address
    this.phone = pacient.phone
    this.email = pacient.email
    this.sessionPrice = pacient.sessionPrice
    this.monthly = pacient.monthly
    this.discount = pacient.discount
  }

  ShowPayments () {
    return 0;
  }

  SignDocuments () {

  }
}
