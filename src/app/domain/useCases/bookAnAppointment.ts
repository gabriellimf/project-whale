interface bookAnAppointment {
  NewAppointment: (pacient: number) => boolean;
  DeleteAppointment: (pacient: number) => boolean;
  UpdateAppointment: (pacient: number) => boolean;
  ListAppointment: (pacient: number) => any;
}

export class BookAnAppointment {
  NewAppointment(pacient: number) {
    return true;
  }

  DeleteAppointment(pacient: number) {
    return true;
  }

  UpdateAppointment(pacient: number) {
    return true;
  }

  ListAppointment(pacient: number) {
    return;
  }
}
