export interface IAuthController {
  register(): Promise<void>;
  login(): Promise<void>;
}
class AuthController implements IAuthController {
  async login(): Promise<void> {}
  async register(): Promise<void> {}
}
export default AuthController