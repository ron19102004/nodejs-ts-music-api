import User from "@/entities/user.entity";

export interface IJwtService {
  generateToken(user: User): string;
  extractUsername(token: string): string;
  extractAllClaims(token: string): any;
}
class JwtService implements IJwtService {
  //create instance of class
  private static INSTANCE: JwtService;
  public static getInstance(): JwtService {
    if (!JwtService.INSTANCE) {
      JwtService.INSTANCE = new JwtService();
    }
    return JwtService.INSTANCE;
  }
  //end instance of class
  generateToken(user: User): string {
    throw new Error("Method not implemented.");
  }
  extractUsername(token: string): string {
    throw new Error("Method not implemented.");
  }
  extractAllClaims(token: string) {
    throw new Error("Method not implemented.");
  }
}
export default JwtService;
