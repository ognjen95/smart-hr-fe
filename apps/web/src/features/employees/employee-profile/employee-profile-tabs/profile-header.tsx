import React, { FC } from 'react'
import { Button, Paper } from 'ui-components'

import { User } from '~graphql-api'

type ProfileHeaderProps = {
  employee?: Omit<User, 'password'>
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ employee }) => (
  <Paper offsetY={0}>
    <div className='flex justify-between items-center w-full'>
      <div className='flex justify-center items-center text-white gap-5'>
        <div className="daisy-avatar daisy-online">
          <div className="w-24 rounded-full border-2 border-white">
            <img src="https://faces-img.xcdn.link/image-lorem-face-6149.jpg" alt='avatar' />
          </div>
        </div>
        <div>
          <h2 className='font-bold text-xl'>
            {`${employee?.firstName ?? ''} ${employee?.lastName ?? ''}`}
          </h2>
          <h2>
            Software Developer
          </h2>
        </div>
      </div>
      <div className='flex gap-4'>
        <div>
          <Button>Message</Button>
        </div>
        <div>
          <Button>Settings</Button>
        </div>
      </div>
    </div>
  </Paper>
)

export default ProfileHeader