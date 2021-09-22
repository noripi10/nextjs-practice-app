import * as functions from 'firebase-functions'

exports.onRequestSample = functions
  .region('asia-northeast1')
  .https.onRequest((req: functions.https.Request, resp: functions.Response<any>) => {
    if (req.method === 'GET') {
      resp.status(400).send('Bad Request (> <)?')
    }

    const body = req.body
    functions.logger.log('onRequestSample', body)

    resp.status(200).send({ ...body.data })
  })

exports.onCallSample = functions
  .region('asia-northeast1')
  .https.onCall((data: any, context: functions.https.CallableContext) => {
    if (!context.auth) {
      console.warn('auth error')
    }
    functions.logger.log('onCallSample', data)
    return { ...data, auth: context.auth }
  })
