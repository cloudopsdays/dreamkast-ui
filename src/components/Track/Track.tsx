import React, { useEffect, useState, useCallback } from 'react'
import { Player } from '../Player'
import { TalkInfo } from '../TalkInfo'
import { Chat } from '../Chat'
import Grid from '@material-ui/core/Grid'
import { Track, Talk, TalkApi, Configuration } from '../../client-axios'
import { TalkSelector } from '../TalkSelector'
import { Sponsors } from '../Sponsors'
import ActionCable from 'actioncable'
import * as Styled from './styled'

type Props = {
  selectedTrack?: Track
  propTalks?: Talk[]
}

export const TrackView: React.FC<Props> = ({ selectedTrack, propTalks }) => {
  const [talks, setTalks] = useState<Talk[]>(propTalks ? propTalks : [])
  const [videoId, setVideoId] = useState<string>()
  const [selectedTalk, setSelectedTalk] = useState<Talk>()

  const getTalks = useCallback(async () => {
    const api = new TalkApi(
      new Configuration({ basePath: window.location.origin }),
    )
    const { data } = await api.apiV1TalksGet(
      'cndo2021',
      String(selectedTrack?.id),
      '6,7',
    )
    setTalks(data)
  }, [selectedTrack])

  useEffect(() => {
    if (!propTalks) getTalks()
  }, [getTalks])

  const selectTalk = (talk: Talk) => {
    setSelectedTalk(talk)
    setVideoId(talk.onAir ? selectedTrack?.videoId : talk.videoId)
  }

  useEffect(() => {
    if (!talks.length) return
    const onAirTalk = talks.find((talk) => talk.onAir)
    setSelectedTalk(onAirTalk ? onAirTalk : talks[0])
    setVideoId(onAirTalk ? selectedTrack?.videoId : talks[0].videoId)
  }, [talks])

  const actionCableUrl = () => {
    if (window.location.protocol == 'http:') {
      return `ws://${window.location.host}/cable`
    } else {
      return `wss://${window.location.host}/cable`
    }
  }

  useEffect(() => {
    if (!selectedTrack) return
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const actionCable = require('actioncable')
    const wsUrl = actionCableUrl()
    const cableApp: ActionCable.Cable = actionCable.createConsumer(wsUrl)
    if (cableApp) {
      cableApp.disconnect()
    }
    cableApp.subscriptions.create(
      { channel: 'OnAirChannel', eventAbbr: 'cndo2021' },
      {
        received: (msg: { [trackId: number]: Talk }) => {
          if (!msg[selectedTrack.id] && !selectedTalk) return
          if (
            selectedTrack.id == msg[selectedTrack.id].trackId &&
            selectedTalk?.id != msg[selectedTrack.id].id
          ) {
            setSelectedTalk(msg[selectedTrack.id])
            setVideoId(msg[selectedTrack.id].videoId)
          }
        },
      },
    )
  }, [selectedTrack])
  const twitterURL = (trackName?: string) => {
    const base =
      'http://twitter.com/share?url=https://event.cloudnativedays.jp/cndo2021&related=@cloudnativedays&hashtags=CNDO2021'
    if (!trackName) return base
    return base + '_' + trackName
  }

  return (
    <Grid container spacing={1} justify="center" alignItems="flex-start">
      <Grid item xs={12} md={8}>
        <Player vimeoId={videoId} autoplay={true}></Player>
        <Sponsors />
      </Grid>
      <Grid item xs={12} md={3}>
        <Chat talk={selectedTalk} />
      </Grid>
      <Grid item xs={10} md={8}>
        <TalkInfo selectedTalk={selectedTalk} />
        <Styled.ShareButton>
          <a href="https://discord.gg/bvuTMNQ" target="_blank">
            Ask the speaker
            <br />
            (Discord)
          </a>
        </Styled.ShareButton>
        <Styled.ShareButton variant="outlined">
          <a
            id="twitter"
            href={twitterURL(selectedTrack?.name)}
            target="_blank"
          >
            Twitterでつぶやく
            <br />
            #CNDT2020_{selectedTrack?.name}
          </a>
        </Styled.ShareButton>
      </Grid>
      <Grid item xs={12} md={3}>
        <TalkSelector
          selectedTalk={selectedTalk}
          selectedTrackId={selectedTrack?.id}
          talks={talks}
          selectTalk={selectTalk}
        />
      </Grid>
    </Grid>
  )
}
