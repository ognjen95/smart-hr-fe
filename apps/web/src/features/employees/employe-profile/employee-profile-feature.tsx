import { useRouter } from 'next/router'

import CollectionSection from '~components/collection-section/collection-section'
import ProfileHeader from '~components/profile/profile-header'
import ProfileInfoSection from '~components/profile/profile-info-section'

import { useFindUserByIdQuery } from '~graphql-api'

const EmployeeProfileFeature = () => {
  const { query } = useRouter();
  const userId = query.id as string;

  const { data } = useFindUserByIdQuery({
    variables: {
      findUserByIdId: userId,
    }
  })

  const employee = data?.findUserById

  return (
    <div>
      {/* Profile Header */}
      <ProfileHeader employee={employee} />
      {/* Basic Info */}
      <ProfileInfoSection employee={employee} />
      {/* Projects */}
      <CollectionSection data={[]} title='Projects' />
      {/* Teams */}
      <CollectionSection data={[]} title='Teams' />
    </div>
  )
}
export default EmployeeProfileFeature