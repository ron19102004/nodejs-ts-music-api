import { NextFunction, Request, Response } from "express";
import JwtService, { IJwtService } from "./jwt.service";

class JwtAuthenticationFilter {
  public static doFilter(
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const jwtService:IJwtService = JwtService.getInstance();
    next();
  }
}

export default JwtAuthenticationFilter;
