'use client'

import Pagina from "@/app/components/template/Pagina";
import Title from "@/app/components/template/Title";
import FormalarioUsuario from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import users from "@/app/data/constants/usuarios";
import Backend from "@/backend";
import { User } from "@/core/model/Usuário";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
    const [user, setUser] = useState<User[]>([]);
    const [usuario, setUsuario] = useState<Partial<User> | null>(users[0]);

    function save() {
        if (!user) return;
        Backend.users.saveUser(usuario)
    }
    return (
        <Pagina className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de usuários" />
            {usuario ? (
                <FormalarioUsuario
                    usuario={usuario}
                    onChange={setUsuario}
                    onSave={save}
                    cancel={() => setUsuario(null)}
                />
            ) : (
                <UserList onClick={setUsuario} />
            )}
        </Pagina>
    )
}