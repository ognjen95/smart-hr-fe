import React from 'react'
import { Text } from 'ui-components'

import CollectionSection from '~components/collection-section/collection-section'

const TeamsFeature = () => (
  <div>
    <Text variant="heading2">Teams</Text>
    <div className='mt-5'>
      <CollectionSection index={1} title='Company Teams' data={[]} buttons={[]} onCreate={() => { }} />
    </div>
    <div className='mt-5'>
      <CollectionSection index={2} title='Clients Teams' data={[]} buttons={[]} onCreate={() => { }} />
    </div>
    <div className='mt-5'>
      <CollectionSection index={3} title='Associates Teams' data={[]} buttons={[]} onCreate={() => { }} />
    </div>
  </div>
)

export default TeamsFeature