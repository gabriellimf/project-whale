interface bookAnAppointment {
  New: (pacient: number) => boolean;
  Delete: (pacient: number) => boolean;
  Update: (pacient: number) => boolean;
  List: (pacient: number) => any;
}

export class BookAnAppointment {
  New(pacient: number) {
    return true;
  }

  Delete(pacient: number) {
    return true;
  }

  Update(pacient: number) {
    return true;
  }

  List(pacient: number) {
    return;
  }
}
