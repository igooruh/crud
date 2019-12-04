import React, { Component } from 'react'
import Main from '../main/main'
import axios from 'axios'

const BaseURL = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuário: Incluir, Alterar e Excluir'
}

export default class UserCrud extends Component {
    state = {...initialState}
    
    clear() {
        this.setState({user: initialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${BaseURL}/${user.id}` : BaseURL
        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdateList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }

    getUpdateList(user) {
        const list = this.setState.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}