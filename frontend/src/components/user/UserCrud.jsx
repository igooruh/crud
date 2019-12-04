import React, { Component } from 'react'
import Main from '../main/main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuário: Incluir, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}