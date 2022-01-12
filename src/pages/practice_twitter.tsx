import { Container, Heading, ListItem, OrderedList } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function IndexPage() {
  const [tweets, setTweets] = useState([])

  const getData = async () => {
    const q = 'react native'
    const { data } = await axios.get(`/api/twitter?q=${encodeURIComponent(q)}`)

    if (data.length) {
      setTweets(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container maxW={'container.lg'}>
      <Heading>React Native 関連のツイート　直近100件</Heading>
      <OrderedList>
        {tweets.map((tweet: any, i) => {
          return <ListItem key={i}>{tweet.text}</ListItem>
        })}
      </OrderedList>
    </Container>
  )
}
