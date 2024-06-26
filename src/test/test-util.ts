import { prismaClient } from "../application/database";
import bcrypt from "bcrypt";

export class UserTest{
    static async delete(){
        await prismaClient.user.deleteMany({
            where: {
                username:"test"
            }
        })
    }

    static async create(){
        await prismaClient.user.create({
            data: {
                username: "test",
                email: "test@example.com",
                password: await bcrypt.hash("test", 10),
                token: "test"
            }
        })
    }
}