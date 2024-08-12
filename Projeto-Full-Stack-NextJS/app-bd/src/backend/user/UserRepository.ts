import { User } from "@/core/model/Usuário";
import { PrismaClient } from "@prisma/client";

export class UserRepository {
    private static db: PrismaClient = new PrismaClient();

    static async list() {
        return await this.db.user.findMany();
    }

    static async save(user: User): Promise<User> {
        return await this.db.user.upsert({
            where: { id: user.id },
            update: user,
            create: user,
        });
    }

    static async getAll(): Promise<User[]> {
        return await this.db.user.findMany();
    }

    static async getById(id: string): Promise<User> {
        const user = await this.db.user.findUnique({ where: { id } });
        return user as User;
    }
}