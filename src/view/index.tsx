import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://www.hedge.so/borrow/'}
      title="0% Interest Liquidity on Solana"
      wallet={window.sentre.solana}
    />
  )
}

export default View
