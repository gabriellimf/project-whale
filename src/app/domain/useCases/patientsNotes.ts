interface notesAboutpatients {
  AddNotes: (patient: number) => void;
  ListNotes: (patient: number) => any;
  DeleteNotes: (patient: number) => boolean;
  updateNotes: (patient: number) => boolean;
}

export class NotesAboutpatients {
  AddNotes(patient: number) {
    return;
  }

  ListNotes(patient: number) {
    return;
  }

  DeleteNotes(patient: number) {
    return true;
  }

  UpdateNotes(patient: number) {
    return true;
  }
}
