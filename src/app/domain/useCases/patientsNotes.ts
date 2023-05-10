interface notesAboutpatients {
  Add: (patient: number) => void;
  List: (patient: number) => any;
  Delete: (patient: number) => boolean;
  update: (patient: number) => boolean;
}

export class NotesAboutpatients {
  Add(patient: number) {
    return;
  }

  List(patient: number) {
    return;
  }

  Delete(patient: number) {
    return true;
  }

  Update(patient: number) {
    return true;
  }
}
