import { useEffect } from 'react'
import EmbededView from '@sentre/embeded-view'
import { useUI } from '@sentre/senhub'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: '#0a050c', dark: '#0a050c' })
  }, [setBackground])

  return (
    <EmbededView
      appId={appId}
      src={'https://www.hedge.so/borrow/'}
      title="0% Interest Liquidity on Solana"
      wallet={window.sentre.wallet}
    />
  )
}

export default View
