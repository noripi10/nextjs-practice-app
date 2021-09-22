// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/functions'

type Data = {
  result?: any
  data?: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.info('method', req.method)
  console.info('request_body', req.body)
  const data = req.body

  // onCall
  // const functions = firebase.app().functions('asia-northeast1')
  // const onCallSample = functions.httpsCallable('onCallSample')
  // onCallSample({ ...data })
  //   .then((response) => {
  //     res.status(200).json(response.data)
  //   })
  //   .catch(() => {
  //     res.status(400)
  //   })

  // onRequest
  axios
    .post('https://asia-northeast1-nextjs-practice-app.cloudfunctions.net/onRequestSample', {
      data,
    })
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((error) => {
      res.status(400)
    })
}
