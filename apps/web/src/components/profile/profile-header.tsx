import React, { FC } from 'react'
import { Button } from 'ui-components'

import { User } from '~graphql-api'

type ProfileHeaderProps = {
  employee?: Omit<User, 'password'>
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ employee }) => (
  <div className='bg-gradient-to-r from-primary-focus to-primary p-5 rounded-xl h-60 relative'>
    <div className="backdrop-blur-3xl backdrop-saturate-200 absolute top-40 left-10 right-10 rounded-xl">
      <div className='flex justify-between items-center w-full'>
        <div className='flex justify-center items-center text-white'>
          <div className="daisy-avatar daisy-online p-4">
            <div className="w-24 rounded-xl  border-2 border-white">
              <img src="https://faces-img.xcdn.link/image-lorem-face-6149.jpg" alt='avatar' />
            </div>
          </div>

          <div>
            <h2 className='font-bold text-xl'>
              {
                `${employee?.firstName ?? ''} ${employee?.lastName ?? ''}`
              }
            </h2>
            <h2>
              Software Developer
            </h2>
          </div>
        </div>

        <div className='flex pr-2'>
          <div className="pr-2">
            <Button>Message</Button>
          </div>
          <div className="pr-2">
            <Button>Settings</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProfileHeader