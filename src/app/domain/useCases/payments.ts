interface payments {
  AddNewPayment: (pacient: number) => boolean;
  EditNewPayment: (pacient: number) => boolean;
  DeleteNewPayment: (pacient: number) => boolean;
  ListAllPayments: (pacient: number) => any;
}

export class Payments {
  AddNewPayment(pacient: number) {
    return true;
  }

  EditNewPayment(pacient: number) {
    return true;
  }

  DeleteNewPayment(pacient: number) {
    return true;
  }

  ListAllPayments(pacient: number) {
    return;
  }
}
