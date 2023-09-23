import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import MiniCart from '../components/Minicart'

const generateClassName = createGenerateClassName({
    productionPrefix: 'mi',
});
export default function App({ history, isOpen }) {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <MiniCart isOpen={isOpen} />
            </StylesProvider>
        </div>
    )
}
