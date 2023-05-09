interface editPacients {
  SearchPacientByCPF: (cpfCNPJ: string) => number
  UpdateDataPacient: (pacient: number) => boolean
  DeletePacient: (pacient: number) => boolean
  UpdateSessionPrice: (pacient: number, newPrice: number) => boolean
}

export class EditPacients {
  SearchPacientByCPF (pacient: number){
      return 0
  } 

  UpdatePacient (pacient: number) {
      return true
  }

  DeletePacient (pacient: number) {
      return true
  }

  UpdateSessionPrice (pacient: number, newPrice: number){
    return true
  }
}