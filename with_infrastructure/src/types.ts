interface AuthCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

type FormValidator = (value: string) => boolean;