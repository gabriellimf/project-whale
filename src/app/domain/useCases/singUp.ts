//JSON PSICOLOGO
  const objPsychologist: any = {
  "token": "",
  "data": {
    "email": "string",
    "password": "string",
    "cpfCnpj": "string",
    "fullName": "string",
    "address": "string",
    "phone": 5527999674464
  }
}

//JSON CLIENTE
const objpatient: any = {
  "token": "adasdasdas",
  "data": {
    "cpfCnpj": "string",
    "fullName": "string",
    "address": "string",
    "phone": 5527999674464,
    "email": "string",
    "pricePerSession": 100.00,
    "monthlyPrice": false,   
    "discount": 50.00
  }
}

  interface singUp {
  TokenValidation: (token: string) => boolean
  DataValidation: (data: any) => boolean
  CPFValidation: (cpf: string) => boolean
  SaveRegister: (register: any) => boolean
  }

  export class SingUp {
  TokenValidation (token: string) {
    return true
  }

  DataValidation (data: any) {
    return true
  }

  CPFValidation (cpf: string) {
    let cpfExistente = cpf
    /*Funcao de busca do banco de dados para inserir todos os cpf já cadastrados*/ 
    
    return true

  }

  SaveRegister (register: any) {
    return true
  }
} 

const singUp = new SingUp()
singUp.TokenValidation(objpatient.token)