import { Request, Response } from "express"
import { sign } from  "jsonwebtoken"

import { authConfig } from "@/configs/auth"

import { AppError } from "@/utils/AppError"









class SessionsController {
  async create(request: Request, response: Response) {


    const { username, password } = request.body

    const fakeUser = {
      id: "1",
      username: "rodrigo",
      password: "1233456",
      role: "customer",
    }

    if(username !== fakeUser.username || password !== fakeUser.password){

      throw new AppError("Usuário e/ou senha inorreta", 401)
    }

    const { secret, expiresIn } = authConfig.jwt
    //definindo o papel do usuario e a chave e quando expira o token
    const token = sign({ role: fakeUser.role }, secret, {
      expiresIn,
      subject: String(fakeUser.id),
    } )




    return response.json({token})
  }
}

export { SessionsController }
