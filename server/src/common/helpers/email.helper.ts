export default function validEmail(email: string) {
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailReg.test(email);
}
