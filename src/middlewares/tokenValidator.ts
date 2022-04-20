import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../lib/jwt"

export default function tokenValidator() {
  return async function (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      res.status(401).json({ message: "Missing authorization header" })
      return
    }

    const [, token] = authHeader.split(' ')

    try {
      const decoded = verifyToken(token)
      req.user = decoded
    } catch (err) {
      res.status(401).json({ message: "Missing authorization header" })
      return
    }

    return next()
  }
}