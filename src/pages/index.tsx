import { useState, useEffect, useCallback } from 'react'
import { Layout } from '../components/Layout'
import { TrackView } from '../components/Track'
import {
  Track,
  TrackApi,
  Configuration,
  ProfileApi,
  Profile,
  Event,
  EventApi,
} from '../client-axios'

const IndexPage: React.FC = () => {
  // States
  const [selectedTrack, setSelectedTrack] = useState<Track>()
  const [profile, setProfile] = useState<Profile>()
  const [event, setEvent] = useState<Event>()

  // Handlers
  const getEvent = useCallback(async () => {
    const eventApi = new EventApi(
      new Configuration({ basePath: window.location.origin }),
    )
    const { data } = await eventApi.apiV1EventsEventAbbrGet('codt2021')
    setEvent(data)
  }, [])

  const getProfile = useCallback(async () => {
    const api = new ProfileApi(
      new Configuration({ basePath: window.location.origin }),
    )
    const { data } = await api.apiV1EventAbbrMyProfileGet('codt2021')
    setProfile(data)
  }, [])

  const getTracks = useCallback(async () => {
    const api = new TrackApi(
      new Configuration({ basePath: window.location.origin }),
    )
    const { data } = await api.apiV1TracksGet('codt2021')
    setSelectedTrack(data[0])
  }, [])

  useEffect(() => {
    getEvent()
    getProfile()
    getTracks()
  }, [])

  return (
    <Layout title="Cloud Operator Days 2021">
      <TrackView
        event={event}
        profile={profile}
        selectedTrack={selectedTrack}
      />
    </Layout>
  )
}

export default IndexPage
