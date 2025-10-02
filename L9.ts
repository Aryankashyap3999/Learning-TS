interface AuthForm {
  name: string;
  submitButtonText: string;
  onReset: (e: any) => void;
  onSubmit: (e: any) => void;
}

const loginForm: AuthForm = {
  name: "Login form",
  submitButtonText: "Login",
  onReset: (e) => {
    // some impl
  },
  onSubmit: (e) => {
    // some impl
  }
}