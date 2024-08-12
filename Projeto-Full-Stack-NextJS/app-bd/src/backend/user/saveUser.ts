'use server'

import { User } from "@/core/model/Usuário";
import Id from "@/core/utils/id";
import { UserRepository } from "./UserRepository";

export default async function saveUser(user: Partial<User> | null) {
    const newUser = {
        ...user,
        id: user?.id ?? Id.new,
    }

    return UserRepository.save(newUser as User);
}