import type { NextApiRequest, NextApiResponse } from 'next'
import Twitter from 'twitter'

const client = new Twitter({
  consumer_key: process.env.consumer_key!,
  consumer_secret: process.env.consumer_secret!,
  access_token_key: process.env.access_token_key!,
  access_token_secret: process.env.access_token_secret!,
})

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { q } = req.query

  if (!q) {
    return res.status(200).json([])
  }

  // client.get('statuses/user_timeline', { screen_name: 'noripi_10', count: 1 }, function (error, tweets, response) {
  //   if (!error) {
  //     // console.log(tweets)
  //   }
  // })

  const data = await (() => {
    return new Promise((resolve, reject) => {
      client.get(
        'search/tweets',
        { q, count: 100, lang: 'ja', include_rts: false },
        function (error, tweets, response) {
          // console.log(tweets)
          resolve(tweets)
        }
      )
    })
  })()

  const statuses = (
    data as {
      statuses: {
        text: string
      }[]
    }
  ).statuses

  const param: {
    text: string
  }[] = []

  if (statuses) {
    statuses.forEach((tweet) => {
      param.push({
        text: tweet.text,
      })
    })
  }

  return res.status(200).json(param)
}

export default handler
