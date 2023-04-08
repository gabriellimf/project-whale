interface administrator {
  user: string,
  password: string,
  email: string,
  name: string
  createdDate: string
}

export class Administrator implements administrator {
  user: string
  password: string
  email: string
  name: string
  createdDate: string    
}
