import React from 'react'
import { Form } from '../Form/Form'
import { Auth } from '../Utils/FakeAuth'

const LoginPage: React.FC = () => (
  <div className="App-header">
  <Form
    inputList={['Usuario', 'Contraseña']}
title={'Log In'}
onSubmit={Auth}
/>
</div>
)