import { FC } from 'react'
import { Paper } from 'ui-components'

import { User } from '~graphql-api'

export type ProfileInfoSectionFeatureProps = {
  employee?: Omit<User, 'password'>
}

const ProfileInfoSectionFeature: FC<ProfileInfoSectionFeatureProps> = ({
  employee
}) => {
  const {
    firstName,
    lastName,
    email,
    employmentStatus,
  } = employee || {}

  return (
    <div className='grid grid-cols-2 gap-4'>
      <Paper>
        <h1 className='mb-4 font-bold text-xl'>Profile Information</h1>
        <h3 className='font-bold mb-1'>Full Name: <i className='text-primary'>{`${firstName ?? ''} ${lastName ?? ''}`}</i></h3>
        <h3 className='font-bold mb-1'>Birthday: <i className='text-primary'>04.01.1995.</i></h3>
        <h3 className='font-bold mb-1'>Email: <i className='text-primary'>{email}</i></h3>
        <h3 className='font-bold mb-1'>Phone: <i className='text-primary'>0603055066</i></h3>
        <h3 className='font-bold mb-1'>Location: <i className='text-primary'>Belgrade, Serbia</i></h3>
      </Paper>

      <Paper>
        <h1 className='mb-4 font-bold text-xl'>Job Description</h1>
        <h3 className='font-bold mb-1'>Job: <i className='text-primary'>Software Developer</i></h3>
        <h3 className='font-bold mb-1'>Stack: <i className='text-primary'>Javascript, TypeScript, React, NodeJS</i></h3>
        <h3 className='font-bold mb-1'>Employment Status: <i className='text-primary'>{employmentStatus}</i></h3>
      </Paper>
    </div>

  )
}

export default ProfileInfoSectionFeature