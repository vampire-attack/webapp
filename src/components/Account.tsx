import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance } from 'wagmi'

export function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const { data: balance } = useBalance({ address: address })

    return (
        <div className='text-white'>
            {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
            {address && <div>Address: {ensName ? `${ensName} (${address})` : address}</div>}
            {balance && <div>Balance: {balance.formatted}</div>}
            <button className='btn bg-light-red p-4 rounded' onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}