import React from 'react'
import { Text } from 'ui-components'

import CollectionSection from '~components/collection-section/collection-section'

const ProjectsFeature = () => (
  <div>
    <Text variant="heading2">Projects</Text>
    <div className='mt-5'>
      <CollectionSection index={1} title='Company Projects' data={[]} buttons={[]} onCreate={() => { }} />
    </div>
    <div className='mt-5'>
      <CollectionSection index={2} title='Private Projects' data={[]} buttons={[]} onCreate={() => { }} />
    </div>
  </div>
)

export default ProjectsFeature