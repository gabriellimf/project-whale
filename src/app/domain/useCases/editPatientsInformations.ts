interface editpatients {
  SearchpatientByCPF: (cpfCNPJ: string) => number
  UpdateDatapatient: (patient: number) => boolean
  Deletepatient: (patient: number) => boolean
  UpdateSessionPrice: (patient: number, newPrice: number) => boolean
}

export class Editpatients {
  SearchpatientByCPF (patient: number){
      return 0
  } 

  Updatepatient (patient: number) {
      return true
  }

  Deletepatient (patient: number) {
      return true
  }

  UpdateSessionPrice (patient: number, newPrice: number){
    return true
  }
}