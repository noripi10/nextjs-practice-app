import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import { useEffect, useState } from 'react'
import { Box, Center, HStack, Stack, Text } from '@chakra-ui/layout'
import { VStack, Button } from '@chakra-ui/react'

import { notion } from '../libs/notion'

type Blog = {
  id: string
  page: string
  slugs: string
  published: boolean
  data: Date
  authors: string[]
  thumbnail: string
  description: string
}

export default function Practice_Notion({ blogs }: { blogs: Blog[] }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Notion API Test</title>
      </Head>
      <HStack width='1200px' height='100vh' mx='auto'>
        {/* left pane */}
        <VStack flex='5' h='100vh' maxW='1000px' bgColor='teal.700' p={4} m={4} overflowY='auto'>
          <VStack flex={1}>
            <Text>Notion Api Test</Text>
            {blogs.map((blog, index) => (
              <Text key={index.toString()} flexWrap='nowrap'>
                {JSON.stringify(blog)}
              </Text>
            ))}
            <Button size='sm' variant='solid' bgColor='green.500' onClick={() => router.back()}>
              back
            </Button>
          </VStack>
        </VStack>
        {/* right pane */}
        <VStack flex='1.5' h='100vh' bgColor='teal.300'>
          <Text>Right Pane</Text>
        </VStack>
      </HStack>
    </>
  )
}

export const getStaticProps = async () => {
  const table = await notion.databases.query({
    database_id: '7caef2eb23ba4efa8b999e39419d592f',
  })
  // console.info(table)
  // console.info(table.results[0].properties)

  const blogs = table.results.map((result) => {
    const blog = {} as Blog
    const properties = result.properties

    Object.keys(properties).map((key) => {
      const property = properties[key]
      const k = key.toLowerCase()
      if (property.type === 'title') {
      }
      if (property.type === 'rich_text') {
      }
      if (property.type === 'checkbox') {
      }
      if (property.type === 'people') {
      }

      blog[k] = JSON.stringify(property, null, 2)
    })

    blog.id = result.id
    return blog
  })

  return {
    props: {
      blogs,
    },
  }
}
