'use client'

import { User } from '@/core/model/Usuário'
import InputText from '../shared/InputText'

export interface UserFormProps {
    usuario: Partial<User>
    onChange: (usuario: Partial<User>) => void
    onSave: () => void
    cancel: () => void
    delete?: () => void
}

export default function FormalarioUsuario(props: UserFormProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputText
                label="Nome"
                type="text"
                value={props.usuario.nome}
                onChange={(e) => props.onChange?.({ ...props.usuario, nome: e.target.value })}
            />
            <InputText
                label="E-mail"
                type="email"
                value={props.usuario.email}
                onChange={(e) => props.onChange?.({ ...props.usuario, email: e.target.value })}
            />
            <InputText
                label="Senha"
                type="password"
                value={props.usuario.senha}
                onChange={(e) => props.onChange?.({ ...props.usuario, senha: e.target.value })}
            />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={props.onSave}>
                        Salvar
                    </button>
                    <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancel}>
                        Cancelar
                    </button>
                </div>
                <button className="bg-red-500 px-4 py-2 rounded-md" onClick={props.delete}>
                    Excluir
                </button>
            </div>
        </div>
    )
}