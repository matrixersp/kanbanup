export function validateName(name) {
  if (!name) return;
  switch (name.type) {
    case 'required':
      return 'Name is required.';
    case 'maxLength':
      return 'Name must be less than 50 characters long.';
    case 'pattern':
      return 'Name must contain alphabets and spaces only.';
    default:
      return 'Invalid name.';
  }
}

export function validateEmail(email) {
  if (!email) return;
  switch (email.type) {
    case 'required':
      return 'Email is required.';
    case 'minLength':
      return 'Email must be greater or equal to 5 characters.';
    case 'maxLength':
      return 'Email must be less than 255 characters.';
    default:
      return 'Invalid email.';
  }
}

export function validatePassword(password) {
  if (!password) return;
  switch (password.type) {
    case 'required':
      return 'Password is required.';
    case 'minLength':
      return 'Password must be greater or equal to 6 characters.';
    case 'maxLength':
      return 'Password must be less than 255 characters.';
    default:
      return 'Invalid password.';
  }
}
