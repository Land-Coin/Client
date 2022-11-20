import React from 'react'
import {Button} from "@mantine/core"
import { useState } from 'react'
import { useEffect } from 'react'
import { login , logout} from '../../configs/nearutils'

const NearConnectButton = () => {
    const [connected, setConnected] = useState(false)

    useEffect(() => {
        const wallet = window.walletConnection
        if(wallet){
            setConnected(wallet.isSignedIn())
        }
    }, [])
  return (
    <>
    {
        connected ? <Button onClick={logout} radius="lg" size="md" color="indigo">{window?.walletConnection?.getAccountId()}</Button> 
        :
        <Button onClick={login} radius="lg" size="md" color="indigo">Connect Wallet</Button>
    }
    </>
  )
}

export default NearConnectButton