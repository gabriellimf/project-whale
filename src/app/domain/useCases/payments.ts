interface payments {
  AddNew: (pacient: number) => boolean;
  Edit: (pacient: number) => boolean;
  Delete: (pacient: number) => boolean;
  ListAll: (pacient: number) => any;
}

export class Payments {
  AddNew(pacient: number) {
    return true;
  }

  Edit(pacient: number) {
    return true;
  }

  Delete(pacient: number) {
    return true;
  }

  ListAll(pacient: number) {
    return;
  }
}
