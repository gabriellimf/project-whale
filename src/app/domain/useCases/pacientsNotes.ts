interface notesAboutPacients {
  AddNotesAboutPacients: (pacient: number) => void;
  ListNotesAboutPacients: (pacient: number) => any;
  DeleteNotesAboutPacients: (pacient: number) => boolean;
  updateNotesAboutPacients: (pacient: number) => boolean;
}

export class NotesAboutPacients {
  AddNotesAboutPacients(pacient: number) {
    return;
  }

  ListNotesAboutPacients(pacient: number) {
    return;
  }

  DeleteNotesAboutPacients(pacient: number) {
    return true;
  }

  UpdateNotesAboutPacients(pacient: number) {
    return true;
  }
}
