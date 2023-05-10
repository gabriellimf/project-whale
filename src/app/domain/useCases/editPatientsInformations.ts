interface editpatients {
  SearchByCPF: (cpfCNPJ: string) => number
  UpdateData: (patient: number) => boolean
  Delete: (patient: number) => boolean
  UpdateSessionPrice: (patient: number, newPrice: number) => boolean
}

export class Editpatients {
  SearchByCPF (patient: number){
      return 0
  } 

  UpdateData (patient: number) {
      return true
  }

  Delete (patient: number) {
      return true
  }

  UpdateSessionPrice (patient: number, newPrice: number){
    return true
  }
}